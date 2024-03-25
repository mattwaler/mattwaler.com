interface Props {
  heading: string
  subheading: string
}

export default function Intro(props: Props) {
  return (
    <div className="md:text-center">
      <h2 className="h2 text-pretty">{props.heading}</h2>
      <p className='text-pretty text-zinc-300 mt-1 italic sm:text-lg'></p>
    </div>
  )
}
