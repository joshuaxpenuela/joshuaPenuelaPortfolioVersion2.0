import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'

import React from 'react'

export const ProjectsPage = () => {
  return (
    <section className='mx-auto w-full'>
      <div className='mx-auto flex flex-col'>
        <div>
          <Projects />
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage
