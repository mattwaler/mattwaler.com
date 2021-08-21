import { Design, Development, Instruction } from "components/Icons"

const skills = [
  {
    name: "Consulting",
    description: "I can inspect, diagnose, and plan improvements for your current web project.",
    icon: <Design />,
    color: "text-blue-500",
    link: "/work",
    linkText: "View Work",
  },
  {
    name: "Development",
    description: "I can build single page applications, fullstack CMS projects, and everything in between.",
    icon: <Development />,
    color: "text-indigo-500",
    link: "/work",
    linkText: "View Work",
  },
  {
    name: "Instruction",
    icon: <Instruction />,
    description: "I am comfortable teaching modern tools like React, Vue, Svelte, and much more.",
    color: "text-green-500",
    link: "/instruction",
    linkText: "View Instruction",
  },
]

export default skills
