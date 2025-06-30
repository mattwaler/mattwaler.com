---
layout: '../../layouts/Markdown.astro'
date: 06/29/2025
title: Using Tailwind CSS with Lit and HTML Custom Elements
description: In order to use tailwind with lit and custom html elements, you need to disable the shadow dom. Here's how you do that!
---

# Using Tailwind CSS with Lit and HTML Custom Elements

In order to use tailwind with lit and custom html elements, you need to disable the shadow dom. This will allow global styles to leak into your custom elements. Here's how you do that:

```ts
import { html, LitElement } from 'lit'

export class MyTailwindElement extends LitElement {
  static properties = {
    exampleProp: { type: String }
	}
	constructor() {
		super()
		this.exampleProp = 'Default value for prop!'
	}
  render() {
    return html`
      <div class="p-4 rounded-xl text-green-500">
        ${this.exampleProp}
      </div>
    `
  }
  // RIGHT HERE! THIS IS THE MAGIC!
  // This method tells Lit to render the markup inside the
  // HTML tag, as-is, without the shadow dom.
  createRenderRoot() {
		return this
	}
}

// Define it so you can use it everywhere!
customElements.define('my-tailwind-element', MyTailwindElement)
```

Now you can use it somewhere else in your project like so:

```html
<my-tailwind-element></my-tailwind-element>
```

[This is available in the documentation here](https://lit.dev/docs/components/shadow-dom/#implementing-createrenderroot). They talk about some of the shortcomings and why this is not recommended, but if you are using Tailwind in your projects, the benefits of having access to Tailwind far outweigh the cost of not being able to scope styling to your elements.
