'use client'
import { useEffect, useState } from 'react'
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
    <div className='bg-background border-y-2 border-gray-800/50 p-4 dark:border-gray-400/50'>
      <div className='pt-5'>
        <h2 className='mb-2 justify-self-center-safe text-4xl font-bold'>GitHub Stats</h2>
      </div>

      <div className='grid w-full grid-cols-3 items-center py-4 text-center text-xl font-bold text-zinc-400'>
        <div className='flex flex-row justify-center-safe gap-2'>
          <Users className='h-8 w-8 text-zinc-400' />
          <p className='flex items-center gap-2'>
            Followers: {renderValue(stats?.followers)}
          </p>
        </div>

        <div className='flex flex-row justify-center-safe gap-2'>
          <GitCommit className='h-8 w-8 text-zinc-400' />
          <p className='flex items-center gap-2'>
            Commits: {renderValue(stats?.commits)}
          </p>
        </div>

        <div className='flex flex-row justify-center-safe gap-2'>
          <Star className='h-8 w-8 text-zinc-400' />
          <p className='flex items-center gap-2'>
            Stars: {renderValue(stats?.stars)}
          </p>
        </div>
      </div>
    </div>
  )
}
