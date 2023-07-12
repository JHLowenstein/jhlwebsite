import Image from 'next/image'

import BKBridge from '@/public/images/jhl11.svg'

export default function Content() {
  return (
    <section>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-5 md:py-20'>
            {/* Section header */}
            <div className='text-center mx-auto max-w-4xl pb-12 md:pb-16 '>
              {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
              <h1 className='h1' data-aos='fade-up' data-aos-delay='200'>
                We have Provided a Tradition of Excellence for Over 100 Years
              </h1>
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
                      Our Story
                    </h3>
                    <p className='text-gray-400 mb-4 text-bold'>
                      Since 1897, Jos. H. Lowenstein & Sons, Inc. has been
                      providing the world of fashion with brilliant,
                      trend-setting colors for the fur, hair and leather
                      industries all over the world. From a modest paint store
                      in Brooklyn, New York to the technologically driven,
                      quality dyestuff manufacturer we are today, JHL has prided
                      itself on providing its customers with state-of-the-art
                      dye products and impeccable, personalized service.
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
                    <h3 className='h3 mb-3 text-gray-300'>Valued Clients</h3>
                    <p className='text-gray-400 mb-4'>
                      We are proud to serve a wide range of clients, from
                      multinational, world-renowned corporations to small,
                      privately held companies. Our diverse customer base is a
                      testament to our ability to adapt and cater to various
                      business needs. Whether you require large, multi-ton
                      orders or have smaller, one-time requests, we have the
                      resources to accommodate your specific requirements.
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
                    <h3 className='h3 mb-3'>Customized Products</h3>
                    <p className='text-gray-400 mb-4'>
                      At JHL, we understand that each customer has unique dyeing
                      needs. That's why our team of experienced chemists in all
                      our laboratories is readily available to assist you
                      throughout the entire process. Whether you require
                      consultation, formulation support, new color development,
                      or product line enhancements, our chemists are dedicated
                      to finding tailored solutions for your specific
                      requirements.
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