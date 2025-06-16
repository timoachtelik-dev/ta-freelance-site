export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A572D',   // Darker, more accessible olive for text
        secondary: '#283618',  // No change, already has great contrast
        background: '#FCFBF7',// Softer, off-white for better contrast
        accent: '#C78D41',    // Darker ochre for accessible links
        highlight: '#AD5D21', // A more vibrant rust for buttons/CTAs
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  darkMode: 'class', // Damit Dark Mode funktioniert
  plugins: [],
}