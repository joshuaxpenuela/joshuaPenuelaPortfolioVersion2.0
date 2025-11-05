import React from 'react'
import Software from './software'

const GraphicDesigns = [
  {
    name: 'img',
    image: '',
    software: ''
  },
  {
    name: 'img',
    image: '',
    software: ''
  },
  {
    name: 'img',
    image: '',
    software: ''
  },
  {
    name: 'img',
    image: '',
    software: ''
  },
  {
    name: 'img',
    image: '',
    software: ''
  },
  {
    name: 'img',
    image: '',
    software: ''
  },
  {
    name: 'img',
    image: '',
    software: ''
  },
  {
    name: 'img',
    image: '',
    software: ''
  },
  {
    name: 'img',
    image: '',
    software: ''
  },
  {
    name: 'img',
    image: '',
    software: ''
  },
  {
    name: 'img',
    image: '',
    software: ''
  },
  {
    name: 'img',
    image: '',
    software: ''
  }
]

export default function Graphics() {
  return (
    <section className='flex w-full flex-col items-center pb-24 md:flex-row md:items-center dark:bg-linear-to-t dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800/80'>
      <div className='w-full text-black dark:text-white'>
        <div className='mt-40 mb-20 w-full font-black'>
          <h1 className='text-center text-5xl'>Graphic Designs</h1>
        </div>
        <div className='w-full pt-20'>
          <div className='mx-40 grid grid-cols-4 gap-x-10 gap-y-10'>
            {GraphicDesigns.map(graphicimage => (
              <div className='place-items-center-safe rounded-lg border-2'>
                {graphicimage.image}
                {graphicimage.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
