import clsx from 'clsx'
import Dehang from 'components/Dehang'

interface Props {
  heading: string
  paragraph: string
  image?: string
}

export default function Hero(props: Props) {
  return (
    <section className="gradient-purple text-white py-8 lg:py-16">
      <div className="container flex items-center flex-col gap-8 lg:gap-16 lg:flex-row">
        <div className="order-2 lg:order-1">
          <Dehang tag='h1' className="h1" text={props.heading} />
          <Dehang tag='p' className="mt-4 text-base sm:text-lg lg:text-xl text-indigo-100" text={props.paragraph} />
        </div>
        {props.image && (
          <img
            className={clsx(
              'order-1 w-64 h-64 rounded-full border-4 border-white',
              'lg:order-2 lg:w-80 lg:h-80'
            )}
            src={props.image}
            alt="Hero image."
          />
        )}
      </div>
    </section>
  )
}
