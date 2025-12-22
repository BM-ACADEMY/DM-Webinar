import { motion } from "motion/react";
import { CheckCircleIcon, ArrowLeftIcon, CalendarCheckIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

// Reuse your window size hook here
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });
    useEffect(() => {
        function handleResize() {
            setWindowSize({ width: document.documentElement.clientWidth, height: window.innerHeight });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export default function ThankYou() {

      useEffect(() => {
    // 🔥 FIRE LEAD EVENT ONLY ON THANK YOU PAGE
    if (window.fbq) {
      window.fbq("track", "Lead");
    }

    // Optional: GA4 conversion
    if (window.gtag) {
      window.gtag("event", "generate_lead", {
        event_category: "Form",
        event_label: "Webinar Registration",
      });
    }
  }, []);

  
    const { width, height } = useWindowSize();

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.2 } 
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1, 
            transition: { type: "spring", stiffness: 100 } 
        }
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: { 
            scale: 1, 
            rotate: 0, 
            transition: { type: "spring", stiffness: 200, damping: 15 } 
            
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-4 relative overflow-hidden">
            {/* Confetti runs immediately on mount */}
            <Confetti width={width} height={height} recycle={false} numberOfPieces={800} gravity={0.15} />

            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-600/20 blur-[120px] rounded-full pointer-events-none" />

            <motion.div 
                className="max-w-lg w-full bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 rounded-3xl text-center shadow-2xl relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Icon */}
                <motion.div variants={iconVariants} className="mx-auto w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                    <CheckCircleIcon className="size-12 text-green-500" />
                </motion.div>

                {/* Title */}
                <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Seat Reserved!
                </motion.h1>

                {/* Body Text */}
                <motion.p variants={itemVariants} className="text-slate-300 text-lg mb-8 leading-relaxed">
                    Thank you for registering. We have sent the webinar details to your email.
                </motion.p>

                {/* Details Box */}
                {/* <motion.div variants={itemVariants} className="bg-white/5 rounded-xl p-4 mb-8 flex items-center justify-center gap-3 border border-white/10">
                    <CalendarCheckIcon className="text-yellow-500 size-6" />
                    <span className="text-slate-200 font-medium">Mark your calendar: 27th December</span>
                </motion.div> */}

                {/* Back Button */}
                {/* <motion.div variants={itemVariants}>
                    <Link 
                        to="/digital-marketing" 
                        className="inline-flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full transition-colors font-medium group"
                    >
                        <ArrowLeftIcon className="size-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </motion.div> */}
            </motion.div>
        </div>
    );
}