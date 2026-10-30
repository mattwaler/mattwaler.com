/** DigitalOcean Spaces CDN that hosts the site's images and videos. */
export const CDN_URL = 'https://mattwaler.nyc3.cdn.digitaloceanspaces.com/MW'

export const cdn = (path) => `${CDN_URL}/${path}`
