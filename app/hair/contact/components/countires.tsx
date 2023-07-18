import Image from 'next/image'
import TargetImage from '@/public/images/jhl11.svg'
import React, { useState } from 'react'

export default function Countries() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-10 border-t border-gray-800'>
          {/* Section header */}
          {/* <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='h2' data-aos='fade-up'>
              From the big picture to every tiny detail, we got you covered.
            </h2>
          </div> */}

          {/* Items */}
          <div className='grid gap-20' data-aos-id-target>
            {/* Item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-anchor='[data-aos-id-target]'
              >
                <div className=''>
                  <div
                    className='mt-6'
                    data-aos='fade-left'
                    data-aos-delay='200'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h4 className='h4 mb-2 text-left'>North America</h4>
                    <p className='text-lg text-gray-400 text-left'>
                      United States <br /> Mexico <br /> Puerto Rico
                    </p>
                  </div>
                  <div
                    className='mt-6'
                    data-aos='fade-left'
                    data-aos-delay='400'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h4 className='h4 mb-2 text-left'>South America</h4>
                    <p className='text-lg text-gray-400 text-left'>
                      Argentina <br /> Brazil <br /> Colombia <br /> Ecuador{' '}
                      <br /> Venuzuela
                    </p>
                  </div>
                  <div
                    className='mt-6'
                    data-aos='fade-left'
                    data-aos-delay='600'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h4 className='h4 mb-2'>ASIA/MIDDLE EAST</h4>

                    <div className='grid grid-cols-2 gap-4'>
                      {/* Use dangerouslySetInnerHTML to render HTML content */}

                      <p className='text-lg text-left text-gray-400'>
                        {' '}
                        Pakistan <br />
                        Russia <br />
                        Singapore <br />
                        Sri Lanka <br />
                        Turkey <br />
                        Taiwan <br />
                        Thailand <br />
                        Vietnam
                      </p>
                      <p className='text-lg text-gray-400 text-left'>
                        Belarus <br />
                        China <br />
                        Hong Kong <br />
                        India <br />
                        Indonesia <br />
                        Israel <br />
                        Japan <br />
                        Korea <br />
                        Lebanon <br />
                        Malaysia <br />
                        Philippines <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'>
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <div
                    className='mt-6'
                    data-aos='fade-left'
                    data-aos-delay='200'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h4 className='h4 mb-2'>Europe</h4>
                    <p className='text-lg text-gray-400 '>
                      France <br />
                      Germany <br />
                      Greece <br />
                      Italy <br />
                      Netherlands <br />
                      Switzerland <br />
                      Spain <br />
                      United Kingdom <br />
                      Bulgaria <br />
                      Poland <br />
                      Romania <br />
                    </p>
                  </div>
                  <div
                    className='mt-6'
                    data-aos='fade-left'
                    data-aos-delay='400'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h4 className='h4 mb-2'>Africa</h4>
                    <p className='text-lg text-gray-400 '>
                      Egypt <br /> South Africa
                    </p>
                  </div>
                  <div
                    className='mt-6'
                    data-aos='fade-left'
                    data-aos-delay='600'
                    data-aos-anchor='[data-aos-id-target]'
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
