# timo-achtelik.dev

👋 Willkommen! Dies ist die persönliche Portfolio-Website von **Timo Achtelik** – Freelance Software Engineer & Tech Consultant.

## 🌍 Projektübersicht

Diese Website wurde mit modernem Tech-Stack umgesetzt:

- **Vue 3** mit Composition API & Vite
- **vite-ssg**: statisches Pre-Rendering (SSG) pro Route für SEO
- **Tailwind CSS** (inkl. Dark Mode)
- **Vue Router** & **vue-i18n** (DE & EN)
- **@unhead/vue** für per-Route Meta (Title, Description, Open Graph, JSON-LD)
- Vollständig responsive & SEO-freundlich

Ziel: Klare Präsentation meiner Leistungen im Bereich **Webentwicklung**, **technische Beratung** und **Agile Projektarbeit**.

## 🚀 Features

- Zweisprachig (Deutsch / Englisch)
- Cleanes Design mit Dark Mode
- Skalierbare Projektstruktur (Vue Best Practices)
- Kontaktformular via API (Resend) + Spam-Schutz (Turnstile) sowie direkte E-Mail-Option
- Moderne SEO-Basics

## 🧩 Voraussetzungen

- Node.js 18+ (empfohlen 20+)

## ▶️ Lokale Entwicklung

```bash
npm install
npm run dev
```

## 🏗️ Build & Preview

`npm run build` nutzt **vite-ssg** und erzeugt statisches HTML pro Route
(`dist/index.html`, `dist/about.html`, …). Deep-Links liefern damit echten
Inhalt für Crawler.

```bash
npm run build
npm run preview
```

### Generierte Assets neu erzeugen

```bash
npm run fonts:sync       # Inter-woff2 aus @fontsource/inter nach public/fonts/
npm run images:optimize  # portrait-384 avif/webp/jpg aus src/assets/portrait.jpg
npm run og:generate      # public/social-preview.jpg (1200×630 OG-Bild)
```

## 🔎 SEO / Google Search Console

Nach jedem Deploy mit geänderten Routen/Inhalten **manuell**:

1. `sitemap.xml` (liegt in `public/`, URLs auf `https://profile.timo-achtelik.de`)
   in der [Google Search Console](https://search.google.com/search-console)
   einreichen.
2. Über „URL-Prüfung" die Startseite und geänderte Unterseiten zur
   **Indexierung anfordern**.
3. Mit dem [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
   das OG-Preview (`/social-preview.jpg`) prüfen.

## ✉️ Kontaktformular (Resend + Turnstile)

Für den Versand direkt aus dem Browser läuft eine kleine API (Node/Express), die Resend nutzt und Captcha/Rate-Limits prüft.

1) `.env` anlegen (siehe `.env.example`)
2) Resend API Key + verifizierte Sender-Domain setzen
3) Cloudflare Turnstile Site/Secret Key setzen
4) API starten:

```bash
npm run server
```

Default-Port: `8787`  
Standard-Endpunkt: `POST /api/contact`

Beispiel Reverse Proxy (Caddy):

```caddy
/api/* {
  reverse_proxy localhost:8787
}
```

Wichtige Env-Variablen:
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (Default, muss bei Resend verifiziert sein)
- `CONTACT_TO_EMAIL` (Default)
- `CONTACT_FROM_EMAIL_FREELANCE` / `CONTACT_TO_EMAIL_FREELANCE` (optional, überschreibt Default)
- `CONTACT_FROM_EMAIL_APPLICATION` / `CONTACT_TO_EMAIL_APPLICATION` (optional, überschreibt Default)
- `TURNSTILE_SECRET`
- `CONTACT_ALLOWED_ORIGINS` (optional, CSV-Liste bei Cross-Origin-Setup)
- `VITE_TURNSTILE_SITE_KEY`
- `VITE_CONTACT_ENDPOINT` (z. B. `/api/contact`)

Lokal (Frontend + API getrennt) z. B.:
```bash
VITE_CONTACT_ENDPOINT=http://localhost:8787/api/contact
```

## 🧭 Profil-Modus (Freelance / Bewerbung)

Der Modus wird zentral in `src/config/site.js` gesteuert:

- `profileMode: PROFILE_MODES.FREELANCE` für die Service-Version
- `profileMode: PROFILE_MODES.APPLICATION` für die Bewerbungs-Version (Focus Areas, CV/LinkedIn-CTA)

Optional per Env (Build-Zeit):
- `VITE_PROFILE_MODE=freelance` oder `VITE_PROFILE_MODE=application`

Assets:
- CV liegt unter `src/assets`
- Portrait bitte unter `src/assets/portrait.jpg` ablegen (und `portraitSrc` im Config setzen)

## 🧱 Projektstruktur

```bash
src/
├── assets/
├── components/       # z. B. Navbar
├── views/            # Home, Services, About, Contact
├── router/           # Vue Router Setup
├── locales/          # JSON-Sprachdateien
server/
├── index.mjs         # Kontaktformular API (Resend + Turnstile)
├── App.vue
├── main.js
└── assets/main.css
