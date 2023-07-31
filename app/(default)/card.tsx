import React from 'react'
import Image from 'next/image'

interface CardSectionProps {
  title: string

  link: string
  imgSrc: string
  imgAlt: string
  color: string
}

const CardSection: React.FC<CardSectionProps> = ({
  title,
  color,
  link,
  imgSrc,
  imgAlt,
}) => {
  return (
    <section className='mb-5'>
      <div
        className='h-full justify-center items-center  m-4 md:p-6 bg-gray-800 rounded-lg max-w-lg  group/hero-product flex flex-col items-center mx-2 cursor-default bg-white/5 backdrop-blur transition hover:scale-[1.02] hover:bg-white/10'
        data-aos='fade-up'
      >
        <div className='mb-4'>
          <h3 className='flex items-center md:gap-3 text-gray-300 font-display text-2xl font-medium leading-none'></h3>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={120}
            height={30}
            unoptimized
          />

          <div className='text-snow-700 font-medium mt-6 pt-5 border-t border-gray-700'>
            <a
              className={`btn rounded-lg text-gray-200 ${color}   w-full mb-4 sm:w-auto sm:mb-0`}
              href={link}
            >
              <h5 className='font-bold'>{title}</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSection
