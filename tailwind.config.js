module.exports = {
  darkMode: false,
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
      xl: '1280px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
  purge: [
    './src/**/*.js',
    './src/**/*.md',
    './src/**/*.njk',
    './src/**/*.svg',
  ],
}
