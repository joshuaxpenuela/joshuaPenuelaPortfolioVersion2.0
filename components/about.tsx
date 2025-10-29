'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function About() {
  // simple slider data
  const slides = [
    { src: '/pictures/ImgJoshy2.jpg', alt: 'Joshy Img 1' },
    { src: '/pictures/ImgJoshy1.jpg', alt: 'Joshy Img 2' },
    { src: '/pictures/ImgJoshy3.jpg', alt: 'Joshy Img 3' },
    { src: '/pictures/ImgJoshy4.jpg', alt: 'Joshy Img 4' }
  ]

  const [current, setCurrent] = useState(0)
  const length = slides.length

  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1)
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)

  return (
    <section className='mt-20 flex w-full flex-col gap-y-10'>
      {/* Header */}
      <div className='my-10 flex w-full justify-center'>
        <h1 className='text-4xl font-bold'>About Me</h1>
      </div>

      {/* Main Content Grid */}
      <div className='max-w-8xl mx-auto mb-10 grid grid-cols-1 gap-50 px-4 lg:grid-cols-2 lg:px-8'>
        {/* Left Side - Image Slider */}
        <div className='flex w-full items-center justify-center'>
          {/* Slider Container */}
          <div className='relative h-[540px] w-full max-w-[650px] overflow-hidden'>
            {/* Slider Wrapper */}
            <div
              className='flex h-full transition-transform duration-300 ease-in-out'
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className='relative flex h-full w-full shrink-0 items-center justify-center'
                >
                  {/* Image Container */}
                  <div className='relative h-full w-full rounded-xl border-2 border-zinc-400/50 bg-transparent'>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className='rounded-xl object-contain'
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className='absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded bg-black/50 p-2 text-white transition-colors hover:bg-black/70'
              aria-label='Previous slide'
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className='absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded bg-black/50 p-2 text-white transition-colors hover:bg-black/70'
              aria-label='Next slide'
            >
              ›
            </button>

            {/* Dots Indicator */}
            <div className='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2'>
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    current === idx ? 'bg-white' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side*/}
        <div className='flex items-center justify-center px-4'>
          <div className='max-w-xl'>
            <h1 className='mb-5 text-3xl font-bold lg:text-4xl'>
              JOSHUA FAMADICO PENUELA
            </h1>
            <p className='text-justify text-base leading-relaxed'>
              A <i>Magna Cum Laude</i> graduate of the BS Information Technology
              program at{' '}
              <a
                href='https://cvsu.edu.ph/'
                className='font-bold'
                target='_blank'
              >
                Cavite State University - Main Campus
              </a>
              , with a passion for Software Development, System Analysis, and
              the IT field. Obsessed with technology since 7 years old (2008),
              learned HTML in sixth grade (2013), consistent honor student in
              High School, and continued to learn more languages and frameworks
              in my college years (2021-2025). With experience in web
              development in a government internship, and mobile development in
              the Capstone Project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
