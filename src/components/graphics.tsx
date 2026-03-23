'use client'

import React, { useState, useCallback } from 'react'
import { X } from 'lucide-react'

const ids = [ 17, 18, 19, 20, ...Array.from({ length: 16 }, (_, i) => i + 1), 21, 22, 23, 24
]

const jpgIds = new Set([1, 3, 6, 11, 13, 21, 22, 23])

const GraphicDesigns = ids.map(id => ({
  id,
  name: 'img',
  image: `/graphicpics/graphics${id}.${jpgIds.has(id) ? 'jpg' : 'png'}`,
  software: ''
}))

export default function Graphics() {
  const [selectedImage, setSelectedImage] = useState<{
    id: number
    name: string
    image: string
    software: string
  } | null>(null)

  const [isClosing, setIsClosing] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [modalImageLoaded, setModalImageLoaded] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setSelectedImage(null)
      setIsClosing(false)
      setModalImageLoaded(false)
    }, 300)
  }

  const handleImageLoad = useCallback((id: number) => {
    setLoadedImages(prev => {
      if (prev.has(id)) return prev // no update if already loaded
      return new Set(prev).add(id)
    })
  }, [])

  return (
    <section className='flex w-full flex-col items-center pb-24'>
      <div className='w-full text-black dark:text-white'>
        <div className='mt-40 mb-15 flex w-full flex-col gap-y-15 border-b-3 border-y-zinc-400 pb-15 dark:border-zinc-800'>
          <div className='animate-fade-in-up sm:text-3xl'>
            <h1 className='text-center text-5xl font-black'>Graphic Designs</h1>
          </div>
          <div className='animate-fade-in-up animation-delay-100 flex flex-col gap-y-5'>
            <h4 className='text-center text-xl'>
              Samples of my 7 year experience in graphic designing
            </h4>
            <h4 className='text- text-center'>I'm also a UI/UX designer!</h4>
          </div>
        </div>
        <div className='animate-fade-in-up animation-delay-200 w-full px-4 pt-20 md:px-8 lg:px-40'>
          {/* Bento Grid */}
          <div className='columns-2 gap-6 space-y-6 md:columns-3 lg:columns-4'>
            {GraphicDesigns.map(graphicimage => (
              <div
                key={graphicimage.id}
                className='cursor-pointer break-inside-avoid overflow-hidden rounded-xl border border-zinc-300 transition hover:bg-zinc-950/50 dark:border-zinc-800'
                onClick={() => setSelectedImage(graphicimage)}
              >
                <div className='relative'>
                  {!loadedImages.has(graphicimage.id) && (
                    <div className='absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-900'>
                      <div className='h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-600 dark:border-zinc-700 dark:border-t-zinc-400'></div>
                    </div>
                  )}

                  <div className='absolute inset-0 z-10 bg-black/40 opacity-0 transition duration-400 hover:opacity-100' />

                  <img
                    src={graphicimage.image}
                    alt={graphicimage.name}
                    className='h-auto w-full object-cover'
                    onLoad={() => handleImageLoad(graphicimage.id)}
                    ref={el => {
                      if (el?.complete) handleImageLoad(graphicimage.id)
                    }}
                  />
                </div>
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
            className='absolute top-4 right-4 z-10 cursor-pointer text-white transition-colors hover:text-gray-300'
            onClick={handleClose}
          >
            <X size={32} strokeWidth={2} />
          </button>
          {!modalImageLoaded && (
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='h-12 w-12 animate-spin rounded-full border-4 border-zinc-600 border-t-white'></div>
            </div>
          )}
          <img
            src={selectedImage.image}
            alt={selectedImage.name}
            className={`max-h-full max-w-full object-contain transition-all duration-300 ${
              isClosing
                ? 'translate-y-8 opacity-0'
                : 'animate-slideUpFade translate-y-0 opacity-100'
            }`}
            onClick={e => e.stopPropagation()}
            onLoad={() => setModalImageLoaded(true)}
          />
        </div>
      )}
    </section>
  )
}
