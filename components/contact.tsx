import { Link } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/joshuaxpenuela',
    logo: 'logos/facebook.svg',
    width: 35,
    height: 35
  },
  {
    name: 'Instragram',
    url: 'https://www.instagram.com/joshuaxpenuela',
    logo: 'logos/instagram.svg',
    width: 40,
    height: 40
  },
  {
    name: 'Gmail',
    url: 'mailto:penuelajoshuaf@gmail.com',
    logo: 'logos/gmail.svg',
    width: 40,
    height: 40
  },
  {
    name: 'Discord (aqua.timez)',
    url: 'https://discord.com/users/aqua.timez',
    logo: 'logos/discord.svg',
    width: 40,
    height: 40
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@joshuaxpenuela',
    logo: 'logos/youtube.svg',
    width: 33,
    height: 0
  }
]

export default function Contact() {
  return (
    <section className='my-15 mt-20 w-full'>
      <div className='w-full'>
        <div className='w-full'>
          <h1 className='place-self-center-safe text-4xl font-bold mb-5'>
            Let's Connect!
          </h1>
        </div>
        <div className='grid w-full grid-cols-2'>
          <div className='mx-40 justify-items-center-safe py-15'>
            <div className='mx-'>
              <p>Under Development...</p>
            </div>
          </div>

          <div className='mx-40 justify-items-center-safe py-15'>
            <div className='hover:bg-900 w-full cursor-pointer justify-between'>
              <div className='grid gap-y-10'>
                {socials.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-cols-2 border-2 border-gray-800/50 dark:border-gray-400/50 dark:hover:bg-zinc-900 hover:bg-gray-300/50 rounded-lg py-2 px-4'
                  >
                    <div className=''>
                      {social.logo && (
                        <Image
                          height={social.height}
                          width={social.width}
                          src={social.logo}
                          alt={social.name} 
                          className='mr-2'
                        />
                      )}
                    </div>
                    <p className='font-bold place-content-center-safe text-xl'>
                      {social.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
