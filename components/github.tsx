'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Users, GitCommit, Star } from 'lucide-react'

type GithubStatsType = {
  followers: number
  stars: number
  commits: number
}

export default function GithubStats() {
  const [stats, setStats] = useState<GithubStatsType | null>(null)

  useEffect(() => {
    fetch('/api/github/')
      .then(res => res.json())
      .then((data: GithubStatsType) => setStats(data))
      .catch(() => setStats({ followers: 0, stars: 0, commits: 0 })) // fallback
  }, [])

  const renderValue = (value?: number) =>
    stats ? (
      <span>{value}</span>
    ) : (
      // Tailwind-based spinner
      <span
        className='h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-transparent'
        aria-label='Loading'
      />
    )

  return (
    <div className='bg-white dark:bg-zinc-950 border-y-2 border-gray-800/50 p-4 dark:border-gray-400/50'>
      <div className='pt-5'>
        <h2 className='mb-2 justify-self-center-safe text-center text-2xl font-bold sm:text-3xl lg:text-4xl'>
          GitHub Stats
        </h2>
      </div>

      <div className='grid w-full grid-cols-1 items-center gap-4 py-4 text-center text-base font-bold text-zinc-600 sm:grid-cols-3 sm:gap-0 sm:text-lg lg:text-xl dark:text-zinc-400'>
        <div className='flex flex-row justify-center-safe gap-2'>
          <div className='flex flex-row hover:text-zinc-950 dark:hover:text-white gap-3'>
            <Users className='h-6 w-6 shrink-0 cursor-pointer sm:h-7 sm:w-7 lg:h-8 lg:w-8' />
            <Link
              href='https://github.com/joshuaxpenuela'
              target='_blank'
              className='flex cursor-pointer items-center gap-2'
            >
              Followers: {renderValue(stats?.followers)}
            </Link>
          </div>
        </div>

        <div className='flex flex-row justify-center-safe gap-2'>
          <div className='flex flex-row hover:text-zinc-950 dark:hover:text-white gap-3'>
            <GitCommit className='h-6 w-6 shrink-0 cursor-pointer sm:h-7 sm:w-7 lg:h-8 lg:w-8' />
            <a
              href='https://github.com/joshuaxpenuela'
              target='_blank'
              className='flex cursor-pointer items-center gap-2'
            >
              Commits: {renderValue(stats?.commits)}
            </a>
          </div>
        </div>

        <div className='flex flex-row justify-center-safe gap-2'>
          <div className='hover-text-zinc-950 flex flex-row dark:hover:text-white'>
            <div className='flex flex-row hover:text-zinc-950 dark:hover:text-white gap-3'>
              <Star className='h-6 w-6 shrink-0 cursor-pointer sm:h-7 sm:w-7 lg:h-8 lg:w-8' />
            <a
              href='https://github.com/joshuaxpenuela'
              target='_blank'
              className='flex cursor-pointer items-center gap-2'
            >
              Stars: {renderValue(stats?.stars)}
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
