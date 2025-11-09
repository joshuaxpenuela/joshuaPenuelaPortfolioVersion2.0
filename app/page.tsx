import React from 'react'
import Github from '@/components/github'
import Hero from '@/components/hero'
import About from '@/components/about'
import Software from '@/components/software'
import Contact from '@/components/contact'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

export const Home = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* --- Background --- */}
      <div className="fixed inset-0 -z-10">
        <StarsBackground className="bg-scroll" />
        <ShootingStars className="bg-scroll" />
      </div>

      {/* --- Foreground --- */}
      <div className="relative z-10 mx-auto flex flex-col">
        <Hero />
        <About />
        <Software />
        <Github />
        <Contact />
      </div>  
    </section>
  )
}

export default Home
