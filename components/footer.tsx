import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const technologies = [
    {
      name: 'Next.js',
      href: 'https://nextjs.org',
      logo: '/logos/nextjs.png',
      width: 195,
      height: 195
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      logo: '/logos/react.png',
      width: 50,
      height: 32
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      logo: '/logos/tailwindcss.png',
      width: 70,
      height: 32
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      logo: '/logos/typescript.png',
      width: 45,
      height: 32
    }
  ]

  const navigationLinks = [
    { name: 'Web Development', href: '/#' },
    { name: 'Mobile Development', href: '/softwareDev' },
    { name: 'Graphics', href: '/graphics' },
    { name: 'CV / Resume', href: '#' }
  ]

  const contacts = [
    {
      name: 'penuelajoshuaf@gmail.com',
      href: 'mailto:penuelajoshuaf@gmail.com'
    },
    { name: '+63-908-956-5218', href: 'tel:+639089565218' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joshuaxpenuela' }
  ]

  const socials = [
    { name: 'Facebook', href: 'https://www.facebook.com/joshuaxpenuela' },
    { name: 'Instagram', href: 'https://www.instagram.com/joshuaxpenuela' },
    { name: 'GitHub', href: 'https://github.com/joshuaxpenuela' },
    { name: 'YouTube', href: 'https://www.youtube.com/joshuaxpenuela' }
  ]

  return (
    <footer className='bg-background mt-20 border-t antialiased border-gray-800/50 dark:border-gray-400/50'>
      <div className='container mx-auto px-6 py-6'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-16'>
          {/* Developed Using Section */}
          <div className='md:col-span-1'>
            <h2 className='text-foreground mb-4 text-lg font-bold'>
              Developed using
            </h2>
            <div className='flex flex-col gap-4'>
              <a href={technologies[0].href} target='_blank'rel='noopener noreferrer'className='w-fit cursor-pointer'
              >
                <Image src={technologies[0].logo} alt={`${technologies[0].name} Logo`} width={technologies[0].width} height={technologies[0].height} className='transition-all duration-300 hover:opacity-80 dark:invert'
                />
              </a>

              <div className='flex flex-row gap-4'>
                {technologies.slice(1).map(tech => (
                  <a key={tech.name} href={tech.href} target='_blank' rel='noopener noreferrer' className='cursor-pointer'
                  >
                    <Image src={tech.logo} alt={`${tech.name} Logo`} width={tech.width} height={tech.height} className='transition-all duration-300 hover:opacity-80'
                    />
                  </a>
                ))}
              </div>

              <a href='#'className='mt-2 flex items-center gap-2 text-sm font-bold transition-colors'>
                V2.0 Source Code
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
                >
                  <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
                  <polyline points='15 3 21 3 21 9' />
                  <line x1='10' y1='14' x2='21' y2='3' />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h2 className='text-foreground mb-4 text-lg font-bold'>Links</h2>
            <ul className='flex flex-col gap-3'>
              {navigationLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className='text-muted-foreground hover:text-foreground text-base font-bold transition-colors hover:underline'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Section */}
          <div>
            <h2 className='text-foreground mb-4 text-lg font-bold'>Contacts</h2>
            <ul className='flex flex-col gap-3'>
              {contacts.map(contact => (
                <li key={contact.name}>
                  <a href={contact.href} target={
                      contact.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      contact.href.startsWith('http') ? 'noopener noreferrer' : undefined
                    }
                    className='text-muted-foreground hover:text-foreground text-base font-bold transition-colors hover:underline'
                  >
                    {contact.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h2 className='text-foreground mb-4 text-lg font-bold'>Socials</h2>
            <ul className='flex flex-col gap-3'>
              {socials.map(social => (
                <li key={social.name}>
                  <a href={social.href} target='_blank' rel='noopener noreferrer' className='text-muted-foreground hover:text-foreground text-base font-bold transition-colors hover:underline'>
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='flex justify-center pt-6'>
          <p className='text-muted-foreground text-sm font-bold'>
            &copy; 2025 Joshua Penuela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
