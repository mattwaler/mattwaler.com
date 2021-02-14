const highlighting = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdown = require('./src/_config/markdown')
const prettyDate = require('./src/_config/prettyDate')

module.exports = (config) => {
  config.addFilter('prettyDate', prettyDate)
  config.addPassthroughCopy({ public: './' })
  config.addPlugin(highlighting)
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    snippetOptions: {
      rule: {
        fn: function (snippet, match) {
          return snippet + match
        },
        match: /<\/head>/i,
      },
    },
  })
  config.setDataDeepMerge(true)
  config.setLibrary('md', markdown)
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: false,
  }
}
