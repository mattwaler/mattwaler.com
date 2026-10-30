import { defineHastPlugin } from 'satteri'
import probe from 'probe-image-size'

// Markdown content tweaks:
// - external links open in a new tab
// - images lazy load and decode off the main thread
// - remote images get their intrinsic size, so text doesn't shift as they load
// Values already set in the markdown are left alone.

// Each image is measured once per build, however many times it is rendered
const sizes = new Map()
const measure = (src) => {
  if (!sizes.has(src)) sizes.set(src, probe(src).catch(() => null))
  return sizes.get(src)
}

function isExternal(href, siteHost) {
  if (typeof href !== 'string' || !/^(https?:)?\/\//i.test(href)) return false

  try {
    const { hostname } = new URL(href, `https://${siteHost}`)
    return hostname.replace(/^www\./, '') !== siteHost
  } catch {
    return false
  }
}

export default function postTweaks({ site }) {
  const siteHost = new URL(site).hostname.replace(/^www\./, '')

  return defineHastPlugin({
    name: 'post-tweaks',
    element: {
      filter: ['a', 'img'],
      async visit(node, ctx) {
        const props = node.properties ?? {}

        if (node.tagName === 'a') {
          if (!isExternal(props.href, siteHost)) return
          if (!props.target) ctx.setProperty(node, 'target', '_blank')
          const rel = new Set([props.rel ?? []].flat().flatMap(value => String(value).split(/\s+/)).filter(Boolean))
          rel.add('noopener')
          rel.add('noreferrer')
          ctx.setProperty(node, 'rel', [...rel])
          return
        }

        if (!props.loading) ctx.setProperty(node, 'loading', 'lazy')
        if (!props.decoding) ctx.setProperty(node, 'decoding', 'async')

        if (typeof props.src !== 'string' || !/^https?:\/\//.test(props.src)) return
        const size = await measure(props.src)
        if (!size) return
        if (!props.width && !props.height) {
          ctx.setProperty(node, 'width', size.width)
          ctx.setProperty(node, 'height', size.height)
        }
      },
    },
  })
}
