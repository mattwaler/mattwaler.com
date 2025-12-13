import twig from '@factorial/eleventy-plugin-twig'
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

const twigOptions = {
  twig: {
    namespaces: {},
  },
  images: {},
  dir: {
    input: "src",
    output: "dist",
    watch: "src/**/*.{css,js,twig}",
  },
};

export default function (config) {
  config.addPassthroughCopy({ 'public': './' })
  config.addPlugin(syntaxHighlight)
  config.addPlugin(twig, twigOptions)
  config.setServerOptions({
    domDiff: false,
  })
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: 'twig',
  }
}
