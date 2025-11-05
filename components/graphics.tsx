import React from 'react'
import Software from './software'

const GraphicDesigns = [
  {
    id: 1,
    name: 'img',
    image: '',
    software: ''
  },
  {
    id: 2,
    name: 'img',
    image: '',
    software: ''
  },
  {
    id: 3,
    name: 'img',
    image: '',
    software: ''
  },
  {
    id: 4,
    name: 'img',
    image: '',
    software: ''
  },
  {
    id: 5,
    name: 'img',
    image: '',
    software: ''
  },
  {
    id: 6,
    name: 'img',
    image: '',
    software: ''
  },
  {
    id: 7,
    name: 'img',
    image: '',
    software: ''
  },
  {
    id: 8,
    name: 'img',
    image: '',
    software: ''
  },
  {
    id: 9,
    name: 'img',
    image: '',
    software: ''
  },
  {
    id: 10,
    name: 'img',
    image: '',
    software: ''
  },
  {
    id: 11,
    name: 'img',
    image: '',
    software: ''
  },
  {
    id: 12,
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
              <div
                key={graphicimage.id}
                className='place-items-center-safe rounded-lg border-2'
              >
                <img src={graphicimage.image} alt={graphicimage.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
