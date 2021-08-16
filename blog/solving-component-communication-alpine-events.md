---
title: Solving Component Communication with Events in Alpine
description:
  Communicating between components in Alpine can actually be quite easy with a few little tricks with native custom events and dispatching.
date: 2021-03-04
---

## The Benefits of Using Alpine

Alpine is without a doubt the simplest and lightest solution for sprinkling declarative reactivity into your templating language of choice:

::: codeblock
```html
<!--
  In this tiny example we have reactive DOM toggling!
-->
<body x-data="{ isNavOpen: false }">
  <main x-show="!isNavOpen">
    <button @click="isNavOpen = !isNavOpen">
      Toggle Nav
    </button>
    <!-- Page Content -->
  </main>
  <nav x-show="isNavOpen">
    <!-- Mobile Navigation Content -->
  </nav>
</body>
```
:::

I love using Alpine and include it on my following projects:

- [TEA Stack](https://github.com/mattwaler/tea-stack)
- [Fastify Starter](https://github.com/mattwaler/fastify-starter)
- [This Website](https://github.com/mattwaler/mattwaler.com)
- [Overpass](https://github.com/mattwaler/overpass.mattwaler.com)

However, there's one small problem you will inevitably hit when using it.

## The Problem: Managing Global State and Component Communication

Unfortunately, Alpine lacks a global state management solution like React Context or Vuex. As such, updating parent state in child components or triggering updates from one component to another gets tricky in Alpine.

Here's a brief code example of the problem in action:

::: codeblock
```html
<!--
  We create a parent component to toggle between page content
  and the mobile navigation.
-->
<body x-data="{ isNavOpen: false }">
  <main x-show="!isNavOpen">
    <!-- Page Content -->
  </main>
  <nav x-show="isNavOpen">
    <div x-data="{ showChildLinks: false }">
      <!--
        Here we have no access to "isNavOpen" since we've
        defined a new component context.
      -->
    </div>
  </nav>
</body>
```
:::

In this example, we are not be able to toggle `isNavOpen` within the nested div component! So, if we wanted to add a button somewhere inside of this component who's purpose was to close the navigation, we have no way of doing so!

## Solving Global Alpine State with Custom Events

We can solve this problem with Custom Events. Alpine provides shorthands to register and listen for them throughout your markup too!

In traditional JS, you would create and listen for custom events like so:

:::codeblock
```js
// Define the event
const toggleNav = new Event('toggle-nav')

// Listen on the window for this event, and when it fires, do something
window.addEventListener('toggle-nav', toggleNavFunction())
window.dispatchEvent(toggleNav)
```
:::

Alpine allows you to do this directly in your template!

:::codeblock
```html
<!--
  @toggle-nav.window is identical to the example above.
  Now we can mutate state when the event is fired from anywhere!
-->
<body
  @toggle-nav.window="isNavOpen = !isNavOpen"
  x-data="{ isNavOpen: false }"
>
  <main x-show="!isNavOpen">
    <!-- Page Content -->
  </main>
  <nav x-show="isNavOpen">
    <div x-data="{ showChildLinks: false }">
      <!--
        We can now toggle the navigation from a nested component!
      -->
      <button @click="$dispatch('toggle-nav')">
        Toggle the nav!
      </button>
    </div>
  </nav>
</body>
```
:::

## Not Just For Parent-Child State Communication

This solution is not limited to the Parent-Child relationship illustrated in the code examples above. You can also use this solution to pass/update values from sibling components!

::: codeblock
```html
<!--
  Here we allow the message value to be updated globally
  by registering an 'update-message' custom event on window
  NOTE: You can accept data from the event with $event.detail
-->
<div
  x-data="{ message: 'Initial message!' }"
  @update-message.window="message = $event.detail.message"
>
  <h1 x-text="message"></h1>
</div>
<!--
  Here we dispatch our custom event from another sibling component, and pass
  a new payload along with it!
 -->
<div x-data>
  <button @click="$dispatch('update-message', { message: 'New message!' })">
    Update other message value!
  </button>
</div>
```
:::

Next time you need to pass state or update state across component contexts, be sure to reach for custom events and dispatchers!
