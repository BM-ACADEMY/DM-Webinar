import Navbar from '@/Data_Analyst/Layout/Navbar'

import HeroSection from '@/Data_Analyst/Homepages/Hero'
import MasterClassSection from '@/Data_Analyst/Homepages/MasterClassSection'
import WhoShouldJoin from '@/Data_Analyst/Homepages/WhoShouldJoin'
import WhoShouldJoinHero from '@/Data_Analyst/Homepages/WhoShouldJoinhero'
import WhyAI from '@/Data_Analyst/Homepages/WhyAI'
import WhyChoose from '@/Data_Analyst/Homepages/WhyChoose'
import WhySection from '@/Data_Analyst/Homepages/Whysection'
import Contact from '@/Data_Analyst/Homepages/Contact'
import React from 'react'
import Footer from '@/components/Footer'
import Faq from '@/Data_Analyst/Homepages/Faq'

const Data_Analyst = () => {
  return (
    <div className="bg-black text-white antialiased">
      <Navbar />
      <HeroSection />
      <WhySection />
      <WhyAI />
      <WhyChoose />
      <MasterClassSection />
      <WhoShouldJoin />
      <Contact />
      <Faq />
      <Footer />
    </div>
  )
}

export default Data_Analyst
