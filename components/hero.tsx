'use client'
import React from 'react'
import Image from 'next/image'
import JoshyImage from '@/public/pictures/Joshyyy.png'

export default function Hero() {
  return (
    <section className='flex flex-col items-start pt-20 sm:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 md:flex-row md:items-center md:pt-0'>
      <div className='grid w-full grid-cols-1 md:grid-cols-2 justify-between gap-6 md:gap-4 text-black dark:bg-linear-to-t dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-800/80 dark:text-white'>
        
        {/* Hero left side - Text (order-2 on mobile, order-1 on desktop) */}
        <div className='order-2 md:order-1 flex items-center justify-center md:place-items-center-safe py-8 sm:py-12 md:py-40 lg:py-80 px-4 sm:px-6'>
          <div className='text-center md:text-left'>
            <div className='space-y-2'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up'>Hi I'm</h1>
              <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold animate-fade-in-up animation-delay-100'>Joshua!</h1>
              <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 animate-fade-in-up animation-delay-200'>
                Web <a className='font-normal'>and</a> Mobile Developer
              </h1>
              <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold animate-fade-in-up animation-delay-300'>
                Tech Enthusiast, Graphic Designer
              </h1>
            </div>

            <div className='my-5 md:my-5'>
              <div className='my-5 md:my-5 animate-fade-in-up animation-delay-400'>
                <button
                  type='button' onClick={() =>window.open('/misc/2025 Joshua Famadico Penuela Resume.pdf', '_blank')}
                  className='group relative cursor-pointer overflow-hidden rounded-xl border-3 border-zinc-900 p-3 px-8 sm:px-10 text-sm sm:text-base text-zinc-900 transition-colors duration-50 hover:text-white dark:border-zinc-700 dark:text-zinc-200'
                >
                  <span className='relative z-10'>Download CV</span>
                  {/* sliding background */}
                  <span className='absolute inset-0 w-0 bg-zinc-900 transition-all duration-100 ease-linear group-hover:w-full dark:bg-zinc-800'></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero right side - Image (order-1 on mobile, order-2 on desktop) */}
        <div className='order-1 md:order-2 flex items-center justify-center md:place-items-center-safe px-4 sm:px-6 md:px-0'>
          <div className='relative mx-auto w-full max-w-sm sm:max-w-md md:max-w-none md:w-fit animate-fade-in animation-delay-200'>
            {/* Image */}
            <Image
              src={JoshyImage}
              alt='Joshy'
              className='w-full pt-6 sm:pt-8 md:pt-10'
            />

            <div className='absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent dark:from-zinc-950 dark:via-transparent dark:to-transparent' />
          </div>
        </div>
      </div>
    </section>
  )
}