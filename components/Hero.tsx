import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Balancer from 'react-wrap-balancer'

interface Props {
  heading: string
  paragraph: string
  image?: StaticImageData
}

export default function Hero(props: Props) {
  return (
    <section className="bg-gray-900 border-b text-white py-8 lg:py-32">
      <div className="container flex items-center flex-col gap-8 lg:gap-16 lg:flex-row">
        <div className={clsx("w-full order-2 lg:order-1")}>
          <h1 className="h1">
            <Balancer>{props.heading}</Balancer>
          </h1>
          <p className={clsx("mt-4 text-base sm:text-lg lg:text-xl text-gray-200", !props.image && 'lg:max-w-2xl')}>
            <Balancer>
              {props.paragraph}
            </Balancer>
          </p>
        </div>
        {props.image && (
          <Image
            alt="Hero image."
            className={clsx(
              'gradient p-2',
              'order-1 w-64 h-64 rounded-full',
              'lg:order-2 lg:w-80 lg:h-80'
            )}
            height={320}
            loading="lazy"
            src={props.image}
            width={320}
          />
        )}
      </div>
    </section>
  )
}
