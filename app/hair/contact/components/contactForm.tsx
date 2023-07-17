import React from 'react'

const servicesItems = [
  'Mobile development',
  'UI/UX Design',
  'web development',
  'SEO',
]

const ContactForm: React.FC = () => {
  return (
    // <main className='flex overflow-hidden'>
    //   <div className='flex-1 hidden lg:block'>
    //     <img
    //       src='https://res.cloudinary.com/floatui/image/upload/v1670701901/scott-webb-NQymDb5XqC4-unsplash_ezrolm.jpg'
    //       className='w-full h-screen object-cover'
    //       alt='Background'
    //     />
    //   </div>
    //   <div className='py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto'>
    //     <div className='max-w-lg flex-1 mx-auto px-4 text-gray-600'>
    //       <div>
    //         <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
    //           Get in touch
    //         </h3>
    //         <p className='mt-3'>
    //           We’d love to hear from you! Please fill out the form below.
    //         </p>
    //       </div>
    //       <form
    //         onSubmit={(e) => e.preventDefault()}
    //         className='space-y-5 mt-12 lg:pb-12'
    //       >
    //         <div>
    //           <label className='font-medium'>Full name</label>
    //           <input
    //             type='text'
    //             required
    //             className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
    //           />
    //         </div>
    //         <div>
    //           <label className='font-medium'>Email</label>
    //           <input
    //             type='email'
    //             required
    //             className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
    //           />
    //         </div>
    //         <div>
    //           <label className='font-medium'>Phone number</label>
    //           <div className='relative mt-2'>
    //             <div className='absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2'>
    //               <select className='text-sm bg-transparent outline-none rounded-lg h-full'>
    //                 <option>US</option>
    //                 <option>ES</option>
    //                 <option>MR</option>
    //               </select>
    //             </div>
    //             <input
    //               type='number'
    //               placeholder='+1 (555) 000-000'
    //               required
    //               className='w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
    //             />
    //           </div>
    //         </div>
    //         <div>
    //           <label className='font-medium'>Services</label>
    //           <ul className='grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3'>
    //             {servicesItems.map((item, idx) => (
    //               <li key={idx} className='flex gap-x-3 text-sm'>
    //                 <div>
    //                   <input
    //                     id={`service-${idx}`}
    //                     type='checkbox'
    //                     className='checkbox-item peer hidden'
    //                   />
    //                   <label
    //                     htmlFor={`service-${idx}`}
    //                     className='relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45'
    //                   ></label>
    //                 </div>
    //                 <label
    //                   htmlFor={`service-${idx}`}
    //                   className='cursor-pointer'
    //                 >
    //                   {item}
    //                 </label>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div>
    //           <label className='font-medium'>Message</label>
    //           <textarea
    //             required
    //             className='w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
    //           ></textarea>
    //         </div>
    //         <button
    //           type='submit'
    //           className='w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150'
    //         >
    //           Submit
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </main>
    <section id='contact' className='overflow-hidden py-16 md:py-20 lg:py-28'>
      <div className='container'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 lg:w-7/12 xl:w-8/12'>
            <div
              className='wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]'
              data-wow-delay='.15s
              '
            >
              <h2 className='mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl'>
                Let us know how we can help!
              </h2>
              <p className='mb-12 text-base font-medium text-body-color'>
                Our Team will get back to you ASAP via email.
              </p>
              <form>
                <div className='-mx-4 flex flex-wrap'>
                  <div className='w-full px-4 md:w-1/2'>
                    <div className='mb-8'>
                      <label
                        htmlFor='name'
                        className='mb-3 block text-sm font-medium text-dark dark:text-white'
                      >
                        Your Name
                      </label>
                      <input
                        type='text'
                        placeholder='Enter your name'
                        className='w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp'
                      />
                    </div>
                  </div>
                  <div className='w-full px-4 md:w-1/2'>
                    <div className='mb-8'>
                      <label
                        htmlFor='email'
                        className='mb-3 block text-sm font-medium text-dark dark:text-white'
                      >
                        Your Email
                      </label>
                      <input
                        type='email'
                        placeholder='Enter your email'
                        className='w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp'
                      />
                    </div>
                  </div>
                  <div className='w-full px-4'>
                    <div className='mb-8'>
                      <label
                        htmlFor='message'
                        className='mb-3 block text-sm font-medium text-dark dark:text-white'
                      >
                        Your Message
                      </label>
                      <textarea
                        name='message'
                        rows={5}
                        placeholder='Enter your Message'
                        className='w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp'
                      ></textarea>
                    </div>
                  </div>
                  <div className='w-full px-4'>
                    <button className='rounded-md bg-blue-500 py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp'>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='w-full px-4 lg:w-5/12 xl:w-4/12'></div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
