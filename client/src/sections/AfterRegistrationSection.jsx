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
            title: "Email Confirmation",
            description: "You will receive a mail with your selected date and webinar link."
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
        <div id="after-register" className="px-4 md:px-16 lg:px-24 xl:px-32 py-0 w-full">

            {/* Section Heading */}
            <SectionTitle
                text1="What Happens After Registration"
                text2="After You Register, You Will:"
                text3="Everything is designed to give you clarity, reminders, and a smooth webinar experience."
            />

            {/* Cards Container - Using Flex to Center Everything */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 max-w-7xl mx-auto">
                {steps.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, scale: 1.02 }} 
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className="w-full sm:w-80 lg:w-96 p-8 rounded-3xl 
                                       bg-white/5 border border-white/10 backdrop-blur-xl
                                       flex flex-col items-center text-center
                                       hover:border-yellow-500 hover:bg-white/10
                                       hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.4)]
                                       transition-all duration-300 cursor-pointer group"
                        >
                            {/* Icon with Glow Background */}
                            <div className="mb-6 p-4 rounded-full bg-white/5 group-hover:bg-yellow-500/20 transition-colors duration-300">
                                <Icon className="text-yellow-400 text-5xl drop-shadow-lg" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-slate-100 mb-3 group-hover:text-yellow-400 transition-colors">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
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