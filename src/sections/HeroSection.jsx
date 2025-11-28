// import { Calendar, Clock, Globe, Languages, Gift, CheckIcon } from "lucide-react";
// import { motion } from "motion/react";
// import TiltedImage from "../components/TiltImage";
// import { AiOutlineCalendar } from "react-icons/ai";


// export default function HeroSection() {
//     return (
//         <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
            
//             {/* Background Glow */}
//             <div className="absolute top-30 -z-10 left-1/4 size-72 bg-yellow-600 blur-[300px]"></div>

//             {/* Headline Badge Removed */}

//             {/* Headline */}
//             <motion.h1
//                 className="text-4xl md:text-6xl font-semibold max-w-3xl text-center mt-40"
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ type: 'spring', stiffness: 240, damping: 70 }}
//             >
//                 Launch Your Digital Marketing Career{" "}
//                 <span className="move-gradient px-3 rounded-xl">with AI in 90 Minutes</span>
//             </motion.h1>

//             {/* Subheadline */}
//             <motion.p
//                 className="text-lg text-center text-slate-200 max-w-2xl mt-6"
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2, type: 'spring', stiffness: 320, damping: 70 }}
//             >
//                 Free Live Webinar in Tamil – Learn how to use AI + Digital Marketing to get a job,
//                 grow your business, or start freelancing.
//             </motion.p>

//             {/* Key Info Section */}
//             <motion.div
//                 className="mt-10 bg-white/10 border border-white/20 p-6 rounded-2xl w-full max-w-xl text-slate-200 space-y-4"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3, type: 'spring' }}
//             >
//                 <p className="font-semibold text-yellow-400 flex items-center gap-2">
//     <AiOutlineCalendar className="text-yellow-400 text-xl" />
//     Upcoming Live Sessions:
// </p>


//                 <div className="space-y-2 ml-2">
//                     <p className="flex items-center gap-2"><Calendar size={18}/> 6 December 2025, 7:00 PM – 8:30 PM</p>
//                     <p className="flex items-center gap-2"><Calendar size={18}/> 4 January 2026, 7:00 PM – 8:30 PM</p>
//                 </div>

//                 <p className="flex items-center gap-2 mt-3">
//                     <Globe size={18}/> Mode: Online (Zoom/Google Meet)
//                 </p>

//                 <p className="flex items-center gap-2">
//                     <Languages size={18}/> Language: Tamil (simple, practical explanation)
//                 </p>

//                 <p className="flex items-center gap-2">
//                     <CheckIcon size={18} className="text-yellow-400"/> 100% Free Webinar
//                 </p>

//                 <p className="flex items-center gap-2">
//                     <Gift size={18}/> Bonus: Certificate + Special Offer for Full Course Attendees
//                 </p>
//             </motion.div>

//             {/* CTA Button */}
//             <motion.div
//                 className="mt-8"
//                 initial={{ y: 30, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.4, type: 'spring' }}
//             >
//                 <a
//   href="#contact"
//   className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-10 py-3 text-lg font-semibold inline-block"
// >
//   Register for the Free AI + Digital Marketing Webinar
// </a>


//                 {/* Micro Text */}
//                 <p className="text-sm text-slate-300 text-center mt-3">
//                     Choose your date in the form. Limited seats – confirmation on WhatsApp.
//                 </p>
//             </motion.div>

//             {/* Hosted By Strip */}
//             <motion.div
//                 className="mt-10 bg-yellow-600/20 border border-yellow-600/40 px-6 py-3 rounded-full text-white flex items-center gap-2"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.5, type: 'spring' }}
//             >
//                 <span className="font-semibold">Hosted by</span>
//                 <span className="font-bold">Kamarudeen BM</span>
//                 <span className="opacity-90"> Founder – ABM Groups & BM Academy</span>
//             </motion.div>

//             {/* Image */}
//             {/* <TiltedImage /> */}
//         </div>
//     );
// }



import { Calendar, Globe, Languages, Gift, CheckIcon } from "lucide-react";
import { motion } from "motion/react";
import { AiOutlineCalendar } from "react-icons/ai";
import ConfettiEffect from "../components/ConfettiEffect";



export default function HeroSection() {
    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
           <ConfettiEffect />
            {/* Background Glow */}
            <div className="absolute top-20 -z-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-yellow-600 blur-[200px] opacity-30"></div>

            {/* Headline */}
            <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl font-semibold max-w-3xl text-center mt-28 sm:mt-36 md:mt-40 leading-tight"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 240, damping: 70 }}
            >
                Launch Your Digital Marketing Career{" "}
                <span className="move-gradient px-3 rounded-xl">with AI in 90 Minutes</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
                className="text-base sm:text-lg text-center text-slate-300 max-w-xl sm:max-w-2xl mt-4 sm:mt-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 320, damping: 70 }}
            >
                Free Live Webinar in Tamil – Learn how to use AI + Digital Marketing to get a job,
                grow your business, or start freelancing.
            </motion.p>

            {/* Info Box */}
            <motion.div
                className="mt-8 sm:mt-10 bg-white/10 border border-white/20 p-5 sm:p-6 rounded-2xl w-full max-w-md sm:max-w-xl text-slate-200 space-y-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
            >
                <p className="font-semibold text-yellow-400 flex items-center gap-2 text-lg">
                    <AiOutlineCalendar className="text-yellow-400 text-xl" />
                    Upcoming Live Sessions:
                </p>

                <div className="space-y-2 ml-1">
                    <p className="flex items-center gap-2"><Calendar size={18} /> 6 December 2025, 7:00 PM – 8:30 PM</p>
                    <p className="flex items-center gap-2"><Calendar size={18} /> 4 January 2026, 7:00 PM – 8:30 PM</p>
                </div>

                <p className="flex items-center gap-2 mt-2"><Globe size={18} /> Mode: Online (Zoom/Google Meet)</p>
                <p className="flex items-center gap-2"><Languages size={18} /> Language: Tamil</p>

                <p className="flex items-center gap-2">
                    <CheckIcon size={18} className="text-yellow-400" /> 100% Free Webinar
                </p>

                <p className="flex items-center gap-2">
                    <Gift size={18} /> Bonus: Certificate + Special Offer
                </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
                className="mt-6 sm:mt-8"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring' }}
            >
                <a
                    href="#contact"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full px-8 sm:px-10 py-3 text-base sm:text-lg font-semibold inline-block"
                >
                    Register for the Free AI + Digital Marketing Webinar
                </a>

                <p className="text-xs sm:text-sm text-slate-300 text-center mt-3 max-w-sm mx-auto">
                    Choose your date in the form. Limited seats – confirmation on WhatsApp.
                </p>
            </motion.div>

            {/* Hosted By Strip */}
            <motion.div
                className="mt-8 sm:mt-10 bg-yellow-600/20 border border-yellow-600/40 px-4 sm:px-6 py-3 rounded-full text-white text-sm sm:text-base flex flex-wrap justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
            >
                <span className="font-semibold">Hosted by</span>
                <span className="font-bold">Kamarudeen BM</span>
                <span className="opacity-90">Founder – ABM Groups & BM Academy</span>
            </motion.div>

        </div>
    );
}
