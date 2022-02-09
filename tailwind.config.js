module.exports = {
  content: ['./src/**/*.{js,md,njk,svg}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              color: theme('colors.gray.100')
            },
            'code::after, code::before': {
              display: 'none',
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
}
