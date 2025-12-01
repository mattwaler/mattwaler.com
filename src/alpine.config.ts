import type { Alpine } from 'alpinejs'
import Typed from 'typed.js'

export default (Alpine: Alpine) => {
  Alpine.store('isNavOpen', false)
}

// Add Typing Animation
const typedDivs = document.querySelectorAll('[data-typed]')
typedDivs.forEach(div => {
  const id = div.getAttribute('data-typed')
  if (!sessionStorage.getItem(id)) {
    // Create New Element
    const typedDiv = document.createElement('div')
    // Copy all attributes over
    const attr = div.attributes
    for (let i = 0; i < attr.length; i++) {
      const attribute = attr[i];
      typedDiv.setAttribute(attribute.name, attribute.value);
    }
    // Remove data attribute hiding new div
    typedDiv.removeAttribute('data-typed')
    // Insert New Div & Type!
    div.parentNode.insertBefore(typedDiv, div.nextSibling)
    new Typed(typedDiv, {
      strings: [div.innerHTML],
      showCursor: false,
      contentType: 'html',
      backSpeed: 0,
      backDelay: 0,
      loop: false,
    })
    sessionStorage.setItem(id, 'DONE')
  } else {
    div.removeAttribute('data-typed')
  }
})
