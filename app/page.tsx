import React from 'react'
import Github from '@/components/github'
import Hero from '@/components/hero'
import About from '@/components/about'
import Software from '@/components/software'
import Contact from '@/components/contact'

export const Home = () => {
  return (
    <section className='mx-auto w-full'>
      <div className='mx-auto flex flex-col'>
        <div>
          <Hero/>
          <Github/>
          <About/>
          <Software/>
          <Contact/>
        </div>          
      </div>
    </section>
  )
}

export default Home