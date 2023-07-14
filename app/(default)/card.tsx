import React from 'react'
import Image from 'next/image'

interface CardSectionProps {
  title: string

  link: string
  imgSrc: string
  imgAlt: string
}

const CardSection: React.FC<CardSectionProps> = ({
  title,

  link,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div
      className='flex flex-col h-full p-6 bg-gray-800 group/hero-product flex flex-col items-center mx-2 cursor-default bg-white/5 backdrop-blur transition hover:scale-[1.02] hover:bg-white/10'
      data-aos='fade-up'
    >
      <h3 className='flex items-center gap-1 text-zinc-50 font-display text-2xl font-medium leading-none'></h3>
      <Image src={imgSrc} alt={imgAlt} width={120} height={30} unoptimized />

      <div className='text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700'>
        <a
          className='btn text-white bg-blue-600 hover:bg-blue-500 w-full mb-4 sm:w-auto sm:mb-0 '
          href={link}
        >
          <h5>{title}</h5>
        </a>
      </div>
    </div>
  )
}

export default CardSection
