/**
 * Sends the contact form to Static Forms in the background and swaps in the thank-you
 * message, so the visitor never leaves the page. `?contact=true` covers the no-JavaScript
 * path, where Static Forms redirects back after a plain form post.
 */
export default () => ({
  status: 'idle',
  error: '',

  init() {
    if (new URLSearchParams(location.search).get('contact') === 'true') this.status = 'sent'
  },

  async submit() {
    const form = this.$root.querySelector('form')
    const data = new FormData(form)
    // The redirect is only for plain posts; a fetch following it would land on our own HTML
    data.delete('redirectTo')

    this.status = 'sending'
    this.error = ''

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || !result.success) throw new Error(result.error)
      this.status = 'sent'
      form.reset()
    } catch (error) {
      this.status = 'error'
      this.error = `Sorry, your message didn't send${error.message ? ` (${error.message})` : ''}. Please try again in a moment.`
    }
  },
})
