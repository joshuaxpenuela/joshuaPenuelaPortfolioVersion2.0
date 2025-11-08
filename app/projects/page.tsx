import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

import React from 'react'

export const ProjectsPage = () => {
  return (
    <section className='relative h-full w-full overflow-hidden'>
      <div className='fixed inset-0 -z-10'>
        <StarsBackground className='bg-scroll' />
        <ShootingStars className='bg-scroll' />
      </div>

      {/* --- Foreground Content --- */}
      <div className='relative z-10 mx-auto flex flex-col'>
        <Projects />
      </div>
    </section>
  )
}

export default ProjectsPage
