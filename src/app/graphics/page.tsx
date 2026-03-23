import React from 'react'
import Graphics from '@/src/components/graphics'
import { ShootingStars } from '@/src/components/ui/shooting-stars'
import { StarsBackground } from '@/src/components/ui/stars-background'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Joshua Penuela | Graphics',
  description: 'Portfolio of Joshua Penuela',
}

export default function GraphicsPage() {
  return (
    <section className='mx-auto w-full'>
      <div className='fixed inset-0 -z-10'>
        <StarsBackground className='bg-scroll' />
        <ShootingStars className='bg-scroll' />
      </div>
      <div className='mx-auto flex flex-col'>
        <div>
          <Graphics />
        </div>
      </div>
    </section>
  )
}
