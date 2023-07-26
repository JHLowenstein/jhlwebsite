'use client'

// import { useState, useRef, useEffect } from 'react'
// import { Transition } from '@headlessui/react'

// export default function HairProducts() {
//   const [tab, setTab] = useState<number>(1)

//   const tabs = useRef<HTMLDivElement>(null)

//   const heightFix = () => {
//     if (tabs.current && tabs.current.parentElement)
//       tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
//   }

//   useEffect(() => {
//     heightFix()
//   }, [])

//   return (
//     <section className='relative my-20'>
//       {/* Section background (needs .relative class on parent and next sibling elements) */}
//       <div className='container'></div>

//       <div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
//         <div className='pt-5 md:pt-5'>
//           <h1 className='h1 '>Hair Products</h1>
//           <h4
//             className='h4 text-gray-400 font-semibold my-3'
//             data-aos='fade-up'
//             data-aos-delay='200'
//           >
//             Our team at JHL is devoted to delivering the highest <br /> quality
//             of products to ensure our clients' satisfaction <br /> is always
//             met.
//           </h4>
//           {/* Section content */}
//           <div className='md:grid md:grid-cols-12 md:gap-6'>
//             {/* Content */}
//             <div
//               className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6'
//               data-aos='fade-right'
//             >
//               {/* Tabs buttons */}
//               {/* Lowenol Surfacants tab */}
//               <div className='mb-0 nter md:mb-0 border-t border-gray-700'>
//                 <a
//                   className={`flex  items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
//                     tab !== 1
//                       ? ' shadow-md border-transparent hover:shadow-lg rounded'
//                       : 'bg-rose-500 border-transparent'
//                   }`}
//                   onClick={(e) => {
//                     e.preventDefault()
//                     setTab(1)
//                   }}
//                 >
//                   <div>
//                     <div className='font-bold leading-snug tracking-tight mb-1'>
//                       Lowenol Surfactants
//                     </div>
//                   </div>
//                 </a>
//               </div>
//               {/* Bleaching Products tab */}
//               <div className='mb-0  border-t border-gray-700'>
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
//                     tab !== 2
//                       ? 'shadow-md border-transparent hover:shadow-lg'
//                       : 'bg-rose-500 border-transparent'
//                   }`}
//                   href='#0'
//                   onClick={(e) => {
//                     e.preventDefault()
//                     setTab(2)
//                   }}
//                 >
//                   <div>
//                     <div className='font-bold leading-snug tracking-tight mb-1'>
//                       Bleaching Products
//                     </div>
//                   </div>
//                 </a>
//               </div>
//               {/* Stabalizing / Chelating Agents */}
//               <div className='mb-0  border-t border-gray-700'>
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
//                     tab !== 3
//                       ? ' shadow-md border-transparent hover:shadow-lg rounded'
//                       : 'bg-rose-500 border-transparent'
//                   }`}
//                   href='#0'
//                   onClick={(e) => {
//                     e.preventDefault()
//                     setTab(3)
//                   }}
//                 >
//                   <div>
//                     <div className='font-bold leading-snug tracking-tight mb-1'>
//                       Stabalizing/ Chelating Agents
//                     </div>
//                   </div>
//                 </a>
//               </div>
//               {/* Protein Derivatives/ Conditioners */}
//               <div className='mb-0  border-t border-gray-700'>
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
//                     tab !== 4
//                       ? ' shadow-md border-transparent hover:shadow-lg rounded'
//                       : 'bg-rose-500 border-transparent'
//                   }`}
//                   href='#0'
//                   onClick={(e) => {
//                     e.preventDefault()
//                     setTab(4)
//                   }}
//                 >
//                   <div>
//                     <div className='font-bold leading-snug tracking-tight mb-1'>
//                       Protein Derivatives/ Conditioners
//                     </div>
//                   </div>
//                 </a>
//               </div>
//               {/* Colors */}
//               <div className='mb-0  border-t border-gray-700'>
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
//                     tab !== 5
//                       ? ' shadow-md border-transparent hover:shadow-lg rounded'
//                       : 'bg-rose-500 border-transparent'
//                   }`}
//                   onClick={(e) => {
//                     e.preventDefault()
//                     setTab(5)
//                   }}
//                 >
//                   <div>
//                     <div className='font-bold leading-snug tracking-tight mb-1'>
//                       Colors
//                     </div>
//                   </div>
//                 </a>
//               </div>
//               {/* Shining Colors */}
//               <div className='mb-0  border-t border-gray-700'>
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
//                     tab !== 6
//                       ? ' shadow-md border-transparent hover:shadow-lg rounded'
//                       : 'bg-rose-500 border-transparent'
//                   }`}
//                   onClick={(e) => {
//                     e.preventDefault()
//                     setTab(6)
//                   }}
//                 >
//                   <div>
//                     <div className='font-bold leading-snug tracking-tight mb-1'>
//                       Shining Colors
//                     </div>
//                   </div>
//                 </a>
//               </div>
//               {/* Viscosity Builders */}
//               <div className='mb-8 md:mb-0 border-t border-b border-gray-700'>
//                 <a
//                   className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
//                     tab !== 7
//                       ? ' shadow-md border-transparent hover:shadow-lg rounded'
//                       : 'bg-rose-500 border-transparent'
//                   }`}
//                   onClick={(e) => {
//                     e.preventDefault()
//                     setTab(7)
//                   }}
//                 >
//                   <div>
//                     <div className='font-bold leading-snug tracking-tight mb-1'>
//                       Viscosity Builders
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* Tabs Items */}
//             <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'>
//               <div className='transition-all'>
//                 <div
//                   className='relative flex flex-col text-center lg:text-left'
//                   data-aos='zoom-y-out'
//                   ref={tabs}
//                 >
//                   {/* Lowenol Surfactants */}
//                   <Transition
//                     show={tab === 1}
//                     appear={true}
//                     className='w-full'
//                     enter='transition ease-in-out duration-700 transform order-first'
//                     enterFrom='opacity-0 translate-y-16'
//                     enterTo='opacity-100 translate-y-0'
//                     leave='transition ease-in-out duration-300 transform absolute'
//                     leaveFrom='opacity-100 translate-y-0'
//                     leaveTo='opacity-0 -translate-y-16'
//                     beforeEnter={() => heightFix()}
//                     unmount={false}
//                   >
//                     <div className='relative inline-flex flex-col'>
//                       <h3 className='h3 '>Lowenol Surfactants</h3>
//                       <p className='text-gray-300  my-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL C-9685:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Nonionic foam stabilizing/dispersing agent/viscosity
//                           controlling agent for shampoos and hair colors.
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL S-216X:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Mildly cationic dye leveling and viscosity controlling
//                           agent for oxidation hair color systems (soya based).
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL 1985A, LOWENOL 1985B, LOWENOL T-163, LOWENOL
//                           T-163A:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Weakly cationic surfactant for semi-permanent hair
//                           color systems.
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL 6559:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Nonionic emulsifying agent used to prepare high,
//                           medium, and low-viscosity cream developers and as a
//                           base for various hair-care creams.
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL COPOLYMER 725:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Cationic polyquaternium surfactant used in
//                           semi-permanent liquid hair color system.
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL COPOLYMER 1097:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Cationic polyquarternium surfactant used in
//                           semi-permanent cream hair color system.
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL EMULSION 80:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Emulsifying agent/opacifying agent for cream oxidation
//                           hair color system.
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL T-163:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Weak cationic surfactant for semi-permanent hair color
//                           system.
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL SOLVENT 4996:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Nonionic solvent system specially designed for
//                           semi-permanent hair color system.
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL EMULSION LAO:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Emulsifying agent that masks Ammonia malodor with
//                           consistency ideal for professional market.
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL EMULSION LAO-NT:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Emulsifying agent that masks Ammonia malodor with
//                           consistency ideal for retail market.
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'>
//                           LOWENOL EMULSION PEARLESCENT:
//                         </span>{' '}
//                         <span className='font-semibold '>
//                           Emulsifying agent that gives finished cream hair color
//                           and cream developer pearlescent appearance.
//                         </span>
//                       </p>
//                       <p className='text-gray-300  mb-3'>
//                         <span className='font-bold text-rose-500'></span>{' '}
//                         <span className='font-semibold '></span>
//                       </p>
//                     </div>
//                   </Transition>
//                   {/* Bleaching Products */}
//                   <Transition
//                     show={tab === 2}
//                     appear={true}
//                     className='w-full'
//                     enter='transition ease-in-out duration-700 transform order-first'
//                     enterFrom='opacity-0 translate-y-16'
//                     enterTo='opacity-100 translate-y-0'
//                     leave='transition ease-in-out duration-300 transform absolute'
//                     leaveFrom='opacity-100 translate-y-0'
//                     leaveTo='opacity-0 -translate-y-16'
//                     beforeEnter={() => heightFix()}
//                     unmount={false}
//                   >

//                   </Transition>
//                   {/* Stabilizing/ Cheating Agents */}
//                   <Transition
//                     show={tab === 3}
//                     appear={true}
//                     className='w-full'
//                     enter='transition ease-in-out duration-700 transform order-first'
//                     enterFrom='opacity-0 translate-y-16'
//                     enterTo='opacity-100 translate-y-0'
//                     leave='transition ease-in-out duration-300 transform absolute'
//                     leaveFrom='opacity-100 translate-y-0'
//                     leaveTo='opacity-0 -translate-y-16'
//                     beforeEnter={() => heightFix()}
//                     unmount={false}
//                   >

//                   </Transition>
//                   {/* Protein Derivatives/ Conditioners */}
//                   <Transition
//                     show={tab === 4}
//                     appear={true}
//                     className='w-full'
//                     enter='transition ease-in-out duration-700 transform order-first'
//                     enterFrom='opacity-0 translate-y-16'
//                     enterTo='opacity-100 translate-y-0'
//                     leave='transition ease-in-out duration-300 transform absolute'
//                     leaveFrom='opacity-100 translate-y-0'
//                     leaveTo='opacity-0 -translate-y-16'
//                     beforeEnter={() => heightFix()}
//                     unmount={false}
//                   >
//                     <div className='relative inline-flex flex-col'>
//                       <h3 className='h3 mb-3'>
//                         Protein Derivatives/ Conditioners
//                       </h3>

//                     </div>
//                   </Transition>
//                   {/* Colors */}
//                   <Transition
//                     show={tab === 5}
//                     appear={true}
//                     className='w-full'
//                     enter='transition ease-in-out duration-700 transform order-first'
//                     enterFrom='opacity-0 translate-y-16'
//                     enterTo='opacity-100 translate-y-0'
//                     leave='transition ease-in-out duration-300 transform absolute'
//                     leaveFrom='opacity-100 translate-y-0'
//                     leaveTo='opacity-0 -translate-y-16'
//                     beforeEnter={() => heightFix()}
//                     unmount={false}
//                   >
//                     <div className='relative inline-flex flex-col'>
//                       <h3 className='h3 mb-3'>Colors</h3>
//                       <h6 className='h6 mb-3 font-bold'>
//                         Direct (Non-Oxidation) Colors for Semi-Permanent Hair
//                         Color Systems
//                       </h6>

//                     </div>
//                   </Transition>
//                   {/* Shining Colors */}
//                   <Transition
//                     show={tab === 6}
//                     appear={true}
//                     className='w-full'
//                     enter='transition ease-in-out duration-700 transform order-first'
//                     enterFrom='opacity-0 translate-y-16'
//                     enterTo='opacity-100 translate-y-0'
//                     leave='transition ease-in-out duration-300 transform absolute'
//                     leaveFrom='opacity-100 translate-y-0'
//                     leaveTo='opacity-0 -translate-y-16'
//                     beforeEnter={() => heightFix()}
//                     unmount={false}
//                   >
//                     <div className='relative inline-flex flex-col'>
//                       <h3 className='h3 '>Shining Colors</h3>

//                     </div>
//                   </Transition>
//                   {/* Viscosity Builders */}
//                   <Transition
//                     show={tab === 7}
//                     appear={true}
//                     className='w-full'
//                     enter='transition ease-in-out duration-700 transform order-first'
//                     enterFrom='opacity-0 translate-y-16'
//                     enterTo='opacity-100 translate-y-0'
//                     leave='transition ease-in-out duration-300 transform absolute'
//                     leaveFrom='opacity-100 translate-y-0'
//                     leaveTo='opacity-0 -translate-y-16'
//                     beforeEnter={() => heightFix()}
//                     unmount={false}
//                   >
//                     <div className='relative inline-flex flex-col'>
//                       <h3 className='h3 '>Viscosity Builders</h3>

//                     </div>
//                   </Transition>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

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
          <h1 className='h1 '>Hair Products</h1>
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
                      : 'bg-rose-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(1)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Lowenol Surfactants
                    </div>
                  </div>
                </a>
              </div>
              {/* Bleaching Products tab */}
              <div className='mb-0  border-t border-gray-700'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? 'shadow-md border-transparent hover:shadow-lg'
                      : 'bg-rose-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(2)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Bleaching Products
                    </div>
                  </div>
                </a>
              </div>
              {/* Stabalizing / Chelating Agents */}
              <div className='mb-0  border-t border-gray-700'>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? ' shadow-md border-transparent hover:shadow-lg rounded'
                      : 'bg-rose-500 border-transparent'
                  }`}
                  onClick={() => handleTabClick(3)}
                >
                  <div>
                    <div className='font-bold leading-snug tracking-tight mb-1'>
                      Stabilizing/ Chelating Agents
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
                      : 'bg-rose-500 border-transparent'
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
                      : 'bg-rose-500 border-transparent'
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
                      : 'bg-rose-500 border-transparent'
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
                      : 'bg-rose-500 border-transparent'
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
                  {/* Lowenol Surfactants */}
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
                    <div
                      id='category-1'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3 '>Lowenol Surfactants</h3>
                      <p className='text-gray-300  my-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL C-9685:
                        </span>{' '}
                        <span className='font-semibold '>
                          Nonionic foam stabilizing/dispersing agent/viscosity
                          controlling agent for shampoos and hair colors.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL S-216X:
                        </span>{' '}
                        <span className='font-semibold '>
                          Mildly cationic dye leveling and viscosity controlling
                          agent for oxidation hair color systems (soya based).
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL 1985A, LOWENOL 1985B, LOWENOL T-163, LOWENOL
                          T-163A:
                        </span>{' '}
                        <span className='font-semibold '>
                          Weakly cationic surfactant for semi-permanent hair
                          color systems.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL 6559:
                        </span>{' '}
                        <span className='font-semibold '>
                          Nonionic emulsifying agent used to prepare high,
                          medium, and low-viscosity cream developers and as a
                          base for various hair-care creams.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL COPOLYMER 725:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquaternium surfactant used in
                          semi-permanent liquid hair color system.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL COPOLYMER 1097:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquarternium surfactant used in
                          semi-permanent cream hair color system.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL EMULSION 80:
                        </span>{' '}
                        <span className='font-semibold '>
                          Emulsifying agent/opacifying agent for cream oxidation
                          hair color system.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL T-163:
                        </span>{' '}
                        <span className='font-semibold '>
                          Weak cationic surfactant for semi-permanent hair color
                          system.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL SOLVENT 4996:
                        </span>{' '}
                        <span className='font-semibold '>
                          Nonionic solvent system specially designed for
                          semi-permanent hair color system.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL EMULSION LAO:
                        </span>{' '}
                        <span className='font-semibold '>
                          Emulsifying agent that masks Ammonia malodor with
                          consistency ideal for professional market.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL EMULSION LAO-NT:
                        </span>{' '}
                        <span className='font-semibold '>
                          Emulsifying agent that masks Ammonia malodor with
                          consistency ideal for retail market.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL EMULSION PEARLESCENT:
                        </span>{' '}
                        <span className='font-semibold '>
                          Emulsifying agent that gives finished cream hair color
                          and cream developer pearlescent appearance.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'></span>{' '}
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
                    <div
                      id='category-2'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3 '>Bleaching Products</h3>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-rose-500'>
                          BLEACHING CREAM:
                        </span>{' '}
                        <span className='font-semibold '>
                          Persulfates based anhydrous high lift bleaching
                          system.
                        </span>
                      </p>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-rose-500'>
                          BLEACHING COLORS:
                        </span>{' '}
                        <span className='font-semibold '>
                          One-step bleaching and coloring.
                        </span>
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
                    <div
                      id='category-3'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3'>Stabilizing/ Cheating Agents</h3>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          KELENES:
                        </span>{' '}
                        <span className='font-semibold '>
                          Amino acid based chelating agents for use in cosmetic
                          products (shampoos, bleaches, coloring, lotions,
                          creams).
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL STABILIZER L-536:
                        </span>{' '}
                        <span className='font-semibold '>
                          Color additive used in hair color system to prevent
                          undesirable surface oxidation, used mainly in light
                          shades.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL STABILIZER D-552:
                        </span>{' '}
                        <span className='font-semibold '>
                          Color additive used in hair color system to prevent
                          undesirable surface oxidation, used mainly in dark
                          shades.
                        </span>
                      </p>
                    </div>
                  </Transition>
                  {/* Protein Derivatives/ Conditioners */}
                  <Transition
                    show={tab === 4}
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
                    <div
                      id='category-4'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3 mb-3'>
                        Protein Derivatives/ Conditioners
                      </h3>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL HWP:
                        </span>{' '}
                        <span className='font-semibold '>
                          Hydrolyzed protein (liquid) for shampoo and hair color
                          systems.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL CONDITIONER PWW:
                        </span>{' '}
                        <span className='font-semibold '>
                          Conditioning agent for hair color systems.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL COPOLYMER 725:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquaternium conditioning agent, and
                          viscosity builder for semi-permanent liquid hair color
                          system.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL COPOLYMER 1097:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquaternium conditioning agent, and
                          viscosity builder for semi-permanent cream hair color
                          system.
                        </span>
                      </p>
                    </div>
                  </Transition>
                  {/* Colors */}
                  <Transition
                    show={tab === 5}
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
                    <div
                      id='category-5'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3 mb-3'>Colors</h3>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWALANS:
                        </span>{' '}
                        <span className='font-semibold '>
                          Anionic dyes for semi-permanent and temporary color
                          systems.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWACRYLS:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic dyes for semi-permanent and temporary color
                          systems.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWADENES:
                        </span>{' '}
                        <span className='font-semibold '>
                          Disperse dyes for semi-permanent and temporary color
                          systems.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWASOLS:
                        </span>{' '}
                        <span className='font-semibold '>
                          Dyes specially designed for semi-permanent and
                          temporary colors.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          FD&C, EXT. D&C, D&C:
                        </span>{' '}
                        <span className='font-semibold '>
                          U.S. certified colors for food, drug and cosmetic
                          applications.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          HC COLORS:
                        </span>{' '}
                        <span className='font-semibold '>
                          Alkyl/hydroxyalkyl substituted aromatics for
                          semi-permanent hair color systems.
                        </span>
                      </p>
                      <h6 className='h6 font-bold mt-3'>
                        Oxidation Hair Colors
                      </h6>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>RODOLS:</span>{' '}
                        <span className='font-semibold '>
                          Intermediates for use in oxidation color systems.
                        </span>
                      </p>
                    </div>
                  </Transition>
                  {/* Shining Colors */}
                  <Transition
                    show={tab === 6}
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
                    <div
                      id='category-6'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3 '>Shining Colors</h3>
                      <p className='text-gray-400  mb-3'>
                        <span className='font-bold text-rose-500'>
                          BRIGHT SEMI-PERMANENT CREAM HAIR COLORS:
                        </span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                    </div>
                  </Transition>
                  {/* Viscosity Builders */}
                  <Transition
                    show={tab === 7}
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
                    <div
                      id='category-7'
                      className='relative inline-flex flex-col'
                    >
                      <h3 className='h3 '>Viscosity Builders</h3>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          CELLOW 940:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cellulose based polymer for semi-permanent hair colors
                          and shampoos.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL COPOLYMER 725:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquaternium
                          surfactant/viscosity-increasing agent for
                          semi-permanent liquid hair color system.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-rose-500'>
                          LOWENOL COPOLYMER 1097:
                        </span>{' '}
                        <span className='font-semibold '>
                          Cationic polyquaternium
                          surfactant/viscosity-increasing agent for
                          semi-permanent liquid cream color system.
                        </span>
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
