import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Layers, ArrowRight, Code2 } from 'lucide-react';

const MasterclassSection = () => {
  const features = [
    {
      id: 1,
      title: "AI + Data Analytics Career",
      description: "Clear reasons why AI + Data Analytics is a career you absolutely can’t miss.",
      icon: <Cpu className="w-6 h-6 text-black" />,
      tag: "CAREER PATH"
    },
    {
      id: 2,
      title: "Live Analytics Demo",
      description: "Live demo of AI-powered data analytics tools used in real industries.",
      icon: <Terminal className="w-6 h-6 text-black" />,
      tag: "REAL-TIME"
    },
    {
      id: 3,
      title: "Unique Training System",
      description: "Insights into BM Academy’s unique training & placement system that helps students achieve real career results.",
      icon: <Layers className="w-6 h-6 text-black" />,
      tag: "BM ACADEMY"
    },
    {
      id: 4,
      title: "Exclusive Bonuses",
      description: "Special exclusive offer for attendees to join the full course with added bonuses and fast-track benefits.",
      icon: <Zap className="w-6 h-6 text-black" />,
      tag: "LIMITED OFFER"
    }
  ];

  const CircuitBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );

  return (
    <section className="relative w-full py-24 bg-[#050505] overflow-hidden font-sans border-y border-white/5">
      <CircuitBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-yellow-500/30 bg-yellow-500/10 mb-8"
          >
            <Code2 className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-mono font-bold text-yellow-500 tracking-widest uppercase">
              Masterclass Curriculum
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            What You’ll Get in This <br />
            <span className="text-yellow-500">FREE Masterclass</span>
          </motion.h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 p-8 overflow-hidden hover:border-yellow-500/50 transition-colors duration-300"
            >
              {/* Tag */}
              <div className="mb-6">
                <span className="text-xs font-mono text-zinc-500 group-hover:text-yellow-500/80 transition-colors border-b border-zinc-800 pb-1">
                  //{feature.tag}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0 p-4 bg-yellow-500 text-black rounded-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative border-2 border-dashed border-yellow-500/20 bg-zinc-900/80 p-8 md:p-12 rounded-lg text-center backdrop-blur-xl">

            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-2 text-yellow-500 mb-6 font-mono text-sm">
                 STATUS: REGISTRATION OPEN
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Ready to transform your career?
              </h3>

              <a
               href="https://wa.me/919944288271?text=Hi%2C%20I%20am%20interested%20in%20the%20Free%20Masterclass%20on%20AI%20%2B%20Data%20Analytics!"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden bg-yellow-500 text-black px-12 py-5 font-black text-lg uppercase tracking-wider hover:bg-yellow-400 transition-colors"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Claim Your Free Seat Before It’s Gone!
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MasterclassSection;
