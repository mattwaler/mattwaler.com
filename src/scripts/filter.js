const easing = 'cubic-bezier(0.22, 1, 0.36, 1)'

/**
 * Filters the children of `x-ref="grid"` by their space-separated `data-filters` slugs,
 * keeping the active slug in the `param` query string so back/forward step through filters.
 */
export default param => ({
  active: 'all',
  count: 0,
  path: null,

  init() {
    this.sync = (animate = false) => {
      this.path = location.pathname
      this.show(new URLSearchParams(location.search).get(param) ?? 'all', animate)
    }

    // Claim back/forward steps between filters on this page; cancelling tells the
    // Layout's popstate listener to keep Astro's router from refetching the page
    this.onPopState = event => {
      const slug = new URLSearchParams(location.search).get(param) ?? 'all'
      if (location.pathname !== this.path || slug === this.active) return
      event.preventDefault()
      this.sync(true)
    }

    // The router swaps the page in before it updates the URL, so read it again once it has
    this.onAfterSwap = () => this.sync()

    window.addEventListener('filter:popstate', this.onPopState)
    document.addEventListener('astro:after-swap', this.onAfterSwap)
    this.sync()
  },

  destroy() {
    window.removeEventListener('filter:popstate', this.onPopState)
    document.removeEventListener('astro:after-swap', this.onAfterSwap)
  },

  select(event, slug) {
    // Let modified clicks open the filtered view in a new tab
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()

    // Picking the active filter again clears it
    const next = slug === this.active ? 'all' : slug
    const url = new URL(location.href)
    next === 'all' ? url.searchParams.delete(param) : url.searchParams.set(param, next)
    // Reuse the router's state so its history index stays in step
    history.pushState(history.state, '', url)
    this.show(next, true)
  },

  show(slug, animate) {
    const grid = this.$refs.grid
    const items = [...grid.children]
    const matches = el => slug === 'all' || el.dataset.filters.split(' ').includes(slug)

    this.active = slug
    this.count = items.filter(matches).length

    if (!animate || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      grid.getAnimations().forEach(animation => animation.cancel())
      items.forEach(el => {
        el.getAnimations().forEach(animation => animation.cancel())
        el.removeAttribute('style')
        el.hidden = !matches(el)
      })
      return
    }

    // First: where each visible card is right now, mid-animation included
    const gridRect = grid.getBoundingClientRect()
    const before = new Map(items.filter(el => !el.hidden).map(el => [el, {
      rect: el.getBoundingClientRect(),
      opacity: getComputedStyle(el).opacity,
    }]))

    grid.getAnimations().forEach(animation => animation.cancel())
    items.forEach(el => {
      el.getAnimations().forEach(animation => animation.cancel())
      el.removeAttribute('style')
    })

    // Leaving cards are pinned where they were, out of the flow, so the rest can reflow beneath them
    const leaving = items.filter(el => before.has(el) && !matches(el))
    leaving.forEach(el => {
      const { rect } = before.get(el)
      Object.assign(el.style, {
        position: 'absolute',
        top: `${rect.top - gridRect.top}px`,
        left: `${rect.left - gridRect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        pointerEvents: 'none',
      })
    })

    items.forEach(el => el.hidden = !matches(el) && !leaving.includes(el))

    // Last, invert, play. The grid eases to its new height too, so the section around it
    // grows and shrinks with the cards instead of jumping.
    grid.animate(
      [{ height: `${gridRect.height}px` }, { height: `${grid.offsetHeight}px` }],
      { duration: 600, easing },
    )

    leaving.forEach(el => {
      el.animate(
        [{ opacity: before.get(el).opacity, transform: 'none' }, { opacity: 0, transform: 'scale(0.9)' }],
        { duration: 250, easing },
      ).finished.then(() => {
        el.hidden = true
        el.removeAttribute('style')
      }, () => {})
    })

    let entered = 0
    items.filter(matches).forEach(el => {
      const from = before.get(el)
      if (from) {
        const to = el.getBoundingClientRect()
        const dx = from.rect.left - to.left
        const dy = from.rect.top - to.top
        if (!dx && !dy && from.opacity === '1') return
        el.animate(
          [{ opacity: from.opacity, transform: `translate(${dx}px, ${dy}px)` }, { opacity: 1, transform: 'none' }],
          { duration: 600, easing },
        )
      } else {
        el.animate(
          [{ opacity: 0, transform: 'translateY(2rem) scale(0.95)' }, { opacity: 1, transform: 'none' }],
          { duration: 600, easing, delay: 150 + entered++ * 60, fill: 'backwards' },
        )
      }
    })
  },
})
