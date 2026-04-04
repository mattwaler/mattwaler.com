---
date: 2026-04-04
title: Container Query Typography Systems
description: With the adoption of container queries in all browsers, it's time to use them to fix typography systems.
tags:
  - CSS
  - Tailwind
---

In every web project I've ever done, I always end up creating a set of utility classes for each heading type. Things like `h1`, `h2`, and so on.

For example, here's an excerpt of my old typography styles on this site, written in Tailwind of course:

```css
@utility h1 {
  @apply font-extrabold text-4xl md:text-5xl lg:text-6xl;
}

@utility h2 {
  @apply font-extrabold text-3xl md:text-4xl lg:text-5xl;
}

@utility h3 {
  @apply font-bold text-2xl md:text-3xl lg:text-4xl;
}

@utility h4 {
  @apply font-medium text-xl md:text-2xl lg:text-3xl;
}

@utility h5 {
  @apply font-medium text-lg md:text-xl lg:text-2xl;
}

@utility h6 {
  @apply font-medium md:text-lg lg:text-xl;
}
```

While this works great for maintaining consistency and adherence to a typography scale, there's one crucial area where this approach breaks down: The dreaded 2-column. You know the one, where you have an image on one side, and your content on the other:

<img class="w-1/2 mx-auto" src="/columns.png" loading="lazy">

In a UI like this, you may be tempted to use your `h2` style, but I can guarantee it will look way large in that context! Now, you may be tempted to utilize the next step down in your type scale, but that introduces another problem. When you inevitably stack on tablet resolutions, now your font is too small!

<img class="w-1/2 mx-auto" src="/stacked.png" loading="lazy">


With the advent and adoption of container queries and the `:has` selector, this phenomenon can finally be solved! Instead of utilizing breakpoint-based typography scales, the solution is to use container-based scales! Peep the code:

```css
/* Turn any element with typography into a container */
*:has(.h1),
*:has(.h2),
*:has(.h3),
*:has(.h4),
*:has(.h5),
*:has(.h6) {
  @apply @container;
}

/* Style each class based on container, not viewport size */
@utility h1 {
  @apply font-extrabold text-4xl @md:text-5xl @lg:text-6xl;
}

@utility h2 {
  @apply font-extrabold text-3xl @md:text-4xl @lg:text-5xl;
}

@utility h3 {
  @apply font-bold text-2xl @md:text-3xl @lg:text-4xl;
}

@utility h4 {
  @apply font-medium text-xl @md:text-2xl @lg:text-3xl;
}

@utility h5 {
  @apply font-medium text-lg @md:text-xl @lg:text-2xl;
}

@utility h6 {
  @apply font-medium @md:text-lg @lg:text-xl;
}
```

Now, your typography styles will respond not to the entire viewport, but their parent container size! So when using the dreaded 2-column UI element, your typography will behave like so:
- Desktop (1440+): 50% width container, most likely the `@md` size
- Tablet: (800+) 100% width container, most likely the `@lg` size
- Mobile: 100% width container, most likely the unprefixed size

Give it a whirl in your next project and let me know how it works out for you!
