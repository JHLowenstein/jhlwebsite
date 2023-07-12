import CompanyHeader from '@/public/images/jhl11.svg'
import HairDye from '@/public/images/jhl5.svg'
import Image from 'next/image'

export default function Hero() {
  return (
    <section>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative'>
        {/* Hero content */}
        <div className='relative pt-100 pb-10 md:pt-40 md:pb-16'>
          <div className='max-w-3xl mx-auto '>
            <div className='text-center pb-5 md:pb-5'>
              <h5
                className='h5 my-10 z-10 text-[5rem] text-transparent duration-1000  cursor-default whitespace-nowrap bg-clip-text bg-gradient-to-r from-rose-600 via-amber-400 to-blue-700 inline-flex flex-col gap-1 transition font-display  font-bold leading-none'
                data-aos='fade-up'
              >
                About Us
              </h5>
              {/* <Image
                alt='JHL Hair Model'
                src={CompanyHeader}
                width='500'
                height='375'
                style={{ margin: 'auto', borderRadius: '10px' }}
                data-aos='fade-up'
                data-aos-delay='200'
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
