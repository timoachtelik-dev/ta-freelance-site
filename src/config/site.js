export const PROFILE_MODES = {
  FREELANCE: 'freelance',
  APPLICATION: 'application',
};

const cvUrls = {
  de: new URL('../assets/CV_Achtelik_Timo_de.pdf', import.meta.url).href,
  en: new URL('../assets/CV_Achtelik_Timo_en.pdf', import.meta.url).href,
};

export const getCvUrlForLocale = (locale = 'de') => cvUrls[locale] || cvUrls.de;

const envProfileMode = ((import.meta.env && import.meta.env.VITE_PROFILE_MODE) || '').toLowerCase();
const resolvedProfileMode = Object.values(PROFILE_MODES).includes(envProfileMode)
  ? envProfileMode
  : PROFILE_MODES.FREELANCE;
const contactEmails = {
  [PROFILE_MODES.FREELANCE]: 'projects@timo-achtelik.de',
  [PROFILE_MODES.APPLICATION]: 'career@timo-achtelik.de',
};
const resolvedContactEmail = contactEmails[resolvedProfileMode] || contactEmails[PROFILE_MODES.FREELANCE];

export const SITE_CONFIG = {
  // Switch between PROFILE_MODES.FREELANCE and PROFILE_MODES.APPLICATION.
  profileMode: resolvedProfileMode,
  contactEmail: resolvedContactEmail,
  contactEmails,
  cvUrl: cvUrls.de,
  cvUrls,
  portraitSrc: new URL('../assets/portrait-384.jpg', import.meta.url).href,
  portraitSources: {
    avif: new URL('../assets/portrait-384.avif', import.meta.url).href,
    webp: new URL('../assets/portrait-384.webp', import.meta.url).href,
  },
  portraitWidth: 384,
  portraitHeight: 514,
  portraitAlt: 'Portrait of Timo Achtelik',
  profiles: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/timo-achtelik-112b2127a/',
    },
    {
      name: 'Xing',
      url: 'https://www.xing.com/profile/Timo_Achtelik2/web_profiles',
    },
  ],
  references: [
    {
      title: 'Recipe Hub',
      descriptionKey: 'home.references.items.recipeHub.description',
      imageSrc: new URL('../assets/references/recipe-hub.webp', import.meta.url).href,
      url: 'https://recipe-hub.timo-achtelik.de/',
    },
  ],
};
