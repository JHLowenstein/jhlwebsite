export const metadata = {
  title:
    'Leather Products - Jos. H. Lowenstein & Sons - Hair Products, Fur Products & Leather Products - Dye Products and Dyestuff - JHL',
  keywords:
    'Leather Products, 10-minute demipermanent color, 10-minute demi-permanent color, Acid Dye, Bleach Composition for Wig Hair, Bleaching Color, Chelating Agent, Color Styling Gel, Conditioner, Conditioning Agents, Demipermanent Hair Dye, Demi-permanent Hair Dye, Hair Dye Stabilizer, Hair Color Stabilizer, Hair Dye Developer, Hair Color Developer, Hair Bleach, Hair Bleach Powder, Hair Bleach Cream, Hair Color, Hair Color Base, Hair Color Surfactant, Hair Dye, Lowadene, Lowalan, Lowasol, Permanent Hair Dye, Permanent Hair Color, Permanent Cream Hair Color, Powder Hair Color, Semipermanent Hair Dye, Semipermanent Hair Color, Semi-permanent Hair Color, Semipermanent Cream Hair Color, Semi-permanent Cream Hair Color, Semi-permanent Hair Dye, Shining Color, Snowtop, Snow Top, dyestuff mfr, Joseph H. Lowenstein &amp; Sons Inc., Brooklyn, New York, NY, JHL, ny, new york',
  description:
    'Since 1897, Jos. H. Lowenstein & Sons, Inc. has been providing the world of fashion with brilliant, trend-setting colors for the fur, hair and leather industries all over the world. From a modest paint store in Brooklyn, New York to the technologically driven, quality dyestuff manufacturer we are today, JHL has prided itself on providing its customers with state-of-the-art dye products and impeccable personalized service. April 2003 JHL underwent a formal ISO 9001 audit. We passed with flying colors!',
}
import React from 'react'

import Hero from '@/app/leather/contact/components/hero'
import ContactSection from '@/app/leather/contact/components/content'
import Countries from '@/app/leather/contact/components/countires'
import Contact from '@/app/leather/contact/components/form'

import Particles from '@/app/leather/components/particles'

export default function HairContact() {
  return (
    <>
      <div className='flex flex-col items-center justify-center overflow-hidden '>
        <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
        <Particles
          className='absolute inset-0 -z-10 animate-fade-in'
          quantity={100}
        />
        <Hero />
        <Contact />
        <ContactSection />
        <Countries />
      </div>
    </>
  )
}
//   return (
//     <>
// <section className='relative'>
//   <div className='max-w-6xl mx-auto px-4 sm:px-6 relative'>
//     <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
//       {/* Page header */}
//       <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'></div>

//       {/* Contact form */}
//       {/* <form className='max-w-xl mx-auto'>
//         <div className='flex flex-wrap -mx-3 mb-4'>
//           <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
//             <label
//               className='block text-gray-300 text-sm font-medium mb-1'
//               htmlFor='first-name'
//             >
//               First Name <span className='text-red-600'>*</span>
//             </label>
//             <input
//               id='first-name'
//               type='text'
//               className='form-input w-full text-gray-300 border-red-500 focus:border-red-500'
//               placeholder='Enter your first name'
//               required
//             />
//             <p className='text-red-500 text-sm mt-2'>
//               This field is required
//             </p>
//           </div>
//           <div className='w-full md:w-1/2 px-3'>
//             <label
//               className='block text-gray-300 text-sm font-medium mb-1'
//               htmlFor='last-name'
//             >
//               Last Name <span className='text-red-600'>*</span>
//             </label>
//             <input
//               id='last-name'
//               type='text'
//               className='form-input w-full text-gray-300'
//               placeholder='Enter your last name'
//               required
//             />
//           </div>
//         </div>
//         <div className='flex flex-wrap -mx-3 mb-4'>
//           <div className='w-full px-3'>
//             <label
//               className='block text-gray-300 text-sm font-medium mb-1'
//               htmlFor='email'
//             >
//               Email <span className='text-red-600'>*</span>
//             </label>
//             <input
//               id='email'
//               type='email'
//               className='form-input w-full text-gray-300'
//               placeholder='Enter your email address'
//               required
//             />
//           </div>
//         </div>
//         <div className='flex flex-wrap -mx-3 mb-4'>
//           <div className='w-full px-3'>
//             <label
//               className='block text-gray-300 text-sm font-medium mb-1'
//               htmlFor='subject'
//             >
//               Subject <span className='text-red-600'>*</span>
//             </label>
//             <input
//               id='subject'
//               type='text'
//               className='form-input w-full text-gray-300'
//               placeholder='How can we help you?'
//               required
//             />
//           </div>
//         </div>
//         <div className='flex flex-wrap -mx-3 mb-4'>
//           <div className='w-full px-3'>
//             <label
//               className='block text-gray-300 text-sm font-medium mb-1'
//               htmlFor='country'
//             >
//               Country
//             </label>
//             <select
//               id='country'
//               className='form-select w-full text-gray-300'
//             >
//               <option>United States</option>
//               <option>United Kingdom</option>
//               <option>Germany</option>
//             </select>
//           </div>
//         </div>
//         <div className='flex flex-wrap -mx-3 mb-4'>
//           <div className='w-full px-3'>
//             <label
//               className='block text-gray-300 text-sm font-medium mb-1'
//               htmlFor='message'
//             >
//               Message
//             </label>
//             <textarea
//               id='message'
//               rows={4}
//               className='form-textarea w-full text-gray-300'
//               placeholder='Write your message'
//             ></textarea>
//           </div>
//         </div>
//         <div className='flex flex-wrap -mx-3 mb-4'>
//           <div className='w-full px-3'>
//             <label className='flex items-center'>
//               <input type='checkbox' className='form-checkbox' />
//               <span className='text-gray-400 ml-2'>
//                 I agree to the privacy policy
//               </span>
//             </label>
//           </div>
//         </div>
//         <div className='flex flex-wrap -mx-3 mt-6'>
//           <div className='w-full px-3'>
//             <button className='btn text-white bg-purple-600 hover:bg-purple-700 w-full'>
//               Send
//             </button>
//           </div>
//         </div>
//       </form> */}
//     </div>
//   </div>
// </section>

//       <CtaContact />
//     </>
//   )
// }
