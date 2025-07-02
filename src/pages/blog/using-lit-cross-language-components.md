---
layout: '../../layouts/Blog.astro'
date: 06/27/2025
title: Using Lit to create cross-language components
description: On larger projects that utilize multiple templating languages to accomplish server-side and client-side rendering, using lit to create custom html elements can solve your problems.
tags:
  - Lit
  - JavaScript
---

# Using Lit to create cross-language components

As projects grow, oftentimes you end up utilizing several different templating languages to achieve desired outcomes in performance. For example, many portions of a web page can be server-rendered with things like PHP, but perhaps more interactive elements or slow queries below the viewport can be rendered client-side with a JS library!

At my agency, our biggest client's website operates on the following stack:

- Craft CMS to allow them to author content that is server-rendered
- React for highly interactive areas of the site
- Algolia Instantsearch for search experiences
- TailwindCSS for styling

## The Problem

A massive challenge we face in this approach is when a component spans across multiple templating languages. For example, we utilize a "Provider Card" that displays a provider's avatar, their phone number, and a button to drive users to that provider's page. This card is utilized in the Algolia experience, but it also needs to be server-rendered other pages that are related to this provider!

This leads to a scenario where you end up with the following set of files:
- `ProviderCard.js` (JavaScript/React)
- `provider-card.twig` (PHP/Craft CMS)

As you can imagine, this grows more and more painful as more logic gets added to the cards, because they now have to be added in both places, and tested with entirely different libraries and methodologies! You also cannot pass data to the cards in a consistent way across platforms!

## The Solution

A fantastic solution we found for this problem was utilizing Lit and HTML Custom Elements to solve this problem. This allowed us to define our components in a singular tmeplating language that could then be used by both server and client rendered libraries throughout the site!

```ts
import { html, LitElement } from 'lit'

export class ProviderCard extends LitElement {
	// Props get typed here
  static properties = {
    exampleProp: { type: String }
	}
  // Props get initialized here
	constructor() {
		super()
		this.exampleProp = 'Default value for prop!'
	}
  // The markup goes here!
  render() {
    return html`
      <div class="blah blah example because the code is too long">
        ${this.exampleProp}
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
customElements.define('star-ratings', StarRatings)
```
