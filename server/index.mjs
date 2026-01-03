import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import { Resend } from 'resend';

const app = express();
const port = process.env.PORT || 8787;

app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(express.json({ limit: '50kb' }));

const allowedOrigin = process.env.CONTACT_ALLOWED_ORIGIN;
app.use((req, res, next) => {
  if (allowedOrigin) {
    res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
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
  legacyHeaders: false
});

const resendApiKey = process.env.RESEND_API_KEY || '';
const contactFrom = process.env.CONTACT_FROM_EMAIL || '';
const contactTo = process.env.CONTACT_TO_EMAIL || 'timo.achtelik@gmail.com';
const turnstileSecret = process.env.TURNSTILE_SECRET || '';
const resend = new Resend(resendApiKey);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    return { success: false, message: 'Captcha not configured.' };
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
    return { success: false, message: 'Captcha verification failed.' };
  }

  const data = await response.json();
  if (!data.success) {
    return { success: false, message: 'Captcha verification failed.' };
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

    if (!resendApiKey || !contactFrom) {
      res.status(500).json({ ok: false, message: 'Email service not configured.' });
      return;
    }

    const trimmedName = name?.trim?.() || '';
    const trimmedSubject = subject?.trim?.() || '';
    const trimmedMessage = message?.trim?.() || '';

    if (trimmedName.length < 2 || trimmedName.length > 120) {
      res.status(400).json({ ok: false, message: 'Invalid name.' });
      return;
    }

    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      res.status(400).json({ ok: false, message: 'Invalid email.' });
      return;
    }

    if (trimmedSubject.length < 3 || trimmedSubject.length > 120) {
      res.status(400).json({ ok: false, message: 'Invalid subject.' });
      return;
    }

    if (trimmedMessage.length < 10 || trimmedMessage.length > 4000) {
      res.status(400).json({ ok: false, message: 'Invalid message.' });
      return;
    }

    const captcha = await verifyTurnstile(token, req.ip);
    if (!captcha.success) {
      res.status(400).json({ ok: false, message: captcha.message });
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

    await resend.emails.send({
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

    res.json({ ok: true });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ ok: false, message: 'Server error.' });
  }
});

app.listen(port, () => {
  console.log(`Contact API running on port ${port}`);
});
