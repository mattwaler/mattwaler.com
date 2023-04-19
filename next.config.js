/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  output: 'export',
  distDir: '.dist',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
}
