/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './assets/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    debugScreens: {
      style: {
        borderRadius: '4px',
        boxShadow: 'none',
        margin: '16px',
        padding: '8px',
      },
    },
    extend: {
      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.zinc.800'),
      }),
      colors: {
        'mw-teal': '#00EAF8',
        'mw-blue': '#4A79F2',
        'mw-purple': '#6A46EF',
        'agone-purp': "#6a3ee9",
        'agone-blue': "#536dfe",
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
}
