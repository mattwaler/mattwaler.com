# 🌐 My Personal Website

My personal portfolio site and blog, built on Astro!

## 🧰 Tools

This project uses the following frameworks:

- [Astro](https://astro.build/) for static pages, content collections, and the client router
- [Satteri](https://github.com/bruits/satteri) for rendering markdown blog posts
- [TailwindCSS](https://tailwindcss.com/) for styling, wired in through Vite
- [Alpine.js](https://alpinejs.dev/) for interactivity, alongside [Embla Carousel](https://www.embla-carousel.com/), [Typed.js](https://github.com/mattboldt/typed.js), and [grid-rows-masonry](https://github.com/bartram/grid-rows-masonry)
- [Cloudflare](https://www.cloudflare.com/) for hosting, with images and videos served from an R2 bucket at `cdn.mattwaler.com`
- [GoatCounter](https://www.goatcounter.com/) for privacy-friendly analytics

## ⭐️ Requirements

- [Node](https://nodejs.org/en/) 26 (see `.nvmrc`)
- [NVM](https://github.com/nvm-sh/nvm)

## 🛠 Getting Started

- `nvm use` to switch to the valid node version
- `npm i` to build that big ol' `node_modules` folder
- `npm run dev` to boot up a live-reloading dev server
- `npm run build` to build your production-ready site into `dist`
- `npm run preview` to serve that production build locally before deployment

Blog posts live in `src/content/blog` as markdown files, and project data lives in `src/data/projects.js`.

Feel free to peep the `package.json` file to see all available scripts and packages being utilized.

### 👋🏻 Thank you!

I appreciate you taking time to check out this project. Please leave a star and share it if you found it useful!
