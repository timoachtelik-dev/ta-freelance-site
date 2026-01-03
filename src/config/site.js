export const PROFILE_MODES = {
  FREELANCE: 'freelance',
  APPLICATION: 'application',
};

const cvUrl = new URL('../assets/Lebenslauf_Achtelik_Timo.pdf', import.meta.url).href;

const envProfileMode = ((import.meta.env && import.meta.env.VITE_PROFILE_MODE) || '').toLowerCase();
const resolvedProfileMode = Object.values(PROFILE_MODES).includes(envProfileMode)
  ? envProfileMode
  : PROFILE_MODES.FREELANCE;

export const SITE_CONFIG = {
  // Switch between PROFILE_MODES.FREELANCE and PROFILE_MODES.APPLICATION.
  profileMode: resolvedProfileMode,
  contactEmail: 'kontakt@timo-achtelik.de',
  cvUrl,
  portraitSrc: new URL('../assets/portrait.jpg', import.meta.url).href,
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
    // {
    //   title: 'Project name',
    //   description: 'Short description of the work and outcome.',
    //   imageSrc: '/references/project.jpg',
    //   url: 'https://example.com',
    // }
  ],
};
