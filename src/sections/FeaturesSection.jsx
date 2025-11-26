import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { audienceData } from "../data/features";

export default function FeaturesSection() {
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
                            className="flex items-start gap-4 bg-slate-950 border border-slate-800 p-4 rounded-xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 200,
                                damping: 20
                            }}
                        >
                            <Icon className="text-yellow-500 text-3xl mt-1" />
                            <p className="text-slate-300 text-lg">{item.text}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
