'use client'
import React from 'react'
import Image from 'next/image'
import JoshyImage from '@/public/pictures/Joshyyy.png'

export default function Hero() {
  return (
    <section className='flex flex-col-reverse items-start pb-24 md:flex-row md:items-center'>
      <div className='grid w-full grid-cols-2 justify-between gap-4 text-black dark:bg-linear-to-t dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-800/80 dark:text-white'>
        {' '}
        {/* Hero left side */}
        <div className='place-items-center-safe py-80'>
          <div className=''>
            <div>
              <h1 className='text-6xl'>Hi I'm</h1>
              <h1 className='text-8xl font-bold'>Joshua!</h1>
              <h1 className='text-4xl font-bold'>
                Web <a className='font-normal'>and</a> Mobile Developer
              </h1>
              <h1 className='text-4xl font-bold'>
                Tech Enthusiast, Graphic Designer
              </h1>
            </div>

            <div className='my-5'>
              <div className='my-5'>
                <button
                  type='button' onClick={() =>window.open('/misc/Joshy 2025 CV.pdf', '_blank')}
                  className='group relative cursor-pointer overflow-hidden rounded-xl border-4 border-zinc-900 p-3 px-10 text-zinc-900 transition-colors duration-50 hover:text-white dark:border-zinc-900 dark:text-zinc-200'
                >
                  <span className='relative z-10'>Download CV</span>
                  {/* sliding background */}
                  <span className='absolute inset-0 w-0 bg-zinc-900 transition-all duration-200 ease-linear group-hover:w-full dark:bg-zinc-900'></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Hero right side */}
        <div className='place-items-center-safe'>
          <div className='relative mx-auto w-fit'>
            {/* Image */}
            <Image
              src={JoshyImage}
              alt='Joshy'
              className='w-full pt-10'
            />

            <div className='absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent dark:from-zinc-950 dark:via-transparent dark:to-transparent' />
          </div>
        </div>
      </div>
    </section>
  )
}
