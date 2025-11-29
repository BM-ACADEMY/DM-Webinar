import SectionTitle from "../components/SectionTitle";
import { motion } from "motion/react";

import img1 from "../assets/DM/IMG-20251031-WA0004.jpg";
import img2 from "../assets/DM/IMG-20251031-WA0005.jpg";
import img3 from "../assets/DM/DM_1.jpg";
import img4 from "../assets/DM/DM_2.jpg";
import img5 from "../assets/DM/IMG-20251031-WA0003.jpg";
import img6 from "../assets/DM/IMG-20251031-WA0004.jpg";

export default function GallerySection() {
    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <div id="gallery" className="px-4 md:px-12 lg:px-20 xl:px-32 mt-24">

            <SectionTitle
                text1="Gallery – Inside BM Academy"
                text2="Gallery – Inside BM Academy"
                text3="A glimpse into our live sessions, real projects, internships, and student success stories."
            />

            {/* ⭐ RESPONSIVE GALLERY */}
            <div
                className="
                    mt-10 
                    mx-auto 
                    max-w-6xl 
                    gap-4 
                    flex 
                    flex-col 
                    sm:flex-row 
                    sm:flex-wrap
                    lg:flex-nowrap
                    overflow-hidden
                "
            >
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        className="
                            relative 
                            overflow-hidden 
                            rounded-xl
                            bg-black
                            w-full
                            h-[250px]
                            sm:w-[48%] sm:h-[300px]
                            lg:flex-1 lg:h-[330px]
                            lg:min-w-[140px]
                            transition-all duration-500
                            group
                            lg:hover:flex-[3]
                        "
                    >
                        <img
                            src={img}
                            alt="Gallery"
                            className="
                                w-full 
                                h-full 
                                object-cover 
                                transition-transform 
                                duration-500 
                                group-hover:scale-110
                            "
                        />
                    </motion.div>
                ))}
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
                * { font-family: 'Poppins', sans-serif; }
            `}</style>

        </div>
    );
}
