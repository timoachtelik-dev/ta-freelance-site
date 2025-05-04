export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#606c38',
        secondary: '#283618',
        background: '#fefae0',
        accent: '#dda15e',
        highlight: '#bc6c25',
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