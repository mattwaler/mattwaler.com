import Text from '../components/Text'

interface Props {
  heading: string
  subheading: string
}

export default function Intro(props: Props) {
  return (
    <div className="md:text-center">
      <Text tag="h2" className="h2" content={props.heading} />
      <Text
        tag="p"
        className="text-slate-300 mt-1 italic sm:text-lg"
        content={props.subheading}
      />
    </div>
  )
}
