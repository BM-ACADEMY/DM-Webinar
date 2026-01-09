import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CheckCircleIcon } from "lucide-react";
import Confetti from "react-confetti";

// 🔹 Window size hook (for confetti)
function useWindowSize() {
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default function ThankYou() {
  const { width, height } = useWindowSize();

  // 🔥 TRACKING: FIRE ONLY ON THANK YOU PAGE LOAD
  useEffect(() => {
    // ✅ Facebook Pixel Lead Event
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }

    // ✅ Google Analytics / GA4 Lead Event
    if (typeof window.gtag === "function") {
      window.gtag("event", "webinar_lead", {
        event_category: "Lead",
        event_label: "BM Academy Webinar",
      });
    }
  }, []);

  // 🔹 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-4 relative overflow-hidden">
      {/* 🎉 Confetti */}
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={800}
        gravity={0.15}
      />

      {/* ✨ Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* 💎 Card */}
      <motion.div
        className="max-w-lg w-full bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 rounded-3xl text-center shadow-2xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ✅ Icon */}
        <motion.div
          variants={iconVariants}
          className="mx-auto w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20"
        >
          <CheckCircleIcon className="size-12 text-green-500" />
        </motion.div>

        {/* 🎯 Title */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Seat Reserved!
        </motion.h1>

        {/* 📩 Message */}
        <motion.p
          variants={itemVariants}
          className="text-slate-300 text-lg leading-relaxed"
        >
          Thank you for registering. We’ve sent the webinar details to your email.
        </motion.p>
      </motion.div>
    </div>
  );
}
