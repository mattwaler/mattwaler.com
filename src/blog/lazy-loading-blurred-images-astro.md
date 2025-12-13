---
layout: 'blog.twig'
date: 2025-06-30
title: Lazy Loading Blurred Images in Astro
description: How to create a lazy blur-up image effect on your images in an Astro project.
tags:
  - blog
  - Astro
  - Alpine
  - Tailwind
---

Today I will showcase how you can create a lazy blur up image effect on your images in Astro!

I am using this component in one of my most recent projects:
<a target="_blank" href="https://kingscourtlandscaping.com/">Kings Court Landscaping</a>

I will be using Tailwind CSS and Alpine.js for styling and scripting, but this can easily be recreated in vanilla JS/CSS if that's your preference!

The concept is really simple:

- Construct a container that is sized to your image dimensions
- Render a microscopic version of the image with a tiny file size that loads eagerly first and displays while the full resolution image is loading
- Load the full resolution image lazily, and once completed, hide the tiny image that is displaying in front of it

Take a look at this Astro component I named `ImageBlur.astro`:

```astro
---
import { Image } from 'astro:assets'

const {
  class: divClass = '',
  src,
  alt = '',
  width = undefined,
  height = undefined,
} = Astro.props
---

<!--
  Only show the blurred image if
  the other image is not loaded yet!
-->
<div
  class:list={[divClass, 'relative overflow-hidden']}
  x-data="{ showBlur: !$refs.image.complete }"
>
  <!--
    This is the tiny blurred image,
    positioned in front of the full resolution one!
    I am using alpine to animate this out
    when the other image finishes loading.
  -->
  <div
    class="absolute inset-0 z-10 size-full"
    x-show="showBlur"
    x-transition.opacity.duration.100ms
  >
    <!--
      Here is where we generate our tiny image
      with Astro Image, in webp, eagerly!
    -->
    <Image
      width={25}
      height={25}
      quality={50}
      format="webp"
      loading="eager"
      alt=""
      src={src}
      class="absolute inset-0 size-full object-cover object-center"
    />
  </div>
  <!--
    This is the full resolution image.
    When it finishes, we animate out the blurred one!
  -->
  <Image
    format="webp"
    x-ref="image"
    @load="() => showBlur = false"
    src={src}
    width={width}
    height={height}
    widths={widths}
    sizes={sizes}
    alt={alt}
    loading="lazy"
    class="absolute inset-0 z-0 size-full object-cover object-center"
  />
</div>
```

This can now be used in any other Astro files like so:

```astro
---
import ImageBlur from '@/components/ImageBlur.astro'
import exampleImage from '@/assets/example-image.jpg'
---

<ImageBlur src={exampleImage} class="" width={500} height={500} />
```

You can view the source code for this exact component on this very site by <a target="_blank" href="https://github.com/mattwaler/mattwaler.com/blob/main/src/components/ImageBlur.astro">visiting the GitHub repository</a>!
