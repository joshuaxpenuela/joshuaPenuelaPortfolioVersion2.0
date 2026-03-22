'use client'

import React, { useState } from 'react'
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
      images: [
        'projectspics/taios/taios.png',
        'projectspics/taios/taios (1).png',
        'projectspics/taios/taios (2).png',
        'projectspics/taios/taios (3).png',
        'projectspics/taios/taios (4).png',
        'projectspics/taios/taios (5).png',
        'projectspics/taios/taios (6).png'
      ],
      name: 'TAIOS',
      language: ['Laravel 12', 'Blade', 'Node.js', 'MySQL', 'Tailwind CSS'],
      description:
        'TUPAD All-in-One System is a platform that centralized and digitized the TUPAD database and improving the previous manual process speed by 90% for DOLE - Cavite Provincial Office.'
    },
    {
      id: 2,
      images: [
        'projectspics/kita/kita (1).jpg',
        'projectspics/kita/kita (2).jpg',
        'projectspics/kita/kita (3).jpg',
        'projectspics/kita/kita (4).jpg'
      ],
      name: 'kITa: Android and Web-Based CvSU Lost and Found System',
      language: [
        'Java',
        'Kotlin',
        'PHP',
        'MySQL',
        'HTML',
        'Bootstrap',
        'JavaScript'
      ],
      description:
        'Lost and Found Platform for users (Android App) and admins (Web Platform) to solve the scattered process and difficult experience of finding and surrendering lost items, and centralized the database and management of authorities.'
    },
    {
      id: 3,
      images: [
        'projectspics/KabsuDrip/kabsudrip (1).png',
        'projectspics/KabsuDrip/kabsudrip (2).png',
        'projectspics/KabsuDrip/kabsudrip (3).png',
        'projectspics/KabsuDrip/kabsudrip (9).png',
        'projectspics/KabsuDrip/kabsudrip (10).png',
        'projectspics/KabsuDrip/kabsudrip (11).png',
        'projectspics/KabsuDrip/kabsudrip (12).png',
        'projectspics/KabsuDrip/kabsudrip (13).png',
      ],
      name: 'KabsuDrip: CvSU Merch Store',
      language: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      description:
        'Online platform for Kabsuhenyos to buy their most wanted merch of the university conveniently.'
    },
    {
      id: 4,
      images: [
        'projectspics/RizalMuseum/RizalMuseum(1).png',
        'projectspics/RizalMuseum/RizalMuseum(2).png',
        'projectspics/RizalMuseum/RizalMuseum(3).png',
        'projectspics/RizalMuseum/RizalMuseum(4).png',
        'projectspics/RizalMuseum/RizalMuseum(5).png',
        'projectspics/RizalMuseum/RizalMuseum(6).png',
        'projectspics/RizalMuseum/RizalMuseum(7).png'
      ],
      name: 'Rizal Museum',
      language: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      description:
        "A web platform that shows the life and works of the Philippine's national hero, Dr. Jose Rizal."
    },
    {
      id: 5,
      images: ['projectspics/joshyportfolio.png'],
      name: 'Personal Website',
      language: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      description:
        'My personal portfolio website to showcase my skills, projects, and experiences.'
    }
  ]

  return (
    <section className='flex w-full flex-col items-center pb-24'>
      <div className='w-full text-black dark:text-white'>
        <div className='mt-40 mb-15 flex w-full flex-col gap-y-15 border-b-3 border-y-zinc-400 pb-15 dark:border-zinc-800'>
          <div className='animate-fade-in-up sm:text-3xl'>
            <h1 className='text-center text-5xl font-black'>
              Software Projects
            </h1>
          </div>
          <div className='animate-fade-in-up animation-delay-100 flex flex-col gap-y-5'>
            <h4 className='text-center text-xl'>
              Some of my projects since I officially started my IT journey last
              2021
            </h4>
          </div>
        </div>

        {/* Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className='animate-fade-in-up animation-delay-200 w-full px-4 pt-20 md:px-8 lg:px-40'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10'>
            {webProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                languageColors={languageColors}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  languageColors
}: {
  project: any
  languageColors: Record<string, string>
}) {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === project.images.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? project.images.length - 1 : current - 1)
  }

  return (
    <div className='cursor-pointer rounded-md border-2 border-gray-800/50 p-5 backdrop-blur-sm transition-all hover:bg-gray-300/50 dark:border-gray-400/50 dark:bg-zinc-950/80 dark:hover:bg-zinc-900'>
      {/* Image Slider */}
      {project.images.length > 0 && (
        <div className='relative my-2 w-full overflow-hidden rounded-xl border-2'>
          <div
            className='flex h-full transition-transform duration-300 ease-in-out'
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {project.images.map((image: string, index: number) => (
              <div
                key={index}
                className='relative flex h-full w-full shrink-0 items-center justify-center backdrop-blur-xl'
              >
                <img
                  src={image}
                  alt={project.name}
                  className='h-full w-full object-contain'
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Only show if more than 1 image */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={e => {
                  e.stopPropagation()
                  prevSlide()
                }}
                className='*:pointer absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-xl text-white transition-all hover:scale-110 hover:bg-black/70'
                aria-label='Previous slide'
              >
                ‹
              </button>
              <button
                onClick={e => {
                  e.stopPropagation()
                  nextSlide()
                }}
                className='absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-xl text-white transition-all hover:scale-110 hover:bg-black/70'
                aria-label='Next slide'
              >
                ›
              </button>
            </>
          )}
        </div>
      )}

      <h1 className='text-2xl font-bold md:text-2xl'>{project.name}</h1>

      {/* Language Badges */}
      <div className='my-3 flex flex-wrap gap-2'>
        {project.language.map((lang: string, index: number) => (
          <span
            key={index}
            className={`rounded-sm px-2 py-1 text-xs ${languageColors[lang] || 'bg-gray-500/20'}`}
          >
            {lang}
          </span>
        ))}
      </div>

      <p className='text-justify text-sm md:text-base'>{project.description}</p>
    </div>
  )
}
