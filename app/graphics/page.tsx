import React from 'react'
import Graphics from '@/components/graphics'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

export default function GraphicsPage() {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* --- Background Layers --- */}
      <div className="fixed inset-0 -z-10">
        <StarsBackground className="bg-scroll" />
        <ShootingStars className="bg-scroll" />
      </div>

      {/* --- Foreground Content --- */}
      <div className="relative z-10 mx-auto flex flex-col">
        <Graphics />
      </div>
    </section>
  )
}
