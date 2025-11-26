import HeroSection from "../sections/HeroSection";
import FeaturesSection from "../sections/FeaturesSection";
import TestimonialSection from "../sections/TestimonialSection";
import PricingSection from "../sections/PricingSection";
import ContactSection from "../sections/ContactSection";
import CTASection from "../sections/CTASection";
import LearnSection from "../sections/Learnsection";
import CourseSection from "../sections/Coursesection";
import HostSection from "../sections/Hostsection";
import GallerySection from "../sections/GallerySection";
import AfterRegistrationSection from "../sections/AfterRegistrationSection";
import FAQSection from "../sections/FaqSection";


export default function HomePage() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <LearnSection />
            <CourseSection />
            <HostSection />
            {/* <TestimonialSection />
            <PricingSection /> */}
            <ContactSection />
            <GallerySection />
            <AfterRegistrationSection />
            <FAQSection />
            {/* <CTASection /> */}
        </>
    );
}