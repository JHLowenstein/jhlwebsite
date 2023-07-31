'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

export default function FurProducts() {
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
          <h1 className='h1 '>Fur Products</h1>
          <h4
            className='h4 text-gray-400 font-semibold my-3'
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
              {/* Lowenol Surfacants tab */}
              <div className='mb-0 nter md:mb-0 border-t border-gray-700'>
                <a
                  className={`flex  items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? ' shadow-md border-transparent hover:shadow-lg rounded'
                      : 'bg-emerald-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Tanning Products
                    </div>
                  </div>
                </a>
              </div>
              {/* Dyeing Products tab */}
              <div className='mb-0  border-t border-gray-700'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? 'shadow-md border-transparent hover:shadow-lg'
                      : 'bg-emerald-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(2)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Dyeing Products
                    </div>
                  </div>
                </a>
              </div>
              {/* Bleaching Products */}
              <div className='mb-0  border-t border-gray-700'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? ' shadow-md border-transparent hover:shadow-lg rounded'
                      : 'bg-emerald-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(3)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Bleaching Products
                    </div>
                  </div>
                </a>
              </div>
              {/* Protein Derivatives/ Conditioners */}
              <div className='mb-0  border-t border-gray-700'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 4
                      ? ' shadow-md border-transparent hover:shadow-lg rounded'
                      : 'bg-emerald-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(4)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Protein Derivatives/ Conditioners
                    </div>
                  </div>
                </a>
              </div>
              {/* Colors */}
              <div className='mb-0  border-t border-gray-700'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 5
                      ? ' shadow-md border-transparent hover:shadow-lg rounded'
                      : 'bg-emerald-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(5)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Colors
                    </div>
                  </div>
                </a>
              </div>
              {/* Shining Colors */}
              <div className='mb-0  border-t border-gray-700'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 6
                      ? ' shadow-md border-transparent hover:shadow-lg rounded'
                      : 'bg-emerald-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(6)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Shining Colors
                    </div>
                  </div>
                </a>
              </div>
              {/* Viscosity Builders */}
              <div className='mb-8 md:mb-0 border-t border-b border-gray-700'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 7
                      ? ' shadow-md border-transparent hover:shadow-lg rounded'
                      : 'bg-emerald-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(7)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Viscosity Builders
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
                  {/* Tanning Products */}
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
                      <h3 className='h3 mb-3 '>Tanning Products</h3>
                      <h4 className='h4 mb-3'>Soaking and Degreasing Agents</h4>

                      <p className='text-gray-300  my-3'>
                        <span className='font-bold text-emerald-500'>
                          DE-SOL-A:
                        </span>{' '}
                        <span className='font-semibold '>
                          solvent base detergent
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          ELBRO 100-C:
                        </span>{' '}
                        <span className='font-semibold '>(see “enzymes“)</span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LP-12-G/LP-12-B:
                        </span>{' '}
                        <span className='font-semibold '>
                          nonionic degreasing agent (see “reinforcing
                          auxiliaries“)
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          ECO SOLVO B:
                        </span>{' '}
                        <span className='font-semibold '>
                          nonionic solvent-soluble emulsifier/detergent.
                        </span>
                      </p>
                      <p className='text-gray-300  my-3'>
                        <span className='font-bold text-emerald-500'>
                          ECO WETTER HAC / WETTER GLE:{' '}
                        </span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                    </div>
                  </Transition>
                  {/* Dyeing Products */}
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
                      <h3 className='h3 '>Dyeing Products</h3>
                      <p className='text-gray-300  my-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                    </div>
                  </Transition>
                  {/* Bleaching Products */}
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
                      <h3 className='h3'>Bleaching Products</h3>
                      <p className='text-gray-300  my-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                    </div>
                  </Transition>
                  {/* Protein Derivatives/ Conditioners */}
                  <Transition
                    show={tab === 4}
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
                      id='category-4'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3 mb-3'>
                        Protein Derivatives/ Conditioners
                      </h3>
                      <p className='text-gray-300  my-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                    </div>
                  </Transition>
                  {/* Colors */}
                  <Transition
                    show={tab === 5}
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
                      id='category-5'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3 mb-3'>Colors</h3>
                      <p className='text-gray-300  my-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-semibold '></span>
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
