'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  const currentPath = usePathname()

  const isActive = (path: string) => {
    return currentPath === path
  }

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Software Dev', path: '/projects' },
    { name: 'Graphics', path: '/graphics' },
  ]

  const externalLinks = [
    { name: 'CV', href: '#' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joshuaxpenuela/' }
  ]

  return (
    <header className='bg-background/5 fixed inset-x-0 top-0 z-50 border-b-2 py-4 backdrop-blur-xl border-gray-800/50 dark:border-gray-400/50'>
      <nav className='container mx-auto flex items-center justify-between px-6 antialiased'>
        {/* Left Section: Logo + Links */}
        <div className='flex items-center gap-20'>
          {/* Logo */}
          <Link href='/' className='font-sans text-2xl font-bold'>
            Joshy.
          </Link>

          {/* Navigation Links */}
          <ul className='text-muted-foreground flex items-center gap-6 text-sm font-light sm:gap-10'>
            {pages.map(page => (
              <li
                key={page.path}
                className={`${isActive(page.path) ? 'text-foreground after:hidden' : ''} hover:text-foreground relative transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-0 after:bg-current after:transition-all after:duration-200 after:content-[""] hover:after:w-full`}
              >
                <Link className='font-bold' href={page.path}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Theme Toggle */}
        <div className='flex items-center gap-4'>
          {externalLinks.map(link => (
            <Link key={link.name} href={link.href} target='_blank' rel='noopener noreferrer' className='group flex gap-1 text-sm font-bold text-black dark:text-white'
            >
              {link.name}
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='opacity-0 transition-opacity group-hover:opacity-100'
              >
                <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
                <polyline points='15 3 21 3 21 9' />
                <line x1='10' y1='14' x2='21' y2='3' />
              </svg>
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
