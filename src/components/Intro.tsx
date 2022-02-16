import Dehang from 'components/Dehang'

interface Props {
  heading: string
  subheading: string
}

export default function Intro(props: Props) {
  return (
    <div className="md:text-center">
      <Dehang
        tag="h2"
        className="text-3xl leading-tight font-extrabold sm:text-4xl"
        text={props.heading}
      />
      <Dehang
        tag="p"
        className="text-gray-700 mt-1 italic sm:text-lg"
        text={props.subheading}
      />
    </div>
  )
}
