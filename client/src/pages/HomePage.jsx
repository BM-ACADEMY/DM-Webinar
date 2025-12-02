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


export default function HomePage() {
    return (
        <>
            <HeroSection />
            
            <FeaturesSection />
            <LearnSection />
            <CourseSection />
            <HostSection />
            <Achievements />
            <ContactSection />
            <GallerySection />
            <AfterRegistrationSection />
            <WhatsAppBtn/>
            <FAQSection />
            {/* <CTASection /> */}
        </>
    );
}