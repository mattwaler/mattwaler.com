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
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
}
