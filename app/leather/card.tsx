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
      className=' group/hero-product flex flex-col items-center p-6 md:p-8 md:m-5 cursor-default bg-white/5 backdrop-blur transition rounded-lg first:rounded-t-3xl last:rounded-b-3xl md:first:rounded-t-lg md:last:rounded-b-lg md:first:!rounded-l-4xl md:last:!rounded-r-4xl hover:scale-[1.02] hover:bg-white/10'
      data-aos='fade-up'
      data-aos-delay='200'
    >
      <h3 className='flex items-center gap-1 text-zinc-50 font-display text-2xl font-medium leading-none'></h3>
      <Image src={imgSrc} alt={imgAlt} width={120} height={30} unoptimized />
      <a
        className='btn text-white bg-blue-600 hover:bg-gray-500 w-full mb-4 sm:w-auto sm:mb-0 rounded-full'
        href={link}
      >
        <h5 className='h5'>{title}</h5>
      </a>
    </div>
  )
}

export default CardSection
