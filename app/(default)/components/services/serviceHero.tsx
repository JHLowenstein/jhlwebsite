import Image from 'next/image'

import Services from '@/public/images/servicesHeader.png'

export default function Hero() {
  return (
    <section className='relative mb-20'>
      {/* Background image */}
      <div className='absolute inset-0'>
        <Image
          className='w-full h-full object-cover'
          src={Services}
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
            <h1 className='h1 mb-8 ' data-aos='fade-up'>
              Discover the{' '}
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-rose-600 via-amber-400 to-blue-700 '>
                Services
              </span>{' '}
              offered by the staff at JHL
            </h1>

            <p
              className='text-xl font-semibold text-gray-300 mb-8'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              Our team of expert chemists and technical staff is dedicated to
              delivering exceptional color formulation services, ensuring a
              captivating and satisfying experience for our valued clients.
            </p>
          </div>
        </div>
      </div>

      {/* <div className='absolute inset-0'>
        <Image
          className='w-screen h-auto hidden md:block object-cover'
          src={Services}
          width={1440}
          height={394}
          priority
          alt='Services'
          style={{ pointerEvents: 'none' }}
        />
        <div
          className='absolute hidden md:block inset-0 bg-snow-700 opacity-75'
          aria-hidden='true'
        ></div>
      </div>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative mb-20'>
      
        <div className='relative pt-100 pb-10 mt7 md:pt-40 md:pb-16'>
          <div className=' mx-auto '>
          
            <div className='text-center mx-auto max-w-4xl pb-12 md:pb-16 '>
              <h1 className='h1' data-aos='fade-up' data-aos-delay='200'>
                Discover the{' '}
                <span className='text-transparent bg-clip-text  bg-gradient-to-r from-rose-600 via-amber-400 to-blue-700 '>
                  Hair Services
                </span>{' '}
                offered by the staff at JHL
              </h1>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}
