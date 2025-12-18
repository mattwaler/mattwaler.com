---
date: 2025-07-23
title: Simplicity in Agency Development
description:
  By keeping things simple, isolated to single files, and scoped, pieces from projects can be easily shared across clients and speed up development time significantly.
tags:
  - Agency
  - Alpine
  - Tailwind
---

Oftentimes as we grow as developers, we attempt to “level up” our code. We utilize more abstractions, shorthands, and bleeding-edge features to reduce our line counts in our repositories.
While these strategies make us feel like we are writing better code, oftentimes, that is not the case.

On personal projects, hackathons, and proof-of-concepts, there’s nothing wrong with trying out new tech. However, in an Agency setting where client expectations, timelines, and features shift constantly, we have found that focusing on simplicity is how we succeed.


## Simpler is more junior-friendly

When working on a team, you need to write code that your least experienced developers can understand. This does not mean that all aspects of a project must be possible, but simpler features and areas of the codebase should be something a junior developer can parse and make minor changes to without issue.

## Simpler is easier to pick back up

In Agency-based development, we often stop and start with clients with long breaks in between. You may write some code for a client, hear nothing from them, and pick that code back up 9 months later.
Previously we talked about writing code for junior developers, and that same methodology applies to writing code for your future self. Trust us, your future self will appreciate the simplest solution to the problem later on, not a complex abstraction.

## Simpler is easier to refactor

Simpler code often avoids abstractions, multiple file traversal, and prop drilling. This means that when the inevitable client feedback comes in, and they need it yesterday, simpler code will be easier to change, and making those changes will be more isolated and easy to test.

## Simpler is more transferrable

In Agency-based development, many clients benefit from the same set of solutions. When it comes to building out a CMS, many of the building blocks to construct pages share the same core markup and functionality. By keeping things simple, isolated to single files, and scoped, pieces from projects can be easily shared across clients and speed up development time significantly.

Every time I start a new project, I remind myself to Keep It Simple, Stupid.
