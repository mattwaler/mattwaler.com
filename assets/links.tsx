import { GitHub, LinkedIn, Instagram } from '../components/Icons'

export default {
  internal: [
    { name: 'Apps', link: '/apps' },
    { name: 'Websites', link: '/websites' },
    { name: 'Contact', link: '/contact' },
    { name: 'Instruction', link: '/instruction' },
  ],
  external: [
    { name: 'GitHub', icon: <GitHub />, link: 'https://github.com/mattwaler' },
    {
      name: 'Instagram',
      icon: <Instagram />,
      link: 'https://www.instagram.com/mattwaler',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      link: 'https://www.linkedin.com/in/mattwaler/',
    },
  ],
}
