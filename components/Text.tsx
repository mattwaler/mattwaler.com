import { createElement } from 'react'

interface Props {
  className?: string
  tag?: string
  content: string
}

export default function Text(props: Props) {
  const { className, tag, content } = props

  // Deconstruct/Reconstruct String
  const a = content.split(' ')
  if (a.length > 1) {
    a.splice(a.length - 2, 2, `${a[a.length - 2]}&nbsp;${a[a.length - 1]}`)
  }

  return createElement(tag ?? 'span', {
    className,
    dangerouslySetInnerHTML: {
      __html: a[a.length - 1].length > 24 ? content : a.join(' '),
    },
  })
}
