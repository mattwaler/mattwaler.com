const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ["js", "mdx"],
  webpack: (config, options) => {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.js/,
      loader: 'import-glob',
    })
    return config
  },
})
