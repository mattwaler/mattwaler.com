---
date: 2026-10-02
title: Using Lit to create cross-language components
description: On projects that mix server-side and client-side templating languages, Lit custom elements give you one component that works in every one of them.
tags:
  - Development
---

As projects grow, oftentimes you end up utilizing several different templating languages to achieve desired outcomes in performance. For example, many portions of a web page can be server-rendered with things like PHP, but perhaps more interactive elements or slow queries below the viewport can be rendered client-side with a JS library!

At my agency, our biggest client's website operates on the following stack:

- Craft CMS to allow them to author content that is server-rendered
- React for highly interactive areas of the site
- Algolia Instantsearch for search experiences
- TailwindCSS for styling

## Why our provider card ended up written twice

A massive challenge we face in this approach is when a component spans across multiple templating languages. For example, we utilize a "Provider Card" that displays a provider's avatar, their phone number, and a button to drive users to that provider's page. This card is utilized in the Algolia experience, but it also needs to be server-rendered other pages that are related to this provider!

This leads to a scenario where you end up with the following set of files:
- `ProviderCard.js` (JavaScript/React)
- `provider-card.twig` (PHP/Craft CMS)

Here's a stripped-down version of what that duplication looks like. First, the Craft CMS version in Twig:

```twig
{# provider-card.twig #}
{% set avatar = provider.avatar.one() %}

<div class="flex items-center gap-4 rounded-xl border p-4">
  <img
    class="size-16 rounded-full object-cover"
    src="{{ avatar.url }}"
    alt="{{ provider.title }}"
  >
  <div class="flex-1">
    <h3 class="font-bold">{{ provider.title }}</h3>
    <a class="text-sm text-gray-600" href="tel:{{ provider.phone }}">
      {{ provider.phone }}
    </a>
  </div>
  <a class="button" href="{{ provider.url }}">View profile</a>
</div>
```

And here's the React version we use for each Algolia search result, which receives the Algolia hit as `provider`:

```jsx
// ProviderCard.js
export default function ProviderCard({ provider }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border p-4">
      <img
        className="size-16 rounded-full object-cover"
        src={provider.avatar}
        alt={provider.title}
      />
      <div className="flex-1">
        <h3 className="font-bold">{provider.title}</h3>
        <a className="text-sm text-gray-600" href={`tel:${provider.phone}`}>
          {provider.phone}
        </a>
      </div>
      <a className="button" href={provider.url}>View profile</a>
    </div>
  )
}
```

Same markup and same classes, written twice. Both cards take a single `provider` object instead of a pile of individual props, which keeps the interface small. The data still doesn't line up perfectly, though: Craft hands Twig an entry where `avatar` is an asset field, while Algolia hands React a flat record where `avatar` is already a URL. Change the layout of one card, and you have to remember to change the other.

As you can imagine, this grows more and more painful as more logic gets added to the cards, because they now have to be added in both places, and tested with entirely different libraries and methodologies! You also cannot pass data to the cards in a consistent way across platforms!

## Writing the card once as a Lit custom element

A fantastic solution we found for this problem was utilizing Lit and HTML Custom Elements to solve this problem. This allowed us to define our components in a singular templating language that could then be used by both server and client rendered libraries throughout the site!

```ts
import { html, LitElement } from 'lit'

export class ProviderCard extends LitElement {
  // Props get typed here
  static properties = {
    provider: { type: Object },
  }

  // Props get initialized here
  constructor() {
    super()
    this.provider = {}
  }

  // The markup goes here, written exactly once!
  render() {
    const { title, phone, url, avatar } = this.provider

    return html`
      <div class="flex items-center gap-4 rounded-xl border p-4">
        <img
          class="size-16 rounded-full object-cover"
          src=${avatar}
          alt=${title}
        />
        <div class="flex-1">
          <h3 class="font-bold">${title}</h3>
          <a class="text-sm text-gray-600" href="tel:${phone}">
            ${phone}
          </a>
        </div>
        <a class="button" href=${url}>View profile</a>
      </div>
    `
  }

  // This is important, this allows global styles to
  // affect your element so things like tailwind will work!
  createRenderRoot() {
    return this
  }
}

// Define it so you can use it everywhere!
customElements.define('provider-card', ProviderCard)
```

That `createRenderRoot` override is what lets Tailwind classes reach the markup. I go into why in [Using Tailwind CSS with Lit and HTML Custom Elements](/blog/using-tailwind-with-lit-html-custom-elements).

With the element defined once, both sides just use it, and each one only has to pass a single `provider` object. In Twig, you pass the raw entry and merge in the fields that need something special, like the avatar, then encode it as JSON:

```twig
{% set cardProvider = provider|merge({
  avatar: provider.avatar.one().url,
}) %}

<provider-card provider="{{ cardProvider|json_encode }}"></provider-card>
```

In React, the Algolia hit already has the avatar as a URL, so you can hand it over as is:

```jsx
<provider-card provider={hit} />
```

One card, one set of markup, one prop, and one very happy development team.
