import React from 'react';
import { motion } from 'framer-motion';

// --- Vector & Animation Components ---

const WhatsAppIcon = () => (
  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.466c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.174.2-.297.3-.495.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

// Background Grid with Moving Lines (The External Background)
const MovingGridLines = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        {/* Base Static Grid */}
        <div 
            className="absolute inset-0 w-full h-full"
            style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} 
        />
        <motion.div 
            className="absolute left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.8)]"
            style={{ top: '20%' }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
            className="absolute left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-50"
            style={{ top: '70%' }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        <motion.div 
            className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.8)]"
            style={{ left: '15%' }}
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.div 
            className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent"
            style={{ right: '20%' }}
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 4 }}
        />
    </div>
  );
};

// --- Main Component ---
const ReserveSeatSection = () => {
  const phoneNumber = "919944288271";
  const message = "Hi, I'm interested in joining the Free Masterclass on AI + Full-Stack Development!";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-full py-24 bg-slate-950 overflow-hidden font-['Poppins'] flex items-center justify-center">
      
      {/* 1. External Background Environment */}
      <div className="absolute inset-0 z-0 bg-slate-950">
         <MovingGridLines />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/10 blur-[90px] rounded-full" />
      </div>

      {/* 2. The Compact Glass Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-2xl mx-4"
      >
        <div className="relative overflow-hidden rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl">
          
          {/* === NEW: Internal Design Elements === */}

          {/* 1. Subtle Dot Pattern Inside Card */}
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', 
                backgroundSize: '16px 16px' 
            }} 
          />
          
          {/* 2. Internal Spotlight Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

          {/* 3. Tech Corner Accents (Top Left & Bottom Right) */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-amber-500/40 rounded-tl-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-amber-500/40 rounded-br-xl pointer-events-none" />
          
          {/* 4. Top Gradient Border Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-80" />

          
          {/* === Card Content === */}
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-14 flex flex-col items-center text-center">
            
            {/* Small Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-amber-500/30 mb-6 shadow-lg shadow-amber-900/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-amber-400 text-xs font-semibold tracking-wide uppercase">
                Free Masterclass
              </span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              Reserve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">FREE Seat Now!</span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-base md:text-lg max-w-lg mb-10 font-light leading-relaxed">
               Seats are limited and filling fast—don’t miss this chance to start your journey with BM Academy.
            </p>

            {/* CTA Button */}
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 rounded-xl font-bold text-lg shadow-[0_0_25px_-5px_rgba(251,191,36,0.5)] transition-all overflow-hidden border border-amber-300/50"
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />

              <span className="relative z-10">Reserve My Free Seat</span>
              
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>

            {/* Footer / Trust Signals */}
            <div className="mt-8 pt-6 border-t border-white/5 w-full flex justify-center">
                <p className="text-xs text-slate-500 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Instant confirmation via WhatsApp
                </p>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Styles for Shimmer */}
      <style>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        .animate-shine {
          animation: shine 1s;
        }
      `}</style>
    </section>
  );
};

export default ReserveSeatSection;