import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { audienceData } from "../data/features";
import React from "react";

export default function FeaturesSection() {
    // State to track which item is being hovered
    const [hoverIndex, setHoverIndex] = React.useState(null);

    return (
        <div id="audience" className="px-4 md:px-16 lg:px-24 xl:px-32">

            {/* Section Heading */}
            <SectionTitle
                text1="Who is this webinar for?"
                text2="Is This Webinar for You?"
                text3="This free session is perfect if you want to build a strong career or side income using AI + Digital Marketing."
            />

            {/* Audience Bullet Sections */}
            <div className="mt-16 max-w-3xl mx-auto space-y-6">
                {audienceData.map((item, index) => {
                    const Icon = item.icon;
                    
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 200,
                                damping: 20
                            }}
                            // --- Hover Logic ---
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            className={`
                                flex items-start gap-4 p-4 rounded-xl border transition-all cursor-default sm:cursor-pointer
                                ${hoverIndex === index 
                                    ? "bg-yellow-100 border-yellow-300 shadow-lg" 
                                    : "bg-slate-950 border-slate-800"
                                }
                            `}
                        >
                            {/* Icon Styling */}
                            <Icon 
                                className={`
                                    text-3xl mt-1 transition-colors
                                    ${hoverIndex === index ? "text-yellow-700" : "text-yellow-500"}
                                `} 
                            />
                            
                            {/* Text Styling */}
                            <p className={`
                                text-lg transition-colors font-medium
                                ${hoverIndex === index ? "text-slate-800" : "text-slate-300"}
                            `}>
                                {item.text}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}