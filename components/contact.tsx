'use client'

import React, { useState, FormEvent, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/joshuaxpenuela',
    logo: 'logos/facebook.svg',
    width: 35,
    height: 35
  },
  {
    name: 'Instagram',
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
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
      console.log('EmailJS initialized')
    } else {
      console.error('EmailJS Public Key is missing!')
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    console.log('Service ID:', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
    console.log('Public Key exists:', !!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = 'template_a7sg6ea'
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    // Validation
    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setErrorMessage('Configuration error. Please check environment variables.')
      console.error('Missing configuration:', { serviceId, templateId, publicKey: !!publicKey })
      return
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_email: 'penuelajoshuaf@gmail.com'
        },
        publicKey
      )

      console.log('EmailJS Success:', result)

      if (result.status === 200) {
        setStatus('success')
        setFormData({ from_name: '', from_email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error: any) {
      console.error('EmailJS Error Details:', {
        error,
        text: error?.text,
        status: error?.status,
        message: error?.message,
        stringified: JSON.stringify(error)
      })
      
      setStatus('error')
      
      // More specific error messages
      if (error?.text) {
        setErrorMessage(`Error: ${error.text}`)
      } else if (error?.status === 400) {
        setErrorMessage('Invalid request. Please check your template configuration.')
      } else if (error?.status === 401) {
        setErrorMessage('Authentication failed. Please check your EmailJS credentials.')
      } else if (error?.status === 404) {
        setErrorMessage('Service or template not found. Please verify your IDs.')
      } else {
        setErrorMessage('Failed to send message. Please try again or contact me directly.')
      }
      
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className='my-15 mt-20 w-full px-4'>
      <div className='w-full'>
        <div className='w-full'>
          <h1 className='place-self-center-safe text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 text-center'>
            Let's Connect!
          </h1>
        </div>
        <div className='grid w-full grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 py-8 lg:py-15'>
          {/* Left Side - Contact Form */}
          <div className='mx-4 sm:mx-8 lg:mx-40 justify-items-center-safe border-2 rounded-2xl p-6 sm:p-8 border-zinc-400 dark:border-zinc-600 dark:bg-zinc-950 bg-white  '>
            <form onSubmit={handleSubmit} className='w-full space-y-4'>
              <div>
                <h1 className='w-full text-center text-3xl font-bold pb-5'>Send me an email!</h1>
                <label htmlFor='from_name' className='block text-sm font-medium mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  id='from_name'
                  name='from_name'
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border-2 border-zinc-400 dark:border-zinc-800 rounded-lg bg-transparent focus:outline-none focus:border-zinc-800 dark:focus:border-zinc-500'
                  placeholder='John Doe'
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label htmlFor='from_email' className='block text-sm font-medium mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='from_email'
                  name='from_email'
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border-2 border-zinc-400 dark:border-zinc-800 rounded-lg bg-transparent focus:outline-none focus:border-zinc-800 dark:focus:border-zinc-500'
                  placeholder='john.doe@email.com'
                  disabled={status === 'sending'}
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-2 border-2 border-zinc-400 dark:border-zinc-800 rounded-lg bg-transparent focus:outline-none focus:border-zinc-800 dark:focus:border-zinc-500 resize-none'
                  placeholder='Your message...'
                  disabled={status === 'sending'}
                />
              </div>

              <button
                type='submit'
                disabled={status === 'sending'}
                className='w-full py-3 px-6 border-zinc-600 dark:border-zinc-600 border-2 dark:hover:bg-zinc-800 hover:bg-zinc-200 disabled:bg-gray-500 text-black dark:text-white font-semibold rounded-lg transition-colors duration-150 cursor-pointer'
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className='p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 rounded-lg text-center'>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className='p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 rounded-lg text-center'>
                  {errorMessage}
                </div>
              )}
            </form>
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
                    className='flex flex-row items-center border-2 border-gray-800/50 dark:border-gray-400/50 dark:hover:bg-zinc-900 hover:bg-gray-300/50 rounded-lg py-2 px-4 gap-3 dark:bg-zinc-950 dark:text-dark'
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