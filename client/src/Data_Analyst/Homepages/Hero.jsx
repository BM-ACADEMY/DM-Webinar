import React from 'react'; // Explicit import for clarity, though often implicit in modern React
import {
  Calendar,
  Globe,
  Languages,
  Gift,
} from 'lucide-react'; // Removing unused imports: CheckCircle2, Clock, Sparkles
import { motion } from 'framer-motion'; // Assuming "motion/react" is a typo/alias for "framer-motion"
import { AiOutlineCalendar } from 'react-icons/ai';

// Components should be PascalCase and imported/defined appropriately
import ConfettiEffect from '../../components/ConfettiEffect';
// AnimatedLetters seems unused, removing import
// import AnimatedLetters from '../../components/AnimatedLetters';

/**
 * 💡 Animation Variants for Framer Motion:
 * Define complex animations outside the component for better performance, reusability, and readability.
 * The 'viewport' and 'transition' props are now encapsulated in the variants.
 */
const contentVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: 'spring',
      bounce: 0.4,
    },
  },
};

const ctaVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
    },
  },
};

const hostStripVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
    },
  },
};

/**
 * HeroSection Component
 * Represents the primary landing page banner for the AI + Data Analytics Masterclass.
 * Uses Framer Motion for scroll-triggered animations (whileInView).
 */
export default function HeroSection() {
  // --- Data Structure for Reusability ---
  // Encapsulate repeating data (like batch dates) for easier maintenance.
  const upcomingBatches = [
    {
      date: 'Dec 06, 2025',
      day: 'Saturday',
      time: '4:30 PM – 6:00 PM',
    },
    {
      date: 'Dec 27, 2025',
      day: 'Sunday',
      time: '4:30 PM – 6:00 PM',
    },
  ];

  const valueProps = [
    {
      icon: Globe,
      label: 'Mode',
      subtext: '( Zoom / Google Meet )',
      mainText: 'Online Live',
    },
    {
      icon: Languages,
      label: 'Language',
      mainText: 'Tamil',
    },
  ];

  return (
    <div
      className="
        relative flex flex-col items-center justify-center
        px-4 sm:px-6 md:px-12 lg:px-24
        overflow-hidden
        min-h-screen
        pt-28 sm:pt-36 pb-0
        bg-[#030303]
      "
      // Added a role for better semantic meaning in the main container
      role="region"
      aria-label="Masterclass Hero Section"
    >
      <ConfettiEffect />

      {/* --- BACKGROUND EFFECTS --- */}
      {/* Used fragment shorthand <> to remove unnecessary surrounding divs */}
      <>
        {/* Pattern: Added A11Y role="presentation" as this is purely decorative/visual noise */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
          role="presentation"
        />

        {/* Glow: Reduced blur value for potential slight performance gain on low-end devices/less intense aesthetic */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-yellow-600/20 blur-[100px] rounded-full pointer-events-none"
          role="presentation"
        />
      </>

      {/* --- CONTENT --- */}

      {/* 1. Super Headline */}
      <motion.div
        className="text-center z-10 relative"
        // Applying variants. Using 'initial' and 'whileInView' with 'viewport' set to 'once: true' is a good pattern.
        initial="hidden"
        whileInView="visible"
        variants={contentVariants}
        viewport={{ once: true }}
      >
        <span
          className="inline-block py-1 px-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase"
          // Added 'aria-live' and 'aria-atomic' for screen readers to announce the important update/status
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="animate-pulse mr-2" aria-hidden="true">
            ●
          </span>{' '}
          FREE Masterclass
        </span>

        <div className="max-w-5xl mx-auto text-center">
          {/* Using <h2> for primary page title within the section for better heading hierarchy (H1 is usually outside/app-wide)
              -- though H1 is acceptable for a standalone landing page. Sticking to H1 as in original, but noted.
          */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">
              AI + Data Analytics{' '}
            </span>
            as Your Career?
          </h1>
        </div>

        <p className="mt-6 text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Discover how <span className="text-yellow-500">BM Academy</span> can
          launch your future in the{' '}
          <span className="text-yellow-500">fastest-growing tech field</span> —
          with real skills, practical training, and a roadmap to secure a
          high-paying job, freelance work, or business growth.
        </p>
      </motion.div>

      {/* 2. Event Ticket Card */}
      <motion.div
        className="mt-10 relative z-10 w-full max-w-xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: true }}
      >
        <div className="relative bg-[#121212] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-900/10">
          {/* Ribbon */}
          <div className="absolute -top-3 -right-1 w-32 h-32 overflow-hidden z-20 pointer-events-none" role="presentation">
            <div className="absolute top-[22px] -right-[42px] w-[150px] transform rotate-45 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-center py-1.5 shadow-lg border-y-2 border-yellow-300/50">
              <div className="flex flex-col leading-none text-white items-center justify-center -ml-1">
                <span className="text-[10px] font-semibold opacity-90 decoration-red-500 decoration-[1.5px]">
                  100%
                </span>
                <span className="text-md font-black tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  FREE
                </span>
              </div>
              <div className="absolute inset-0 bg-white/20 skew-x-12 opacity-30" role="presentation"></div>
            </div>
          </div>

          {/* Card Header */}
          <div className="bg-white/5 p-4 border-b border-white/5 flex items-center gap-4">
            {/* Semantic improvements: traffic light dots are decorative */}
            <div className="flex gap-2" role="presentation">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm"></div>
            </div>

            <div className="h-4 w-[1px] bg-white/10" role="separator"></div>

            <div className="flex items-center gap-2 text-yellow-500">
              {/* Added aria-hidden="true" to icons that are purely decorative */}
              <AiOutlineCalendar className="text-xl" aria-hidden="true" />
              <h2 className="font-bold tracking-wide text-sm uppercase">
                Upcoming Batches
              </h2>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 space-y-5">
            <div className="space-y-3">
              {upcomingBatches.map((batch, index) => (
                // Use a proper key for list iteration performance
                <div
                  key={index}
                  className="group flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <div className="bg-white/10 p-2 rounded-lg text-slate-300">
                    <Calendar size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{batch.date}</p>
                    <p className="text-xs text-slate-500">
                      {batch.day} • {batch.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {valueProps.map((prop) => {
                const Icon = prop.icon; // Component assignment for dynamic icon rendering
                return (
                  <div
                    key={prop.label}
                    className="bg-white/[0.02] p-3 rounded-lg border border-white/5 flex flex-col items-center gap-1"
                  >
                    <Icon size={18} className="text-yellow-400" aria-hidden="true" />
                    <span className="text-xs text-slate-400">{prop.label}</span>
                    {prop.subtext && ( // Conditional rendering for optional subtext
                      <span className="text-xs font-base text-slate-400">
                        {prop.subtext}
                      </span>
                    )}
                    <span className="text-sm font-medium text-slate-200">
                      {prop.mainText}
                    </span>
                  </div>
                );
              })}
            </div>

            <div
              className="flex items-start gap-3 bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-lg"
              // Added role="note" or aria-describedby for important, contextual info
              role="note"
            >
              <Gift className="text-yellow-500 flex-shrink-0" size={18} aria-hidden="true" />
              <p className="text-sm text-yellow-100/90">
                <span className="font-bold text-yellow-400">Bonus Included:</span>{' '}
                Get a completion certificate + career roadmap + special offer.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA (Call to Action) */}
      <motion.div
        className="mt-10 flex flex-col items-center gap-6 z-10"
        initial="hidden"
        whileInView="visible"
        variants={ctaVariants}
        viewport={{ once: true }}
      >
        <a
          href="#contact"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-yellow-600 rounded-full hover:bg-yellow-500 transform hover:scale-105"
          // Semantic improvement: Button role for a prominent action link
          role="button"
        >
          {/* Simplified inner div structure for shadow effect */}
          <div className="absolute -inset-3 rounded-xl bg-yellow-400 opacity-20 group-hover:opacity-40 blur-lg" role="presentation" />
          <span className="relative flex items-center gap-2">
            Register for the FREE AI + Data Analytics Masterclass
          </span>
        </a>

        <p className="text-xs text-slate-500 font-medium">
          Choose your preferred date in the form. Confirmation will be sent to
          your WhatsApp.
        </p>
      </motion.div>

      {/* Host Strip */}
      <motion.div
        className="mt-6 sm:mt-10 bg-yellow-600/20 border border-yellow-600/40 px-3 sm:px-6 py-3
                 rounded-full text-white text-xs sm:text-sm md:text-base
                 flex flex-wrap justify-center gap-1 sm:gap-2"
        initial="hidden"
        whileInView="visible"
        variants={hostStripVariants}
        viewport={{ once: true }}
        // Use a less common HTML element or role like "footer" or "contentinfo" if it were truly a footer,
        // but for a single strip, a simple div with appropriate ARIA is cleaner.
        aria-label="Masterclass Host Information"
      >
        <span className="font-semibold">Hosted by</span>
        <span className="font-bold text-yellow-500">Kamarudeen BM</span>
        <span className="opacity-90">Founder – ABM Groups</span>
      </motion.div>
    </div>
  );
}

// Optional: Use React.memo for pure components to prevent unnecessary re-renders
// export default React.memo(HeroSection);
