import ContentA from '@/app/leather/company/contentA'
import ContentB from '@/app/leather/company/contentB'
import ContentC from '@/app/leather/company/contentC'

export default function Hero() {
  return (
    <section>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 relative'>
        {/* Hero content */}
        <div className='relative pt-100 pb-10 mt7  md:pb-16'>
          <div className=' mx-auto '>
            <ContentA />
            <ContentB />
            <ContentC />
          </div>
        </div>
      </div>
    </section>
  )
}
