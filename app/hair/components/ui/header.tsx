import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'
import Logo from '@/public/images/jhlLogo.svg'

export default function Header() {
  return (
    <header className='absolute w-full z-30'>
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
                  className='font-medium text-zinc-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href='/hair/products'
                  className='font-medium text-zinc-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href='/hair/services'
                  className='font-medium text-zinc-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/hair/contact'
                  className='font-medium text-zinc-500 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out'
                >
                  Contact
                </Link>
              </li>
              <li>
                {/* <Link
                  href='/signup'
                  className='btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3'
                >
                  Sign up
                </Link> */}
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
