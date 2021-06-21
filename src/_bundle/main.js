import Alpine from 'alpinejs'
import 'htmx.org'
import 'lazysizes'
import './main.pcss'
import { toggle } from 'slide-element'

window.Alpine = Alpine
window.slideToggle = toggle

// Start Alpine when the page is ready.
window.addEventListener('DOMContentLoaded', (event) => {
  Alpine.start()
});

// Restart Alpine when the DOM is altered by HTMX.
document.body.addEventListener('htmx:afterSwap', () => {
  Alpine.start()
})

// Start Alpine when the page is ready.
window.addEventListener('alpine:initializing', (event) => {
  Alpine.store('nav', {
    isOpen: false,
    close() { return this.isOpen = false },
    open() { return this.isOpen = true },
    toggle() { return this.isOpen = !this.isOpen }
  })
});
