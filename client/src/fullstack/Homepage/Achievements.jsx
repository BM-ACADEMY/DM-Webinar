import { useEffect, useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useTransform, 
  animate, 
  useInView 
} from "motion/react";
import { GraduationCap, Briefcase, Star } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";

// 1. Improved Counter Component
// Uses Framer Motion to animate the number only when visible
function AnimatedCounter({ from = 0, to, duration = 2.5 }) {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, { 
                duration: duration,
                ease: "easeOut" 
            });
            return controls.stop;
        }
    }, [count, to, isInView, duration]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

// 2. Refined 3D Tilt Card
// Smoother interaction and better preservation of layout
function TiltCard({ children }) {
    const ref = useRef(null);

    const handleMove = (e) => {
        const card = ref.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Reduced tilt intensity for a more premium feel
        const tiltX = ((y - rect.height / 2) / rect.height) * 10;
        const tiltY = ((x - rect.width / 2) / rect.width) * -10;

        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    };

    const handleLeave = () => {
        ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="transition-transform duration-500 ease-out cursor-pointer h-full"
            style={{ transformStyle: "preserve-3d" }}
        >
            {children}
        </div>
    );
}

export default function Achievements() {
    return (
        <section className="w-full bg-neutral-950 text-white relative overflow-hidden">
            
            {/* Background Effects (Grid & Glows) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-yellow-500/10 blur-[100px] rounded-full" />

            {/* Content Wrapper */}
            <div className="relative z-10">
                <SectionTitle
                    text1="Our Achievementss"
                />

                <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
                    
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                        {/* Card 1: Students */}
                        <TiltCard>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="h-full p-8 rounded-3xl backdrop-blur-md bg-neutral-900/50
                                           border border-white/10 shadow-xl
                                           hover:border-yellow-500/30 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]
                                           group transition-all duration-300 flex flex-col items-center justify-center"
                            >
                                <div className="p-4 rounded-full bg-yellow-500/10 mb-6 group-hover:bg-yellow-500/20 transition-colors">
                                    <GraduationCap className="size-10 text-yellow-500" />
                                </div>
                                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent mb-2">
                                    <AnimatedCounter to={800} />+
                                </h3>
                                <p className="text-lg font-medium text-yellow-500/90 tracking-wide uppercase text-sm">
                                    Students Trained
                                </p>
                            </motion.div>
                        </TiltCard>

                        {/* Card 2: Placements */}
                        <TiltCard>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="h-full p-8 rounded-3xl backdrop-blur-md bg-neutral-900/50
                                           border border-white/10 shadow-xl
                                           hover:border-yellow-500/30 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]
                                           group transition-all duration-300 flex flex-col items-center justify-center"
                            >
                                <div className="p-4 rounded-full bg-yellow-500/10 mb-6 group-hover:bg-yellow-500/20 transition-colors">
                                    <Briefcase className="size-10 text-yellow-500" />
                                </div>
                                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent mb-2">
                                    <AnimatedCounter to={400} />+
                                </h3>
                                <p className="text-lg font-medium text-yellow-500/90 tracking-wide uppercase text-sm">
                                    Students Placed

                                </p>
                            </motion.div>
                        </TiltCard>

                        {/* Card 3: Experience */}
                        <TiltCard>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="h-full p-8 rounded-3xl backdrop-blur-md bg-neutral-900/50
                                           border border-white/10 shadow-xl
                                           hover:border-yellow-500/30 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]
                                           group transition-all duration-300 flex flex-col items-center justify-center"
                            >
                                <div className="p-4 rounded-full bg-yellow-500/10 mb-6 group-hover:bg-yellow-500/20 transition-colors">
                                    <Star className="size-10 text-yellow-500" />
                                </div>
                                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent mb-2">
                                    <AnimatedCounter to={5} />+
                                </h3>
                                <p className="text-lg font-medium text-yellow-500/90 tracking-wide uppercase text-sm">
                                    Years Experience

                                </p>
                            </motion.div>
                        </TiltCard>
                    </div>

                    {/* Bottom Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-20 text-center"
                    >
                        <p className="max-w-2xl mx-auto pb-1 text-neutral-400 text-lg leading-relaxed">
                           Delivering consistent results and building credibility through expert training.                
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}