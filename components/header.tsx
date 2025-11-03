'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from '@/components/theme-toggle'

export default function Header() {
  const currentPath = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return currentPath === path
  }

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Software Dev', path: '/projects' },
    { name: 'Graphics', path: '/graphics' },
  ]

  const externalLinks = [
    // { name: 'CV', href: 'misc/JOSHY 2025 CV.pdf' },
    {name: 'LinkedIn', href: 'https://www.linkedin.com/in/joshuaxpenuela/' },
    {name: 'Github', href: 'https://www.github.com/joshuaxpenuela'}
  ]

  return (
    <header className='bg-background/5 fixed inset-x-0 top-0 z-50 border-b-2 py-4 backdrop-blur-xl border-gray-800/50 dark:border-gray-400/50'>
      <nav className='container mx-auto flex items-center justify-between px-4 sm:px-6 antialiased'>
        {/* Left Section: Logo + Links */}
        <div className='flex items-center gap-6 lg:gap-20'>
          {/* Logo */}
          <Link href='/' className='font-sans text-xl sm:text-2xl font-bold'>
            Joshy.
          </Link>

          {/* Desktop Navigation Links */}
          <ul className='text-muted-foreground hidden md:flex items-center gap-4 lg:gap-6 xl:gap-10 text-sm font-light'>
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

        {/* Right Section: Desktop External Links + Theme Toggle */}
        <div className='hidden md:flex items-center gap-3 lg:gap-4'>
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

        {/* Mobile Menu Button and Theme Toggle */}
        <div className='flex md:hidden items-center gap-3'>
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='text-foreground p-2'
            aria-label='Toggle menu'
          >
            {mobileMenuOpen ? (
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <line x1='3' y1='12' x2='21' y2='12' />
                <line x1='3' y1='6' x2='21' y2='6' />
                <line x1='3' y1='18' x2='21' y2='18' />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden border-t border-gray-800/50 dark:border-gray-400/50 bg-background/95 backdrop-blur-xl'>
          <div className='container mx-auto px-4 py-4'>
            {/* Mobile Navigation Links */}
            <ul className='flex flex-col gap-4 mb-4'>
              {pages.map(page => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${isActive(page.path) ? 'text-foreground font-bold' : 'text-muted-foreground'} text-base font-medium hover:text-foreground transition-colors block`}
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile External Links */}
            <div className='flex flex-col gap-3 pt-4 border-t border-gray-800/50 dark:border-gray-400/50'>
              {externalLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex gap-2 text-sm font-bold text-black dark:text-white'
                >
                  {link.name}
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
                    <polyline points='15 3 21 3 21 9' />
                    <line x1='10' y1='14' x2='21' y2='3' />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}