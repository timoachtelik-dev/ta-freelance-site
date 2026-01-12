import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import { Resend } from 'resend';

const app = express();
const port = process.env.PORT || 8787;

app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(express.json({ limit: '50kb' }));

const allowedOrigins = (process.env.CONTACT_ALLOWED_ORIGINS || process.env.CONTACT_ALLOWED_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const hasAllowedOrigins = allowedOrigins.length > 0;
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (hasAllowedOrigins) {
    if (origin && allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
      res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    } else if (origin) {
      sendError(res, 403, 'ORIGIN_NOT_ALLOWED', 'Origin not allowed.');
      return;
    }
  }

  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }

  next();
});

const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 8,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    sendError(res, 429, 'RATE_LIMITED', 'Too many requests.');
  }
});

const resendApiKey = process.env.RESEND_API_KEY || '';
const contactFromDefault = process.env.CONTACT_FROM_EMAIL || '';
const contactToDefault = process.env.CONTACT_TO_EMAIL || '';
const contactFromByMode = {
  freelance: process.env.CONTACT_FROM_EMAIL_FREELANCE,
  application: process.env.CONTACT_FROM_EMAIL_APPLICATION
};
const contactToByMode = {
  freelance: process.env.CONTACT_TO_EMAIL_FREELANCE,
  application: process.env.CONTACT_TO_EMAIL_APPLICATION
};
const turnstileSecret = process.env.TURNSTILE_SECRET || '';
const resend = new Resend(resendApiKey);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sendError(res, status, code, message) {
  res.status(status).json({ ok: false, code, message });
}

function escapeHtml(value = '') {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

async function verifyTurnstile(token, ip) {
  if (!turnstileSecret) {
    return { success: false, code: 'CAPTCHA_NOT_CONFIGURED', message: 'Captcha not configured.' };
  }

  const body = new URLSearchParams({
    secret: turnstileSecret,
    response: token,
    remoteip: ip
  });

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body
  });

  if (!response.ok) {
    return { success: false, code: 'CAPTCHA_VERIFICATION_FAILED', message: 'Captcha verification failed.' };
  }

  const data = await response.json();
  if (!data.success) {
    return { success: false, code: 'CAPTCHA_VERIFICATION_FAILED', message: 'Captcha verification failed.' };
  }

  return { success: true };
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
      token,
      honeypot,
      locale,
      profileMode
    } = req.body || {};

    if (honeypot) {
      res.json({ ok: true });
      return;
    }

    const mode = typeof profileMode === 'string' ? profileMode.toLowerCase() : '';
    const contactFrom = contactFromByMode[mode] || contactFromDefault;
    const contactTo = contactToByMode[mode] || contactToDefault;

    if (!resendApiKey || !contactFrom || !contactTo) {
      sendError(res, 500, 'EMAIL_SERVICE_NOT_CONFIGURED', 'Email service not configured.');
      return;
    }

    const trimmedName = name?.trim?.() || '';
    const trimmedSubject = subject?.trim?.() || '';
    const trimmedMessage = message?.trim?.() || '';

    if (trimmedName.length < 1 || trimmedName.length > 120) {
      sendError(res, 400, 'INVALID_NAME', 'Invalid name.');
      return;
    }

    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      sendError(res, 400, 'INVALID_EMAIL', 'Invalid email.');
      return;
    }

    if (trimmedSubject.length < 1 || trimmedSubject.length > 200) {
      sendError(res, 400, 'INVALID_SUBJECT', 'Invalid subject.');
      return;
    }

    if (trimmedMessage.length < 1 || trimmedMessage.length > 8000) {
      sendError(res, 400, 'INVALID_MESSAGE', 'Invalid message.');
      return;
    }

    const captcha = await verifyTurnstile(token, req.ip);
    if (!captcha.success) {
      sendError(res, 400, captcha.code || 'CAPTCHA_VERIFICATION_FAILED', captcha.message);
      return;
    }

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(email.trim());
    const safeSubject = escapeHtml(trimmedSubject);
    const safeMessage = escapeHtml(trimmedMessage).replaceAll('\n', '<br />');
    const safeLocale = escapeHtml(String(locale || 'de'));
    const safeProfile = escapeHtml(String(profileMode || 'freelance'));

    const textBody = [
      `Name: ${trimmedName}`,
      `Email: ${email.trim()}`,
      `Profile: ${profileMode || 'freelance'}`,
      `Locale: ${locale || 'de'}`,
      '',
      trimmedMessage
    ].join('\n');

    const { error } = await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      replyTo: email,
      subject: `[Website] ${safeSubject}`,
      text: textBody,
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Profile:</strong> ${safeProfile}</p>
        <p><strong>Locale:</strong> ${safeLocale}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      sendError(res, 502, 'EMAIL_DELIVERY_FAILED', 'Email delivery failed.');
      return;
    }

    res.json({ ok: true });
  } catch (error) {
    console.error('Contact error:', error);
    sendError(res, 500, 'SERVER_ERROR', 'Server error.');
  }
});

app.listen(port, () => {
  console.log(`Contact API running on port ${port}`);
});
