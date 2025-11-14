import React from 'react'
import Image from 'next/image'

export default function Projects() {
  const webProjects = [
    {
      id: 1,
      image: '',
      name: 'TAIOS',
      language: ['Laravel', 'MySQL', 'Tailwind CSS'],
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
    },
    {
      id: 2,
      image: '',
      name: 'kITa',
      language: '',
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
    },
    {
      id: 3,
      image: '',
      name: 'CvSU Merch Store',
      language: '',
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
    },
    {
      id: 4,
      image: '',
      name: 'Rizal Museum',
      language: '',
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
    }, 
  ]
  return (
    <section className='flex flex-col items-center pb-24 md:flex-row md:items-center'>
      <div className='grid w-full gap-y-10 text-black dark:text-white'>
        <div className='mt-40 mb-15 flex w-full flex-col gap-y-15 border-b-3 border-y-zinc-400 pb-15 dark:border-zinc-800'>
          <div className='animate-fade-in-up sm:text-3xl'>
            <h1 className='text-center text-5xl font-black'>
              Software Projects
            </h1>
          </div>
          <div className='animate-fade-in-up animation-delay-100 flex flex-col gap-y-5'>
            <h4 className='text-center text-xl'>
              Some of my projects since I officially started my IT journey last 2021
            </h4>
          </div>
        </div>
        <div className='mx-30 grid grid-cols-3 gap-10'>
          {webProjects.map((projects) => (
            <div key={projects.id} className='rounded-md border-2 p-5 backdrop-blur-xs'>
              <div className=''>
                <h1 className='text-3xl font-bold'>{projects.name}</h1>
                {/* <h3 className='text-sm rounded-sm p-1'>{projects.language}</h3> */}
                <p className='text-sm'>{projects.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
