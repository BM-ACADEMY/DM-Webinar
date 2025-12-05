import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, TrendingUp, Globe, ArrowRight } from "lucide-react";

const WhyAISection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const features = [
    {
      id: 1,
      title: "Industry Transformation",
      icon: <BrainCircuit className="w-8 h-8 text-yellow-500" />,
      text: "AI and Full-Stack Development are transforming every industry—from agile startups to global enterprises.",
      gradient: "from-yellow-500/10 to-yellow-600/10",
      border: "group-hover:border-yellow-500/50",
    },
    {
      id: 2,
      title: "High-Paying Careers",
      icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
      text: "Companies pay top salaries for developers who can build and deploy intelligent, scalable applications.",
      gradient: "from-yellow-500/10 to-yellow-600/10",
      border: "group-hover:border-yellow-500/50",
    },
    {
      id: 3,
      title: "Ultimate Flexibility",
      icon: <Globe className="w-8 h-8 text-yellow-500" />,
      text: "Flexible career paths: full-time jobs, freelancing, remote work, or launching your own startup—you choose!",
      gradient: "from-yellow-500/10 to-yellow-600/10",
      border: "group-hover:border-yellow-500/50",
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-black text-neutral-200 font-sans">
      {/* 1. Vector Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid pattern using gradients */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
      </div>

      {/* 2. Animated Background Blobs (Drifting) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] -z-10" 
      />
      <motion.div 
        animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -30, 0],
            y: [0, -50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-800/20 rounded-full blur-[100px] -z-10" 
      />

      {/* 3. Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: ["100%", "0%"]
            }}
            transition={{
              duration: Math.random() * 15 + 15, // Slow floating duration
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-yellow-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              // Randomly distribute starting position slightly
              top: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-sm text-neutral-400 mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            High Demand Skillset
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white"
          >
            Why <span className="text-yellow-500">AI</span> + <span className="text-yellow-500">Full-Stack?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Master the two most powerful technologies in the world today and future-proof your career.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm transition-colors duration-300 ${feature.border}`}
            >
              {/* Hover Gradient Background */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="mb-6 p-3 bg-black/50 rounded-2xl w-fit border border-neutral-800 group-hover:border-yellow-500/30 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors">
                  {feature.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <div className="relative group">
            {/* Animated Gradient Border Layer */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0 rounded-3xl opacity-50 blur-md group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden"
            >
              {/* Animated Background Mesh/Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              {/* Radial Gradient for depth */}
              <div className="absolute inset-0 bg-neutral-900 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

              <div className="relative py-16 px-6 md:px-12 text-center z-10">
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight"
                >
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Build the Future?</span>
                </motion.h3>
                
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-neutral-400 mb-10 max-w-xl mx-auto text-lg"
                >
                  Join the elite group of developers who are shaping the world with AI-powered applications. Limited spots available.
                </motion.p>
                
                <motion.a
                  href="https://wa.me/919944288271?text=Hi,%20I'm%20interested%20in%20joining%20the%20AI%20Full-Stack-Development%20program!"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-neutral-950 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10">Reserve Your Spot Today</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  
                  {/* Button Shine Effect on Hover */}
                  <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </motion.a>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;