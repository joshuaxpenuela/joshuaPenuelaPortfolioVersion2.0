import { Link } from 'lucide-react'
import React from 'react'

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
    <section className='my-15 mt-20 w-full px-4'>
      <div className='w-full'>
        <div className='w-full'>
          <h1 className='place-self-center-safe text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-center'>
            Let's Connect!
          </h1>
        </div>
        <div className='grid w-full grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 py-8 lg:py-15'>
          {/* Left Side - Email Notice */}
          <div className='mx-4 sm:mx-8 lg:mx-40 justify-items-center-safe border-2 rounded-2xl place-content-center p-6 sm:p-8'>
            <div className='text-base sm:text-lg lg:text-xl text-center text-wrap'>
              <p>Email Form is currently not available due to limited budget to own a personal domain. Sorry for the inconvenience and thank you for your patience.</p>
            </div>
          </div>

          {/* Right Side - Social Links */}
          <div className='grid grid-rows-auto mx-4 sm:mx-8 lg:mx-40 justify-items-center-safe gap-y-6 lg:gap-y-15'>
            <div>
              <h1 className='font-bold text-xl sm:text-2xl lg:text-3xl text-center'>Follow me on these accounts</h1>
            </div>
            <div className='hover:bg-900 w-full cursor-pointer justify-between'>
              <div className='grid gap-y-4 sm:gap-y-6 lg:gap-y-10'>
                {socials.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex flex-row items-center border-2 border-gray-800/50 dark:border-gray-400/50 dark:hover:bg-zinc-900 hover:bg-gray-300/50 rounded-lg py-2 px-4 gap-3'
                  >
                    <div className='shrink-0'>
                      {social.logo && (
                        <img
                          height={social.height}
                          width={social.width}
                          src={social.logo}
                          alt={social.name}
                          className='w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain'
                        />
                      )}
                    </div>
                    <p className='font-bold place-content-center-safe text-base sm:text-lg lg:text-xl'>
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