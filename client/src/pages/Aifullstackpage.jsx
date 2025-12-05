import React from 'react'
import Navbar from '../fullstack/layout/Navbar'
import HeroSection from '../fullstack/Homepage/Homepage'
import MasterclassPage from '../fullstack/Homepage/Whysection'
import WhyAISection from '../fullstack/Homepage/WhyAISection'
import WhyChooseBM from '../fullstack/Homepage/WhyChooseBM'
import MasterclassSection from '../fullstack/Homepage/MasterclassSection'
import WhoShouldJoinHero from '../fullstack/Homepage/WhoShouldJoinHero'

const Aifullstackpage = () => {
  return (
    <div>
        <Navbar/>
         <HeroSection/>
      <MasterclassPage/>
      <WhyAISection/>
      <WhyChooseBM/>
      <MasterclassSection/>
      <WhoShouldJoinHero/>
    </div>
  )
}

export default Aifullstackpage