import type { Alpine } from 'alpinejs'
import Typed from 'typed.js'

export default (Alpine: Alpine) => {
  Alpine.store('isNavOpen', false)
}

// Add Typing Animation
const typedDivs = document.querySelectorAll('[data-typed]')
typedDivs.forEach(div => {
  const id = div.getAttribute('data-typed')
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")

  if (!reduced.matches && !sessionStorage.getItem(id) || import.meta.env.DEV) {
    // Get div attributes
    const attr = div.attributes

    // Create clickable opaque div
    const clickableDiv = document.createElement('div')
    clickableDiv.innerHTML = div.innerHTML
    for (let i = 0; i < attr.length; i++) {
      const attribute = attr[i];
      clickableDiv.setAttribute(attribute.name, attribute.value);
    }
    clickableDiv.setAttribute('data-clickable', '')
    clickableDiv.removeAttribute('data-typed')
    clickableDiv.classList.add('opacity-0', 'relative', 'z-[1]')

    // Create non-clickable visible div overtop
    const typedDiv = document.createElement('div')
    for (let i = 0; i < attr.length; i++) {
      const attribute = attr[i];
      typedDiv.setAttribute(attribute.name, attribute.value);
    }
    typedDiv.setAttribute('data-typing', '')
    typedDiv.removeAttribute('data-typed')
    typedDiv.setAttribute('role', 'presentation')
    typedDiv.classList.add('absolute!', 'inset-0!', 'size-full!', 'z-[2]!', 'pointer-events-none!')

    // Clean out parent div and insert new divs
    div.innerHTML = ""
    div.appendChild(clickableDiv)
    div.appendChild(typedDiv)
    div.setAttribute('class', 'relative')
    div.removeAttribute('data-typed')

    // Initiate typing effect
    new Typed(typedDiv, {
      strings: [clickableDiv.innerHTML],
      showCursor: false,
      typeSpeed: 1,
      loop: false,
      onComplete() {
        typedDiv.classList.add('hidden!')
        clickableDiv.classList.remove('opacity-0')
      }
    })
    sessionStorage.setItem(id, 'DONE')
  } else {
    div.removeAttribute('data-typed')
  }
})
