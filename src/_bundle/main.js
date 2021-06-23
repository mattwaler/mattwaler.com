import Alpine from 'alpinejs'
import Turbolinks from  'turbolinks'
import 'lazysizes'

window.Alpine = Alpine

window.addEventListener('DOMContentLoaded', () => {
  Alpine.start()
  Turbolinks.start()
})

// Create Global Alpine Store for Nav.
window.addEventListener('alpine:init', () => {
  Alpine.store('nav', {
    isOpen: false,
    close() { return this.isOpen = false },
    open() { return this.isOpen = true },
    toggle() { return this.isOpen = !this.isOpen }
  })
});
