import Image from 'next/image'

import David from '@/public/images/davidL.png'
import Steve from '@/public/images/steve.png'

export default function ContentC() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-700'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h1 className='h1 mb-4'>
              A Legacy of{' '}
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-rose-600 via-amber-400 to-blue-700 '>
                Leadership
              </span>{' '}
            </h1>
          </div>

          {/*  */}
          <div className='max-w-sm mx-auto grid gap-8 lg:grid-cols-2  items-start lg:max-w-none'>
            {/* 1st Box */}
            <div
              className='flex flex-col h-full p-6 bg-gray-800 rounded-xl'
              data-aos='fade-up'
            >
              <div>
                <div className='  mb-4'>
                  <Image
                    className='rounded-xl'
                    src={David}
                    width={300}
                    height={200}
                    alt='Testimonial 01'
                    style={{ margin: 'auto', pointerEvents: 'none' }}
                  />
                </div>
              </div>

              <div className='text-snow-700 font-medium mt-6 pt-5 border-t border-gray-700'>
                <cite className='text-snow-200 not-italic text-xl'>
                  <span className='font-bold'>David Lowenstein</span>, President
                </cite>{' '}
              </div>
            </div>

            {/* 2nd Box */}
            <div
              className='flex flex-col h-full p-6 bg-gray-800 rounded-xl'
              data-aos='fade-up'
            >
              <div>
                <div className='  mb-4'>
                  <Image
                    className='rounded-xl'
                    src={Steve}
                    width={300}
                    height={200}
                    alt='Testimonial 01'
                    style={{ margin: 'auto', pointerEvents: 'none' }}
                  />
                </div>
              </div>

              <div className='text-snow-700 font-medium mt-6 pt-5 border-t border-gray-700'>
                <cite className='text-snow-200 not-italic text-xl'>
                  <span className='font-bold '>Steve Lowenstein</span>, Chairman
                </cite>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
