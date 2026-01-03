export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B5563',   // Muted text
        secondary: '#1F2933', // Ink
        secondaryDark: '#243141', // Lighter dark background
        background: '#F5F5F4',// Mist background
        surface: '#EFECE8',   // Soft card surface
        surfaceDark: '#2A3445', // Dark card surface
        accent: '#B08968',    // Muted sand
        highlight: '#64748B', // Cool slate
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
