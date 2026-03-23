import React from 'react'

import Image from 'next/image'

const invertNames = new Set(['Next.js', 'Vercel', 'Github', 'Expo'])

const softwares = [
  ['react', 'https://react.dev/', 'React'],
  ['nextjs', 'https://nextjs.org/', 'Next.js'],
  ['typescript', 'https://www.typescriptlang.org/', 'TypeScript'],
  ['tailwind', 'https://tailwindcss.com/', 'TailwindCSS'],
  ['nodejs', 'https://nodejs.org/en', 'Node.js'],
  ['npm', 'https://www.npmjs.com/', 'npm'],
  ['javascript', 'https://www.javascript.com/', 'JavaScript'],
  ['expo', 'https://expo.dev/', 'Expo'],
  ['react', 'https://reactnative.dev/', 'React Native'],
  ['python', 'https://www.python.org/', 'Python'],
  ['mysql', 'https://www.mysql.com/', 'MySQL'],
  ['supabase', 'https://supabase.com/', 'Supabase'],
  ['postman', 'https://www.postman.com/', 'Postman'],
  ['vercel', 'https://vercel.com/home', 'Vercel'],
  ['git', 'https://git-scm.com/', 'Git'],
  ['androidstudio', 'https://developer.android.com/studio', 'Android Studio'],
  ['github', 'https://github.com/', 'Github'],
  ['figma', 'https://www.figma.com', 'Figma'],
  ['photoshop', 'https://www.adobe.com/ph_en/products/photoshop.html', 'Adobe Photoshop'],
  ['canva', 'https://www.canva.com/', 'Canva'],
].map(([slug, href, name]) => ({
  logo: `/logos/${slug}.svg`,
  href,
  name
}))

export default function Software() {
  return (
    <section className='mt-30 mb-30 w-full'>
      <div>
        <div className='m-auto w-full'>
          <div className='place-items-center-safe pb-15'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center px-4'>Softwares</h1>
          </div>
          <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-40 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5'>
            {softwares.map(software => (
              <a
                key={software.name}
                href={software.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex cursor-pointer flex-col items-center rounded-md border border-transparent py-3 sm:py-4 text-zinc-600 transition-transform duration-200 hover:scale-105 hover:bg-zinc-300 hover:text-black dark:text-gray-400 dark:hover:bg-zinc-900/80 dark:hover:text-white'
              >
                <div className='relative flex h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] items-center justify-center'>
                  {software.logo && (
                    <Image src={software.logo}
                      alt={software.name}
                      fill
                      style={{objectFit: 'contain'}}
                      className={`object-contain transition-transform  duration-300 hover:scale-110 ${['Next.js', 'Vercel', 'Github', 'Expo'].includes(software.name) ? 'dark:invert' : ''}`}
                      sizes='(max-width: 640px) 50px, (max-width: 768px) 60px, (max-width: 1024px) 60px, (max-width: 1280px) 60px, 60px'
                    />
                  )}
                </div>
                <p className='wrap-break-words mt-2 text-center font-bold text-xs sm:text-sm px-2'>
                  {software.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}