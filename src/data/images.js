/** Cloudflare R2 bucket that hosts the site's images and videos. */
export const CDN_URL = 'https://cdn.mattwaler.com'

export const cdn = (path) => `${CDN_URL}/${path}`
