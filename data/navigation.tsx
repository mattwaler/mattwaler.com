import { Dev, GitHub, LinkedIn } from "components/Icons"

const links = {
  internal: [
    { name: "Contact", link: "/contact" },
    { name: "Instruction", link: "/instruction" },
    { name: "Work", link: "/work" },
  ],
  external: [
    { name: "GitHub", icon: <GitHub />, link: "https://github.com/mattwaler" },
    { name: "LinkedIn", icon: <LinkedIn />, link: "https://www.linkedin.com/in/mattwaler/" },
    { name: "Dev", icon: <Dev />, link: "https://dev.to/mattwaler" },
  ],
}

export default links
