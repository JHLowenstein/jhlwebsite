import Image from 'next/image'

import Company from '@/public/images/companyHeader.png'
import React from 'react'

export default function Hero() {
  return (
    <section className='relative mb-20'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          className='w-full h-full object-cover'
          src={Company}
          width={1440}
          height={394}
          priority
          alt='About'
        />
        <div
          className='absolute inset-0 bg-gray-900 opacity-75'
          aria-hidden='true'
        ></div>
      </div>
      {/* Hero content */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative'>
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='h1 mb-8' data-aos='fade-up'>
              Perfecting the Art of{' '}
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-rose-600 via-amber-400 to-blue-700 '>
                Color Formulation
              </span>{' '}
              since 1897
            </h1>
            {/* <p
              className='text-xl text-gray-400 mb-8'
              data-aos='fade-up'
              data-aos-delay='200'
            >
             text here
            </p> */}
          </div>
        </div>
      </div>
    </section>
  )
}
