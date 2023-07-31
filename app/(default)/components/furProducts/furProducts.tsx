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
              {/* Blending & Brush Dyeing Products */}
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
                      Blending & Brush Dyeing Products
                    </div>
                  </div>
                </a>
              </div>
              {/*  Reinforcing & Uptoning in Tanning */}
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
                      Reinforcing & Uptoning in Tanning
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
                        <span className='font-semibold '>
                          nonionic soaking agents, bactericides and fungicides.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWENOL CONDITIONER A-S:
                        </span>{' '}
                        <span className='font-semibold '>
                          can be used in multiple parts of tanning process to
                          prevent damage.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWENOL DETERGEX A:
                        </span>{' '}
                        <span className='font-semibold '>
                          a non-ionic solvent soluble emulsifier and detergent.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DRUMMING SOLVENT ECO 15:
                        </span>{' '}
                        <span className='font-semibold '>
                          Biodegradable / environmentally friendly degreasing
                          agent. For drumming and wet uses.
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWATAN ZN:
                        </span>{' '}
                        <span className='font-semibold '>
                          retanning agent, non-staining.
                        </span>
                      </p>
                      <h4 className='h4 my-3'>Enzymes</h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          ELBRO 100-C:
                        </span>{' '}
                        <span className='font-semibold '>
                          safe & fast soaking agent
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          SUPER LOTAN A:
                        </span>{' '}
                        <span className='font-semibold '>
                          acid enzyme (liquid)
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          SUPER LOTAN A-MT:{' '}
                        </span>{' '}
                        <span className='font-semibold '>
                          acid enzyme (liquid)
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          SUPER LOTAN F(A)I:
                        </span>{' '}
                        <span className='font-semibold '>
                          acid enzyme (liquid)
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          ELBRO SR:
                        </span>{' '}
                        <span className='font-semibold '>
                          acid enzyme (powder)
                        </span>
                      </p>
                      <h4 className='h4 my-3'>Oils & Greases</h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          MINK GREASE TP-D:
                        </span>{' '}
                        <span className='font-semibold '>
                          kicking grease for all fur skins
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          MINK GREASE TP-N:{' '}
                        </span>{' '}
                        <span className='font-semibold '>
                          kicking grease for all fur skins
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          FRIESOL U-88-L:
                        </span>{' '}
                        <span className='font-semibold '>
                          kicking grease for all fur skins
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          TANNING OIL G:
                        </span>{' '}
                        <span className='font-semibold '>
                          modified anionic fatliquor
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          MINK OIL WL:
                        </span>{' '}
                        <span className='font-semibold '>
                          (see “reinforcing products-leather bleaches“)
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          MINK STUFFING GREASE:{' '}
                        </span>{' '}
                        <span className='font-semibold '>
                          kicking grease for all fur skins
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          NU-OIL:
                        </span>{' '}
                        <span className='font-semibold '>
                          modified nonionic hand/brush applied oil (lanolin
                          based)
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWENOL:
                        </span>{' '}
                        <span className='font-semibold '>
                          modified anionic fatliquor
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWENOL LFS:
                        </span>{' '}
                        <span className='font-semibold '>
                          modified anionic fatliquor
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWENOL LFH:
                        </span>{' '}
                        <span className='font-semibold '>
                          modified anionic fatliquor
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWENOL LFB-N:
                        </span>{' '}
                        <span className='font-semibold '>
                          modified anionic fatliquor
                        </span>
                      </p>

                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWENOL LFW:
                        </span>{' '}
                        <span className='font-semibold '>
                          modified anionic fatliquor
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          WHITE OIL TT:{' '}
                        </span>{' '}
                        <span className='font-semibold '>
                          {' '}
                          nonionic oil for bleaching & white tans
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          SUEDOL SP:
                        </span>{' '}
                        <span className='font-semibold '>
                          (see “auxiliaries for leather dyeing“)
                        </span>
                      </p>
                      <h4 className='h4 my-3'>
                        Tanning / Retanning Auxilliaries
                      </h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          EL-CRO-TAN:{' '}
                        </span>{' '}
                        <span className='font-semibold '>
                          liquid chrome complex leather softener
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          MOUTOTAN:
                        </span>{' '}
                        <span className='font-semibold '>
                          liquid chrome retanning agent; self-basifying
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          TAN LY:
                        </span>{' '}
                        <span className='font-semibold '>
                          synthetic retanning agent
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          TANNING ASSIST B:
                        </span>{' '}
                        <span className='font-semibold '>
                          slow acting buffer for aluminum or chrome tans
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWATAN A-3:
                        </span>{' '}
                        <span className='font-semibold '>
                          aldehyde retanning agent, non-staining
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWATAN ZN:
                        </span>{' '}
                        <span className='font-semibold '>
                          retanning agent, non-staining
                        </span>
                      </p>
                      <h4 className='h4 my-3'>Finishing Chemicals</h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          NEW GLO / GLO-MOR:{' '}
                        </span>{' '}
                        <span className='font-semibold '>
                          fur lustering compound for use during finish drumming
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LUSTER 50-L CONCENTRATE:
                        </span>{' '}
                        <span className='font-semibold '>
                          fur lustering compound for use during ironing
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          MF-3:
                        </span>{' '}
                        <span className='font-semibold '>
                          {' '}
                          protein fur conditioner and protective agent used
                          during drumming or in bleach or oxidation dye bath
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          ELBOMOR:
                        </span>{' '}
                        <span className='font-semibold '>
                          leather & thread lubricant for nailing out fur skins
                        </span>
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
                      <h4 className='h4 my-3'>Acid/Alizarine Dyes</h4>

                      <p className='text-gray-300  my-3'>
                        <span className='font-medium'>
                          Formulated to achieve uniform, consistent results on
                          both fur and wooled sheepskin. Included also is a
                          specific range possessing high color fastness for car
                          seat application.
                        </span>
                      </p>
                      <h4 className='h4 my-3'>Oxidation "Rodol" Dyes</h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-semibold '>
                          some of the more commonly used include:
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          RODOL BLACK JB
                        </span>{' '}
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          RODOL BLACK LB
                        </span>{' '}
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          RODOL BROWN JS
                        </span>{' '}
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          RODOL GRAY BC POWDER
                        </span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          RODOL NZ POWDER
                        </span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-semibold '>RODOL GRAY DMG</span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'></span>{' '}
                        <span className='font-bold '>
                          (full line of intermediate oxidation dyes are
                          available upon request)
                        </span>
                      </p>
                      <h4 className='h4 my-3'>"Lowanil" and "Leather" Dyes</h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-semibold '>
                          Formulated to achieve excellent uniformity on
                          sheepskin suede and Napa. Formulated for maximum
                          penetration and reserving of wool.
                        </span>
                      </p>
                      <h4 className='h4 my-3'>Metal Complex Dyes</h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-semibold '>Known as</span>{' '}
                        <span className='font-bold text-gray-400'>
                          "Lowalans"
                        </span>
                      </p>
                      <h4 className='h4 my-3'>
                        Auxiliaries for Fur & Sheepskin Dyeing
                      </h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DEVELOPER 105 SCM:{' '}
                        </span>{' '}
                        <span className='font-semibold '>
                          {' '}
                          color enhancer for oxidation black
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE ASSIST MB:
                        </span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          dyeing assistant to improve fur quality with oxidation
                          dyes
                        </span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE BUFFER A:
                        </span>{' '}
                        <span className='font-semibold '>
                          dyeing assistant to improve fur uniformity of color
                          with acid dyes
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWENOL ICE-T:
                        </span>{' '}
                        <span className='font-semibold '>
                          dyeing assistant to improve tip coverage of dyes on
                          furs
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LEVEL A:
                        </span>{' '}
                        <span className='font-semibold '>
                          nonionic assistant & color leveler for acid dyeing
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LEVEL P:
                        </span>{' '}
                        <span className='font-semibold '>
                          cationic assistant & color leveler for acid dyeing
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LIQUID BRIGHTENERS:
                        </span>{' '}
                        <span className='font-semibold '>
                          optically active toners (brightening agents)
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWENOLS MMF:
                        </span>{' '}
                        <span className='font-semibold '>
                          nonionic carriers & color levelers for metal complex &
                          acid dyes
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          PENETRATOR M:
                        </span>{' '}
                        <span className='font-semibold '>
                          nonionic/cationic assistant & color leveler for acid
                          dyeing
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          RESERVOL NS:
                        </span>{' '}
                        <span className='font-semibold '>
                          retards dye uptake of acid dyes on tips of fur skins
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          SINXIT:
                        </span>{' '}
                        <span className='font-semibold '>
                          nonionic wetter for oxidation dyeing /alkaline washes
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          WYTEX AP:
                        </span>{' '}
                        <span className='font-semibold '>
                          reduction bleach stable in the acid pickle
                        </span>
                      </p>
                      <h4 className='h4 my-3'>
                        Auxiliaries for Leather Dyeing
                      </h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWACENE DYE ASSIST EL:
                        </span>{' '}
                        <span className='font-semibold '>
                          anionic penetrating/leveling agent
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          RESER-V:
                        </span>{' '}
                        <span className='font-semibold '>
                          modified anionic wool reserving agent
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          RESERVEX PW:
                        </span>{' '}
                        <span className='font-semibold '>
                          modified nonionic wool reserving agent
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          SUEDOL SP:
                        </span>{' '}
                        <span className='font-semibold '>
                          anionic fatliquor for leather dye bath
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          NAPA FINISH SW:
                        </span>{' '}
                        <span className='font-semibold '>
                          used as a water repellent & leather soft finish
                        </span>
                      </p>
                      <h4 className='h4 my-3'>
                        Auxiliaries for Snow-top "Lowacene"
                      </h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-semibold '>
                          Formulated for Snow-top,"brisa", and two-tone shades
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          BLEACH LCN-3:
                        </span>{' '}
                        <span className='font-semibold '>
                          Reducing Bleach for Snow-top and "brisa"
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LOWACENE DYE ASSIST BH:
                        </span>{' '}
                        <span className='font-semibold '>
                          Dye assist and leveling agent for Snow-top
                        </span>
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
                      <h4 className='h4 my-3'>Bleaches</h4>
                      <p className='text-gray-300  my-3'>
                        <span className='font-bold text-emerald-500'>
                          BLEACH BL-15:
                        </span>{' '}
                        <span className='font-semibold '>
                          highly concentrated fur bleach
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          BLEACH M-30:
                        </span>{' '}
                        <span className='font-semibold '>
                          highly concentrated fur bleach
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          BLEACH LCN-3:
                        </span>{' '}
                        <span className='font-semibold '>
                          discharging agent for "LOWACENE" dyes (or "snow top"
                          effect)
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          BLEACH NB-50
                        </span>{' '}
                        <span className='font-semibold '>reduction bleach</span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          WYTEX AP:
                        </span>{' '}
                        <span className='font-semibold '>
                          reduction bleach; stable in acid & alkaline baths
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          WYTEX NO:
                        </span>{' '}
                        <span className='font-semibold '>
                          reduction bleach (without optical brightener)
                        </span>
                      </p>
                      <h4 className='h4 my-3'>Brightners & Toners</h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LIQUID BRIGHTENERS:
                        </span>{' '}
                        <span className='font-semibold '>
                          optically active toners (brightening agents)
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          SILVER TONERS
                        </span>{' '}
                        <span className='font-semibold '>
                          optical dyes with concentrated toning for "silvering"
                          of fur skins (removing yellow)
                        </span>
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
                      <h4 className='h4 my-3'>Brightners & Toners</h4>
                      <p className='text-gray-300  my-3'>
                        <span className='font-bold text-emerald-500'>
                          BRUSHING RACCOON EXTRA:
                        </span>{' '}
                        <span className='font-semibold '>
                          liquid blue violet color for silvering raccoons
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          BRUSHING CHINCHILLA A
                        </span>{' '}
                        <span className='font-semibold '>
                          liquid bluing for fur skins
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          BRUSHING CHINCHILLA B{' '}
                        </span>{' '}
                        <span className='font-semibold '>
                          liquid bluing for fur skins
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          BRUSHING CHINCHILLA C
                        </span>{' '}
                        <span className='font-semibold '>
                          liquid bluing for fur skins
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LIQUID BRIGHTENERS:
                        </span>{' '}
                        <span className='font-semibold '>
                          optically active toners & brightening agents
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          BRUSHING LIGHT GRAY B:
                        </span>{' '}
                        <span className='font-semibold '>
                          liquid blue gray color for gray Persians
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          TIPPING BLACK:
                        </span>{' '}
                        <span className='font-semibold '>
                          powder oxidation dye for black grotzen or tip dyeing
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          POWDER ACID TYPE
                        </span>{' '}
                        <span className='font-semibold '></span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          BRUSHING DYES:
                        </span>{' '}
                        <span className='font-semibold '>
                          available in a full range of colors
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          SUPER WYTONE:
                        </span>{' '}
                        <span className='font-semibold '>
                          liquid brightener for spray/brush application for
                          rejuvenation (and brightening) of fur coats
                        </span>
                        <h4 className='h4 my-3'>Auxiliaries</h4>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          BRUSHING ASSIST B:
                        </span>{' '}
                        <span className='font-semibold '>
                          dye penetrator/fixative
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          THICKENER 44:
                        </span>{' '}
                        <span className='font-semibold '>
                          thickener for screen printing powder brushing dyes
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE SOLVENT BB:
                        </span>{' '}
                        <span className='font-semibold '>
                          solvent for oxidation dyes
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          SOLVENT C-10:
                        </span>{' '}
                        <span className='font-semibold '>
                          solvent for powder acid brushing dyes
                        </span>
                      </p>
                    </div>
                  </Transition>
                  {/* Reinforcing & Uptoning in Tanning*/}
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
                      <h3 className='h3 mb-3'>
                        Reinforcing & Uptoning in Tanning
                      </h3>
                      <h4 className='h4 my-3'>Reinforcing Dyes</h4>
                      <p className='text-gray-300  my-3'>
                        <span className='font-bold text-emerald-500'>
                          P-40-B-NEW:
                        </span>{' '}
                        <span className='font-semibold '>
                          catalyst with strong blue gray color
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE 66-L:
                        </span>{' '}
                        <span className='font-semibold '>deep blue</span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE 55:
                        </span>{' '}
                        <span className='font-semibold '>deep blue gray</span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE 77:
                        </span>{' '}
                        <span className='font-semibold '>deep gray brown</span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE 77-B:
                        </span>{' '}
                        <span className='font-semibold '>
                          deep gray with a blue cast
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE HR-30:
                        </span>{' '}
                        <span className='font-semibold '>violet</span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE BROWN 22-C:
                        </span>{' '}
                        <span className='font-semibold '>yellow brown</span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE 22-D:
                        </span>{' '}
                        <span className='font-semibold '>
                          deep neutral brown
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE BROWN 105:
                        </span>{' '}
                        <span className='font-semibold '>
                          a medium brown with slight olive cast
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE 66-FX-EXTRA:
                        </span>{' '}
                        <span className='font-semibold '>
                          a deep blue violet
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE GRAY BG:
                        </span>{' '}
                        <span className='font-semibold '>
                          a gray with a blue cast
                        </span>
                      </p>
                      <h4 className='h4 my-3'>Oxidation Reinforcing Dyes</h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE HH:
                        </span>{' '}
                        <span className='font-semibold '>
                          catalyst with a light gray color
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE NC:
                        </span>{' '}
                        <span className='font-semibold '>
                          catalyst with a light gray color
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE BLACK MR:
                        </span>{' '}
                        <span className='font-semibold '>black</span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE BROWN RM:
                        </span>{' '}
                        <span className='font-semibold '>brown</span>
                      </p>
                      <h4 className='h4 my-3'>Leather Bleaches</h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          MINK OIL WL:
                        </span>{' '}
                        <span className='font-semibold '>
                          leather softener & leather bleach for
                          reinforced/oxidation reinforced fur skins
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          OF-77/OF-43-N:
                        </span>{' '}
                        <span className='font-semibold '>
                          leather bleaching agent for reinforced fur skins
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LS-33BT:
                        </span>{' '}
                        <span className='font-semibold '>
                          leather bleaching agent for reinforced & oxidation
                          reinforced skins
                        </span>
                      </p>
                      <h4 className='h4 my-3'>Reinforcing Auxiliaries</h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DEVELOPER KMC:
                        </span>{' '}
                        <span className='font-semibold '>color developer</span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LP-12-B/LP-12-6:
                        </span>{' '}
                        <span className='font-semibold '>
                          dye solubilizer/detergent agent
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          PM-10:
                        </span>{' '}
                        <span className='font-semibold '>
                          stabilizer for metallic uptoning
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          PT-90:
                        </span>{' '}
                        <span className='font-semibold '>
                          liquid dyeing assistant for improved tip coverage in
                          reinforcing fur skins
                        </span>
                      </p>
                      <h4 className='h4 my-3'>
                        Brighteners, Toners & Bleaches
                      </h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          DYE PP:
                        </span>{' '}
                        <span className='font-semibold '>
                          {' '}
                          blueing agent for fur skins
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          LIQUID BRIGHTENERS:
                        </span>{' '}
                        <span className='font-semibold '>
                          optically active toners (brightening agents)
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          SILVER TONERS
                        </span>{' '}
                        <span className='font-semibold '>
                          optical dyes with concentrated toning for silvering of
                          fur skins (removing yellow)
                        </span>
                      </p>
                      <h4 className='h4 my-3'>Metallic Toners</h4>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          UT-1:
                        </span>{' '}
                        <span className='font-semibold '>
                          metallic uptoning agent for ranch mink
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          UT-2:
                        </span>{' '}
                        <span className='font-semibold '>
                          metallic uptoning agent for demi-buff/pastel mink
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          L-10-C:
                        </span>{' '}
                        <span className='font-semibold '>
                          metallic uptoning of various fur skins; used with
                          reinforcing dyes
                        </span>
                      </p>
                      <p className='text-gray-300  mb-3'>
                        <span className='font-bold text-emerald-500'>
                          3-P-F/3-P-G:
                        </span>{' '}
                        <span className='font-semibold '>
                          metallic uptoning of various fur skins; used with
                          reinforcing dyes
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
