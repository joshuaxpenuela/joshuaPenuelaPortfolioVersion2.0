'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function About() {
  // simple slider data
  const slides = [
    { src: '/pictures/ImgJoshy2.jpg', alt: 'Joshy Img 1' },
    { src: '/pictures/ImgJoshy1.jpg', alt: 'Joshy Img 2' },
    { src: '/pictures/ImgJoshy3.jpg', alt: 'Joshy Img 3' },
    { src: '/pictures/ImgJoshy4.jpg', alt: 'Joshy Img 4'}
  ]

  const [current, setCurrent] = useState(0)
  const length = slides.length

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)

  return (
    <section className='m-full flex flex-col gap-y-10 mt-20'>
      <div className='w-full place-items-center-safe my-10'>
        <h1 className='text-4xl font-bold'>About Me</h1>
      </div>

      <div className='grid grid-cols-2 mb-10'>
        {/* left side */}
        <div className='flex w-full justify-center overflow-hidden rounded-lg'>
          {/* slider wrapper */}
          <div
            className='flex transition-transform duration-300 ease-in-out ml-20'
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className='relative flex min-w-full items-center justify-center'
              >
                {/* wrapper for image, buttons, and dots - fixed size to maintain div size */}
                <div className='relative w-[550] h-[440] rounded-xl border-2 border-zinc-400/50'>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className='rounded-xl backdrop-blur-md bg-trasnparent object-contain'
                  />

                  {/* buttons positioned at the edges of the image */}
                  <button
                    onClick={prevSlide}
                    className='absolute top-1/2 left-0 -translate-y-1/2 rounded bg-black/50 p-2 text-white hover:bg-black/70'
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextSlide}
                    className='absolute top-1/2 right-0 -translate-y-1/2 rounded bg-black/50 p-2 text-white hover:bg-black/70'
                  >
                    ›
                  </button>

                  {/* dots positioned inside the image at the bottom */}
                  <div className='absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2'>
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-3 w-3 rounded-full ${
                          current === idx ? 'bg-white' : 'bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right side */}
        <div className='mx-35 flex flex-row'>
          <div className='place-content-center-safe'>
            <h1 className='mb-5 text-4xl font-bold'>JOSHUA FAMADICO PENUELA</h1>
            <p className='text-base/8 break-normal whitespace-normal'>
              A <i>Magna Cum Laude</i> graduate of BS Information Technology
              program at Cavite State University - Main Campus, with a passion
              in Software Development, System Analysis, and IT field. Obsessed
              with technology since 7 years old (2008), learned HTML in sixth
              grade (2013), consistent honor student in High School, and
              continued to learn more languages and frameworks in my college
              years (2021-2025). With experience of web-development in
              government internship, and mobile-development in Capstone Project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
