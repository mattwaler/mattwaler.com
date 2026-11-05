---
date: 2026-11-03
title: Fixing Safari's toolbar flash with Astro's ClientRouter
description: Safari repaints the white page background under its toolbars during view transitions. Here's how I opted Safari out of view transitions while keeping Astro's client-side navigation.
tags:
  - Development
---

I love the feel of Astro's `<ClientRouter />`. Pages cross-fade into each other, navigation feels instant, and it takes one line to set up.

However, on Safari, something was awry.

## The problem

Modern Safari tints its toolbars to match whatever content sits underneath them. On a normal page load that looks great. During a view transition, though, Safari repaints the `html` element's background under the toolbars. My `html` background is white, so every click flashed white behind the toolbars before the new page settled in.

It's a small thing, but once I saw it I couldn't stop seeing it. Here's my homepage in the iOS Simulator, navigating to the contact page. Watch the toolbar at the bottom as the page changes.

<figure>
  <video class="aspect-auto! w-full max-w-xs rounded-xl shadow-xl" src="https://cdn.mattwaler.com/blog/safari-toolbar-before.mp4?v=4" poster="https://cdn.mattwaler.com/blog/safari-toolbar-before-poster.webp?v=3" width="600" height="1304" controls preload="metadata" muted playsinline aria-label="Safari with view transitions on: the page fades through white and the bottom toolbar flashes white"></video>
  <figcaption>Before the fix, at 1/2 speed.</figcaption>
</figure>

My first attempt was [bleedblend](https://www.npmjs.com/package/bleedblend), a package that samples the page edges and tints Safari's chrome to match. After getting it installed, the visual bug was still happening. The page edges were not the problem, it was how Safari handled the background color during view transitions!

## The fix

Astro's router decides whether to use view transitions by checking for `document.startViewTransition`. If it's missing, the router falls back to doing the navigation without the browser's View Transitions API. So in Safari, we can just make it look like the API doesn't exist:

```astro
---
import { ClientRouter } from 'astro:transitions'
---

<head>
  <!-- Must run before ClientRouter checks whether view transitions are supported -->
  <script is:inline>
    if (navigator.vendor === 'Apple Computer, Inc.') document.startViewTransition = undefined
  </script>
  <ClientRouter fallback="swap" />
</head>
```

Here's why each piece is there:

- **`is:inline`** keeps Astro from bundling the script. It runs right where it sits in the `<head>`, before the router's own script checks for support.
- **`navigator.vendor`** is `'Apple Computer, Inc.'` in Safari. Every browser on iOS runs on WebKit, so this covers Chrome and Firefox on iPhone too, which have the same flash.
- **`fallback="swap"`** tells the router to swap the DOM instantly when view transitions aren't available. The default fallback, `animate`, fakes the transition with CSS animations, and I wanted Safari to skip transitions entirely.

Here's the same navigation with the fix in place, next to the original for comparison. The page swaps instantly, and the white flash is gone.

<figure>
  <div class="grid grid-cols-2 gap-4 md:gap-8 max-w-xl mx-auto">
    <div>
      <video class="aspect-auto! w-full rounded-xl shadow-xl" src="https://cdn.mattwaler.com/blog/safari-toolbar-before.mp4?v=4" poster="https://cdn.mattwaler.com/blog/safari-toolbar-before-poster.webp?v=3" width="600" height="1304" controls preload="metadata" muted playsinline aria-label="Safari with view transitions on: the page fades through white and the bottom toolbar flashes white"></video>
      <p class="mt-3 text-center font-bold">Before</p>
    </div>
    <div>
      <video class="aspect-auto! w-full rounded-xl shadow-xl" src="https://cdn.mattwaler.com/blog/safari-toolbar-after.mp4?v=4" poster="https://cdn.mattwaler.com/blog/safari-toolbar-after-poster.webp?v=3" width="600" height="1304" controls preload="metadata" muted playsinline aria-label="Safari with view transitions off: the page swaps instantly without a white flash"></video>
      <p class="mt-3 text-center font-bold">After</p>
    </div>
  </div>
  <figcaption>Before and after the fix, at 1/2 speed.</figcaption>
</figure>

## Why not feature detection?

Normally I'd reach for feature detection over sniffing the browser. Here it doesn't help, because Safari does support view transitions. The API exists and works. The bug is in how Safari paints its toolbars while a transition runs, and there's nothing to feature detect for that.

## The tradeoff

Safari visitors lose the cross-fade between pages. They still get everything else from the ClientRouter: client-side navigation, prefetching, and persisted elements. Every other browser keeps the full view transition.

It is a bit of a bummer that Safari no longer gets the clean fade animation between pages, but I find it a worthwhile tradeoff to avoid that ugly white background color flash. If Safari fixes this later on, it's a simple one line change to get things 1:1.
