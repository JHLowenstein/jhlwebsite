export default function Timeline() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='h2 mb-4'>
              Perfecting the Art of Color Formulation since 1897{' '}
            </h2>
            {/* <p className="text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
          </div>

          {/* Items */}
          <div
            className='max-w-3xl mx-auto -my-4 md:-my-6'
            data-aos-id-timeline
          >
            {/* 1st item */}
            <div
              className='relative py-4 md:py-6 pl-24'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-timeline]'
            >
              <div className='pl-2'>
                <div className=' text-xl text-violet-500 mb-2'>Genesis</div>
                <div className='flex items-center mb-3'>
                  <div className='absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full'>
                    1897
                  </div>
                  <div
                    className='absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3'
                    aria-hidden='true'
                  ></div>
                  <div
                    className='absolute left-0 w-2 h-2 bg-violet-500 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2'
                    aria-hidden='true'
                  ></div>
                  <h4 className='h4'>
                    JHL was founded in Brooklyn, New York by Joseph H.
                    Lowenstein
                  </h4>
                </div>
                <p className='text-lg text-gray-400'>
                  WITH ONLY A FEW YEARS of work experience at S.B Kraus, a local
                  paint sore, and five hundred dollars in his pocket, Joseph
                  opens his own paint store at 33 Throop Ave, Brooklyn, New
                  York.
                </p>
              </div>
            </div>

            {/* 2nd item */}
            <div
              className='relative py-4 md:py-6 pl-24'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-anchor='[data-aos-id-timeline]'
            >
              <div className='pl-2'>
                <div className=' text-xl text-violet-500 mb-2'>Growth</div>
                <div className='flex items-center mb-3'>
                  <div className='absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full'>
                    1920s
                  </div>
                  <div
                    className='absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3'
                    aria-hidden='true'
                  ></div>
                  <div
                    className='absolute left-0 w-2 h-2 bg-violet-500 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2'
                    aria-hidden='true'
                  ></div>
                  <h4 className='h4'>A Star Grows in Brooklyn</h4>
                </div>
                <p className='text-lg text-gray-400'>
                  BY THE 1920s Jos H. Lowenstein is firmly established and moves
                  his business to 19 Wyckoff Avenue, Brooklyn, New York where he
                  has access to a large warehouse and office facilities.
                </p>
              </div>
            </div>

            {/* 3rd item */}
            <div
              className='relative py-4 md:py-6 pl-24'
              data-aos='fade-up'
              data-aos-delay='400'
              data-aos-anchor='[data-aos-id-timeline]'
            >
              <div className='pl-2'>
                <div className=' text-xl text-violet-500 mb-2'>Legacy</div>
                <div className='flex items-center mb-3'>
                  <div className='absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full'>
                    1950s
                  </div>
                  <div
                    className='absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3'
                    aria-hidden='true'
                  ></div>
                  <div
                    className='absolute left-0 w-2 h-2 bg-violet-500 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2'
                    aria-hidden='true'
                  ></div>
                  <h4 className='h4'>
                    Revolutionizing Color: Where Science and Innovation Meet
                  </h4>
                </div>
                <p className='text-lg text-gray-400'>
                  Embracing the 1950s Technological Wave: Meet Steve Lowenstein,
                  A Visionary Chairman Continuing the Legacy of Color Innovation
                  at Jos.H. Lowenstein and Sons.
                </p>
              </div>
            </div>

            {/* 4th item */}
            <div
              className='relative py-4 md:py-6 pl-24'
              data-aos='fade-up'
              data-aos-delay='600'
              data-aos-anchor='[data-aos-id-timeline]'
            >
              <div className='pl-2'>
                <div className=' text-xl text-violet-500 mb-2'></div>
                <div className='flex items-center mb-3'>
                  <div className='absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full'></div>
                  <div
                    className='absolute left-0 w-2 h-2 bg-violet-500 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2'
                    aria-hidden='true'
                  ></div>
                  <h4 className='h4'></h4>
                </div>
                <p className='text-lg text-gray-400'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
