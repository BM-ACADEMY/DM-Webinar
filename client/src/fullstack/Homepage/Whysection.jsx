import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Target, Rocket, Lightbulb, Users, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const MasterclassPage = () => {
  const benefits = [
    {
      id: 1,
      icon: <Flame className="w-8 h-8 text-white" />,
      title: "Understand the Exploding Demand",
      description: "Learn why AI + Full-Stack Development is one of the hottest career paths today—with endless job opportunities locally and globally."
    },
    {
      id: 2,
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Make Informed Career Choices",
      description: "Get clear on why these skills will future-proof your career and open doors to high-paying roles."
    },
    {
      id: 3,
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "See Real Success",
      description: "Hear how BM Academy has helped hundreds of students get placed and start thriving tech careers."
    },
    {
      id: 4,
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Experience a Live Demo",
      description: "Watch AI tools and full-stack development in action, solving real-world problems."
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Get Your Questions Answered",
      description: "Interactive Q&A to clear your doubts and help you decide confidently."
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  };

  // WhatsApp Configuration
  const whatsappNumber = "919944288271";
  const defaultMessage = "Hi, I'm interested in reserving a seat for the Free Masterclass!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <section className="relative w-full py-24 bg-slate-950 font-sans selection:bg-yellow-500/30 overflow-hidden">
      {/* Decorative Background Pattern - Animated */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0" 
        style={{ backgroundImage: 'radial-gradient(#eab308 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-500/20 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
            Live Masterclass
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Why Attend This <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">FREE Masterclass?</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the future of coding and secure your spot in the <span className="text-slate-200 font-medium">AI revolution</span>.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-y-16 gap-x-10 mb-24 items-stretch"
        >
          {benefits.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className="relative group w-full max-w-md h-full"
            >
              {/* Animated Arc Effect */}
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 -left-4 w-28 h-28 rounded-full border-[3px] border-l-yellow-500/80 border-t-transparent border-b-transparent border-r-transparent hidden md:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
               {/* Static Arc Glow */}
               <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-28 h-28 rounded-full border-[1px] border-white/5 hidden md:block" />

              <div className="flex items-center relative h-full">
                {/* Icon Container - Floating & Glowing */}
                <div className="relative z-20 flex-shrink-0">
                  <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl flex items-center justify-center border-2 border-slate-700 group-hover:border-yellow-500/50 transition-colors duration-300"
                  >
                    <div className="absolute inset-1 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        {item.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div 
                  className="flex-grow -ml-10 pl-14 pr-8 py-7 bg-slate-900/50 backdrop-blur-sm rounded-r-2xl rounded-l-[60px] shadow-lg border border-slate-800/60 group-hover:border-yellow-500/30 group-hover:bg-slate-900/80 transition-all duration-300 min-h-[160px] h-full flex flex-col justify-center"
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 p-10 rounded-3xl shadow-2xl border border-slate-400/50 max-w-3xl mx-auto overflow-hidden">
            
            {/* Background Glows within CTA */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl font-bold text-white mb-8">
                Ready to Future-Proof Your Career?
              </h2>
              
              {/* Premium Button Design - WhatsApp Link */}
              <motion.a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-950 transition-all duration-200 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-yellow-500 cursor-pointer"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_infinite]" />
                </div>
                
                <span className="relative flex items-center text-white gap-2">
                   Reserve Your FREE Seat Now!
                   <ArrowRight className="w-5 h-5 transition-transform duration-300 text-white group-hover:translate-x-1" />
                </span>
              </motion.a>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="font-medium">Limited spots available</span>
                <span className="w-1 h-1 rounded-full bg-slate-700 mx-1"></span>
                <span className="text-slate-600">No credit card required</span>
              </motion.p>
            </div>
          </div>
        </motion.div>

      </div>
      
      {/* Global Style for Button Shine Animation */}
      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default MasterclassPage;