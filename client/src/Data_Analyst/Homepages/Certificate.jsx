import React from 'react';
import DA from "@/assets/certificate/DA.png"; // Your import

const certificates = [
  {
    id: 1,
    image: DA, 
    link: "#"
  }
];

const Certificate = () => {
  return (
    <section className="w-full py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#020618' }}>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Heading with Vector Design */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 relative z-10">
            My <span className="text-yellow-500">Certifications</span>
          </h2>
          
          {/* Vector Graphic Underline */}
          <div className="relative w-64 h-6">
            <svg width="100%" height="100%" viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12C30 12 40 20 70 20C100 20 110 5 150 5C190 5 200 20 230 20C260 20 270 12 295 12" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="150" cy="5" r="4" fill="#ffffff" />
              <defs>
                <linearGradient id="paint0_linear" x1="5" y1="12" x2="295" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#020618" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#ffffff" />
                  <stop offset="1" stopColor="#020618" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Certificate Display Area */}
        {/* Changed from Grid to Flex to Center and Enlarge */}
        <div className="flex flex-col items-center justify-center gap-12">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              // Added max-w-4xl to make it much wider/bigger
              className="group relative w-full max-w-4xl  overflow-hidden  transition-all duration-300"
            >
              
              {/* Image Container - Using aspect-video (16:9) for a wider, cinematic look */}
              <div className="aspect-video w-full relative">
                <img 
                  src={cert.image} 
                  alt="Certificate"
                  className="w-full h-full  object-contain transition-transform duration-700 "
                />
                
                {/* Hover Overlay */}
                
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificate;