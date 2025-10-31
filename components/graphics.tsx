import React from 'react'

export default function Graphics() {
  return (
    <section className='flex flex-col items-center pb-24 md:flex-row md:items-center dark:bg-linear-to-t dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800/80'>
      <div className='grid w-full place-content-center-safe border-2 text-black dark:text-white'>
        <div className='w-full place-items-center-safe py-40 font-black'>
          <h1 className='text-5xl'>Graphics</h1>
        </div>
        <div className='w-full content-center'>
          <p className='text-center'>Under Development...</p>
        </div>
      </div>
    </section>
  )
}
