import Image from 'next/image'

import Products from '@/public/images/productHeader.png'

export default function Hero() {
  return (
    <section className='relative mb-20'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          className='w-full h-full object-cover'
          src={Products}
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

      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative'>
        <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='h1 mb-10' data-aos='fade-up' data-aos-delay='200'>
              Explore the{' '}
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-rose-600 via-amber-400 to-blue-700 '>
                Fur Products
              </span>{' '}
              <br />
              offered at JHL
            </h1>
            {/* <p
              className='text-xl text-snow-400 mb-8'
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
