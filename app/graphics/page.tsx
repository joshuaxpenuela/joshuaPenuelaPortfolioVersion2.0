import React from 'react'
import Graphics from '@/components/graphics'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'


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
