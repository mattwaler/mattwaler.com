import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

interface Props {
  heading: string
  paragraph: string
  image?: StaticImageData
}

export default function Hero(props: Props) {
  return (
    <section className="text-white section-spacing mt-6 sm:mt-12 lg:mt-24 relative">
      <div className="container flex items-center flex-col gap-12 lg:gap-16 lg:flex-row">
        <div className="w-full order-2 lg:order-1">
          <h1 className="h1 text-balance text-gradient">
            {props.heading}
          </h1>
          <p
            className={clsx(
              'mt-4 text-pretty lg:text-balance text-base sm:text-lg lg:text-xl text-zinc-300',
              !props.image && 'lg:max-w-2xl'
            )}
          >
            {props.paragraph}
          </p>
        </div>
        {props.image && (
          <div className="relative flex-none order-1 lg:order-2 size-64 lg:size-80 xl:size-96">
            <Image
              style={{ clipPath: "url('#blob')" }}
              src={props.image}
              alt=""
              priority
              width={384}
              height={384}
              className="z-10 relative grayscale"
            />
            <div
              className="z-0 absolute inset-0 gradient size-full scale-110 rotate-[7deg]"
              style={{ clipPath: "url('#blob')" }}
            />
          </div>
        )}
      </div>
    </section>
  )
}
