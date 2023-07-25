import Image from 'next/image'

import BKBridge from '@/public/images/testtubes.png'

export default function HeroContent() {
  return (
    <section>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-5 md:py-10'>
            {/* Section header */}
            <div className='text-center mx-auto max-w-4xl pb-12 md:pb-16 '>
              {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
              <h1 className='h1 mb-5' data-aos='fade-up' data-aos-delay='200'>
                Explore the{' '}
                <span className='text-transparent bg-clip-text  bg-gradient-to-r from-rose-600 via-amber-400 to-blue-700 '>
                  Hair Products
                </span>
              </h1>
              <div className='hidden md:block container'>
                {/* <h4
                  className='h4 text-gray-400 font-semibold hidden md:block'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  Our team at JHL is devoted to delivering the highest quality
                  of products to ensure our clients' satisfaction is always met
                </h4> */}
              </div>
            </div>

            {/* Items */}
            <div className='grid gap-20'>
              {/* 1st item */}
              <div className=' md:gap-6 items-center'>
                {/* Image */}
                <div
                  className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                  data-aos='fade-up'
                >
                  <Image
                    className='max-w-full mx-auto md:max-w-none h-auto'
                    src={BKBridge}
                    width={540}
                    height={405}
                    alt='Features 01'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
