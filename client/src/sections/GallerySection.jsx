import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Install react-icons if needed

// Image Imports
import img1 from "../assets/DM/IMG-20251031-WA0004.jpg";
import img2 from "../assets/DM/IMG-20251031-WA0005.jpg";
import img3 from "../assets/DM/DM_1.jpg";
import img4 from "../assets/DM/DM_2.jpg";
import img5 from "../assets/DM/IMG-20251031-WA0003.jpg";
import img6 from "../assets/gallery/image1.jpg";
import img7 from "../assets/gallery/image2.jpg";
import img8 from "../assets/gallery/image3.jpg";
import img9 from "../assets/gallery/image4.jpg";

export default function GallerySection() {
    // 1. All images in one array
    const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    // 2. Pagination Logic
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Matches the 2x3 grid in your reference image

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentImages = allImages.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(allImages.length / itemsPerPage);

    // Handlers
    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    return (
        <div id="gallery" className="px-4 md:px-12 lg:px-20 xl:px-32 mt-24 pb-20">
            
            <SectionTitle
                text1="Gallery – Inside BM Academy"
                text2="Gallery – Inside BM Academy"
                text3="A glimpse into our live sessions, real projects, internships, and student success stories."
            />

            {/* ⭐ GRID LAYOUT (Based on Reference) */}
            <div className="mt-12 min-h-[600px]"> {/* min-h prevents layout shift on smaller last pages */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage} // Triggers animation on page change
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {currentImages.map((img, index) => (
                            <div 
                                key={index} 
                                className="group relative overflow-hidden rounded-xl bg-gray-900 shadow-lg aspect-[4/3]"
                            >
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Optional: Hover Overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ⭐ PAGINATION CONTROLS (Matches Reference) */}
            {totalPages > 1 && (
                <div className="mt-12 flex justify-center items-center gap-4">
                    
                    {/* Previous Button */}
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`
                            flex items-center gap-2 px-6 py-2 rounded-full border border-gray-700 
                            transition-all duration-300
                            ${currentPage === 1 
                                ? 'opacity-50 cursor-not-allowed text-gray-500' 
                                : 'hover:bg-gray-800 hover:text-white text-gray-700 cursor-pointer'}
                        `}
                    >
                        <FiChevronLeft /> Prev
                    </button>

                    {/* Page Info */}
                    <span className="text-gray-600 font-medium">
                        Page {currentPage} of {totalPages}
                    </span>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`
                            flex items-center gap-2 px-6 py-2 rounded-full border border-gray-700 
                            transition-all duration-300
                            ${currentPage === totalPages 
                                ? 'opacity-50 cursor-not-allowed text-gray-500' 
                                : 'hover:bg-gray-800 hover:text-white text-gray-700 cursor-pointer'}
                        `}
                    >
                        Next <FiChevronRight />
                    </button>
                </div>
            )}

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
                * { font-family: 'Poppins', sans-serif; }
            `}</style>

        </div>
    );
}