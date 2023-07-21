'use client'

import { useState, useRef, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Transition } from '@headlessui/react'

import WorldImage from '@/public/images/worldmap.png'
import UserImage01 from '@/public/images/hex1.png'
import UserImage02 from '@/public/images/hex1.png'
import UserImage03 from '@/public/images/hex1.png'
import UserImage04 from '@/public/images/hex1.png'
import UserImage05 from '@/public/images/hex1.png'
import UserImage06 from '@/public/images/hex1.png'
import UserImage07 from '@/public/images/hex1.png'
import UserImage08 from '@/public/images/hex1.png'

export default function TestimonialsCarousel() {
  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const [autorotateTiming] = useState<number>(7000)

  interface Item {
    img: StaticImageData
    alt: string
    quote: string
    name: string
    font1: string
    font2: string
  }

  const items: Item[] = [
    {
      img: UserImage01,
      alt: 'North America',
      quote:
        'JHL caters to a wide range of clients based in the United States, Mexico and Puerto Rico.',
      name: 'NORTH AMERICA',
      font1: 'text-rose-500',
      font2: 'text-lg text-gray-400',
    },
    {
      img: UserImage02,
      alt: 'South America',
      quote:
        'JHL caters to a wide range of clients based in Argentina, Brazil, Colombia, Ecuador and Venezuela',
      name: 'SOUTH AMERICA',
      font1: 'text-orange-500 not-italic',
      font2: 'text-lg text-gray-400',
    },
    {
      img: UserImage03,
      alt: 'Asia/ Middle East',
      quote:
        'JHL caters to a wide range of clients based in Belarus, China, Hong Kong, India, Indonesia, Israel, Japan, Korea, Lebanon, Malaysia, Philippines, Pakistan, Russia, Singapore, Sri Lanka, Turkey, Taiwan, Thailand and Vietnam',
      name: 'ASIA/ MIDDLE EAST',
      font1: 'text-emerald-500',
      font2: 'text-lg text-gray-400',
    },
    {
      img: UserImage03,
      alt: 'Australia',
      quote: 'JHL caters to a wide range of clients based throughout Australia',
      name: 'Australia',
      font1: 'text-sky-500',
      font2: 'text-lg text-gray-400',
    },
    {
      img: UserImage03,
      alt: 'Europe',
      quote: '',
      name: '',
      font1: 'text-amber-500',
      font2: 'text-lg text-gray-400',
    },
    {
      img: UserImage03,
      alt: '',
      quote: '',
      name: '',
      font1: 'text-violet-500',
      font2: 'text-lg text-gray-400',
    },
  ]

  const testimonials = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : (active) => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonials.current && testimonials.current.parentElement)
      testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800'>
          {/* Section header */}
          <div
            className='max-w-3xl mx-auto text-center pb-12 md:pb-16'
            data-aos-id-testimonialcar
          >
            <h2
              className='h2 text-center mx-auto max-w-4l mt-10 mb-10'
              data-aos='fade-up'
            >
              Our Clients{' '}
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-rose-600 via-amber-400 to-blue-700 '>
                Span the Globe{' '}
              </span>
            </h2>
            <p
              className='text-xl text-center  max-w-4l  text-gray-400 my-10'
              data-aos='fade-up'
            >
              We have a widespread network of distributors, partners, and
              representatives, enabling us to reach clients in different corners
              of the world. From North America to Europe, Asia, and beyond, our
              reach extends far and wide, allowing us to cater to the needs of
              clients globally.
            </p>
          </div>

          {/* Check list */}
          <div className='max-w-3xl mx-auto pb-16'>
            <ul className='flex flex-col sm:flex-row flex-wrap justify-center items-center text-lg text-gray-400 -mx-3 -my-2'>
              <li
                className='flex items-center mx-3 my-2'
                data-aos='fade-up'
                data-aos-delay='400'
                data-aos-anchor='[data-aos-id-testimonialcar]'
              >
                <svg
                  className='w-6 h-6 mr-3 shrink-0'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    className='fill-current text-rose-500'
                    cx='12'
                    cy='12'
                    r='12'
                  />
                </svg>
                <span className=''>NORTH AMERICA</span>
              </li>
              <li
                className='flex items-center mx-3 my-2'
                data-aos='fade-up'
                data-aos-delay='500'
                data-aos-anchor='[data-aos-id-testimonialcar]'
              >
                <svg
                  className='w-6 h-6 mr-3 shrink-0'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    className='fill-current text-orange-500'
                    cx='12'
                    cy='12'
                    r='12'
                  />
                </svg>
                <span>SOUTH AMERICA</span>
              </li>
              <li
                className='flex items-center mx-3 my-2'
                data-aos='fade-up'
                data-aos-delay='600'
                data-aos-anchor='[data-aos-id-testimonialcar]'
              >
                <svg
                  className='w-6 h-6 mr-3 shrink-0'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    className='fill-current text-emerald-500'
                    cx='12'
                    cy='12'
                    r='12'
                  />
                </svg>
                <span>ASIA/MIDDLE EAST</span>
              </li>
              <li
                className='flex items-center mx-3 my-2'
                data-aos='fade-up'
                data-aos-delay='700'
                data-aos-anchor='[data-aos-id-testimonialcar]'
              >
                <svg
                  className='w-6 h-6 mr-3 shrink-0'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    className='fill-current text-sky-500'
                    cx='12'
                    cy='12'
                    r='12'
                  />
                </svg>
                <span>AUSTRALIA</span>
              </li>
              <li
                className='flex items-center mx-3 my-2'
                data-aos='fade-up'
                data-aos-delay='800'
                data-aos-anchor='[data-aos-id-testimonialcar]'
              >
                <svg
                  className='w-6 h-6 mr-3 shrink-0'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    className='fill-current text-amber-500'
                    cx='12'
                    cy='12'
                    r='12'
                  />
                </svg>
                <span>EUROPE</span>
              </li>
              <li
                className='flex items-center mx-3 my-2'
                data-aos='fade-up'
                data-aos-delay='800'
                data-aos-anchor='[data-aos-id-testimonialcar]'
              >
                <svg
                  className='w-6 h-6 mr-3 shrink-0'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    className='fill-current text-violet-500'
                    cx='12'
                    cy='12'
                    r='12'
                  />
                </svg>
                <span>AFRICA</span>
              </li>
            </ul>
          </div>

          {/* Carousel area*/}
          <div className='max-w-2xl mx-auto'>
            {/* World map */}
            <div className='py-12'>
              <div className='relative'>
                {/* Map */}
                <div
                  className='absolute inset-0 flex justify-center items-end'
                  aria-hidden='true'
                >
                  <div
                    className='bottom-0 border-l border-dashed border-gray-500 transform translate-y-8'
                    style={{ height: '50%' }}
                  ></div>
                </div>
                {/* People pics */}
                <Image
                  src={WorldImage}
                  width={672}
                  height={330}
                  alt='World map'
                />
                <Image
                  className='absolute rounded-full'
                  style={{ top: '22%', left: '52%' }}
                  src={UserImage01}
                  width={32}
                  height={32}
                  alt='User 01'
                  data-aos='fade-up'
                />
                <Image
                  className='absolute rounded-full'
                  style={{ top: '50%', left: '58%' }}
                  src={UserImage02}
                  width={48}
                  height={48}
                  alt='User 02'
                  data-aos='fade-up'
                  data-aos-delay='400'
                />
                <Image
                  className='absolute rounded-full'
                  style={{ top: '8.5%', left: '70.5%' }}
                  src={UserImage03}
                  width={56}
                  height={56}
                  alt='User 02'
                  data-aos='fade-up'
                  data-aos-delay='100'
                />
                <Image
                  className='absolute rounded-full'
                  style={{ top: '34%', left: '76.5%' }}
                  src={UserImage04}
                  width={72}
                  height={72}
                  alt='User 04'
                  data-aos='fade-up'
                  data-aos-delay='700'
                />
                <Image
                  className='absolute rounded-full'
                  style={{ top: '29.5%', left: '8.5%' }}
                  src={UserImage05}
                  width={48}
                  height={48}
                  alt='User 05'
                  data-aos='fade-up'
                  data-aos-delay='500'
                />
                <Image
                  className='absolute rounded-full'
                  style={{ top: '56%', left: '19%' }}
                  src={UserImage06}
                  width={56}
                  height={56}
                  alt='User 06'
                  data-aos='fade-up'
                  data-aos-delay='200'
                />
                <Image
                  className='absolute rounded-full'
                  style={{ top: '20%', left: '24.5%' }}
                  src={UserImage07}
                  width={64}
                  height={64}
                  alt='User 07'
                  data-aos='fade-up'
                  data-aos-delay='600'
                />
                <Image
                  className='absolute rounded-full'
                  style={{ top: '39%', left: '43%' }}
                  src={UserImage08}
                  width={40}
                  height={40}
                  alt='User 08'
                  data-aos='fade-up'
                  data-aos-delay='300'
                />
              </div>
            </div>

            {/* Carousel */}
            <div className='mt-6'>
              {/* Testimonials */}
              <div className='transition-all'>
                <div
                  className='relative flex flex-col items-start'
                  ref={testimonials}
                >
                  {items.map((item, index) => (
                    <Transition
                      key={index}
                      show={active === index}
                      className='text-center'
                      enter='transition ease-in-out duration-500 transform order-first'
                      enterFrom='opacity-0 scale-98'
                      enterTo='opacity-100 scale-100'
                      leave='transition ease-out duration-300 transform absolute'
                      leaveFrom='opacity-100 scale-100'
                      leaveTo='opacity-0 scale-98'
                      beforeEnter={() => heightFix()}
                    >
                      <div className='relative inline-flex flex-col justify-center mb-4'>
                        <Image
                          className='rounded-full'
                          src={item.img}
                          width={56}
                          height={56}
                          alt={item.alt}
                        />
                      </div>
                      <div className='font-bold my-3'>
                        <span className={item.font1}>{item.name}</span>{' '}
                      </div>
                      <blockquote className={item.font2}>
                        {item.quote}
                      </blockquote>
                    </Transition>
                  ))}
                </div>
              </div>

              {/* Bullets */}
              <div className='flex justify-center mt-6'>
                {items.map((item, index) => (
                  <button
                    className='p-1 group'
                    key={index}
                    onClick={() => {
                      setActive(index)
                      setAutorotate(false)
                    }}
                  >
                    <span
                      className={`block w-2 h-2 rounded-full group-hover:bg-gray-400 transition duration-150 ease-in-out ${
                        active === index ? 'bg-gray-200' : 'bg-gray-500'
                      }`}
                    ></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Code with country lists
// import Image from 'next/image'
// import TargetImage from '@/public/images/jhl11.svg'
// import React, { useState } from 'react'

// export default function Countries() {
//   return (
//     <section>
//       <div className='max-w-6xl mx-auto px-4 sm:px-6 pb-20'>
//         {/* Section header */}

//         <div className='border-t border-gray-800'>
//           {/* Items */}
//           <div className='grid gap-20' data-aos-id-target>
//             {/* Item */}
//             <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
//               {/* Image */}
//               <div
//                 className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
//                 data-aos='fade-right'
//                 data-aos-delay='200'
//                 data-aos-anchor='[data-aos-id-target]'
//               >
//                 <div className=''>
//                   <div
//                     className='mt-6'
//                     data-aos='fade-left'
//                     data-aos-delay='200'
//                     data-aos-anchor='[data-aos-id-target]'
//                   >
//                     <h4 className='h4 mb-2 text-left text-rose-500'>
//                       North America
//                     </h4>
//                     <p className='text-lg text-gray-400 text-left'>
//                       United States <br /> Mexico <br /> Puerto Rico
//                     </p>
//                   </div>
//                   <div
//                     className='mt-6'
//                     data-aos='fade-left'
//                     data-aos-delay='400'
//                     data-aos-anchor='[data-aos-id-target]'
//                   >
//                     <h4 className='h4 mb-2 text-left text-sky-500'>
//                       South America
//                     </h4>
//                     <p className='text-lg text-gray-400 text-left'>
//                       Argentina <br /> Brazil <br /> Colombia <br /> Ecuador{' '}
//                       <br /> Venuzuela
//                     </p>
//                   </div>
//                   <div
//                     className='mt-6'
//                     data-aos='fade-left'
//                     data-aos-delay='600'
//                     data-aos-anchor='[data-aos-id-target]'
//                   >
//                     <h4 className='h4 mb-2 text-left text-emerald-500'>
//                       ASIA/MIDDLE EAST
//                     </h4>
//                     <div className='grid grid-cols-2 gap-4'>
//                       <p className='text-lg text-left text-gray-400'>
//                         {' '}
//                         Pakistan <br />
//                         Russia <br />
//                         Singapore <br />
//                         Sri Lanka <br />
//                         Turkey <br />
//                         Taiwan <br />
//                         Thailand <br />
//                         Vietnam
//                       </p>
//                       <p className='text-lg text-gray-400 text-left'>
// Belarus
// China
// Hong Kong
// India
// Indonesia
// Israel
// Japan
// Korea
// Lebanon
// Malaysia
// Philippines
// Pakistan
// Russia
// Singapore
// Sri Lanka
// Turkey
// Taiwan
// Thailand
// Vietnam
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'>
//                 <div className='md:pl-4 lg:pl-12 xl:pl-16'>
//                   <div
//                     className='mt-6'
//                     data-aos='fade-left'
//                     data-aos-delay='200'
//                     data-aos-anchor='[data-aos-id-target]'
//                   >
//                     <h4 className='h4 mb-2 text-amber-500'>Europe</h4>
//                     <p className='text-lg text-gray-400 '>
//                       France <br />
//                       Germany <br />
//                       Greece <br />
//                       Italy <br />
//                       Netherlands <br />
//                       Switzerland <br />
//                       Spain <br />
//                       United Kingdom <br />
//                       Bulgaria <br />
//                       Poland <br />
//                       Romania <br />
//                     </p>
//                   </div>
//                   <div
//                     className='mt-6'
//                     data-aos='fade-left'
//                     data-aos-delay='400'
//                     data-aos-anchor='[data-aos-id-target]'
//                   >
//                     <h4 className='h4 mb-2 text-violet-500'>Africa</h4>
//                     <p className='text-lg text-gray-400 '>
//                       Egypt <br /> South Africa
//                     </p>
//                   </div>
//                   <div
//                     className='mt-6'
//                     data-aos='fade-left'
//                     data-aos-delay='600'
//                     data-aos-anchor='[data-aos-id-target]'
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
