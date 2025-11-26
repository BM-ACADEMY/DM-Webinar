import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import {
    AiOutlineCheckCircle,
    AiOutlineMessage,
    AiOutlineCalendar,
    AiOutlineVideoCamera,
    AiOutlineGift
} from "react-icons/ai";

export default function AfterRegistrationSection() {
    const steps = [
        {
            icon: AiOutlineMessage,
            title: "WhatsApp Confirmation",
            description: "You will receive a WhatsApp message with your selected date and webinar link."
        },
        {
            icon: AiOutlineCalendar,
            title: "Reminder Notifications",
            description: "We’ll send reminders before the session starts so you never miss it."
        },
        {
            icon: AiOutlineVideoCamera,
            title: "Attend Live Webinar",
            description: "Join the live Tamil session, interact, and ask your questions directly."
        },
        {
            icon: AiOutlineCheckCircle,
            title: "Participation Certificate",
            description: "Get certificate access if you attend the session fully (eligible attendees)."
        },
        {
            icon: AiOutlineGift,
            title: "Special Course Offers",
            description: "Receive exclusive offers for the AI + Digital Marketing Integrated Program."
        }
    ];

    return (
        <div id="after-register" className="px-4 md:px-16 lg:px-24 xl:px-32 mt-24">

            {/* Section Heading */}
            <SectionTitle
                text1="What Happens After Registration"
                text2="After You Register, You Will:"
                text3="Everything is designed to give you clarity, reminders, and a smooth webinar experience."
            />

            {/* Steps */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                {steps.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 220 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                                       hover:border-yellow-500 hover:shadow-2xl transition cursor-pointer"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <Icon className="text-yellow-400 text-4xl" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-slate-100 mb-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-300 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Poppins Font */}
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
                * {
                    font-family: 'Poppins', sans-serif;
                }
                `}
            </style>
        </div>
    );
}
