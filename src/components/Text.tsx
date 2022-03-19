import { createElement } from 'react'

interface Props {
  className?: string
  tag?: string
  content: string
}

export default function Text(props: Props) {
  const { className, tag, content } = props

  // Reconstruct string with break tag
  const array = content.split(' ')
  const length = array.length
  const withoutLastTwo = array.slice(0, -2)
  const lastTwoString = `${array[length - 2]}&nbsp;${array[length - 1]}`
  const newArray = [...withoutLastTwo, lastTwoString]
  const newString = newArray.join(' ')

  return createElement(tag ?? 'span', {
    className,
    dangerouslySetInnerHTML: {
      __html: lastTwoString.length > 24 ? content : newString,
    },
  })
}
