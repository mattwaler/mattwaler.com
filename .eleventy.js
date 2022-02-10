const format = require('date-fns/format')

module.exports = (config) => {
  config.addFilter('date', (date, dateFormat) => format(date, dateFormat ?? 'MMMM d, yyyy'))
  config.addPassthroughCopy({ public: './' })
  config.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
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
  config.setLibrary('md', require('./src/_config/markdown'))
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    markdownTemplateEngine: false,
  }
}
