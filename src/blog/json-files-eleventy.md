---
title: Exporting JSON with Eleventy
description:
  You can leverage Eleventy to output any file type you want. In this post, I show you how to export JSON so it can be consumed dynamically in the client.
date: 2020-03-26
---

## The sky's the limit
In 11ty, you are able to customize the filetype of the exported template just by appending any filetype to the **permalink** field.

In the following example, I am looping over a pretend posts collection inside 11ty to build a JSON file of data.

::: codeblock
```twig
---
permalink: /api/posts.json
---
[
  {% for post in collections.posts  %}
    {% set data = post.data %}
    {
      "title": "{{ data.title }}",
      "description": "{{ data.description }}",
      "url": "{{ post.url }}"
    }{{ '' if loop.last else ',' }}
  {% endfor  %}
]
```
:::

This template will output the following JSON file.

::: codeblock
```json
[
  {
    "title": "Fake Post 1",
    "description": "Quis platea ut dolor dictumst felis",
    "url": "/posts/1/"
  },
  {
    "title": "Fake Post 2",
    "description": "Quis platea ut dolor dictumst felis",
    "url": "/posts/2/"
  },
  {
    "title": "Fake Post 3",
    "description": "Quis platea ut dolor dictumst felis",
    "url": "/posts/3/"
  }
]
```
:::

With this data now exported to a file in your site, you could consume it with a library like axios (or fetch if you're hardcore) in order to build out functionalities like search and sorting/filtering with a library like Svelte!

Here is how you would now access your new JSON file.

::: codeblock
```js
import axios from 'axios'
async function getPosts() {
  const { data } = await axios.get('/api/posts.json')
  return data
}
```
:::

Note! You can also configure all files in a directory to output to JSON by adding a **directory data file**. That file can look something like this:

::: codeblock
```js
// File: /pages/api/api.11tydata.js
module.exports = {
  permalink: '/api/{{ page.fileSlug }}.json',
}
```
:::

This will automatically export any templates inside this directory straight to JSON!

Eleventy is a fantastic platform and it has the potential to exceed traditional static site generation to include data files that can be consumed and made more dynamic on your site!
