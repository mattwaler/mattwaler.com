'use client'

import { useState } from "react"
import Image from "next/image"
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"

export default function PhoneCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(0)

  function previous(e) {
    e.preventDefault()
    if (activeIndex !== 0) {
      setActiveIndex(activeIndex - 1)
      return
    }
    setActiveIndex(props.images.length - 1)
    return
  }

  function next(e) {
    e.preventDefault()
    if (activeIndex + 1 === props.images.length) {
      setActiveIndex(0)
      return
    }
    setActiveIndex(activeIndex + 1)
  }

  return (
    <div className="flex items-center gap-4">
      <button onClick={previous} className={props.color}>
        <ArrowLeftCircleIcon className="size-12" />
      </button>
      <div className="relative aspect-[288/600] rounded-3xl lg:rounded-[45px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-8 border-zinc-900 ml-1">
        <div className="absolute -inset-[1px] rounded-2xl border-[3px] border-zinc-700 border-opacity-40 lg:rounded-[37px] pointer-events-none"></div>
        <div className="relative w-full h-full rounded-2xl lg:rounded-[37px] overflow-hidden bg-zinc-900/10 grid grid-cols-1 grid-rows-1">
          {props.images.map((image, index) => (
            <Image
              key={index}
              alt={""}
              width={1206}
              height={2622}
              style={{ zIndex: index }}
              className={`col-start-1 row-start-1 size-full transition-opacity duration-500 ${activeIndex === index ? 'opacity-1' : 'opacity-0'}`}
              loading="lazy"
              placeholder="blur"
              src={image}
            />
          ))}
        </div>
        <div className="hidden sm:block absolute left-[-12px] top-20 w-[6px] h-8 bg-zinc-900 rounded-l-md shadow-md"></div>
        <div className="hidden sm:block absolute left-[-12px] top-36 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
        <div className="hidden sm:block absolute left-[-12px] top-52 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
        <div className="hidden sm:block absolute right-[-12px] top-36 w-[6px] h-16 bg-zinc-900 rounded-r-md shadow-md"></div>
      </div>
      <button onClick={next} className={props.color}>
        <ArrowLeftCircleIcon className="size-12 rotate-180" />
      </button>
    </div>
  )
}
