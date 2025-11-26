import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { navlinks } from "../data/navlinks";
import { Link } from "react-router-dom";
import logo from "../assets/Bm Academy logo .png"; // <-- your logo

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 250, damping: 70, mass: 1 }}
            >

                {/* Updated Logo */}
                <Link to="/">
                   <img
  src={logo}
  alt="BM Academy Logo"
  className="h-14 md:h-16 lg:h-16 w-auto object-contain"
/>

                </Link>

                <div className="hidden md:flex items-center gap-8 transition duration-500">
                    {navlinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-yellow-500 transition">
                            {link.name}
                        </a>
                    ))}
                </div>

                <a
    href="https://wa.me/919944940051?text=Hi%2C%20I%20want%20to%20start%20the%20free%20trial%20and%20know%20more%20about%20the%20AI%20%2B%20Digital%20Marketing%20course"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:block px-6 py-2.5 bg-yellow-400 hover:bg-yellow-700 active:scale-95 transition-all rounded-full"
>
    Start free trial
</a>


                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {navlinks.map((link) => (
                    <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </Link>
                ))}

                <button
                    onClick={() => setIsOpen(false)}
                    className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-pink-600 hover:bg-pink-700 transition text-white rounded-md flex"
                >
                    <XIcon />
                </button>
            </div>
        </>
    );
}
