import Alpine from 'alpinejs'
import Typed from 'typed.js'
import { intersect } from '@alpinejs/intersect'
import { anchor } from '@alpinejs/anchor'
import { Masonry } from 'grid-rows-masonry'

Alpine.plugin(anchor)
Alpine.plugin(intersect)

window.Alpine = Alpine
window.Masonry = Masonry
window.Typed = Typed

Alpine.start()
