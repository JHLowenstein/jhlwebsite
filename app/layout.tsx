import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/app/(default)/components/ui/header'
import Banner from '@/app/(default)/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap',
})

export const metadata = {
  title:
    'Jos. H. Lowenstein &amp; Sons - Leather Products, Hair Products &amp; Fur Products - Dye Products and Dyestuff - JHL',
  description:
    'Since 1897, Jos. H. Lowenstein &amp; Sons, Inc. has been providing the world of fashion with brilliant, trend-setting colors for the fur, hair and leather industries all over the world. From a modest paint store in Brooklyn, New York to the technologically driven, quality dyestuff manufacturer we are today, JHL has prided itself on providing its customers with state-of-the-art dye products and impeccable personalized service. April 2003 JHL underwent a formal ISO 9001 audit. We passed with flying colors!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <div className='flex flex-col min-h-screen overflow-hidden'>
          {/* <Header /> */}
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}
