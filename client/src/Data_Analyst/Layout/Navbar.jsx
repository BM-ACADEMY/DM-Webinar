import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

import Logo from "@/assets/whitelogo.png";
import MobileLogo from "@/assets/blacklogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Navbar items
  const navLinks = [
    { title: "Home", href: "#top" },
    { title: "Why Choose", href: "#whychoose" },
    { title: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.4 } },
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09 } },
  };

  const mobileLinkVars = {
    initial: { y: "30px", opacity: 0 },
    open: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-lg py-3" : "bg-black/10 py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
<a href="#top" className="flex-shrink-0 cursor-pointer z-50">
  <img
    src={Logo}
    alt="Brand Logo"
    className="h-14 md:h-16 lg:h-16 w-auto object-contain"
  />
</a>


        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-10 mx-auto">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-yellow-500 font-medium transition relative"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Register button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-yellow-500 hover:bg-yellow-400 rounded-full text-black font-bold transition"
          >
            Register
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(true)} className="text-gray-200 p-2">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-white z-[60] flex flex-col"
          >
            {/* header top */}
            <div className="container mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
              <img src={MobileLogo} alt="Mobile Logo" className="h-16 w-auto" />

              <button onClick={() => setIsOpen(false)} className="p-2 text-gray-800">
                <X size={32} />
              </button>
            </div>

            {/* menu links */}
            <div className="flex-1 flex flex-col justify-center items-center">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                className="flex flex-col gap-8 items-center text-center"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    variants={mobileLinkVars}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-bold text-gray-800 hover:text-yellow-500"
                  >
                    {link.title}
                  </motion.a>
                ))}

                {/* Register button mobile */}
                <motion.a
                  variants={mobileLinkVars}
                  href="#register"
                  onClick={() => setIsOpen(false)}
                  className="bg-yellow-500 text-black w-48 py-3 rounded-full text-lg font-bold text-center"
                >
                  Register
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
