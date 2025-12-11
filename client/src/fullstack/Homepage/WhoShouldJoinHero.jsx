import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  Cpu ,
  CheckCircle
} from 'lucide-react';
// Make sure this path is correct for your project
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

  // --- HANDLER FOR BUTTON CLICK ---
  const handleRegisterClick = () => {
    const phoneNumber = "919944288271"; // Added Country Code for India
    const message = "Hi, I'm interested in reserving a seat for the Free Masterclass!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  const audienceList = [
    {
      title: "Students and freshers aiming for a tech career",
      desc: "Aiming to kickstart a high-growth tech career.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
    {
      title: "Working professionals looking to upskill or switch careers",
      desc: "Looking to upskill, pivot, or switch careers.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
    {
      title: "Anyone curious about AI and software development",
      desc: "Curious minds with zero prior experience needed.",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gray-950 flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Requested Mask Overlay */}
      <div className="absolute inset-0 bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"></div>

      {/* Decorative colored glows */}
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
              alt="Team collaborating on code" 
              className="w-full h-auto object-cover min-h-[500px] opacity-90"
            />
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
                <p className="text-sm font-bold text-white">No prior experience needed!</p>
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
             Who Should <span className="text-yellow-500">join ?</span>
            </h2>
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
                  <h3 className="font-bold text-gray-100 text-lg group-hover:text-yellow-100 transition-colors">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- NEW VECTOR DESIGN CTA BUTTON (YELLOW THEME) --- */}
          <motion.div variants={itemVariants} className="mt-4">
            <button 
              onClick={handleRegisterClick}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full font-bold text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-yellow-500/40"
            >
              
              {/* Background Gradient */}
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 transition-all duration-300 group-hover:bg-gradient-to-br"></span>
              
              {/* Vector Grid Pattern inside Button */}
              <span className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:10px_10px]"></span>
              
              {/* Decorative Vector Line/Shape */}
              <span className="absolute -left-10 -bottom-10 h-32 w-10 rotate-12 bg-white/10 blur-md transition-all duration-500 group-hover:left-[120%]"></span>
              
              {/* Button Content */}
              <div className="relative z-10 flex items-center gap-2">
                 <span>Register for Free Now</span>
                 <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Top Highlight border for 3D effect */}
              <div className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-white/40"></div>
            </button>

            <p className="mt-4 text-sm text-gray-500 text-center sm:text-left">
              *Limited seats available. No credit card required.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default WhoShouldJoinHero;