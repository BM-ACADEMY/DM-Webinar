import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Is this really free?",
    answer: "Yes! This masterclass is 100% free, no hidden charges."
  },
  {
    question: "Do I need any prior coding experience?",
    answer: "No! We start from the basics and guide you step-by-step."
  },
  {
    question: "Will I get help to find a job?",
    answer: "Absolutely! BM Academy has a strong placement record and supports you throughout."
  }
];

const FAQItem = ({ faq, index, isOpen, toggleOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`mb-4 rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen 
          ? "bg-slate-900/80 border-amber-500/50 shadow-[0_0_15px_-5px_rgba(245,158,11,0.3)]" 
          : "bg-slate-900/40 border-white/5 hover:border-white/10 hover:bg-slate-900/60"
      }`}
    >
      <button
        onClick={() => toggleOpen(index)}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
          {faq.question}
        </span>
        
        {/* Animated Icon */}
        <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${isOpen ? "border-amber-500 bg-amber-500/20" : "border-slate-700 bg-slate-800"}`}>
          {/* Vertical Line */}
          <motion.span 
            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
            className="absolute w-0.5 h-3 bg-white" 
          />
          {/* Horizontal Line */}
          <span className={`absolute w-3 h-0.5 transition-colors ${isOpen ? "bg-amber-400" : "bg-white"}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-slate-400 text-base md:text-lg leading-relaxed border-t border-white/5 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set 0 to make the first one open by default, or null for closed

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className="relative w-full py-24 bg-slate-950 font-['Poppins'] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px]" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-amber-400 font-semibold tracking-wider uppercase mb-3 text-sm"
          >
            Have Questions?
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Everything you need to know about the Masterclass.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              index={index} 
              isOpen={openIndex === index} 
              toggleOpen={toggleOpen} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;