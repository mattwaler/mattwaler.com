/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{ts,tsx}',
    './blocks/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
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
      position: ['bottom', 'right'],
      style: {
        borderRadius: '4px',
        boxShadow: 'none',
        margin: '16px',
        padding: '8px',
      },
    },
    extend: {
      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.gray.700')
      }),
      colors: {
        'mw-teal': '#00EAF8',
        'mw-blue': '#4A79F2',
        'mw-purple': '#6A46EF',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
}
