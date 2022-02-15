import type { NextPage } from "next";
import type { AppProps } from 'next/app'

declare global {
  type Meta = {
    title: string,
    description: string,
  }
  type App = AppProps & { Component: { meta: Meta } }
  type Page = NextPage & { meta: Meta }
}


