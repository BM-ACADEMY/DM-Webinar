import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import React from "react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleFAQ = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    const faqList = [
        {
            question: "Is this webinar really free?",
            answer:
                "Yes. The webinar is 100% free. At the end, we will share details of our paid AI + Digital Marketing course for those who are interested."
        },
        {
            question: "Do I need any prior knowledge?",
            answer:
                "No. This webinar is beginner-friendly. We explain everything in simple Tamil with real examples."
        },
        {
            question: "Will I get the recording?",
            answer:
                "We recommend attending live for the best experience. Recording access, if provided, will be informed during the session."
        },
        {
            question: "Will you talk about jobs and salary?",
            answer:
                "Yes. We will discuss roles, salary ranges, and how our course plus placement support can help you."
        },
        {
            question: "Is this only for people in Puducherry?",
            answer:
                "No. Anyone from anywhere in India can join online. For offline batches, classes are in Puducherry."
        }
    ];

    return (
        <div id="faq" className="px-4 md:px-16 lg:px-24 xl:px-32 mt-24">

            {/* Section Title */}
            <SectionTitle
                text1="FAQ"
                text2="Frequently Asked Questions"
                text3="Answers to the most common questions about our free webinar."
            />

            {/* FAQ List */}
            <div className="max-w-3xl mx-auto mt-12 space-y-4">

                {faqList.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl overflow-hidden"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-5 text-left"
                        >
                            <span className="text-lg font-medium text-slate-100">
                                {item.question}
                            </span>

                            {openIndex === index ? (
                                <AiOutlineMinus className="text-yellow-400 text-xl" />
                            ) : (
                                <AiOutlinePlus className="text-yellow-400 text-xl" />
                            )}
                        </button>

                        {/* Answer */}
                        {openIndex === index && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="px-5 pb-5 text-slate-300 leading-relaxed text-sm"
                            >
                                {item.answer}
                            </motion.p>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Poppins Font */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
                * { font-family: 'Poppins', sans-serif; }
            `}</style>
        </div>
    );
}
