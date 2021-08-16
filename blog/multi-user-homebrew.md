---
title: Using Homebrew with Multiple Users on MacOS Big Sur
description:
  Homebrew was not designed for multi-user use on MacOS. Here's a few tips to get things working right.
date: 2021-06-25
---

## The Problem with Multiple Users and Homebrew

Homebrew assumes you are not using multiple users on your machine. As such, when you `brew install` something, or even when you install brew itself, it will assign ownership of all of homebrew's directories to your current user.

So, when attempting to use homebrew or any other taps you installed as another user, you will get **mountains** of errors.

## The Solution: Ask Firmly with Shell Scripts

The best solution I've been able to come up with is to create a zsh function that rewrites the permissions of the homebrew directory, and run that *before* doing anything else.

Something like this:

::: codeblock
```shell
# I've named it "bp", short for "brew permissions"
bp() {
  sudo chown -R $(whoami) /usr/local/*
}

```
:::

Or, you can prefix your other functions by calling this function first, like so:

::: codeblock
```shell
# Prefix it to your other commands!
mongo:start() {
  bp &&
  brew services start mongodb-community
}

```
:::

Now, in order to fix permissions, just run `bp` in the console when you switch users, or just run the prefixed functions!

Enjoy your multi-user homebrew installation!
