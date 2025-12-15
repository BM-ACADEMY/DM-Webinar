import React from 'react';
import { Link } from "react-router-dom";
import Image1 from "../assets/vector/Coding workshop-rafiki.png"
import Image2 from "../assets/vector/Marketing-bro.png"
import Image3 from "../assets/vector/Research paper-rafiki.png"

export default function HomePage() {
  
  const courses = [
    {
      id: 1,
      idLabel: "01_", 
      title: "AI Digital Marketing",
      // CHANGED: 3D Illustration style (Rocket/Growth Concept)
      image: Image2,
      path: "/digital-marketing", 
      desc: "Master SEO, social media strategies, and online growth."
    },
    {
      id: 2,
      idLabel: "02_",
      title: "AI Full Stack Development",
      // CHANGED: 3D Illustration style (Abstract Code/Tech Nodes)
      image: Image1,
      path: "/ai-fullstack-development",
      desc: "Build modern web apps using React, Node, and AI tools."
    },
    {
      id: 3,
      idLabel: "03_",
      title: "AI Data Analyst",
      // CHANGED: 3D Illustration style (Data Cubes/Analytics)
      image: Image3,
      path: "/Data_Analyst",
      desc: "Analyze complex data and build predictive AI models."
    }
  ];

  return (
    <div className="min-h-screen bg-[#5e5a5a] text-white relative selection:bg-yellow-500 selection:text-black font-sans overflow-hidden">
      
      {/* --- BACKGROUND EFFECT (Cyber Grid) --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-yellow-600/10 blur-[120px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative mx-auto z-10 max-w-7xl px-6 py-20">
        
        <h2 className="text-3xl md:text-6xl text-center font-black uppercase tracking-tighter mb-20">
          <span className="text-yellow-400 ">
            Choose Your Path
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {courses.map((course) => (
            <Link 
              to={course.path} 
              key={course.id}
              className="group relative block h-full"
            >
              {/* TECH SHAPE CONTAINER */}
              <div className="relative h-full bg-gradient-to-b from-gray-800 to-gray-900 p-[1px] transition-all duration-300 group-hover:from-yellow-400 group-hover:to-orange-600 [clip-path:polygon(0_0,100%_0,100%_calc(100%-25px),calc(100%-25px)_100%,0_100%)] shadow-2xl">
                
                {/* INNER CARD CONTENT */}
                <div className="relative h-full bg-[#0a0a0a] [clip-path:polygon(0_0,100%_0,100%_calc(100%-25px),calc(100%-25px)_100%,0_100%)]">
                  
                  {/* --- IMAGE CONTAINER --- */}
                  <div className="h-64 overflow-hidden relative border-b border-gray-800 group-hover:border-yellow-500/30 transition-colors">
                    {/* Updated Image Style: 3D Illustration */}
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover opacity-80 hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                    />
                    
                    {/* Tech Overlays */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,#000_3px)] bg-[size:100%_4px] opacity-15 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                    
                   
                  </div>

                  {/* Text Content */}
                  <div className="p-6 pt-10 relative">
                    
                    {/* ID LABEL */}
                    <div className="absolute top-60 left-6 bg-[#0a0a0a] border border-gray-700 px-3 py-1 text-xs font-mono text-yellow-500 shadow-xl group-hover:bg-yellow-500 group-hover:text-black group-hover:border-yellow-500 transition-all duration-300">
                      {course.idLabel}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed border-l-2 border-gray-800 pl-4 group-hover:border-yellow-500 transition-colors">
                      {course.desc}
                    </p>
                    
                    {/* Tech Footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-900">
                      <div className="flex items-center text-[10px] font-mono text-gray-400 group-hover:text-yellow-500 transition-colors uppercase tracking-widest">
                        <span>Lear_more</span>
                      </div>
                      
                      <div className="h-8 w-8 flex items-center justify-center bg-gray-900 border border-gray-700 text-gray-400 group-hover:border-yellow-500 group-hover:text-yellow-500 transition-all duration-300">
                         <span className="text-xl leading-none mb-1">&rsaquo;</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Outer Glow on Hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg blur opacity-0 group-hover:opacity-40 transition duration-500 -z-10"></div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}