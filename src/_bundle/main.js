// CSS
import './main.pcss'

// JS
import 'alpinejs'
import 'lazysizes'
import Turbolinks from 'turbolinks'
import { toggle } from 'slide-element'

Turbolinks.start()
window.slideToggle = toggle
