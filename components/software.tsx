import React from 'react'

const softwares = [
  {
    logo: '/logos/nextjs.svg',
    href: 'https://nextjs.org/  ',
    name: 'Next.js'
  },
  {
    logo: 'logos/react.svg',
    href: 'https://react.dev/',
    name: 'React'
  },
  {
    logo: 'logos/tailwind.svg',
    href: 'https://tailwindcss.com/',
    name: 'TailwindCSS'
  },
  {
    logo: 'logos/nodejs.svg',
    href: 'https://nodejs.org/en',
    name: 'Node.js'
  },
  {
    logo: 'logos/laravel.svg',
    href: 'https://laravel.com/',
    name: 'Laravel'
  },
  {
    logo: 'logos/npm.svg',
    href: 'https://www.npmjs.com/',
    name: 'npm'
  },
  {
    logo: 'logos/html.svg',
    href: '',
    name: 'HTML5'
  },
  {
    logo: 'logos/css.svg',
    href: '',
    name: 'CSS'
  },
  {
    logo: 'logos/javascript.svg',
    href: '',
    name: 'JavaScript'
  },
  {
    logo: 'logos/php.svg',
    href: 'https://www.php.net/',
    name: 'PHP'
  },
  {
    logo: 'logos/mysql.svg',
    href: 'https://www.mysql.com/',
    name: 'MySQL'
  },
  {
    logo: 'logos/typescript.svg',
    href: 'https://www.typescriptlang.org/',
    name: 'TypeScript'
  },
  {
    logo: 'logos/postman.svg',
    href: 'https://www.postman.com/ ',
    name: 'Postman'
  },
  {
    logo: 'logos/vercel.svg',
    href: 'https://vercel.com/home',
    name: 'Vercel'
  },
  {
    logo: 'logos/git.svg',
    href: 'https://git-scm.com/',
    name: 'Git'
  },
  {
    logo: 'logos/androidstudio.svg',
    href: 'https://developer.android.com/studio',
    name: 'Android Studio'
  },
  {
    logo: 'logos/github.svg',
    href: 'https://github.com/',
    name: 'Github'
  },
  {
    logo: 'logos/figma.svg',
    href: 'https://www.figma.com',
    name: 'Figma'
  },
  {
    logo: 'logos/photoshop.svg',
    href: 'https://www.adobe.com/ph_en/products/photoshop.html',
    name: 'Adobe Photoshop'
  },
  {
    logo: 'logos/canva.svg',
    href: 'https://www.canva.com/',
    name: 'Canva'
  }
]

export default function Software() {
  return (
    <section className='mt-30 mb-20 w-full'>
      <div>
        <div className='m-auto w-full'>
          <div className='place-items-center-safe pb-15'>
            <h1 className='text-4xl font-bold'>Softwares</h1>
          </div>
          <div className='mx-40 grid grid-cols-5 gap-5'>
            {softwares.map(software => (
              <a
                key={software.name}
                href={software.href}
                target='_blank'
                rel='noopener noreferrer'
                className='flex cursor-pointer flex-col items-center rounded-md border border-transparent py-4 text-gray-400 transition-transform duration-200 hover:scale-105 hover:bg-zinc-900 hover:text-white'
              >
                <div className='flex h-[60px] w-[60px] items-center justify-center'>
                  {software.logo && (
                    <img
                      src={software.logo}
                      alt={software.name}
                      className='max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110'
                    />
                  )}
                </div>
                <p className='mt-2 text-center font-bold break-words'>
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
