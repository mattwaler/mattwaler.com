import clsx from 'clsx'
import Text from 'components/Text'

interface Props {
  heading: string
  paragraph: string
  image?: string
}

export default function Hero(props: Props) {
  return (
    <section className="gradient-purple text-white py-8 lg:py-16">
      <div className="container flex items-center flex-col gap-8 lg:gap-16 lg:flex-row">
        <div className="w-full order-2 lg:order-1">
          <Text tag="h1" className="h1" content={props.heading} />
          <Text
            tag="p"
            className={clsx("mt-4 text-base sm:text-lg lg:text-xl text-indigo-100", !props.image && 'lg:max-w-2xl')}
            content={props.paragraph}
          />
        </div>
        {props.image && (
          <img
            width={320}
            height={320}
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
