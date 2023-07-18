import Image from 'next/image'

import BKBridge from '@/public/images/jhl11.svg'
import Models from '@/public/images/models.png'

export default function Content() {
  return (
    <section>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-12 md:py-20 border-t border-gray-700'>
            {/* Section header */}
            <div className='max-w-4xl mx-auto  pb-12 md:pb-16 text-center'>
              {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
              <h2 className='h2' data-aos='fade-up' data-aos-delay='200'>
                State-of-The Art Facilities Around the World Complement Our{' '}
                <span className='text-transparent bg-clip-text  bg-gradient-to-r from-rose-600 via-amber-400 to-blue-700 '>
                  Innovative Color
                </span>
              </h2>
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
                    <h3 className='h3 mb-3 cursor-default text-gray-300'>
                      HeadQuarters
                    </h3>
                    <p className='text-gray-400 mb-4 text-xl font-bold'>
                      At JHL, we prioritize staying at the forefront of
                      technological advancements. To ensure this, we
                      consistently update and enhance our corporate headquarters
                      in New York, which includes five state-of-the-art research
                      and quality control laboratories. These cutting-edge
                      facilities enable our dedicated team of researchers and
                      scientists to conduct rigorous testing, analysis, and
                      development of our products.
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
                    src={Models}
                    width={240}
                    height={105}
                    alt='Features 02'
                  />
                </div>
                {/* Content */}
                <div
                  className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                  data-aos='fade-left'
                >
                  <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                    <h3 className='h3 mb-3 text-gray-300'>
                      Leading Technology
                    </h3>
                    <p className='text-gray-400 font-bold text-xl mb-4'>
                      Our commitment to quality and consistency is supported by
                      state-of-the-art instrumentation. We utilize advanced
                      equipment such as Gas Chromatographs, High-pressure Liquid
                      Chromatographs, Infrared Spectrophotometers, and color
                      measurement software. These cutting-edge tools ensure that
                      every product meets our stringent quality standards and
                      maintains consistent excellence.
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
                    <h3 className='h3 mb-3'>Global Distribution</h3>
                    <p className='text-gray-400 mb-4 text-xl font-bold'>
                      With over 100,000 square feet of manufacturing and
                      warehouse space, we have the capacity to handle both large
                      multi-ton orders and small one-color requests. Our global
                      network of distribution facilities ensures efficient
                      product delivery across various locations. Additionally,
                      we have a dedicated team of scientists, product marketing
                      specialists, expert sales agents, and customer service
                      representatives who are committed to providing exceptional
                      support. No matter the scale or complexity of your needs,
                      JHL is uniquely prepared to fulfill them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
