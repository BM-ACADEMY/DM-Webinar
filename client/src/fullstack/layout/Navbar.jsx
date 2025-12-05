import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

// --- IMPORTS ---
import Logo from "@/assets/whitelogo.png";        // Logo for the main Navbar
import MobileLogo from "@/assets/blacklogo.png";  // Logo for the Off-canvas Menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Services", href: "#" },
    { title: "Portfolio", href: "#" },
    { title: "Contact", href: "#" },
  ];

  // --- ANIMATION: Top to Bottom ---
  const menuVariants = {
    initial: {
      y: "-100%", 
      opacity: 0,
    },
    animate: {
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      y: "-100%", 
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: { staggerChildren: 0.09, staggerDirection: -1 },
    },
    open: {
      transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 },
    },
  };

  const mobileLinkVars = {
    initial: { y: "30px", opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/5 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* --- Left: Main Navbar Logo --- */}
        <div className="flex-shrink-0 cursor-pointer z-50">
          <img
            src={Logo} 
            alt="Brand Logo"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* --- Middle: Desktop Nav --- */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-100 hover:text-yellow-500 font-medium transition-colors relative group"
            >
              {link.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* --- Right: Button --- */}
        <div className="hidden md:block">
          <button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-500 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/30">
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(true)} className="text-gray-200 p-2">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* --- Full Screen Overlay Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-white z-[60] flex flex-col"
          >
            {/* --- Top Header inside Menu --- */}
            <div className="container mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
              
              {/* --- LOGO FOR MOBILE MENU --- */}
              <div className="flex-shrink-0">
                 <img 
                   src={MobileLogo}
                   alt="Mobile Logo" 
                   className="h-16 w-auto object-contain" /* Slightly reduced logo size too */
                 />
              </div>

              {/* CLOSE ICON */}
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 text-gray-800 hover:text-red-500 transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* --- Menu Links Content --- */}
            <div className="flex-1 flex flex-col justify-center items-center overflow-y-auto">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                // Reduced gap from gap-8 to gap-6
                className="flex flex-col gap-6 items-center text-center w-full px-8 pb-10"
              >
                {navLinks.map((link, index) => (
                  <div key={index} className="overflow-hidden">
                    <motion.div
                      variants={mobileLinkVars}
                      // CHANGED: Reduced text size from text-4xl/5xl to text-2xl/3xl
                      className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-yellow-500 transition-colors"
                    >
                      <a href={link.href} onClick={() => setIsOpen(false)}>
                        {link.title}
                      </a>
                    </motion.div>
                  </div>
                ))}

                {/* Mobile Button */}
                <div className="overflow-hidden mt-6 w-full max-w-[200px]"> {/* Reduced width constraint */}
                  <motion.div variants={mobileLinkVars}>
                    <button className="bg-yellow-500 text-white w-full py-3 rounded-full text-lg font-medium active:scale-95 transition-transform flex items-center justify-center gap-2">
                      {/* Reduced padding (py-3) and font size (text-lg) */}
                      Get Started <ArrowRight size={18} />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;