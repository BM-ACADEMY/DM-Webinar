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
import GallerySection from '@/fullstack/Homepage/GallerySection'
import Achievements from '@/fullstack/Homepage/Achievements'
import RegistrationSection from '@/fullstack/Homepage/Enquriyform'
import Certificate from '@/fullstack/Homepage/Certificate'

const Aifullstackpage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MasterclassPage />
      <WhyAISection />
      <WhyChooseBM />
      <MasterclassSection />
      <Achievements/>
      <WhoShouldJoinHero />
      <Mastertamil/>
      <div className='bg-black text-white'>
        <RegistrationSection/>
      <GallerySection/>

      </div>
      <ReserveSeatSection/>
      <Certificate/>
      <FAQSection/>
      <WhatsAppBtn/>
      <Footer/>
    </div>
  )
}

export default Aifullstackpage