---
date: 2026-11-04
title: "Changing my crosshair"
description: My friends gave me endless grief for constantly tweaking my Counter-Strike crosshair. Turns out that habit was the perfect training for a career in web development.
tags:
  - Development
  - Gaming
  - Life
---

Growing up, I played a LOT of CS:GO with my friends, and they gave me endless grief for changing my crosshair every week. Smaller, bigger gap, green, cyan, dot, no dot. Funnily enough, they always seemed to spot the new crosshair after they died and I was still alive and fighting for that round.

<figure>
  <img src="https://mattwaler.nyc3.cdn.digitaloceanspaces.com/MW/blog/cs2-hours.webp?v=4" alt="My Steam library showing 1,948 hours on record in Counter-Strike 2" width="1254" height="171" loading="lazy" decoding="async">
  <figcaption>Please don't judge me.</figcaption>
</figure>

<figure>
  <img src="https://mattwaler.nyc3.cdn.digitaloceanspaces.com/MW/blog/crosshair-settings.webp" alt="A green Counter-Strike crosshair labeled with the console commands for its dot, size, thickness, color, and outline" width="1224" height="720" loading="lazy" decoding="async">
  <figcaption>Image via <a href="https://scope.gg" target="_blank" rel="noopener noreferrer">scope.gg</a></figcaption>
</figure>

I couldn't help it. If something felt even a little off, I wanted to fix it. I never fully settled on a crosshair, and I never will.

That habit turned out to be pretty useful in web development.

## The process is the crosshair

When I got into web development, I found a whole new crosshair to fiddle with: the way I actually build websites.

Every editor, tool, and build step in a workflow is a setting you can tune. And just like in Counter-Strike, I've never been able to leave mine alone for long. Every few years, something feels a little off, and I start adjusting.

## Static sites with CodeKit and Brackets

My first setup was [CodeKit](https://codekitapp.com) and [Brackets](https://brackets.io). CodeKit compiled my [Sass](https://sass-lang.com) styling, [Pug](https://pugjs.org) templates, and imperative JS files, and reloaded the browser without me ever opening a terminal. Brackets had live preview built in. For a beginner, it felt like magic.

## Build pipelines with Atom and Gulp

Eventually the magic felt like a black box, and I wanted more control. I moved to [Atom](https://github.com/atom/atom), which I could customize with packages, and [Gulp](https://gulpjs.com), where my build process lived in code instead of an app. That's where I got comfortable in the terminal, and where I realized I could build my own workflow.

## Single page apps with Vue, React, and webpack

Then single page apps took over, and I dipped my toes in with [Vue](https://vuejs.org). Single file components kept markup, styles, and logic together, and it still felt like writing HTML and CSS.

```vue
<template>
  <button @click="size++">Crosshair size: {{ size }}</button>
</template>

<script>
export default {
  data() {
    return { size: 2 }
  }
}
</script>

<style scoped>
button { color: cyan; }
</style>
```

The industry eventually picked [React](https://react.dev), so I moved over, with a [webpack](https://webpack.js.org) config holding it all together. Component-based thinking has stuck with me ever since, but for the marketing sites I was building, I was shipping way more JavaScript and config than they needed. Something felt off again.

## A faster editor with VS Code

Somewhere in the React era, I swapped Atom for [VS Code](https://code.visualstudio.com). It was faster, its extensions covered every language I touched, and the built-in terminal meant I rarely had to leave it. It's still my editor today.

## Utility-first CSS with Tailwind

My styling changed just as often: Sass partials, [PostCSS](https://postcss.org) plugins, [styled-components](https://styled-components.com) in React. Every project wrote CSS a little differently.

Then I found [Tailwind](https://tailwindcss.com). I could style right in the markup with utilities that worked the same in JSX, Vue templates, or plain HTML, so it came with me no matter what else I changed.

```html
<button class="px-4 py-2 rounded-lg bg-orange-500 text-white">
  Change crosshair
</button>
```

It's still in my setup today, and it's the closest I've come to settling on a crosshair.

## Lightweight interactivity with Alpine.js

Once Tailwind clicked, I wanted the same approach for JavaScript. Most of my sites needed a dropdown or a modal, not a framework, and pulling in React for that felt like bringing an AWP to the pistol round.

[Alpine.js](https://alpinejs.dev) fit perfectly. Like Tailwind, it lives in the markup: add a few attributes and an element is interactive.

```html
<div x-data="{ open: false }">
  <button @click="open = !open">Crosshair settings</button>
  <div x-show="open" x-transition>...</div>
</div>
```

It's still in my toolkit today.

## Fast builds with Vite

After years of webpack configs, [Vite](https://vite.dev) was a relief, and I barely had to adopt it. The tools I already used started supporting it out of the box, and my custom build scripts and long config files shrank to a few lines. Every codebase got smaller and easier to maintain. It's still what I reach for when a project needs a build step.

## Content-managed sites with Craft CMS

At this point in my career, I moved from frontend to fullstack development, and I was now working with clients who needed edit access to certain areas of their sites. Tailwind, Alpine, and Vite covered how I styled, scripted, and built those sites, but now I needed a CMS too.

[Craft CMS](https://craftcms.com) was my answer. It was the simplest configurable CMS I could find for non-technical people. I could build custom fields for each site and write templates in [Twig](https://twig.symfony.com), so I kept full control over the markup. Clients got an editor they could actually use, and I got a CMS with no opinions about my front end.

## Flat-file content with Statamic

Eventually, even my CMS crosshair needed a tweak.

Craft served me well for years, but it started to stagnate. Somewhere between Craft 4 and 5, their crosshair stopped matching mine, so I moved to [Statamic](https://statamic.com). It's built on [Laravel](https://laravel.com), stores content as flat files in [Git](https://git-scm.com), and its templates stay close to plain HTML. It's the closest you can get to a static site generator while still giving clients a world-class CMS.

## Static site generation with Astro

[Astro](https://astro.build) let me write components like I did in React while shipping plain HTML, and since it's built on Vite, it's fast. It's what this site runs on, and every post here is just a Markdown file in the repo. It's the same idea that drew me to Statamic's flat files, minus the control panel.

```yaml
---
title: About Us
blocks:
  - type: hero
    heading: Care that feels close to home
    image: https://cdn.example.com/hero.webp
  - type: cta
    heading: Ready to visit?
    button:
      label: Book now
      href: /contact
---
```

I think that's where client work is heading. In the industries I work in (healthcare, non-profits, and small-to-medium businesses), clients don't want to author content in a CMS anymore. Even with a friendly control panel, they'd rather send a quick email than log in and hunt for the right entry.

So they just ask:

* "Can you add our new team member?"
* "Can you update our holiday hours?"
* "Can you swap out the homepage photo?"
* "Can you post this upcoming event?"

A developer, or an LLM with a developer reviewing its work, edits the Markdown, drops new images into an [S3](https://aws.amazon.com/s3/) bucket, and the site rebuilds. Every change has a commit behind it, and there's no database to back up or patch. If you've read my post on [simplicity in agency development](/blog/simplicity-in-agency-development), you know why that appeals to me.

The traditional CMS isn't going away tomorrow, but it's starting to feel like a crosshair I'm about to change.

## Prompt-driven development with Claude and VS Code

Whether I'm building a static site or a CMS-driven one, the applications I build them with have changed again too. My current crosshair is VS Code and [Claude](https://claude.ai). More of my work now is describing what I want, reviewing what comes back, and steering until it's right.

I haven't handed over the wheel, though. I still think [AI is the worst mentor and the best mentee](/blog/ai-in-development-worst-mentor-best-mentee). Every setup on this list taught me something, and that's what lets me tell Claude what "right" looks like.

## My crosshair... for now

My friends wanted me to pick a crosshair and stick with it. In web development, the setup that felt perfect three years ago probably feels off today. Here's mine right now:

* [Astro](https://astro.build) for static sites, including this one
* [Statamic](https://statamic.com) for CMS builds
* [Vite](https://vite.dev) for builds
* [Tailwind CSS](https://tailwindcss.com) for styling
* [Alpine.js](https://alpinejs.dev) for interactivity
* [GoatCounter](https://www.goatcounter.com) for analytics on this site
* [VS Code](https://code.visualstudio.com) and [Claude](https://claude.ai) to build all of it

Ask me again in a year, and at least one of these will have changed.

So to my old CS:GO buddies: I'm still changing my crosshair, and I'm still not sorry.
