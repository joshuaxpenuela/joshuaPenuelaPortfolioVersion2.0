import React from 'react'
import Image from 'next/image'

export default function Projects() {
  const languageColors: Record<string, string> = {
    'Laravel 12': 'bg-red-500/20 text-red-700 dark:text-red-300',
    Blade: 'bg-red-500/20 text-red-700 dark:text-red-300',
    MySQL: 'bg-orange-500/20 text-orange-700 dark:text-orange-300',
    'Tailwind CSS': 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300',
    TypeScript: 'bg-blue-500/20 text-blue-700 dark:text-blue-300',
    Kotlin: 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300',
    React: 'bg-blue-500/20 text-blue-700 dark:text-blue-300',
    PHP: 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300',
    JavaScript: 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300',
    Java: 'bg-orange-500/20 text-orange-700 dark:text-orange-300',
    HTML: 'bg-orange-500/50 text-orange-700 dark:text-orange-300',
    CSS: 'bg-blue-600/20 text-blue-600',
    Bootstrap: 'bg-blue-600/20 text-blue-600',
    'Node.js': 'bg-green-500/50 text-green-700 dark:text-green-300'
  }

  const webProjects = [
    {
      id: 1,
      image: '',
      name: 'TAIOS(TUPAD All-in-One System)',
      language: ['Laravel 12', 'Blade', 'Node.js', 'MySQL', 'Tailwind CSS'],
      description:
        'A system that centralized and digitized the TUPAD database and improving the previous process speed by 90% for DOLE - Cavite Provincial Office.'
    },
    {
      id: 2,
      image: '',
      name: 'kITa',
      language: ['Java', 'Kotlin', 'PHP', 'MySQL', 'HTML', 'Bootstrap', 'JavaScript'],
      description:
        'A Web and Android Application Lost and Found System platform for the CvSU-Main community.'
    },
    {
      id: 3,
      image: '',
      name: 'CvSU Merch Store',
      language: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      description:
        'Online platform for Kabsuhenyos to buy their most wanted merch of the university conveniently.'
    },
    {
      id: 4,
      image: '',
      name: 'Rizal Museum',
      language: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      description:
        'A web platform about Jose Rizals life and works to promote Rizal awareness among Filipinos.'
    },
    {
      id: 5,
      image: '',
      name: 'Personal Website',
      language: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      description:
        'My personal portfolio website to showcase my skills, projects, and experiences.'
    }
  ]

  return (
    <section className='flex w-full flex-col items-center pb-24'>
      <div className='w-full text-black dark:text-white'>
        <div className='flex flex-col gap-y-15 mt-40 mb-15 w-full border-b-3 border-y-zinc-400 dark:border-zinc-800 pb-15'>
          <div className='animate-fade-in-up sm:text-3xl'>
            <h1 className='text-center text-5xl font-black'>
              Software Projects
            </h1>
          </div>
          <div className='flex flex-col gap-y-5 animate-fade-in-up animation-delay-100'>
            <h4 className='text-center text-xl'>
              Some of my projects since I officially started my IT journey last
              2021
            </h4>
          </div>
        </div>

        {/* Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className='w-full pt-20 px-4 md:px-8 lg:px-40 animate-fade-in-up animation-delay-200'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10'>
            {webProjects.map(project => (
              <div
                key={project.id}
                className='rounded-md border-2 border-gray-800/50 dark:border-gray-400/50 p-5 dark:bg-zinc-950/80 backdrop-blur-sm dark:hover:bg-zinc-900 hover:bg-gray-300/50 cursor-pointer transition-all'
              >
                <h1 className='text-2xl md:text-2xl font-bold'>{project.name}</h1>

                {/* Language Badges */}
                <div className='my-3 flex flex-wrap gap-2'>
                  {project.language.map((lang, index) => (
                    <span
                      key={index}
                      className={`rounded-sm px-2 py-1 text-xs ${languageColors[lang] || 'bg-gray-500/20'}`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <p className='text-sm md:text-base'>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}