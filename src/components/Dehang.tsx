import { createElement } from 'react'

interface Props {
  className?: string
  tag?: string
  text: string
}

export default function Dehang(props: Props) {
  const { className, tag, text } = props

  // Reconstruct string with break tag
  const array = text.split(' ')
  const length = array.length
  const withoutLastTwo = array.slice(0, -2)
  const lastTwoString = `${array[length - 2]}&nbsp;${array[length - 1]}`
  const newArray = [...withoutLastTwo, lastTwoString]
  const newString = newArray.join(' ')

  // Bail if last string is too long
  if (lastTwoString.length > 24) {
    return createElement(tag ?? 'span', {
      className,
      dangerouslySetInnerHTML: { __html: text },
    })
  }

  // Return dehung string if short enough
  return createElement(tag ?? 'span', {
    className,
    dangerouslySetInnerHTML: { __html: newString },
  })
}
