import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, GraduationCap, Zap, ArrowRight, CheckCircle2, Bot, Code2, Layers, ShieldCheck } from 'lucide-react';

const MasterclassSection = () => {
  const features = [
    {
      id: 1,
      title: "AI + Full-Stack Career",
      description: "Clear reasons why AI + Full-Stack Development is a career you can’t miss.",
      icon: <Cpu className="w-6 h-6 text-black" />,
      tag: "CAREER PATH"
    },
    {
      id: 2,
      title: "Live Coding Demo",
      description: "Live demo of AI tools and full-stack coding in action.",
      icon: <Terminal className="w-6 h-6 text-black" />,
      tag: "REAL-TIME"
    },
    {
      id: 3,
      title: "Unique Training System",
      description: "Insights into BM Academy’s unique training and placement system.",
      icon: <Layers className="w-6 h-6 text-black" />,
      tag: "BM ACADEMY"
    },
    {
      id: 4,
      title: "Exclusive Bonuses",
      description: "Special exclusive offer for attendees to join the full course with bonuses.",
      icon: <Zap className="w-6 h-6 text-black" />,
      tag: "LIMITED OFFER"
    }
  ];

  // Circuit Board Background Component
  const CircuitBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(234, 179, 8, 0)" />
            <stop offset="50%" stopColor="rgba(234, 179, 8, 1)" />
            <stop offset="100%" stopColor="rgba(234, 179, 8, 0)" />
          </linearGradient>
        </defs>
        
        {/* Horizontal Data Lines */}
        {[10, 30, 50, 70, 90].map((y, i) => (
          <motion.rect
            key={`h-${i}`}
            x="-10%"
            y={`${y}%`}
            width="20%"
            height="1"
            fill="url(#circuit-gradient)"
            initial={{ x: "-20%" }}
            animate={{ x: "120%" }}
            transition={{ 
              duration: 8 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i 
            }}
          />
        ))}

        {/* Vertical Data Lines */}
        {[20, 40, 60, 80].map((x, i) => (
          <motion.rect
            key={`v-${i}`}
            x={`${x}%`}
            y="-10%"
            width="1"
            height="20%"
            fill="url(#circuit-gradient)"
            initial={{ y: "-20%" }}
            animate={{ y: "120%" }}
            transition={{ 
              duration: 10 + i * 3, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 1.5
            }}
          />
        ))}
      </svg>
      
      {/* Subtle Glow from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-yellow-900/20 to-transparent blur-3xl" />
    </div>
  );

  return (
    <section className="relative w-full py-24 bg-[#050505] overflow-hidden font-sans border-y border-white/5">
      <CircuitBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-none border border-yellow-500/30 bg-yellow-500/10 mb-8"
          >
            <Code2 className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-mono font-bold text-yellow-500 tracking-widest uppercase">
              Masterclass Curriculum
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            What You’ll Get in This <br />
            <span className="text-yellow-500">FREE Masterclass</span>
          </motion.h2>
          
          {/* Subtitle removed to keep focus on the strong title as per requested content */}
        </div>

        {/* Feature Grid - Industrial Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 p-8 overflow-hidden hover:border-yellow-500/50 transition-colors duration-300"
            >
              {/* Tech Corner Marker */}
              <div className="absolute top-0 right-0 p-3">
                <div className="w-2 h-2 bg-zinc-800 group-hover:bg-yellow-500 transition-colors duration-300" />
              </div>

              {/* Tag */}
              <div className="mb-6">
                <span className="text-xs font-mono text-zinc-500 group-hover:text-yellow-500/80 transition-colors border-b border-zinc-800 pb-1">
                  //{feature.tag}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0 p-4 bg-yellow-500 text-black rounded-sm shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Animated bottom border */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section - "System Alert" Style */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Cyberpunk Container */}
          <div className="relative border-2 border-dashed border-yellow-500/20 bg-zinc-900/80 p-8 md:p-12 rounded-lg text-center backdrop-blur-xl">
            
            {/* Background noise */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-2 text-yellow-500 mb-6 font-mono text-sm">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                  </span>
                 STATUS: REGISTRATION OPEN
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Ready to transform your career?
              </h3>

              <a 
               href="https://wa.me/919944288271?text=Hi%2C%20I%27m%20interested%20in%20joining%20the%20Free%20Masterclass%20on%20AI%20%2B%20Full-Stack%20Development%21"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden bg-yellow-500 text-black px-12 py-5 font-black text-lg uppercase tracking-wider hover:bg-yellow-400 transition-colors clip-path-polygon"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                <span className="relative z-10 flex items-center gap-3">
                  Claim Your Free Seat Before It’s Gone!
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MasterclassSection;