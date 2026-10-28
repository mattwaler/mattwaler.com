import Alpine from 'alpinejs'
import Typed from 'typed.js'
import { intersect } from '@alpinejs/intersect'
import { anchor } from '@alpinejs/anchor'
import { Masonry } from 'grid-rows-masonry'
import EmblaCarousel from 'embla-carousel'
import filter from './filter.js'

Alpine.plugin(anchor)
Alpine.plugin(intersect)
Alpine.data('filter', filter)

window.Alpine = Alpine
window.Masonry = Masonry
window.EmblaCarousel = EmblaCarousel
window.Typed = Typed

Alpine.start()
