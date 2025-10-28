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
              <div
                key={software.name}
                className='flex flex-col items-center rounded-md border py-4'
              >
                <div className='flex h-[60px] w-[60px] items-center justify-center'>
                  {software.logo && (
                    <a
                      href={software.href}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        src={software.logo}
                        alt={software.name}
                        className='max-h-full max-w-full transform cursor-pointer object-contain transition-transform duration-300 hover:scale-110'
                      />
                    </a>
                  )}
                </div>
                <a
                  href={software.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-2 text-center font-bold wrap-break-words text-gray-400 hover:text-white'
                >
                  {software.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
