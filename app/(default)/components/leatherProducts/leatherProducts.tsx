'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

export default function HairProducts() {
  const [tab, setTab] = useState<number>(1)
  const tabsContainerRef = useRef<HTMLDivElement>(null) // Reference to the parent container of the tabs

  const heightFix = () => {
    if (tabsContainerRef.current && tabsContainerRef.current.parentElement)
      tabsContainerRef.current.parentElement.style.height = `${tabsContainerRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  const handleTabClick = (index: number) => {
    setTab(index)

    // Find the corresponding category element and scroll to it
    const categoryElement = document.getElementById(`category-${index}`)
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const isMobile = window.innerWidth <= 768
  return (
    <section className='relative my-20'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className='container'></div>

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-5 md:pt-5'>
          <h1 className='h1 '>Leather Products</h1>
          <h4
            className='h4 text-snow-400 font-semibold my-3'
            data-aos='fade-up'
            data-aos-delay='200'
          >
            Our team at JHL is devoted to delivering the highest <br /> quality
            of products to ensure our clients' satisfaction <br /> is always
            met.
          </h4>
          {/* Section content */}
          <div className='md:grid md:grid-cols-12 md:gap-6'>
            {/* Content */}
            <div
              className={
                `max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6 ${
                  isMobile ? 'md:overflow-y-auto' : ''
                }` /* Add scroll behavior on mobile */
              }
              data-aos='fade-right'
            >
              {/* Tabs buttons */}
              {/* Lowatan Retanning Agents, Syntans, & Auxiliaries tab */}
              <div className='mb-0 nter md:mb-0 border-t border-gray-700'>
                <a
                  className={`flex  items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? ' shadow-md border-transparent hover:shadow-lg rounded'
                      : 'bg-violet-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Lowatan Retanning Agents, Syntans, & Auxiliaries
                    </div>
                  </div>
                </a>
              </div>
              {/* Lowenol Fatliquors */}
              <div className='mb-0  border-t border-gray-700'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? 'shadow-md border-transparent hover:shadow-lg'
                      : 'bg-violet-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(2)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Lowenol Fatliquors
                    </div>
                  </div>
                </a>
              </div>
              {/* Lowapel Dyes */}
              <div className='mb-0  border-t border-gray-700'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? ' shadow-md border-transparent hover:shadow-lg rounded'
                      : 'bg-violet-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(3)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Lowapel Dyes
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs Items */}
            <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'>
              <div className='transition-all'>
                <div
                  className={
                    `max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 ${
                      isMobile ? 'md:overflow-y-hidden' : ''
                    }` /* Hide scroll on mobile */
                  }
                  ref={tabsContainerRef}
                >
                  {/* Lowenol Surfactants */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className='w-full'
                    enter='transition ease-in-out duragray-700 transform order-first'
                    enterFrom='opacity-0 translate-y-16'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in-out duration-300 transform absolute'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-16'
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div
                      id='category-1'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3 '>
                        Lowatan Retanning Agents, Syntans, & Auxiliaries
                      </h3>

                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan NNS:
                        </span>{' '}
                        <span className='font-semibold '>
                          anionic buffering syntan
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan AB:
                        </span>{' '}
                        <span className='font-semibold '>acid enzyme bate</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan GP:
                        </span>{' '}
                        <span className='font-semibold '>
                          replacement syntan - general use
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan COM LIQ:
                        </span>{' '}
                        <span className='font-semibold '>
                          compact retan/fatliquor
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan WL:
                        </span>{' '}
                        <span className='font-semibold '>
                          white replacement syntan
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan AS
                        </span>{' '}
                        <span className='font-semibold '>
                          aluminum-containing retanning agent
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan AM:
                        </span>{' '}
                        <span className='font-semibold '>
                          {' '}
                          amphoteric replacement syntan
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan CR:
                        </span>{' '}
                        <span className='font-semibold '>chrome syntan</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan TS:
                        </span>{' '}
                        <span className='font-semibold '>
                          tanning/retanning of Cr-free leather
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan RPE LIQUID:
                        </span>{' '}
                        <span className='font-semibold '>
                          acid acrylic resin
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan NR LIQUID:
                        </span>{' '}
                        <span className='font-semibold '>
                          acrylic copolymer
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan DC:
                        </span>{' '}
                        <span className='font-semibold '>
                          di-cyanamide resin
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan SD LIQUID:
                        </span>{' '}
                        <span className='font-semibold '>
                          Mildly cationic shade deepening agent
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan DN:
                        </span>{' '}
                        <span className='font-semibold '>
                          special surface masking/bleaching agent
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          Lowatan FILLER P:
                        </span>{' '}
                        <span className='font-semibold '>
                          general purpose protein type filler
                        </span>
                      </p>
                    </div>
                  </Transition>
                  {/* Lowenol Fatliquors */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className='w-full'
                    enter='transition ease-in-out duragray-700 transform order-first'
                    enterFrom='opacity-0 translate-y-16'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in-out duration-300 transform absolute'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-16'
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div
                      id='category-2'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3 '>Lowenol Fatliquors</h3>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL AMO:
                        </span>{' '}
                        <span className='font-semibold '>
                          alkaline based neatsfoot
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BMO:
                        </span>{' '}
                        <span className='font-semibold '>
                          bisulfited marine oil - highly concentrated
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BSN:
                        </span>{' '}
                        <span className='font-semibold '>
                          non-yellowing, non-oxydizing oil for whites
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL DMS:
                        </span>{' '}
                        <span className='font-semibold '>
                          sulphated/sulphited marine oil
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL EML:
                        </span>{' '}
                        <span className='font-semibold '>
                          general use synthetic oil
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL NZB:
                        </span>{' '}
                        <span className='font-semibold '>sulfated lanolin</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL WP:
                        </span>{' '}
                        <span className='font-semibold '>
                          waterproofing fatliquor
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL SO-67:
                        </span>{' '}
                        <span className='font-semibold '>
                          synthetic neatsfoot solvent fatliquor
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL CAT:
                        </span>{' '}
                        <span className='font-semibold '>
                          cationic topping oil
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL GHB:
                        </span>{' '}
                        <span className='font-semibold '>
                          natural and synthetic oil
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL SOFT MSW:
                        </span>{' '}
                        <span className='font-semibold '>
                          sulfated oil for very soft leathers
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL TRS:
                        </span>{' '}
                        <span className='font-semibold '>
                          synthetic & natural sulphited/sulphated oil
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BMD:
                        </span>{' '}
                        <span className='font-semibold '>
                          cationic wax and paraffins
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL BKD:
                        </span>{' '}
                        <span className='font-semibold '>
                          cationic stuffing wax for pull-up
                        </span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWENOL LFC:
                        </span>{' '}
                        <span className='font-semibold '>
                          high-quality, low-fog fatliquor
                        </span>
                      </p>
                    </div>
                  </Transition>
                  {/* LOWAPEL */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className='w-full'
                    enter='transition ease-in-out duragray-700 transform order-first'
                    enterFrom='opacity-0 translate-y-16'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in-out duration-300 transform absolute'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-16'
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div
                      id='category-3'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3'>Lowapel</h3>
                      <p className='text-snow-300  my-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black JET 160 %</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black EX-1</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black JP</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black Magic</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black SSb</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Black NT 250%</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown HH 150%</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown NGB</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown BNR</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown MFR</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown CB</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown CR</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown NT</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown NR</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown B2C</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brown SSN</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Olive Brown N</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Yellow Brown GS</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Yellow GG</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Brilliant Red 2B</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Red R</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Blue BB</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Blue 2RN</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Dark Green NH</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Beige ET</span>
                      </p>
                      <p className='text-snow-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWAPEL:
                        </span>{' '}
                        <span className='font-semibold '>Grey GLN</span>
                      </p>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
