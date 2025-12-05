import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaChalkboardTeacher, FaGraduationCap, FaBriefcase, FaStar, FaWhatsapp, FaArrowRight } from 'react-icons/fa';

const features = [
  {
    icon: <FaTrophy />,
    title: "Proven Results",
    description: "90%+ placement rate with real companies and freelancing gigs.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Trainers",
    description: "Learn from industry pros who teach what employers want.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Beginner Friendly",
    description: "No prior coding needed—step-by-step guidance in Tamil/Tanglish.",
  },
  {
    icon: <FaBriefcase />,
    title: "Career Support",
    description: "1:1 mentorship, portfolio building, and interview prep.",
  },
  {
    icon: <FaStar />,
    title: "Trusted by Hundreds",
    description: "Join a community of successful tech alumni changing their lives.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
};

const WhyChooseUs = () => {
  // Define the default WhatsApp message
  const defaultMessage = "Hi, I'm interested in reserving a seat for the Free Masterclass!";
  
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      
      {/* --- NEW VECTOR BACKGROUND (Clean Grid) --- */}
      {/* This matches the 'grid' look in your uploaded image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Fine Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>

        {/* Soft Radial Gradient to focus attention on center */}
        <div className="absolute inset-0 bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)]"></div>
        
        {/* Subtle decorative glow in corners */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow-500/5 blur-[100px] rounded-full transform -translate-y-1/2"></div>
      </div>
      {/* ---------------------------------- */}


      <div className="container mx-auto px-6 relative z-10">
        
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
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500"> BM Academy?</span>
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

        {/* FEATURES GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6 mb-24"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-gray-900/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 overflow-hidden hover:border-yellow-500/30 transition-colors duration-300 flex flex-col items-center text-center">
                <div className="absolute -bottom-6 -right-6 text-9xl text-white/5 rotate-[-15deg] group-hover:text-yellow-500/5 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                  {feature.icon}
                </div>
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 text-yellow-500 flex items-center justify-center text-3xl shadow-lg group-hover:bg-yellow-500 group-hover:text-gray-900 group-hover:rotate-6 transition-all duration-300 mx-auto">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- BOTTOM CTA SECTION (Styled like Image) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Matches the dark card aesthetic from
          className="relative max-w-5xl mx-auto text-center bg-[#0a0a0a] border border-white/10 rounded-3xl p-10 md:p-14 overflow-hidden shadow-2xl"
        >
           {/* Internal Grid Background for the card */}
           <div 
  className="absolute inset-0 opacity-[0.07] pointer-events-none" 
  style={{
    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
    // This fades the top (transparent at start, visible after 20%)
    maskImage: 'linear-gradient(to bottom, transparent 0%, black 200%)',
    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)'
  }}
></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-yellow-500">Build the Future?</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Join the elite group of developers who are shaping the world. Limited spots available for the next batch.
            </p>

            <div className="flex flex-col items-center justify-center gap-6">
              {/* Button styled like the yellow button in */}
              <a 
                href={`https://wa.me/919944288271?text=${encodeURIComponent(defaultMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:-translate-y-1"
              >
                <span>Reserve Your Spot Today</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;