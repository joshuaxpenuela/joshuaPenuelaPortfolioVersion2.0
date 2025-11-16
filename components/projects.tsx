import React from 'react'
import Image from 'next/image'

export default function Projects() {
  const languageColors: Record<string, string> = {
    'Laravel 12': 'bg-red-500/20 text-red-700 dark:text-red-300',
    Blade: 'bg-red-500/20 text-red-700 dark:text-red-300',
    MySQL: 'bg-orange-500/20 text-orange-700 dark:text-orange-300',
    'Tailwind CSS': 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300',
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
      name: 'TAIOS',
      language: ['Laravel 12', 'Blade', 'Node.js', 'MySQL', 'Tailwind CSS'],
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
    },
    {
      id: 2,
      image: '',
      name: 'kITa',
      language: ['Java', 'Kotlin', 'PHP', 'MySQL', 'HTML', 'Bootstrap', 'JavaScript'],
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
    },
    {
      id: 3,
      image: '',
      name: 'CvSU Merch Store',
      language: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
    },
    {
      id: 4,
      image: '',
      name: 'Rizal Museum',
      language: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      description:
        'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
    }
  ]

  return (
    <section className='flex w-full flex-col items-center pb-24'>
      <div className='w-full text-black dark:text-white'>
        <div className='flex flex-col gap-y-15 mt-40 mb-10 w-full border-b-3 border-y-zinc-400 dark:border-zinc-800 pb-15'>
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

        <div className='w-full pt-20 px-4 md:px-8 lg:px-40 animate-fade-in-up animation-delay-200'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10'>
            {webProjects.map(project => (
              <div
                key={project.id}
                className='rounded-md border-2 border-gray-800/50 dark:border-gray-400/50 p-5 backdrop-blur-xs dark:hover:bg-zinc-900 hover:bg-gray-300/50 cursor-pointer transition-all hover:scale-105'
              >
                <h1 className='text-2xl md:text-3xl font-bold'>{project.name}</h1>

                {/* Language Badges */}
                <div className='my-2 flex flex-wrap gap-2'>
                  {project.language.map((lang, index) => (
                    <span
                      key={index}
                      className={`rounded-sm px-2 py-1 text-xs ${languageColors[lang] || 'bg-gray-500/20'}`}
                    >
                      {lang}
                    </span>
                  ))}
                </div>

                <p className='text-sm'>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}