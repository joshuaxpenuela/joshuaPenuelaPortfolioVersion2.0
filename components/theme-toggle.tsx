'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <Button size='sm' variant='ghost' className='cursor-pointer hover:bg-zinc-400/30 dark:hover:bg-zinc-400/30' onClick={() => {setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}}>
    {resolvedTheme === 'dark' ? <SunIcon className='size-4 text-white'/> : <MoonIcon className='size-4 text-black'/>}
    <span className='sr-only'>Toggle theme</span>
  </Button>
}

export default ThemeToggle
