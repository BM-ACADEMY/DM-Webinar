import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ArrowRight, 
  Calendar, 
  Globe, 
  Languages, 
  Gift, 
  CalendarDays,
  CheckCircle2
} from "lucide-react";
import Navbar from "../layout/Navbar";



// --- HERO SECTION COMPONENT ---
const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen pt-28 sm:pt-36 pb-20 bg-[#030303]">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-yellow-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* --- CONTENT --- */}
      
      {/* 1. Super Headline */}
      <motion.div
        className="text-center z-10 relative"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs sm:text-sm font-semibold mb-4 tracking-wide uppercase">
          <span className="animate-pulse mr-2">●</span> FREE Masterclass
        </span>
  
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-400">
              AI + Full-Stack Development{" "}
            </span>
            as Your {" "}
            <span className="text-white relative inline-block">
             Career?
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
        </div>

        <p className="mt-6 text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover How <span className="text-yellow-500">BM Academy</span> Can Launch Your Future in the <span className="text-yellow-500">Fastest-Growing Tech</span> Field!
        </p>
      </motion.div>

      {/* <motion.div
        className="mt-10 relative z-10 w-full max-w-xl mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
      >
        <div className="relative bg-[#121212] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-900/10">
          
          <div className="absolute -top-3 -right-1 w-32 h-32 overflow-hidden z-20 pointer-events-none">
            <div className="absolute top-[22px] -right-[42px] w-[150px] transform rotate-45 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-center py-1.5 shadow-lg border-y-2 border-yellow-300/50">
              <div className="flex flex-col leading-none text-white items-center justify-center -ml-1">
                <span className="text-[10px] font-semibold opacity-90 line-through decoration-red-500 decoration-[1.5px]">
                  100%
                </span>
                <span className="text-md font-black tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  FREE
                </span>
              </div>
              <div className="absolute inset-0 bg-white/20 skew-x-12 opacity-30"></div>
            </div>
          </div>

          <div className="bg-white/5 p-4 border-b border-white/5 flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm"></div>
            </div>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <div className="flex items-center gap-2 text-yellow-500">
              <CalendarDays className="w-5 h-5" />
              <span className="font-bold tracking-wide text-sm uppercase">Upcoming Batches</span>
            </div>
          </div>

          <div className="p-6 space-y-5">
            <div className="space-y-3">
              {[
                { date: "Dec 06, 2025", time: "Saturday • 4:30 PM – 6:00 PM" },
                { date: "Dec 14, 2025", time: "Sunday • 4:30 PM – 6:00 PM" }
              ].map((batch, idx) => (
                <div key={idx} className="group flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-yellow-500/30 transition-colors cursor-default">
                  <div className="bg-white/10 p-2 rounded-lg text-slate-300 group-hover:text-yellow-400 group-hover:bg-yellow-500/10 transition-colors">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">{batch.date}</p>
                    <p className="text-xs text-slate-500">{batch.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white/[0.02] p-3 rounded-lg border border-white/5 flex flex-col justify-center items-center text-center gap-1">
                <Globe size={18} className="text-yellow-400 mb-1" />
                <span className="text-xs text-slate-400">Mode</span>
                <span className="text-xs font-base text-slate-400">( Zoom / Google Meet )</span>
                <span className="text-sm font-medium text-slate-200">Online Live</span>
              </div>
              <div className="bg-white/[0.02] p-3 rounded-lg border border-white/5 flex flex-col justify-center items-center text-center gap-1">
                <Languages size={18} className="text-yellow-400 mb-1" />
                <span className="text-xs text-slate-400">Language</span>
                <span className="text-sm font-medium text-slate-200">Tamil</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-lg">
              <Gift className="text-yellow-500 shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-yellow-100/90">
                <span className="font-bold text-yellow-400">Bonus Included:</span> Get a completion certificate + Special Offer.
              </p>
            </div>
          </div>
        </div>
      </motion.div> */}

      {/* 3. CTA & Trust */}
      <motion.div
        className="mt-10 flex flex-col items-center gap-6 z-10"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="#contact"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-yellow-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600 hover:bg-yellow-500 transform hover:scale-105"
        >
          <div className="absolute -inset-3 rounded-xl bg-yellow-400 opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-200" />
          <span className="relative flex items-center gap-2">
            Register for the AI + Full-Stack Development
          </span>
        </a>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-yellow-500/30">
      <Navbar />
      <HeroSection />
      {/* You can add more sections here */}
    </div>
  );
}