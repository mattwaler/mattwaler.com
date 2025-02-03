'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import Phone from 'components/Phone'

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
      <button
        aria-label="View previous image"
        onClick={previous}
        className={props.color}
      >
        <ArrowLeftCircleIcon className="size-12" />
      </button>
      <Phone>
        <div className='grid grid-cols-1 grid-rows-1'>
          {props.images.map((image, index) => (
            <Image
              key={index}
              alt={''}
              width={1206}
              height={2622}
              style={{ zIndex: index }}
              className={`col-start-1 row-start-1 size-full transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
              placeholder="blur"
              src={image}
            />
          ))}
        </div>
      </Phone>
      <button
        aria-label="View next image"
        onClick={next}
        className={props.color}
      >
        <ArrowLeftCircleIcon className="size-12 rotate-180" />
      </button>
    </div>
  )
}
