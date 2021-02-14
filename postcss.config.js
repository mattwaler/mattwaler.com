isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-nested'),
    require('autoprefixer'),
    isProd ? require('cssnano') : null,
  ],
}
