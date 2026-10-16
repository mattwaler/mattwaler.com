---
date: 2026-10-10
title: "I Ditched 7 Mac Utilities for Vorssaint and Spotlight"
description: How I swapped a pile of menu bar applications for Vorssaint and Spotlight, and why Spotlight is still missing a few things that might send me back to Raycast.
tags:
  - Development
  - Life
---

I was running tons of background apps just to make macOS feel the way I wanted. Each one did its job well, but they also gave me many things to keep up-to-date and lots to reinstall on the next machine wipe or new device purchase.

## The old setup

* [AltTab](https://alt-tab-macos.netlify.app) for Windows-style window switching with previews
* [AppCleaner](https://freemacsoft.net/appcleaner/) to delete apps and the leftover files they scatter around
* [Ice](https://github.com/jordanbaird/Ice) to hide menu bar clutter
* [Shottr](https://shottr.cc) for screenshots and annotations
* [Raycast](https://www.raycast.com) for launching apps and everything else
* [LinearMouse](https://linearmouse.app) to tune mouse and trackpad behavior like acceleration and scroll direction
* [OnyX](https://www.titanium-software.fr/en/onyx.html) to clear caches and run maintenance tasks

Seven apps I can think of, and I'm sure I'm forgetting some strays hiding in my Login Items.

## Enter Vorssaint

Then I found [Vorssaint](https://github.com/vorssaint/vorssaint-utils), a free, open-source menu bar app that bundles every single feature you see above into a single app install. Once installed, you can enable/disable any feature you want, and set up global hotkeys for ones you use constantly.

Pairing Vorsstaint with Spotlight, I shrank my entire background app library down to one third-party installation and a built-in one. I get fewer permission prompts, fewer update popups, and a lot fewer icons in my menu bar!

If you read my post on [why dumb doesn't break](/blog/dumb-doesnt-break), you can guess why this appeals to me. Every app I run is another thing that can crash, update at a bad time, or get abandoned by its developer.

## Where Spotlight falls short

Spotlight has improved a lot, but it has a long way to go before it replaces Raycast. I think it's absolutely asinine that had to create my own shortcuts just to put my Mac to sleep or shut it down. In Raycast, I typed a few letters and hit enter. In Spotlight, I have to build the commands myself before I could use them:

![The macOS Shortcuts app showing custom Shut Down and Sleep shortcuts](https://mattwaler.nyc3.cdn.digitaloceanspaces.com/MW/blog/shortcuts.png)


## Will I switch back to Raycast?

I might. Those two commands are about the only things I miss, and I'm close to reinstalling Raycast for them alone. That would bring my stack to three apps, which sure as hell still beats seven.

If you made it this far, thanks. And, as always, stay minimal.

**EDIT/UPDATE:** I reinstalled Raycast as my main launcher. Sue me.
