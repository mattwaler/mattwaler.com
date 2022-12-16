/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
      })
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
}
