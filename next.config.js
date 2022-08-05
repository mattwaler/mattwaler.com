/** @type {import('next').NextConfig} */

module.exports = {
  pageExtensions: ["route.tsx", "route.ts"],
  reactStrictMode: false,
  experimental: {
    images: {
      allowFutureImage: true,
      unoptimized: true,
    }
  },
}
