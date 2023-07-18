'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

export default function LeatherProducts() {
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className='relative'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className='absolute inset-0  pointer-events-none mb-16'
        aria-hidden='true'
      ></div>
      {/* <div className='absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2'></div> */}

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-5 md:pt-5'>
          {/* Section content */}
          <div className='md:grid md:grid-cols-12 md:gap-6'>
            {/* Content */}
            <div
              className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6'
              data-aos='fade-right'
            >
              {/* Tabs buttons */}
              <div className='mb-8 text-center md:mb-0'>
                <a
                  className={`flex  items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? ' shadow-md border-transparent hover:shadow-lg'
                      : ' bg-violet-500 border-transparent'
                  }`}
                  href='#0'
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(1)
                  }}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Lowatan Retanning Agents, Syntans, & Auxiliaries
                    </div>
                  </div>
                </a>
              </div>
              <div className='mb-8 md:mb-0'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? ' shadow-md border-transparent hover:shadow-lg'
                      : ' bg-violet-500 border-transparent'
                  }`}
                  href='#0'
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(2)
                  }}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Lowenol Fatliquors
                    </div>
                  </div>
                </a>
              </div>
              <div className='mb-8 md:mb-0'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? 'shadow-md border-transparent hover:shadow-lg'
                      : 'bg-violet-500  border-transparent'
                  }`}
                  href='#0'
                  onClick={(e) => {
                    e.preventDefault()
                    setTab(3)
                  }}
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
                  className='relative flex flex-col text-center lg:text-left'
                  data-aos='zoom-y-out'
                  ref={tabs}
                >
                  {/*  Lowatan Retanning Agents, Syntans, & Auxiliaries */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className='w-full'
                    enter='transition ease-in-out duration-700 transform order-first'
                    enterFrom='opacity-0 translate-y-16'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in-out duration-300 transform absolute'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-16'
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className='relative inline-flex flex-col'>
                      <h3 className='h3'>
                        {' '}
                        Lowatan Retanning Agents, Syntans, & Auxiliaries
                      </h3>
                      <p className='text-gray-300  my-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN NNS:
                        </span>{' '}
                        <span className='font-semibold '>
                          anionic buffering syntan
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'>
                          LOWATAN AB:
                        </span>{' '}
                        <span className='font-semibold '>acid enzyme bate</span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>{' '}
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                    </div>
                  </Transition>
                  {/* Bleaching Products */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className='w-full'
                    enter='transition ease-in-out duration-700 transform order-first'
                    enterFrom='opacity-0 translate-y-16'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in-out duration-300 transform absolute'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-16'
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className='relative inline-flex flex-col'>
                      <h3 className='h3 '>Bleaching Products</h3>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                    </div>
                  </Transition>
                  {/* Stabilizing/ Cheating Agents */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className='w-full'
                    enter='transition ease-in-out duration-700 transform order-first'
                    enterFrom='opacity-0 translate-y-16'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in-out duration-300 transform absolute'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 -translate-y-16'
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className='relative inline-flex flex-col'>
                      <h3 className='h3'>Stabilizing/ Cheating Agents</h3>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-violet-500'></span>{' '}
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
