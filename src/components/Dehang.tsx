import { createElement } from 'react'

interface Props {
  className?: string
  tag?: string
  text: string
}

export default function Dehang(props: Props) {
  const { className, tag, text } = props

  const array = text.split(' ')
  const withoutLastTwo = array.slice(0, -2)
  const lastTwoString = `${array[array.length - 2]}&nbsp;${
    array[array.length - 1]
  }`
  const newArray = [...withoutLastTwo, lastTwoString]
  const newString = newArray.join(' ')

  return createElement(tag ?? 'span', { className, dangerouslySetInnerHTML: { __html: newString } })
}
