export default function Contact() {
  return (
    <>
      <section className='relative'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 relative'>
          <div className='pb-12  md:pb-20'>
            {/* Contact form */}
            <form
              className='max-w-xl mx-auto'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <div className='flex flex-wrap -mx-3 mb-4'>
                <div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
                  <label
                    className='block text-gray-300 text-sm font-medium mb-1'
                    htmlFor='first-name'
                  >
                    First Name <span className='text-red-600'>*</span>
                  </label>
                  <input
                    id='first-name'
                    type='text'
                    className='form-input w-full text-gray-300 '
                    placeholder='Enter your first name'
                  />
                </div>
                <div className='w-full md:w-1/2 px-3'>
                  <label
                    className='block text-gray-300 text-sm font-medium mb-1'
                    htmlFor='last-name'
                  >
                    Last Name <span className='text-red-600'>*</span>
                  </label>
                  <input
                    id='last-name'
                    type='text'
                    className='form-input w-full text-gray-300'
                    placeholder='Enter your last name'
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-4'>
                <div className='w-full px-3'>
                  <label
                    className='block text-gray-300 text-sm font-medium mb-1'
                    htmlFor='email'
                  >
                    Email <span className='text-red-600'>*</span>
                  </label>
                  <input
                    id='email'
                    type='email'
                    className='form-input w-full text-gray-300'
                    placeholder='Enter your email address'
                    required
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-4'>
                <div className='w-full px-3'>
                  <label
                    className='block text-gray-300 text-sm font-medium mb-1'
                    htmlFor='subject'
                  >
                    Subject <span className='text-red-600'>*</span>
                  </label>
                  <input
                    id='subject'
                    type='text'
                    className='form-input w-full text-gray-300'
                    placeholder='How can we help you?'
                    required
                  />
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-4'>
                <div className='w-full px-3'>
                  <label
                    className='block text-gray-300 text-sm font-medium mb-1'
                    htmlFor='country'
                  >
                    Country
                  </label>
                  <select
                    id='country'
                    className='form-select w-full text-gray-300'
                  >
                    <option>United States</option>
                    <option>Argentina</option>
                    <option>Belarus</option>
                    <option>Brazil</option>
                    <option>Bulgaria</option>
                    <option>China</option>
                    <option>Colombia</option>
                    <option>Ecuador</option>
                    <option>Egypt</option>
                    <option>France</option>
                    <option>Germany</option>
                    <option>Greece</option>
                    <option>Hong Kong</option>
                    <option>India</option>
                    <option>Indonesia</option>
                    <option>Israel</option>
                    <option>Italy</option>
                    <option>Japan</option>
                    <option>Korea</option>
                    <option>Lebanon</option>
                    <option>Malaysia</option>
                    <option>Mexico</option>
                    <option>Netherlands</option>
                    <option>Pakistan</option>
                    <option>Philippines</option>
                    <option>Poland</option>
                    <option>Puerto Rico</option>
                    <option>Romania</option>
                    <option>Russia</option>
                    <option>Singapore</option>
                    <option>South Africa</option>
                    <option>Spain</option>
                    <option>Sri Lanka</option>
                    <option>Switzerland</option>
                    <option>Taiwan</option>
                    <option>Thailand</option>
                    <option>Turkey</option>
                    <option>United Kingdom</option>
                    <option>Vietnam</option>
                  </select>
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-4'>
                <div className='w-full px-3'>
                  <label
                    className='block text-gray-300 text-sm font-medium mb-1'
                    htmlFor='message'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={4}
                    className='form-textarea w-full text-gray-300'
                    placeholder='Write your message'
                  ></textarea>
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-4'>
                <div className='w-full px-3'>
                  <label className='flex items-center'>
                    <input type='checkbox' className='form-checkbox' />
                    <span className='text-gray-400 ml-2'>
                      I agree to the privacy policy
                    </span>
                  </label>
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mt-6'>
                <div className='w-full px-3'>
                  <button className='btn text-white bg-rose-500 hover:bg-rose-600 w-full rounded-lg'>
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
