import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Users, ArrowRight, Sparkles } from 'lucide-react';

const Mastertamil = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-slate-950 overflow-hidden flex items-center justify-center py-20">
      
      {/* Background Gradients (Ambient Lighting) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content (Tamil) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>90 நிமிட இலவச மாஸ்டர்கிளாஸ்</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              AI மற்றும் <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Full Stack</span> துறையில் உங்கள் கனவுகளை நனவாக்குங்கள்
            </h2>

            {/* Description Paragraph */}
            <p className="text-slate-400 text-lg leading-relaxed">
              இந்த 90 நிமிட இலவச மாஸ்டர்கிளாஸ் மூலம், AI மற்றும் முழு ஸ்டாக் டெவலப்ப்மெண்ட் துறையில் உங்கள் பாதையை எவ்வாறு அமைப்பது என்பதை தெரிந்து கொள்ளலாம்.
            </p>

            {/* Feature List (BM Academy Highlights) */}
            <div className="space-y-4 pt-2">
               <div className="flex items-start gap-4">
                  <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">BM அகாடமியின் நிபுணர்கள்</h4>
                    <p className="text-sm text-slate-500">சிறந்த பயிற்சியாளர்களுடன் நேரடி டெமோக்கள்</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">கேள்வி பதில் அமர்வு</h4>
                    <p className="text-sm text-slate-500">உங்கள் சந்தேகங்களுக்கு நேரடி தீர்வு</p>
                  </div>
               </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-bold text-lg shadow-lg shadow-indigo-500/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  இலவசமாக பதிவு செய்ய <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side: 3D Simulated Visuals */}
          {/* If you have a real Spline 3D model, replace the content of this div with your Spline component */}
          <div className="relative h-[500px] w-full flex items-center justify-center perspective-[1000px]">
            
            {/* Rotating 3D Base Glow */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl"
            />

            {/* Floating Glass Cards (Simulating 3D Depth) */}
            <motion.div 
               className="relative w-72 h-80 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform-style-3d"
               animate={{ y: [0, -20, 0], rotateY: [-10, 10, -10] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               style={{ transformStyle: 'preserve-3d', zIndex: 2 }}
            >
              {/* Card Content */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-slate-700 rounded w-3/4 animate-pulse" />
                <div className="h-2 bg-slate-700 rounded w-1/2 animate-pulse" />
                <div className="h-2 bg-slate-700 rounded w-5/6 animate-pulse" />
                
                <div className="mt-8 p-4 bg-black/40 rounded-lg border border-indigo-500/30">
                  <div className="text-xs text-indigo-300 font-mono">
                    {`> initializing AI_Model...`} <br/>
                    {`> connecting to server...`} <br/>
                    {`< FullStack_Ready />`}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Element 2 (Back) */}
            <motion.div 
               className="absolute top-20 right-10 w-48 h-48 bg-purple-900/30 backdrop-blur-md border border-purple-500/20 rounded-xl flex items-center justify-center"
               animate={{ y: [0, 30, 0], x: [0, -10, 0], rotateZ: [0, 5, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               style={{ zIndex: 1 }}
            >
               <Cpu className="w-16 h-16 text-purple-400/80" />
            </motion.div>

            {/* Floating Element 3 (Front Small) */}
            <motion.div 
               className="absolute bottom-20 left-10 w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/40"
               animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               style={{ zIndex: 3 }}
            >
               <span className="text-white font-bold text-xl">BM</span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Mastertamil;