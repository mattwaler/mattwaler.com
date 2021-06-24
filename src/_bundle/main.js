import Alpine from 'alpinejs'
import 'lazysizes'

window.Alpine = Alpine

Alpine.store('nav', {
  isOpen: false,
  close() { return this.isOpen = false },
  open() { return this.isOpen = true },
  toggle() { return this.isOpen = !this.isOpen }
})

Alpine.start()


// Show alert success
if (window.location.search.includes('submit')) {
  setTimeout(() => {
    alert('Thanks for reaching out! I will be in touch shortly.')
  }, 1000);
}
