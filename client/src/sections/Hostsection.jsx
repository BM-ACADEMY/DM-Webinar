import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { AiOutlineCheckCircle } from "react-icons/ai";
import hostImg from "../assets/kamar1.jpg";

export default function HostSection() {
    const journeyPoints = [
        "From confused student to multi-vertical entrepreneur by learning digital marketing, sales, and technology step by step.",
        "Built ABM Groups with verticals like BM Academy, BM TechX, Dada’s Kitchen, ABM EduBridge, TravellersNeed, Al Amaanath Promoters, Al Haramain Hajj & Umrah, and BM Foundation.",
        "Focused on empowering students and small businesses with practical skills and systems so they can earn confidently.",
        "Early adopter of AI in marketing, content creation, lead generation, and automation.",
        "Trainer and mentor with a simple, practical, Tamil-first teaching style focused on real tools, real projects, and real outcomes."
    ];

    return (
        <div id="host" className="px-4 md:px-12 lg:px-20 xl:px-32 mt-24">
            

            <SectionTitle
                text1="About Your Host"
                text2="Meet Your Host – Kamarudeen BM"
                text3="Founder of ABM Groups & BM Academy, empowering thousands with AI + Digital Marketing."
            />
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start mt-16">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="flex justify-center"
                >
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-800 bg-slate-900 max-h-[480px] w-full max-w-[500px]">
                        <img
                            src={hostImg}
                            alt="Kamarudeen BM"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="space-y-6 max-w-[600px]"
                >
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                        Kamarudeen BM is the founder of ABM Groups and BM Academy in Puducherry.
                        He has built multiple brands across education, tech, food, travel, and
                        real estate using digital marketing, systems and AI.
                    </p>

                    {/* Checklist */}
                    <div className="space-y-4">
                        {journeyPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start gap-3"
                            >
                                <AiOutlineCheckCircle className="text-yellow-500 text-2xl flex-shrink-0" />
                                <p className="text-slate-300 text-sm sm:text-base lg:text-base leading-relaxed">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-yellow-500 font-semibold text-base sm:text-lg leading-relaxed pt-2"
                    >
                        In this webinar, he will share the same mindset, tools, and roadmap he
                        uses in his own businesses — so you can start your AI + Digital Marketing
                        journey with clarity and confidence.
                    </motion.p>
                </motion.div>

            </div>

            {/* Global Poppins Font */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
                * { font-family: 'Poppins', sans-serif; }
            `}</style>

        </div>
    );
}
