import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  Database
} from 'lucide-react';
import Animated from "@/assets/Going up-cuate.png"

const WhoShouldJoinHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const audienceList = [
    {
      title: "Students & Freshers",
      desc: "Aiming to kickstart a high-growth data career.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    {
      title: "Working Professionals",
      desc: "Looking to upskill in data analytics, pivot, or switch careers.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
    {
      title: "Data Enthusiasts",
      desc: "Curious minds with zero prior experience needed.",
      icon: <Database className="w-6 h-6" />,
      color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gray-950 flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Requested Mask Overlay */}
      <div className="absolute inset-0 bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"></div>

      {/* Decorative colored glows behind elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600/20 rounded-full blur-[100px] opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] opacity-30" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT SIDE: Image Composition */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900">
            {/* Image with subtle overlay */}
            <div className="absolute inset-0 bg-yellow-900/10 mix-blend-overlay z-10"></div>
            <img
              src={Animated}
              alt="Data professionals analyzing insights"
              className="w-full h-auto object-cover min-h-[500px] opacity-90"
            />

            {/* Floating Badge Overlay */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-6 left-6 bg-gray-900/90 backdrop-blur-xl border border-gray-700 p-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-xs z-20"
            >
              <div className="bg-emerald-500/20 p-2 rounded-full border border-emerald-500/30">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Beginner Friendly</p>
                <p className="text-xs text-gray-400">No prior experience required</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements behind image */}
          <div className="absolute -z-10 -top-5 -right-5 w-24 h-24 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute -z-10 -bottom-5 -left-5 w-24 h-24 bg-orange-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        </motion.div>

        {/* RIGHT SIDE: Content & Points */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-1 lg:order-2 flex flex-col gap-8"
        >
          <motion.div variants={itemVariants}>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
             Who Should <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">join ? </span>
            </h2>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Whether you are starting out or stepping up, our program is designed to bridge the gap between curiosity and data-driven career success.
            </p>
          </motion.div>

          {/* Cards Container */}
          <div className="grid gap-4">
            {audienceList.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                className="flex items-center gap-5 p-4 rounded-2xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm transition-all cursor-default group"
              >
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl border ${item.color} shadow-lg shadow-black/20`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-100 text-lg group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="mt-4">
            <button className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full hover:shadow-lg hover:shadow-yellow-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950 focus:ring-yellow-500 overflow-hidden">
              <span className="relative z-10">Register for Free Now</span>
              <ArrowRight className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shine_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            </button>
            <p className="mt-4 text-sm text-gray-500 text-center sm:text-left">
              *Limited seats available. No credit card required.
            </p>
          </motion.div>
        </motion.div>

      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default WhoShouldJoinHero;
