import React from 'react'

export default function Projects() {
  return (
    <section className='flex flex-col items-center pb-24 md:flex-row md:items-center dark:bg-linear-to-t dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800/80'>
      <div className='grid w-full place-content-center-safe text-black dark:text-white border-2'>
        <div className='font-black place-items-center-safe w-full py-40'>
          <h1 className='text-5xl'>Software Projects</h1>
        </div>
        <div className='w-full content-center'>
          <p className='text-center'>Under Development...</p>
        </div>
      </div>
    </section>
  )
}
