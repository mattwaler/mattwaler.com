import { GitHub, LinkedIn, Instagram } from 'components/Icons'

export default {
  internal: [
    { name: 'Contact', link: '/contact' },
    { name: 'Instruction', link: '/instruction' },
    { name: 'Work', link: '/work' },
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
