'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'

interface ProductTabProps {
  pBtn: string
  nums: number
  title: string

  description: string
}

const ProductTabs: React.FC<ProductTabProps> = ({
  pBtn,
  nums,
  title,
  description,
}) => {
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
    <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'>
      <div className='transition-all'>
        <div
          className='relative flex flex-col text-center lg:text-left'
          data-aos='zoom-y-out'
          ref={tabs}
        >
          {/* Tab Content*/}
          <Transition
            show={tab === nums}
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
            <div className='relative inline-flex flex-col  mb-40'>
              <h4 className='h4 text-gray-400'>
                <span className='font-bold'>{title}</span>: {description}
              </h4>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
