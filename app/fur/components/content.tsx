import Image from 'next/image'

import HairDye from '@/public/images/testtubes.png'

export default function Content() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 mb-20'>
        <div className='py-12 md:py-10 border-t border-gray-800'>
          <div className='grid gap-20'>
            {/* Dye Intermediate */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={HairDye}
                  width={540}
                  height={405}
                  alt='Fur Model'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <h4 className='h4 mb-3 text-emerald-500'>
                    FROM SINGLE, DOUBLE & TRIPLE REINFORCING
                  </h4>
                  <p className='text-lg text-gray-300 font-semibold'>
                    To oxidation dyeing to bright acid dyeing for sheepskin and
                    fine furs, such as mink, fox or sable, our technological
                    expertise and creative flair has distinguished JHL as the
                    leading supplier to the world’s fur dressers and dyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
