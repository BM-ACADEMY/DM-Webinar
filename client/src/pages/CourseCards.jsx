import React from 'react';
import { Link } from "react-router-dom";

export default function HomePage() {
  
  const courses = [
    {
      id: 1,
      title: "Digital Marketing",
      // CHANGED: New, reliable image URL for Digital Marketing
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      path: "/digital-marketing", 
      desc: "Master SEO, social media strategies, and online growth."
    },
    {
      id: 2,
      title: "AI Full Stack Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      path: "/ai-fullstack-development",
      desc: "Build modern web apps using React, Node, and AI tools."
    },
    {
      id: 3,
      title: "AI Data Analyst",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      path: "/Data_Analyst",
      desc: "Analyze complex data and build predictive AI models."
    }
  ];

  return (
    // CHANGED: selection color to yellow
    <div className="min-h-screen bg-black text-white relative selection:bg-yellow-500 selection:text-black font-sans">
      
      {/* --- VECTOR BACKGROUND EFFECT --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* CHANGED: Glow effects to warm yellow/orange */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-yellow-900/20 via-orange-900/20 to-transparent blur-3xl"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* CHANGED: Title gradient to yellow/orange */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Choose Your Path
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {courses.map((course) => (
            <Link 
              to={course.path} 
              key={course.id}
              // CHANGED: Hover border color to yellow and shadow glow to yellow rgb(234,179,8)
              className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]"
            >
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Dark Gradient Overlay over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 relative">
                {/* CHANGED: Hover text color to yellow */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {course.desc}
                </p>
                
                {/* CHANGED: Base text color to yellow-500 */}
                <div className="flex items-center text-sm font-medium text-yellow-500">
                  <span className="group-hover:mr-2 transition-all">Explore Course</span>
                  <svg className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}