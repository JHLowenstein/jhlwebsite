import Image from 'next/image'

import Services from '@/public/images/servicesCover.jpg'

export default function Hero() {
  return (
    <section className='relative mb-20'>
      <div className='absolute inset-0'>
        <div
          className='absolute -inset-12 bg-gray-700 opacity-75'
          aria-hidden='true'
        ></div>
        <Image
          className='w-screen h-auto object-cover'
          src={Services}
          width={1440}
          height={380}
          priority
          alt='Services'
        />
      </div>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative mb-20'>
        {/* Hero content */}
        <div className='relative pt-100 pb-10 mt7 md:pt-40 md:pb-16'>
          <div className=' mx-auto '>
            {/* Section header */}
            <div className='text-center mx-auto max-w-4xl pb-12 md:pb-16 '>
              {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
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
      </div>
    </section>
  )
}
