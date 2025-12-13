import React from 'react';
import {
  Calendar,
  Globe,
  Languages,
  Gift,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { AiOutlineCalendar } from 'react-icons/ai';

import ConfettiEffect from '../../components/ConfettiEffect';

/* -------------------- Animation Variants -------------------- */
const contentVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.2, type: 'spring', bounce: 0.4 },
  },
};

const ctaVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { delay: 0.4 } },
};

const hostStripVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.5, type: 'spring' },
  },
};

/* -------------------- HERO SECTION -------------------- */
export default function HeroSection() {
  /* 🔹 Batch Data */
  const upcomingBatches = [
    {
      date: 'Dec 06, 2025',
      day: 'Saturday',
      time: '4:30 PM – 6:00 PM',
      completed: true, // ✅ COMPLETED
    },
    {
      date: 'Dec 27, 2025',
      day: 'Sunday',
      time: '4:30 PM – 6:00 PM',
      completed: false,
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
      mainText: 'Tamil/English',
    },
  ];

  return (
    <div
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen pt-28 sm:pt-36 bg-[#030303]"
      role="region"
      aria-label="Masterclass Hero Section"
    >
      <ConfettiEffect />

      {/* Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
        role="presentation"
      />
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-yellow-600/20 blur-[100px] rounded-full pointer-events-none"
        role="presentation"
      />

      {/* Heading */}
      <motion.div
        className="text-center z-10"
        initial="hidden"
        whileInView="visible"
        variants={contentVariants}
        viewport={{ once: true }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold mb-4 uppercase">
          FREE Masterclass
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Why Choose{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">
            AI + Data Analytics
          </span>{' '}
          as Your Career?
        </h1>
      </motion.div>

      {/* Card */}
      <motion.div
        className="mt-10 w-full max-w-xl z-10"
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: true }}
      >
        <div className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="bg-white/5 p-4 border-b border-white/5 flex items-center gap-4">
            <AiOutlineCalendar className="text-yellow-500 text-xl" />
            <h2 className="font-bold tracking-wide text-sm uppercase text-yellow-400">
              Upcoming Batches
            </h2>
          </div>

          {/* Batch List */}
          <div className="p-6 space-y-5">
            <div className="space-y-3">
              {upcomingBatches.map((batch, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between gap-4 p-3 rounded-xl border
                    ${
                      batch.completed
                        ? 'bg-white/[0.02] border-green-500/20 opacity-60 cursor-not-allowed pointer-events-none'
                        : 'bg-white/[0.03] border-white/5'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-lg ${
                        batch.completed
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{batch.date}</p>
                      <p className="text-xs text-slate-500">
                        {batch.day} • {batch.time}
                      </p>
                    </div>
                  </div>

                  {batch.completed && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
                      Completed
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Info */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {valueProps.map((prop) => {
                const Icon = prop.icon;
                return (
                  <div
                    key={prop.label}
                    className="bg-white/[0.02] p-3 rounded-lg border border-white/5 text-center"
                  >
                    <Icon size={18} className="text-yellow-400 mx-auto mb-1" />
                    <p className="text-xs text-slate-400">{prop.label}</p>
                    {prop.subtext && (
                      <p className="text-xs text-slate-400">{prop.subtext}</p>
                    )}
                    <p className="text-sm text-slate-200">{prop.mainText}</p>
                  </div>
                );
              })}
            </div>

            {/* Bonus */}
            <div className="flex gap-3 bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-lg">
              <Gift className="text-yellow-500" size={18} />
              <p className="text-sm text-yellow-100">
                <span className="font-bold">Bonus:</span> Certificate + career roadmap + special offer
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-10 z-10"
        initial="hidden"
        whileInView="visible"
        variants={ctaVariants}
        viewport={{ once: true }}
      >
        <a
          href="#contact"
          className="px-8 py-4 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-500 transition"
        >
          Register for the FREE AI + Data Analytics Masterclass
        </a>
      </motion.div>

      {/* Host */}
      <motion.div
        className="mt-6 mb-20 bg-yellow-600/20 border border-yellow-600/40 px-6 py-3 rounded-full text-sm text-white"
        initial="hidden"
        whileInView="visible"
        variants={hostStripVariants}
        viewport={{ once: true }}
      >
        Hosted by <span className="font-bold text-yellow-500">Kamarudeen BM</span> — Founder, ABM Groups
      </motion.div>
    </div>
  );
}
