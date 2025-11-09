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
    <section className='mt-12 flex w-full flex-col gap-y-6 sm:mt-16 sm:gap-y-8 md:mt-20 md:gap-y-10'>
      {/* Header */}
      <div className='animate-fade-in-down my-6 flex w-full justify-center sm:my-8 md:my-10'>
        <h1 className='text-3xl font-bold sm:text-4xl'>About Me</h1>
      </div>

      {/* Main Content Grid */}
      <div className='max-w-8xl mx-auto mb-6 grid grid-cols-1 gap-8 px-4 sm:mb-8 md:mb-10 md:gap-5 lg:grid-cols-2 lg:gap-45 lg:px-8'>
        {/* Left Side - Image Slider */}
        <div className='animate-fade-in-left flex w-full items-center justify-center'>
          {/* Slider Container */}
          <div className='relative h-[400px] w-full max-w-[650px] overflow-hidden sm:h-[480px] md:h-[540px]'>
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
                  <div className='relative h-full w-full rounded-xl border-2 border-zinc-400/50 bg-zinc-950'>
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
              className='absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-xl text-white transition-all hover:scale-110 hover:bg-black/70 sm:p-3 sm:text-2xl'
              aria-label='Previous slide'
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className='absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-xl text-white transition-all hover:scale-110 hover:bg-black/70 sm:p-3 sm:text-2xl'
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
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 sm:h-3 sm:w-3 ${
                    current === idx
                      ? 'scale-110 bg-white'
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side*/}
        <div className='animate-fade-in-right flex items-center justify-center px-4'>
          <div className='max-w-xl'>
            <h1 className='text-2xl font-bold sm:text-3xl lg:text-4xl'>
              JOSHUA FAMADICO PENUELA
            </h1>
            <div className='mt-2 flex items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5 sm:h-6 sm:w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 10.5c0 7.5-7.5 12-7.5 12s-7.5-4.5-7.5-12a7.5 7.5 0 1115 0z'
                />
              </svg>

              <a
                href='https://www.google.com/maps/place/Dasmari%C3%B1as,+Cavite/@14.3063958,120.925758,16887m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3397d5b87c111e25:0xab8cb698f840321f!8m2!3d14.3338498!4d120.9542344!16zL20vMDJyMzVm?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D'
                target='_none'
                className='text-base hover:underline sm:text-lg md:text-xl'
              >
                <i>Dasmariñas City, Cavite, Philippines</i>
              </a>
            </div>
            <p className='mt-5 text-justify text-sm leading-relaxed sm:text-base dark:text-zinc-300'>
              A <i>Magna Cum Laude</i> graduate of the BS Information Technology
              program at{' '}
              <a
                href='https://cvsu.edu.ph/'
                className='font-bold text-white hover:underline'
                target='_blank'
              >
                {' '}
                Cavite State University - Main Campus
              </a>
              , with a passion for Software Development, System Analysis, and
              the IT field. Obsessed with technology since 7 years old (2008),
              learned HTML in sixth grade (2013), consistent honor student in
              High School (2014-2020), and continued to learn more languages and
              frameworks in college years (2021-2025). With experience in web
              development in a government internship, and mobile development in
              the Capstone Project.
            </p>

            <p className='mt-5 dark:text-zinc-300'>Aside from Tech, I'm also interested in Science, Film, Journalism, Politics, History, and Music!</p>
          </div>
        </div>
      </div>
    </section>
  )
}