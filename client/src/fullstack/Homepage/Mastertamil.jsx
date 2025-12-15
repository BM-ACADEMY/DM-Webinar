import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Mic, Star } from 'lucide-react';

const Mastertamil = () => {
  // WhatsApp Configuration
  const phoneNumber = "919944288271";
  const message = "Hi, I'm interested in joining the Free Masterclass on AI + Full-Stack Development!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative w-full py-20 bg-neutral-950 overflow-hidden flex items-center justify-center">
      
      {/* 1. Background: Neutral Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* 2. Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* LEFT SIDE: Text Content */}
          <div className="flex-1 w-full max-w-[640px] space-y-7">
            
            {/* Top Tag - Yellow */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] tracking-wider uppercase font-bold"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Live Masterclass
            </motion.div>

            {/* Main Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight"
            >
              இந்த <span className="text-yellow-400">90 நிமிட</span> இலவச மாஸ்டர்கிளாஸ் மூலம், <br className="hidden lg:block"/> 
              <span className="text-yellow-400">AI</span> மற்றும் <span className="text-yellow-400">Full Stack Development</span> துறையில் உங்கள் கனவுகளை எவ்வாறு நிறைவேற்றுவது என்பதை தெரிந்து கொள்ளலாம்.
            </motion.h2>

            {/* Feature Box - Yellow Border */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 bg-neutral-900/60 border-l-4 border-yellow-500 rounded-r-lg backdrop-blur-sm shadow-sm"
            >
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-medium">
                BM அகாடமியின் சிறந்த பயிற்சியாளர்களுடன் நேரடி டெமோக்களும், கேள்வி பதில்களும் உங்களை காத்திருக்கின்றன.
              </p>
            </motion.div>

            {/* Buttons - Yellow Primary */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary Button - WHATSAPP LINK ADDED */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(234,179,8,0.4)] flex items-center gap-2"
              >
                பதிவு செய்யுங்கள் <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE: 3D Interface */}
          <div className="flex-1 w-full max-w-[540px] flex justify-center perspective-[2000px] mt-8 lg:mt-0">
            <motion.div
              initial={{ rotateY: 15, rotateX: 5, opacity: 0 }}
              whileInView={{ rotateY: -10, rotateX: 5, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full bg-neutral-900 rounded-xl border border-neutral-800 shadow-2xl overflow-hidden group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Header Bar */}
              <div className="h-9 bg-neutral-800 border-b border-neutral-700 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <div className="ml-auto text-[10px] text-neutral-500 font-mono">BM_Academy_Live.tsx</div>
              </div>

              {/* Window Content */}
              <div className="p-6 space-y-6 relative">
                
                {/* Code Block Visual - Yellow Highlights */}
                <div className="space-y-2 font-mono text-xs md:text-sm">
                  <div className="flex gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-300">goal</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-300">"Master AI"</span>;
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-300">result</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-300">"Dream Job"</span>;
                  </div>
                  <div className="flex gap-2 pl-4 pt-1 opacity-80">
                    <span className="text-neutral-500">// Start Learning</span>
                  </div>
                  <div className="flex gap-2 pl-4">
                    <span className="text-purple-400">await</span>
                    <span className="text-white">bmAcademy.</span>
                    <span className="text-yellow-400">joinMasterclass()</span>;
                  </div>
                </div>

                {/* Floating "Live User" Badge */}
                <motion.div 
                   animate={{ y: [0, -8, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute top-12 right-6 p-2.5 bg-neutral-800/95 backdrop-blur border border-yellow-500/30 rounded-lg shadow-lg"
                >
                   <div className="flex items-center gap-3">
                     <div className="bg-yellow-500/20 p-2 rounded-md">
                        <Mic className="w-4 h-4 text-yellow-500" />
                     </div>
                     <div>
                       <div className="text-[10px] text-neutral-400">Speaker</div>
                       <div className="text-xs font-bold text-white flex items-center gap-1">
                         Expert Trainer <Star className="w-3 h-3 text-yellow-500 fill-yellow-500"/>
                       </div>
                     </div>
                   </div>
                </motion.div>

                {/* Progress Bar Visual - Yellow Gradient */}
                <div className="mt-8">
                  <div className="flex justify-between text-[10px] text-neutral-400 mb-1.5">
                    <span>Skills Loading...</span>
                    <span>100%</span>
                  </div>
                  <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400"
                    />
                  </div>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
              </div>

              {/* Glow Effect behind the card - Yellow */}
              <div className="absolute -inset-4 bg-blue-100/10 blur-3xl -z-10 group-hover:bg-[#64edf423] transition-all duration-500" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mastertamil;