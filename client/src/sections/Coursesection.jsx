import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { courseData } from "../data/course";
import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react"; // Added icons for visual detail

export default function CourseSection() {
    return (
        <div id="course" className="relative px-4 md:px-16 lg:px-24 xl:px-32 mt-0">

            {/* VECTOR BACKGROUND (Kept exactly as is) */}
            <div className="absolute inset-0 -z-10 opacity-25 pointer-events-none">
                <svg
                    viewBox="0 0 1000 700"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <linearGradient id="goldGrad2" x1="0" x2="1" y1="0" y2="1">
                            <stop offset="0%" stopColor="#f4d03f" />
                            <stop offset="100%" stopColor="#b8860b" />
                        </linearGradient>
                        <radialGradient id="goldGlow2" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#f4d03f" stopOpacity="0.35" />
                            <stop offset="100%" stopColor="transparent" />
                        </radialGradient>
                    </defs>
                    <path d="M0 0 C350 120 350 180 0 300" fill="url(#goldGrad2)" opacity="0.22" />
                    <path d="M1000 700 C650 580 650 520 1000 400" fill="url(#goldGrad2)" opacity="0.22" />
                    <circle cx="260" cy="220" r="180" fill="url(#goldGlow2)" opacity="0.28" />
                    <circle cx="780" cy="520" r="250" fill="url(#goldGlow2)" opacity="0.25" />
                    <path d="M150 100 L350 250 L550 100 L750 250 L950 100" stroke="#f4d03f" strokeWidth="1.2" opacity="0.12" fill="none" />
                    <path d="M80 480 L300 600 L520 480 L740 600 L960 480" stroke="#f4d03f" strokeWidth="1.2" opacity="0.12" fill="none" />
                    <path d="M0 650 L1000 50" stroke="#b8860b" strokeWidth="0.8" opacity="0.08" />
                    <path d="M0 550 L1000 0" stroke="#b8860b" strokeWidth="0.8" opacity="0.08" />
                </svg>
            </div>


            <div id="webinar" className="mt-20"></div>

            {/* Section Heading */}
            <SectionTitle
                text1="Course Overview"
                text2="About the AI + Digital Marketing Integrated Course (BM Academy)"
                text3="Our Digital Marketing Pro: AI Integrated Course is a 90-day practical program designed to make you job-ready with real projects, AI tools, and placement support."
            />

            {/* Main paragraph */}
            <motion.p
                className="text-slate-300 text-center max-w-2xl mx-auto mt-6 text-base md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                You can attend <span className="text-yellow-500">online or offline in Tamil</span>, with personal mentorship throughout the program.
            </motion.p>

            {/* Flip Cards with 3D Tilt */}
            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                {courseData.map((item, index) => (
                    <TiltFlipCard key={index} item={item} index={index} />
                ))}
            </div>

            {/* End Note */}
            <motion.p
                className="text-center text-yellow-500 mt-10 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Full details and special offers will be shared at the end of the webinar.
            </motion.p>

            {/* Poppins font */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
                * { font-family: 'Poppins', sans-serif; }
            `}</style>
        </div>
    );
}

/* -------------------------------------------
   FLIP + 3D TILT + GLOW CARD COMPONENT
-------------------------------------------- */
function TiltFlipCard({ item, index }) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [flipped, setFlipped] = useState(false);

    // detect mobile / touch device
    const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

    const handleMouseMove = (e) => {
        if (isMobile) return;
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const tiltX = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
        const tiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
        setTilt({ x: tiltX, y: tiltY });
        if (!flipped) setFlipped(true);
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        setFlipped(false);
        setTilt({ x: 0, y: 0 });
    };

    const handleClick = () => {
        if (isMobile) {
            setFlipped((prev) => !prev);
            return;
        }
        setFlipped(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                transform: `
                    rotateX(${isMobile ? 0 : tilt.x}deg) 
                    rotateY(${isMobile ? 0 : tilt.y}deg)
                `,
                transition: "transform 0.15s ease-out",
            }}
            className="
                group 
                border-1 border-amber-200
                w-64 h-80 
                sm:w-72 sm:h-88 
                md:w-80 md:h-96 
                cursor-pointer rounded-2xl relative overflow-hidden 
                [perspective:1000px] 
                transition-all duration-300
            "
        >
            <div
                className="
                    relative w-full h-full transition-transform duration-700 
                    [transform-style:preserve-3d]
                "
                style={{
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
            >

                {/* --- FRONT SIDE --- */}
                <div className="
                    absolute inset-0 w-full h-full [backface-visibility:hidden] 
                    rounded-2xl overflow-hidden border border-white/10 group-hover:border-yellow-500/50 transition-colors
                ">
                    <img
                        src={item.icon}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark Overlay Gradient for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* NEW FRONT DESIGN: Glass Info Strip */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-lg">
                        <div className="flex items-center justify-between">
                            <h3 className="text-white text-base font-bold tracking-wide uppercase line-clamp-1">
                                {item.title}
                            </h3>
                            <div className="bg-yellow-500 p-1.5 rounded-full">
                                <ArrowRight size={14} className="text-black" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- BACK SIDE (New Dark Premium Look) --- */}
                <div className="
                    absolute inset-0 w-full h-full [backface-visibility:hidden] 
                    [transform:rotateY(180deg)]
                    rounded-2xl 
                    bg-gradient-to-br from-slate-950 via-[#0a0a0a] to-slate-900
                    border-[1.5px] border-yellow-500/40
                    shadow-[inset_0_0_30px_rgba(234,179,8,0.1)]
                    p-6 
                    flex flex-col items-center justify-center text-center
                ">
                    {/* Decorative Top Icon */}
                    <Sparkles className="text-yellow-500 mb-3 opacity-80" size={24} />

                    {/* Title in Yellow-500 (As Requested) */}
                    <h3 className="text-2xl font-bold text-yellow-500 mb-3 tracking-wide">
                        {item.title}
                    </h3>
                    
                    {/* Divider */}
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4 rounded-full" />

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed opacity-90">
                        {item.description}
                    </p>

                    {/* Bottom Glow Hint */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-yellow-500/50 blur-sm rounded-t-full"></div>
                </div>

            </div>
        </motion.div>
    );
}