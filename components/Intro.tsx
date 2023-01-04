import Balancer from 'react-wrap-balancer'

interface Props {
  heading: string
  subheading: string
}

export default function Intro(props: Props) {
  return (
    <div className="md:text-center">
      <h2 className="h2 leading-tight font-extrabold">
        <Balancer>
          {props.heading}
        </Balancer>
      </h2>
      <p className="text-gray-300 mt-1 italic sm:text-lg">
        <Balancer>
          {props.subheading}
        </Balancer>
      </p>
    </div>
  )
}
