module.exports = {
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/jit'),
    require('postcss-nested'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' ? require('cssnano') : null,
  ],
}
