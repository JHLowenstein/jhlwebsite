import Link from 'next/link'
import Image from 'next/image'
import { SetStateAction, useEffect, useState } from 'react'

import MobileMenu from './mobile-menu'
import Logo from '@/public/images/jhlLogo.svg'

export default function Header() {
  const [sticky, setSticky] = useState(false)
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar)
  })

  return (
    <header
      className={`header  z-40  w-full items-center bg-transparent ${
        sticky
          ? '!fixed !z-[9999] !bg-black !bg-opacity-90 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20'
          : 'absolute'
      }`}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between h-20'>
          {/* Site branding */}
          <div className='shrink-0 mr-4'>
            {/* Logo */}
            <Link href='/hair' className='block' aria-label='JHL Logo'>
              <Image
                alt='logo'
                src={Logo}
                width={125}
                style={{ opacity: '80%' }}
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex md:grow'>
            {/* Desktop sign in links */}
            <ul className='flex grow justify-end flex-wrap items-center'>
              <li>
                <Link
                  href='/hair/company'
                  className='font-medium text-snow-400 hover:text-gray-400 px-4 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  <span className='font-bold'>Company</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/hair/products'
                  className='font-medium text-snow-400 hover:text-gray-400 px-4 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  <span className='font-bold'>Products</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/hair/services'
                  className='font-medium font-bold text-snow-400 hover:text-gray-400 px-4 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  <span className='font-bold'>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/hair/contact'
                  className='font-medium text-snow-400 hover:text-gray-400 px-4 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  <span className='font-bold'>Contact</span>
                </Link>
              </li>
              <li></li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
