import Alpine from 'alpinejs'
import Typed from 'typed.js'
import { intersect } from '@alpinejs/intersect'
import { anchor } from '@alpinejs/anchor'
import { Masonry } from 'grid-rows-masonry'
import EmblaCarousel from 'embla-carousel'
import { createBleedblendAuto } from 'bleedblend/utils'
import filter from './filter.js'

// Tint Safari's chrome to match the page edges, re-checking after each ClientRouter swap
createBleedblendAuto({
  onPageLoad: update => document.addEventListener('astro:page-load', update),
})

Alpine.plugin(anchor)
Alpine.plugin(intersect)
Alpine.data('filter', filter)

window.Alpine = Alpine
window.Masonry = Masonry
window.EmblaCarousel = EmblaCarousel
window.Typed = Typed

Alpine.start()
