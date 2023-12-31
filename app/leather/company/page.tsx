export const metadata = {
  title:
    'Company - Hair Products, Fur Products & Leather Products - Dye Products and Dyestuff - JHL	',
  description:
    'Jos. H. Lowenstein & Sons a quality dyestuff manufacturer, has been providing the world of fashion with state-of-the-art dye products, brilliant, trend-setting colors for the fur, hair &amp; leather industries all over the world. JHL located in Brooklyn, NY provides a complete line of raw materials for the hair color manufacturer. Our technical staff is well versed in all phases of the hair color formulators requirements. Dye intermediates for permanent hair color are available, along with specially formulated bases and developers. Dyestuff and base materials are also available for semi-permanent and specialty systems.',
}

import Hero from '@/app/(default)/components/company/companyHero'
import Particles from '@/app/(default)/components/particles'
import ContentA from '@/app/(default)/components/company/companyA'
import ContentB from '@/app/(default)/components/company/companyB'
import ContentC from '@/app/(default)/components/company/companyC'
import Team from '@/app/(default)/components/imageMosaic'
// import Timeline from '@/app/(default)/components/timeline'
import Countries from '@/app/(default)/components/countries'

export default function LeatherCompany() {
  return (
    <section>
      <Hero />
      <Team />

      <div className='flex flex-col items-center justify-center overflow-hidden '>
        <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
        <Particles
          className='absolute inset-0 -z-10 animate-fade-in'
          quantity={200}
        />
        <ContentA />
        {/* <Timeline /> */}
        <ContentB />
        <Countries />
        <ContentC />
      </div>
    </section>
  )
}
