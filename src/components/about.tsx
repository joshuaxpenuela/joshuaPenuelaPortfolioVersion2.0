'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function About() {
  // simple slider data
  const slides = [{}]

  const [current, setCurrent] = useState(0)

  return (
    <section className='mt-12 flex w-full flex-col gap-y-6 font-normal sm:mt-16 sm:gap-y-8 md:mt-20 md:gap-y-10'>
      {/* Header */}
      <div className='animate-fade-in-down my-6 flex w-full justify-center sm:my-8 md:my-10'>
        <h1 className='text-3xl font-bold sm:text-4xl'>About Me</h1>
      </div>

      {/* Main Content Grid */}
      <div className='max-w-8xl mx-auto mb-6 grid grid-cols-1 gap-8 px-4 sm:mb-8 md:mb-10 md:gap-5 lg:grid-cols-2 lg:gap-45 lg:px-8'>
        <div className='w-full max-w-[650px] overflow-hidden rounded-2xl'>
          <Image
            src='/pictures/ImgJoshy5.png'
            alt='Joshy Img 5'
            width={650}
            height={540}
            className='h-auto w-full object-contain'
          />
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

            <p className='mt-5 dark:text-zinc-300'>
              Aside from Tech, I'm also interested in Science, Journalism,
              Politics, Film, History, Arts, and Music!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
