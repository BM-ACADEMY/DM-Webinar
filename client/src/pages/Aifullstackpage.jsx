import React from 'react'
import Navbar from '../fullstack/layout/Navbar'
import HeroSection from '../fullstack/Homepage/Homepage'
import MasterclassPage from '../fullstack/Homepage/Whysection'
import WhyAISection from '../fullstack/Homepage/WhyAISection'
import WhyChooseBM from '../fullstack/Homepage/WhyChooseBM'
import MasterclassSection from '../fullstack/Homepage/MasterclassSection'
import WhoShouldJoinHero from '../fullstack/Homepage/WhoShouldJoinHero'
import Mastertamil from '@/fullstack/Homepage/Mastertamil'
import ReserveSeatSection from '@/fullstack/Homepage/Reservesection'
import FAQSection from '@/fullstack/Homepage/Faq'
import Footer from '@/fullstack/layout/Footer'
import WhatsAppBtn from '@/fullstack/Homepage/Whatsapp'

const Aifullstackpage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MasterclassPage />
      <WhyAISection />
      <WhyChooseBM />
      <MasterclassSection />
      <WhoShouldJoinHero />
      <Mastertamil/>
      <ReserveSeatSection/>
      <FAQSection/>
      <WhatsAppBtn/>
      <Footer/>
    </div>
  )
}

export default Aifullstackpage