 'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'

const GraphicDesigns = [
  {
    id: 17,
    name: 'img',
    image: 'graphicpics/graphics17.png',
    software: ''
  },
  {
    id: 18,
    name: 'img',
    image: 'graphicpics/graphics18.png',
    software: ''
  },
  {
    id: 19,
    name: 'img',
    image: 'graphicpics/graphics19.png',
    software: ''
  },
  {
    id: 20,
    name: 'img',
    image: 'graphicpics/graphics20.png',
    software: ''
  },
  {
    id: 1,
    name: 'img',
    image: 'graphicpics/graphics1.jpg',
    software: ''
  },
  {
    id: 2,
    name: 'img',
    image: 'graphicpics/graphics2.png',
    software: ''
  },
  {
    id: 3,
    name: 'img',
    image: 'graphicpics/graphics3.jpg',
    software: ''
  },
  {
    id: 4,
    name: 'img',
    image: 'graphicpics/graphics4.png',
    software: ''
  },
  {
    id: 5,
    name: 'img',
    image: 'graphicpics/graphics5.png',
    software: ''
  },
  {
    id: 6,
    name: 'img',
    image: 'graphicpics/graphics6.jpg',
    software: ''
  },
  {
    id: 7,
    name: 'img',
    image: 'graphicpics/graphics7.png',
    software: ''
  },
  {
    id: 8,
    name: 'img',
    image: 'graphicpics/graphics8.png',
    software: ''
  },
  {
    id: 9,
    name: 'img',
    image: 'graphicpics/graphics9.png',
    software: ''
  },
  {
    id: 10,
    name: 'img',
    image: 'graphicpics/graphics10.png',
    software: ''
  },
  {
    id: 11,
    name: 'img',
    image: 'graphicpics/graphics11.jpg',
    software: ''
  },
  {
    id: 12,
    name: 'img',
    image: 'graphicpics/graphics12.png',
    software: ''
  },
  {
    id: 13,
    name: 'img',
    image: 'graphicpics/graphics13.jpg',
    software: ''
  },
  {
    id: 14,
    name: 'img',
    image: 'graphicpics/graphics14.png',
    software: ''
  },
  {
    id: 15,
    name: 'img',
    image: 'graphicpics/graphics15.png',
    software: ''
  },
  {
    id: 16,
    name: 'img',
    image: 'graphicpics/graphics16.png',
    software: ''
  }
]

export default function Graphics() {
  const [selectedImage, setSelectedImage] = useState<{
  id: number
  name: string
  image: string
  software: string
} | null>(null)

  const [isClosing, setIsClosing] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setSelectedImage(null)
      setIsClosing(false)
    }, 300)
  }

  return (
    <section className='flex w-full flex-col items-center pb-24'>
      <div className='w-full text-black dark:text-white'>
        <div className='flex flex-col gap-y-15 mt-40 mb-15 w-full border-b-3 border-y-zinc-400 dark:border-zinc-800 pb-15'>
          <div className='animate-fade-in-up sm:text-3xl'>
            <h1 className='text-center text-5xl font-black'>Graphic Designs</h1>
          </div>
          <div className='flex flex-col gap-y-5 animate-fade-in-up animation-delay-100'>
            <h4 className='text-center text-xl'>
              Samples of my 7 year experience in graphic designing
            </h4>
            <h4 className='text-center text-'>I'm also a UI/UX designer!</h4>
          </div>
        </div>
        <div className='w-full pt-20 px-4 md:px-8 lg:px-40 animate-fade-in-up animation-delay-200'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {GraphicDesigns.map(graphicimage => (
              <div
                key={graphicimage.id}
                className='aspect-square rounded-lg border-2 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity hover:scale-100 border-zinc-400 dark:border-zinc-800'
                onClick={() => setSelectedImage(graphicimage)}
              >
                <img 
                  src={graphicimage.image} 
                  alt={graphicimage.name}
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className={`bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 transition-opacity duration-300 ${
            isClosing ? 'opacity-0' : 'opacity-100'
          }`}
          onClick={handleClose}
        >
          <button
            className='absolute top-4 right-4 cursor-pointer text-white transition-colors hover:text-gray-300 z-10'
            onClick={handleClose}
          >
            <X size={32} strokeWidth={2} />
          </button>
          <img
            src={selectedImage.image}
            alt={selectedImage.name}
            className={`max-h-full max-w-full object-contain transition-all duration-300 ${
              isClosing ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100 animate-slideUpFade'
            }`}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}