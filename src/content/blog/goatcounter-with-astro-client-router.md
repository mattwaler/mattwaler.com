---
date: 2026-11-03
title: Using GoatCounter with Astro's ClientRouter
description: GoatCounter only counts the first page of a visit when Astro's ClientRouter handles navigation. Here's the three-line fix, and why the referrer needs blanking too.
tags:
  - Development
---

I recently added [GoatCounter](https://www.goatcounter.com/) to this site. It's a tiny, privacy-friendly analytics tool that skips the cookie banner and gives me exactly what I want: which pages people read and where they came from.

Setup is one script tag, which I dropped at the bottom of my layout:

```html
<script
  data-goatcounter="https://mattwaler.goatcounter.com/count"
  async
  src="//gc.zgo.at/count.js"
></script>
```

A few minutes later I noticed the dashboard only ever showed the page someone landed on. Clicking around the site counted nothing.

## Why pages go missing

This site uses Astro's `<ClientRouter />` for view transitions. Instead of doing a full page load when you click a link, the router fetches the next page and swaps the DOM in place.

That's great for feel, but it means scripts don't behave like they would on a normal page load. Astro marks every script it has already executed and skips it on later swaps, so `count.js` runs exactly once per visit. GoatCounter counts a pageview when the script loads, so the first page gets counted and everything after it is invisible.

## The fix

The router fires `astro:after-swap` after each client-side navigation, once the new page's DOM, title, and URL are in place. GoatCounter exposes `window.goatcounter.count()` for manual counting, so we can wire the two together:

```js
document.addEventListener('astro:after-swap', () => {
  window.goatcounter?.count?.({ referrer: () => '' })
})
```

I put this in my bundled `app.js`, which Astro only runs once, so the listener only gets registered once.

A few details worth calling out:

- **`astro:after-swap`, not `astro:page-load`.** `page-load` also fires on the initial page load, which `count.js` already counts on its own. Using it would double-count every landing page. `after-swap` only fires on client-side navigations.
- **Optional chaining on `goatcounter` and `count`.** The script loads `async`, so a very fast first click could beat it. If it isn't ready yet, we skip that pageview instead of throwing an error.
- **The path and title come for free.** By the time `after-swap` fires, the URL and `<title>` have already been updated, and `count()` reads both by default.

## Why blank the referrer?

This one is easy to miss. `document.referrer` is set once when the browser loads a document, and the ClientRouter never loads a new document. It swaps content and pushes a history entry.

So if someone arrives from Google and reads four pages, all four report Google as the referrer. That inflates your referrer numbers and makes internal navigation look like four separate visits from search.

Passing `referrer: () => ''` tells GoatCounter that this pageview has no external referrer, which is the truth. The landing page still gets the real referrer from the initial `count.js` run, and the follow-up pages count as plain internal views.

## Wrapping up

That's it! Three lines, and now every page view gets counted with an accurate referrer. This pattern should work for any analytics script that counts on load, as long as it exposes a manual counting function.
