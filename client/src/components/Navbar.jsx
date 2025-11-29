import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "../data/navlinks";
import logo from "../assets/BM_ACADEMY-.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TOP NAV */}
      <motion.nav
        className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur bg-black/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 250, damping: 70 }}
      >
        {/* LOGO */}
        <a href="#top">
          <img
            src={logo}
            alt="BM Academy Logo"
            className="h-14 md:h-16 lg:h-16 w-auto object-contain"
          />
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navlinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-yellow-500 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP REGISTER BUTTON */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-2.5 bg-yellow-400 hover:bg-yellow-600 active:scale-95 transition-all rounded-full text-black font-medium"
        >
          Register
        </a>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <MenuIcon size={28} className="active:scale-90 transition" />
        </button>
      </motion.nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-50 
          bg-black/60 backdrop-blur 
          flex flex-col items-center justify-center 
          text-xl gap-8 md:hidden
          transform transition-transform duration-500
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile Navigation Links */}
        {navlinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-yellow-400 transition"
          >
            {link.name}
          </a>
        ))}

        {/* MOBILE REGISTER BUTTON */}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-600 rounded-full text-black font-semibold"
        >
          Register
        </a>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md p-2"
        >
          <XIcon size={26} />
        </button>
      </div>
    </>
  );
}
