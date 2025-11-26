import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { learnData } from "../data/learn";
import React from "react";

export default function LearnSection() {
    const [hoverIndex, setHoverIndex] = React.useState(null);

    return (
        <div id="learn" className="px-4 md:px-16 lg:px-24 xl:px-32 mt-20">

            {/* Section Heading */}
            <SectionTitle
                text1="Learning Outcomes"
                text2="What You’ll Learn in This 90-Minute Session"
                text3="Everything you need to understand how AI + Digital Marketing can grow your career or business."
            />

            {/* Cards */}
            <div className="flex flex-col items-center mt-16 gap-6">

                {learnData.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.12,
                                type: "spring",
                                stiffness: 220,
                                damping: 20
                            }}
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                            className={`
                                w-full max-w-2xl cursor-pointer rounded-xl border flex gap-4 p-6 transition-all
                                ${hoverIndex === index
                                    ? "bg-yellow-100 border-yellow-300"
                                    : "bg-slate-950 border-slate-800"
                                }
                            `}
                        >
                            {/* Icon */}
                            <Icon
                                className={`${hoverIndex === index ? "text-yellow-700" : "text-yellow-500"} text-4xl`}
                            />

                            {/* Texts */}
                            <div className="space-y-1">
                                <h3 className={`text-lg font-semibold 
                                    ${hoverIndex === index ? "text-slate-800" : "text-slate-200"}`}
                                >
                                    {item.title}
                                </h3>

                                <p className={`text-sm max-w-xl 
                                    ${hoverIndex === index ? "text-slate-700" : "text-slate-400"}`}
                                >
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Poppins Font */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
                * { font-family: 'Poppins', sans-serif; }
            `}</style>
        </div>
    );
}
