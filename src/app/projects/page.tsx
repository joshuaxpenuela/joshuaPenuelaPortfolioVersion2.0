import { getProjects } from '@/src/lib/projects'
import Projects from '@/src/components/projects'
import { Metadata } from 'next'
import { ShootingStars } from '@/src/components/ui/shooting-stars'
import { StarsBackground } from '@/src/components/ui/stars-background'

export const metadata: Metadata = {
  title: 'Joshua Penuela | Projects',
  description: 'Portfolio of Joshua Penuela',
}

import React from 'react'

export const ProjectsPage = () => {
  return (
    <section className='relative h-full w-full overflow-hidden'>
      <div className='fixed inset-0 -z-10'>
        <StarsBackground className='bg-scroll' />
        <ShootingStars className='bg-scroll' />
      </div>

      {/* --- Foreground --- */}
      <div className='relative z-10 mx-auto flex flex-col'>
        <Projects />
      </div>
    </section>
  )
}

export default ProjectsPage
