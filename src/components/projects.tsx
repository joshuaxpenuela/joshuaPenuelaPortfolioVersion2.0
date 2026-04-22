'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Github, Globe } from 'lucide-react'
import Image from 'next/image'

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
    name: 'TAIOS',
    images: [
      'projectspics/taios/taios.png',
      ...Array.from(
        { length: 6 },
        (_, i) => `projectspics/taios/taios (${i + 1}).png`
      )
    ],
    language: ['Laravel 12', 'Blade', 'Node.js', 'MySQL', 'Tailwind CSS'],
    description:
      'TUPAD All-in-One System is a platform that centralized and digitized the TUPAD database and improving the previous manual process speed by 90% for DOLE - Cavite Provincial Office.'
  },
  {
    id: 2,
    name: 'kITa',
    images: Array.from(
      { length: 4 },
      (_, i) => `projectspics/kita/kita (${i + 1}).jpg`
    ),
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
      'A Lost and Found Platform for students, faculty, staffs, visitors (Android App), and admins (Web Platform) of Cavite State University - Main Campus to solve the scattered and inefficient process and difficult experience of finding and surrendering lost items, and centralized the database and management of authorities.',
    github:
      'https://github.com/joshuaxpenuela/kITa-Lost-and-Found-Android-Application.git'
  },
  {
    id: 3,
    name: 'KabsuDrip: CvSU Merch Store',
    images: Array.from(
      { length: 13 },
      (_, i) => `projectspics/KabsuDrip/KabsuDrip (${i + 1}).png`
    ),
    language: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    description:
      'Online platform for Kabsuhenyos to buy their most wanted merch of the university conveniently.',
    github: 'https://github.com/joshuaxpenuela/KabsuDrip.git',
    live: ''
  },
  {
    id: 4,
    name: 'Rizal Museum',
    images: Array.from(
      { length: 7 },
      (_, i) => `projectspics/RizalMuseum/RizalMuseum(${i + 1}).png`
    ),
    language: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    description:
      "A web platform that shows the life and works of the Philippine's national hero, Dr. Jose Rizal.",
    github: 'https://github.com/joshuaxpenuela/RizalMuseum.git',
    live: ''
  },
  {
    id: 5,
    name: 'Personal Website',
    images: ['projectspics/joshyportfolio.png'],
    language: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    description:
      'My personal portfolio website to showcase my skills, projects, and experiences.',
    github:
      'https://github.com/joshuaxpenuela/joshuaPenuelaPortfolioVersion2.0.git',
    live: 'https://joshuaxpenuela.vercel.app'
  }
]

export default function Projects() {
  return (
    <section className='flex w-full flex-col items-center pb-24'>
      <div className='w-full text-black dark:text-white'>
        {/* Header */}
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

        {/* Grid */}
        <div className='animate-fade-in-up animation-delay-200 w-full px-4 pt-20 md:px-8 lg:px-40'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10'>
            {webProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  const [current, setCurrent] = useState(0)
  const total = project.images.length

  const nextSlide = () => setCurrent(c => (c === total - 1 ? 0 : c + 1))

  const prevSlide = () => setCurrent(c => (c === 0 ? total - 1 : c - 1))

  return (
    <div className='rounded-md border-2 border-gray-800/50 p-5 backdrop-blur-sm transition-all hover:bg-gray-300/50 dark:border-gray-400/50 dark:bg-zinc-950/80 dark:hover:bg-zinc-900'>
      {/* Image Slider */}
      {total > 0 && (
        <div className='relative my-2 w-full overflow-hidden rounded-xl border-2'>
          <div
            className='flex transition-transform duration-300 ease-in-out'
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {project.images.map((image: string, index: number) => (
              <div
                key={index}
                className='relative flex aspect-video w-full shrink-0 items-center justify-center backdrop-blur-xl'
              >
                <Image
                  src={`/${image}`}
                  alt={`${project.name} Image ${index + 1}`}
                  fill
                  loading='eager'
                  className='object-cover'
                  sizes='(max-width: 640px) 100vw,
                  (max-width: 1024px) 90vw,
                  (max-width: 1280px) 80vw,
                  70vw'
                />
              </div>
            ))}
          </div>

          {total > 1 && (
            <>
              <button
                onClick={e => {
                  e.stopPropagation()
                  prevSlide()
                }}
                className='absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-xl text-white transition-all hover:scale-110 hover:bg-black/70'
              >
                ‹
              </button>

              <button
                onClick={e => {
                  e.stopPropagation()
                  nextSlide()
                }}
                className='absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-xl text-white transition-all hover:scale-110 hover:bg-black/70'
              >
                ›
              </button>
            </>
          )}
        </div>
      )}

      <div className='realtive mt-3 flex items-center justify-between'>
        <h1 className='text-2xl font-bold md:text-2xl'>{project.name}</h1>
        <div className='flex gap-3 text-gray-600 dark:text-gray-300'>
          {/* GitHub Button Fix */}
          {project.github && (
            <Button
              variant='outline'
              size='icon'
              className='dark:bg-950 dark:border-zinc-600 dark:hover:bg-zinc-700'
              asChild
            >
              <a
                href={project.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='h-5 w-5' />
              </a>
            </Button>
          )}

          {/* Live Link Button Fix */}
          {project.live && (
            <Button
              variant='outline'
              size='icon'
              className='dark:bg-950 dark:border-zinc-600 dark:hover:bg-zinc-700'
              asChild
            >
              <a href={project.live} target='_blank' rel='noopener noreferrer'>
                <Globe className='h-5 w-5' />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Language Badges */}
      <div className='my-3 flex flex-wrap gap-2'>
        {project.language.map((lang: string) => (
          <span
            key={lang}
            className={`rounded-sm px-2 py-1 text-xs ${
              languageColors[lang] || 'bg-gray-500/20'
            }`}
          >
            {lang}
          </span>
        ))}
      </div>

      <p className='text-justify text-sm md:text-base'>{project.description}</p>
    </div>
  )
}
