import Image from 'next/image'

import David from '@/public/images/davidL.png'
import Steve from '@/public/images/steve.png'

export default function Testimonials() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='h2 mb-4'>A Legacy of Leadership</h2>
          </div>

          {/*  */}
          <div className='max-w-sm mx-auto grid gap-8 lg:grid-cols-2  items-start lg:max-w-none'>
            {/* 1st Box */}
            <div
              className='flex flex-col h-full p-6 bg-gray-800'
              data-aos='fade-up'
            >
              <div>
                <div className='  mb-4'>
                  <Image
                    src={David}
                    width={300}
                    height={200}
                    alt='Testimonial 01'
                    style={{ margin: 'auto' }}
                  />
                </div>
              </div>

              <div className='text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700'>
                <cite className='text-gray-200 not-italic'>
                  <span className='font-bold'>David Lowenstein</span>, President
                </cite>{' '}
                -{' '}
              </div>
            </div>

            {/* 2nd Box */}
            <div
              className='flex flex-col h-full p-6 bg-gray-800'
              data-aos='fade-up'
            >
              <div>
                <div className='  mb-4'>
                  <Image
                    src={Steve}
                    width={300}
                    height={200}
                    alt='Testimonial 01'
                    style={{ margin: 'auto' }}
                  />
                </div>
              </div>

              <div className='text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700'>
                <cite className='text-gray-200 not-italic'>
                  <span className='font-bold'>Steve Lowenstein</span>, Chairman
                </cite>{' '}
                -{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
