// Post dates are written as Eastern wall-clock time and read back in Eastern time, so a post stays on
// the day it was published there no matter which offset (EST or EDT) applied that day.
const timeZone = 'America/New_York'

/**
 * Turns a front matter `date` into the moment it names in Eastern time, working out EST or EDT itself.
 * `2026-11-04 14:15` is 2:15 PM that day, and a bare `2026-11-04` is noon. A value that already
 * carries an offset or `Z` is passed through for the schema to parse as written.
 */
export const easternDate = (value: unknown) => {
  // js-yaml turns a bare day or a time with seconds into a Date read as UTC, so its UTC fields are what was written
  if (value instanceof Date) {
    const iso = value.toISOString()
    value = iso.endsWith('T00:00:00.000Z') ? iso.slice(0, 10) : iso.slice(0, 19)
  }
  if (typeof value !== 'string') return value

  const match = value.trim().match(/^(\d{4}-\d{2}-\d{2})(?:[T ](\d{1,2}):(\d{2})(?::(\d{2}))?)?$/)
  if (!match) return value

  const [, day, hour = '12', minute = '00', second = '00'] = match
  // Midday UTC is early morning Eastern, after any 2 AM clock change, so this is the offset for the rest of the day
  const offset = new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'longOffset' })
    .formatToParts(new Date(`${day}T12:00:00Z`))
    .find(part => part.type === 'timeZoneName')!
    .value.replace('GMT', '')
  return new Date(`${day}T${hour.padStart(2, '0')}:${minute}:${second}${offset}`)
}

/** `2026-10-18`, for `datetime` attributes and structured data. */
export const isoDate = (date: Date) => date.toLocaleDateString('en-CA', { timeZone })

/** `October 18, 2026`, for display. */
export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone })
