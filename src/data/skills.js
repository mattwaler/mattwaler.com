import { AcademicCapIcon, TemplateIcon, TerminalIcon } from '@heroicons/react/outline'

export default [
  {
    name: 'Consulting',
    description: 'I can inspect, diagnose, and plan improvements for your current web project.',
    icon: <TemplateIcon />,
    color: 'text-blue-500',
    link: '/work',
    linkText: 'View Work',
  },
  {
    name: 'Development',
    description: 'I can build single page applications, fullstack CMS projects, and everything in between.',
    icon: <TerminalIcon />,
    color: 'text-indigo-500',
    link: '/work',
    linkText: 'View Work',
  },
  {
    name: 'Instruction',
    icon: <AcademicCapIcon />,
    description: 'I am comfortable teaching modern tools like React, Vue, Svelte, and much more.',
    color: 'text-green-500',
    link: '/instruction',
    linkText: 'View Instruction',
  },
]
