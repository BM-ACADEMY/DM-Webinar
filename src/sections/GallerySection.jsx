import SectionTitle from "../components/SectionTitle";
import { motion } from "motion/react";

// IMPORT YOUR IMAGES
import img1 from "../assets/DM/IMG-20251031-WA0004.jpg";
import img2 from "../assets/DM/IMG-20251031-WA0005.jpg";
import img3 from "../assets/DM/IMG20251004133307.jpg";
import img4 from "../assets/DM/IMG20251004133357.jpg";
import img5 from "../assets/DM/IMG-20251031-WA0003.jpg";
import img6 from "../assets/DM/IMG-20251031-WA0004.jpg"; // duplicate example

export default function GallerySection() {
    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <div id="gallery" className="px-4 md:px-16 lg:px-24 xl:px-32 mt-24">

            {/* Section Heading */}
            <SectionTitle
                text1="Gallery – Inside BM Academy"
                text2="Gallery – Inside BM Academy"
                text3="A glimpse into our live sessions, real projects, internships, and student success stories."
            />

            {/* Responsive Hover-Expand Gallery */}
            <div
                className="
                    flex 
                    flex-col sm:flex-row 
                    items-center sm:items-stretch
                    gap-4 sm:gap-2
                    w-full 
                    max-w-6xl 
                    mt-10 
                    mx-auto
                    overflow-hidden
                "
            >
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        className="
                            relative group 
                            overflow-hidden 
                            rounded-xl
                            h-[260px] 
                            w-full 
                            sm:w-40 
                            sm:h-[350px]
                            flex-grow
                            transition-all duration-500 
                            sm:hover:w-full
                        "
                    >
                        <img
                            src={img}
                            alt="Gallery"
                            className="
                                w-full 
                                h-full 
                                object-cover 
                                object-center 
                                transition-transform duration-500 
                                group-hover:scale-105
                            "
                        />
                    </motion.div>
                ))}
            </div>

            {/* Poppins font */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
                * { font-family: 'Poppins', sans-serif; }
            `}</style>
        </div>
    );
}
