---
title: Rebuilding My Website with the TEA Stack
description:
  In this post I talk about the goals I had for the website rebuild, and how I used the TEA Stack to make it happen.
date: 2020-12-22
---

## Why Redesign?

As a web developer, your personal site is a reflection of yourself and your skill set. I was proud of my previous iteration, but I knew it could be better. I found it was lacking in a few key areas:

- Was only one page
- Very text heavy
- Lacked personality
- Portfolio aspects were missing

In hindsight, I am certain that prospective clients visited my site, saw very little imagery or proof of my skills, and bounced.

## Requirements and Goals

I had a few key goals in mind when I began the new iteration:

- Look amazing (obviously)
- Showcase my personality
- Showcase projects and websites
- Markdown-powered blog & content
- Minimal JS/CSS bundles
- Syntax highlighting in pages & posts
- App-like page routing, without a frontend framework
- Contain styles, structure, and functionality in templates as much as possible

## How I Built This

I pulled together a collection of awesome tools to make this site awesome. I call this set of tools the **TEA Stack** (patent pending 😉). The TEA stack includes [TailwindCSS](https://tailwindcss.com), [Eleventy](https://11ty.dev), and [AlpineJS](https://github.com/alpinejs/alpine). If you have not already, I suggest you give each of these tools a try. When combined, they are insanely powerful and delightful to work with.

I built a [starter template](https://github.com/mattwaler/tea-stack) repository on GitHub, so if you're looking to jump right into the stack, give it a spin and let me know how it goes!

## TailwindCSS

Tailwind is a phenomenal framework and I have far too many good things to say about it. This site is styled almost entirely by utility classes, with the minor exception of syntax highlighting and global defaults.

With the help of Tailwind, I was able to build this entire site with only **five** postcss files. This keeps my project scaffolding much leaner, while also allowing me to both build **and** style the site within my templates.

For example, here is a brief snippet of the hero element on this very page:

::: codeblock
```html
<section class="gradient-purple text-white py-8 lg:py-16">
  <div class="container max-w-screen-md mx-auto text-center">
    <p class="uppercase font-bold text-indigo-300 text-sm">{{ date | prettyDate }}</p>
    <h1 class="mt-2 text-2xl sm:text-3xl xl:text-4xl font-bold leading-none">
      {{ title }}
    </h1>
    <p class="mt-4 text-sm sm:text-base text-indigo-100">{{ excerpt }}</p>
  </div>
</section>
<span class="w-full h-12 block gradient-purple text-gray-100">
  {% include 'icons/waves.svg' %}
</span>
```
:::

### Tailwind Plugins

TailwindCSS has some fantastic plugins, from both the community and Tailwind Labs, that make life so much easier.

At the time of writing this, I am using these two great packages:

- [TailwindCSS Custom Forms](https://tailwindcss-custom-forms.netlify.app/) to style form inputs
- [TailwindCSS Debug Screens](https://joren.co/tailwindcss-debug-screens-demo/) to display the current breakpoint in development

## Eleventy

All pages on this site are **truly** statically generated at build time with Eleventy. What I mean by truly is that there is no pre-rendering, rehydrating, or any other funny business going on here.

Don't get me wrong, I think projects like Next, Gatsby, Nuxt, and Sapper are great. However, I believe the SSG aspects of these projects have major problems. Build times are atrocious, and the client-side JS bundles are massive even for tiny websites.

Here's a look at the result from running `npm run build:11ty` on my site:

::: codeblock
```bash
Copied 1 item and Processed 11 files in 0.38 seconds
```
:::

No JavaScript, no frameworks, just raw HTML.

> But now you don't get those _**dope**_ page transitions that feel like an app!

**Wrong!** [Turbolinks](https://github.com/turbolinks/turbolinks) can provide this functionality for us. Adding this to your bundle will grant you buttery smooth page transitions for quite the bargain:

::: codeblock
```bash
# package-size is a fantastic tool to quickly check filesize
npx package-size turbolinks

package             size        minified    gzipped
turbolinks@5.2.0    39.79 KB    37.78 KB    8.74 KB
```
:::

Eleventy allows for a markdown-powered website, exposes a fantastic API for passing data to templates, and makes it crazy simple to add custom filters, plugins, and so much more.

### Eleventy Plugins

- [Syntax Highlighting](https://github.com/11ty/eleventy-plugin-syntaxhighlight) to syntax highlight inline code with Prism **at build time**, not on the client

## AlpineJS

This project contains **one** JavaScript file. That file looks like this:

::: codeblock
```js
// This passes all postcss files through rollup and out into a single css file
import './main.pcss'

// Import and auto-initialize both Alpine and Turbolinks
import 'alpinejs'
import 'turbolinks'
```
:::

That's right. All of the functionality on my site, like the mobile navigation and the year in the footer, are written in the template files.

Take a look at the code in my footer to update the year client-side:

::: codeblock
```html
<span
  x-data=""
  x-text="`Waler Media LLC | © ${new Date().getFullYear()}`"
></span>
```
:::

Or maybe the button code to toggle the mobile nav:

::: codeblock
```html
<button @click="mobileNav = !mobileNav" class="w-6 h-6 md:hidden">
  <span x-show="!mobileNav">
    {% include 'icons/menu.svg' %}
  </span>
  <span x-show="mobileNav">
    {% include 'icons/close.svg' %}
  </span>
</button>
```
:::

With some vue-esque directives and custom attributes, I've got all the logic I need, and that logic is contained in the template file itself. So sexy.

## Inspiration

The design, tools, and stack was derived from a bunch of great tools and sites I follow very closely. I would feel like I am plaigerizing if I didn't devote a section on this post to point to things that helped bring this site to life:

- [Blob Maker](https://www.blobmaker.app/)
- [Get Waves](https://getwaves.io/)
- [Heroicons](https://heroicons.com)
- [Make VS Code Awesome](https://makevscodeawesome.com/)
- [Massage Envy](https://www.massageenvy.com/)
- [TailwindCSS Blog](https://blog.tailwindcss.com)

## Peep The Source

My website's [source code](https://github.com/mattwaler/mattwaler.com) will always be public on GitHub, so feel free to poke around yourself to see how things work! Some of the content in this post may not be 100% up-to-date, so check that out if you're feeling curious!

Thanks for reading, and as always, stay sexy.
