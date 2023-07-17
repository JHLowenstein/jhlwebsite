import React from 'react'
import Image from 'next/image'

import World from '@/public/images/jhl12.svg'
import ContactForm from '@/app/hair/contact/components/contactForm'

interface ContactMethod {
  icon: React.ReactNode
  contact: string
  title: string
}

const contactMethods: ContactMethod[] = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
        />
      </svg>
    ),
    contact: '420 Morgan Avenue, Brooklyn, New York 11222',
    title: 'JHL Head Quarters',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
        />
      </svg>
    ),
    contact: '+1 (718) 388 5410',
    title: 'Phone',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        />
      </svg>
    ),
    contact: 'info@jhlowenstein.com',
    title: 'Email',
  },
]

const ContactSection: React.FC = () => {
  return (
    <section className='py-14 relative'>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='py-5 md:py-20'>
            {/* Section header */}
            <div className='text-center mx-auto max-w-4xl pb-12 md:pb-16 '>
              {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
              <h1 className='h1' data-aos='fade-up' data-aos-delay='200'>
                Contact Us <br /> Let us know how we can Help!
              </h1>
            </div>
            <h4 className='h4 text-center mx-auto max-w-4l ' data-aos='fade-up'>
              We're happy to answer any questions you may have about our color
              formulations, to set up a free consultation with one of our color
              chemists, or to provide you with any additional information you
              may need.
            </h4>
            <ul
              className='mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24'
              data-aos='fade-up'
            >
              {contactMethods.map((item, idx) => (
                <li key={idx}>
                  <h4 className='text-gray-400 text-lg font-medium'>
                    {item.title}
                  </h4>
                  <div className='mt-3 flex items-center gap-x-3'>
                    <div className='flex-none text-gray-400'>{item.icon}</div>
                    <p>{item.contact}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Image
              className='max-w-full mx-auto md:max-w-none h-auto mt-40'
              src={World}
              width={540}
              height={405}
              alt='Features 01'
            />
            <div className='flex justify-center mx-auto'>
              {/* <ContactForm /> */}
            </div>
            <div>
              <div className='mx-auto items-center'></div>
            </div>
            {/* Items */}
            <div className='grid gap-20'>
              {/* 1st item */}
              <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
                {/* Image */}
                <div
                  className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 mt=20 '
                  data-aos='fade-up'
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }} // Add this style to center the image horizontally
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

export default ContactSection
