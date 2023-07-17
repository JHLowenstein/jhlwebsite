import ContactSection from '@/app/hair/contact/components/content'

export default function Hero() {
  return (
    <section>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative'>
        {/* Hero content */}
        <div className='relative pt-100 pb-10 mt7 md:pt-40 md:pb-16'>
          <div className=' mx-auto '>
            <ContactSection />
          </div>
        </div>
      </div>
    </section>
  )
}
