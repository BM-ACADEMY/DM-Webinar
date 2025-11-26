import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { courseData } from "../data/course";
import React from "react";

export default function CourseSection() {
    return (
        <div id="course" className="px-4 md:px-16 lg:px-24 xl:px-32 mt-20">
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
                You can attend online or offline in Tamil, with personal mentorship throughout the program.
            </motion.p>

            {/* Cards Section */}
            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                {courseData.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 200,
                                damping: 15
                            }}
                            className="max-w-80 hover:-translate-y-1 transition duration-300 cursor-pointer"
                        >
                            {/* Icon Box */}
                            <div className="w-full h-40 bg-yellow-100 rounded-xl flex items-center justify-center">
                                <Icon className="text-yellow-600" size={55} />
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-semibold text-slate-800 mt-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-600 mt-1">
                                {item.description}
                            </p>
                        </motion.div>
                    );
                })}
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
