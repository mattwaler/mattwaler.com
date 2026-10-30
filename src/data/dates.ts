// Frontmatter dates are calendar days parsed as midnight UTC, so both helpers read them in UTC
// to keep them on the day that was written rather than the evening before in US time.

/** `2026-10-18`, for `datetime` attributes and structured data. */
export const isoDate = (date: Date) => date.toISOString().slice(0, 10)

/** `October 18, 2026`, for display. */
export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
