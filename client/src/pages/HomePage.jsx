import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";
import ContactSection from "../sections/ContactSection";
import LearnSection from "../sections/Learnsection";
import CourseSection from "../sections/Coursesection";
import HostSection from "../sections/Hostsection";
import GallerySection from "../sections/GallerySection";
import AfterRegistrationSection from "../sections/AfterRegistrationSection";
import FAQSection from "../sections/FAQSection";
import Achievements from "../sections/Achievements";
import WhatsAppBtn from "../sections/WhatsAppBtn";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="bg-black text-white antialiased">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LearnSection />
      <CourseSection />
      <HostSection />
      <Achievements />
      <ContactSection />
      <GallerySection />
      <AfterRegistrationSection />
      <WhatsAppBtn />
      <FAQSection />
      <Footer />
      {/* <CTASection /> */}
    </div>
  );
}
