'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import '@/app/css/style.css'

import Header from '@/app/(default)/components/ui/hairHeader'

import Footer from '@/app/(default)/components/ui/footer2'

export default function HairLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <Header />
      <main className='grow'>
        {/* <PageIllustration /> */}

        {children}
      </main>

      <Footer />
    </>
  )
}
