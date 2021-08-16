---
title: Switch Statements Exist in Nunjucks
description:
  Learn how to use switch statements in Nunjucks, even though they are missing from the official documentation.
date: 2020-03-15
---

## It's not a bug, it's a feature

Despite being nowhere in the current documentation at the time of writing this, the switch statement, which can be very useful, is fully supported in Nunjucks. Here is an example below of how to use it.

::: codeblock
```twig
<!-- Conditional -->
{% set test = false %}

<!-- Switch -->
{% switch test %}
  {% case true %}
    <p>This is true</p>
  {% default %}
    <p>This is false</p>
{% endswitch %}

<!-- Output -->
<p>This is false</p>
```
:::

Enjoy dryer conditional statements!
