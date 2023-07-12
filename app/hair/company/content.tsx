import Image from 'next/image'

import BKBridge from '@/public/images/jhl11.svg'

export default function Content() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto  pb-12 md:pb-16'>
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h3 className='h3' data-aos='fade-up' data-aos-delay='200'>
              A Tradition of Excellence for Over 100 Years
            </h3>
          </div>

          {/* Items */}
          <div className='grid gap-20'>
            {/* 1st item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
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
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <h4 className='h4 mb-3 cursor-default text-gray-300'>
                    Since 1897
                  </h4>
                  <p className='text-gray-400 mb-4 text-bold'>
                    Jos. H. Lowenstein & Sons, Inc. has been providing the world
                    of fashion with brilliant, trend-setting colors for the fur,
                    hair and leather industries all over the world. From a
                    modest paint store in Brooklyn, New York to the
                    technologically driven, quality dyestuff manufacturer we are
                    today, JHL has prided itself on providing its customers with
                    state-of-the-art dye products and impeccable, personalized
                    service.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full mx-auto md:max-w-none h-auto'
                  src={BKBridge}
                  width={540}
                  height={405}
                  alt='Features 02'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-left'
              >
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <h4 className='h4 mb-3 text-rose-500'>Valued Clients</h4>
                  <p className='text-gray-400 mb-4'>
                    Our clients range from multinational, world-renowned
                    corporations to small, privately held companies. We have the
                    capabilities to meet large, multi-ton orders, as well as
                    small one-time requests.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
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
                  alt='Features 03'
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <div className='font-architects-daughter text-xl text-purple-600 mb-2'>
                    More speed. Less spend
                  </div>
                  <h3 className='h3 mb-3'>Keep projects on schedule</h3>
                  <p className='text-gray-400 mb-4'>
                    No matter what your dyeing needs, whether for consultation,
                    formulation, new color development or product line
                    enhancements, the chemists in all our laboratories are
                    available to help solve your specific requirements.
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
