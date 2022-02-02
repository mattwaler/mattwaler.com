const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-prism")],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ["js", "mdx"],
})
