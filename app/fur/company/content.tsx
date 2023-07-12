import Image from 'next/image'

import BKBridge from '@/public/images/jhl11.svg'
import Particles from '@/app/hair/components/particles'

export default function Content() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-5 md:py-20'>
          {/* Section header */}
          <div className='text-center mx-auto  pb-12 md:pb-16 '>
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h2 className='h2' data-aos='fade-up' data-aos-delay='200'>
              A Tradition of Excellence for Over 100 Years
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
                    Advancing Since 1897
                  </h3>
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
                  <h3 className='h3 mb-3 text-gray-300'>Valued Clients</h3>
                  <p className='text-gray-400 mb-4'>
                    We are proud to serve a wide range of clients, from
                    multinational, world-renowned corporations to small,
                    privately held companies. Our diverse customer base is a
                    testament to our ability to adapt and cater to various
                    business needs. Whether you require large, multi-ton orders
                    or have smaller, one-time requests, we have the resources to
                    accommodate your specific requirements.
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
                    consultation, formulation support, new color development, or
                    product line enhancements, our chemists are dedicated to
                    finding tailored solutions for your specific requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-700'>
          {/* Section header */}
          <div className='max-w-4xl mx-auto  pb-12 md:pb-16 text-center'>
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h2 className='h2' data-aos='fade-up' data-aos-delay='200'>
              State-of-The Art Facilities Around the World Complement Our
              Innovative Color
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
                  <p className='text-gray-400 mb-4 text-bold'>
                    At JHL, we prioritize staying at the forefront of
                    technological advancements. To ensure this, we consistently
                    update and enhance our corporate headquarters in New York,
                    which includes five state-of-the-art research and quality
                    control laboratories. These cutting-edge facilities enable
                    our dedicated team of researchers and scientists to conduct
                    rigorous testing, analysis, and development of our products.
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
                  <h3 className='h3 mb-3 text-gray-300'>
                    Cutting-Edge Technology
                  </h3>
                  <p className='text-gray-400 mb-4'>
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
                  <p className='text-gray-400 mb-4'>
                    With over 100,000 square feet of manufacturing and warehouse
                    space, we have the capacity to handle both large multi-ton
                    orders and small one-color requests. Our global network of
                    distribution facilities ensures efficient product delivery
                    across various locations. Additionally, we have a dedicated
                    team of scientists, product marketing specialists, expert
                    sales agents, and customer service representatives who are
                    committed to providing exceptional support. No matter the
                    scale or complexity of your needs, JHL is uniquely prepared
                    to fulfill them.
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
