import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { GraduationCap, Briefcase, Star } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

// Counter animation
function Counter({ target, duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = target / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(counter);
            }
            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(counter);
    }, [target, duration]);

    return <span>{count}</span>;
}

// 3D Hover card wrapper
function TiltCard({ children }) {
    const ref = useRef(null);

    const handleMove = (e) => {
        const card = ref.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const tiltX = ((y - rect.height / 2) / rect.height) * 15;
        const tiltY = ((x - rect.width / 2) / rect.width) * -15;

        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.04)`;
    };

    const handleLeave = () => {
        ref.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="transition-transform duration-300 cursor-pointer"
        >
            {children}
        </div>
    );
}

export default function Achievements() {
    return (
        <section className="w-full pt-10 pb-24 bg-black text-white relative overflow-hidden">

            {/* Heading same as Host section */}
            <SectionTitle
                text1="Our Achievements"
                text2=""
                text3=""
            />

            <div className="relative max-w-6xl mx-auto px-6 md:px-12">

                {/* Cards */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">

                    {/* Card 1 */}
                    <TiltCard>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "easeInOut",
                            }}
                            className="p-8 rounded-2xl backdrop-blur-lg bg-white/10
                                       border border-white/20 shadow-2xl
                                       hover:border-yellow-500/70 hover:shadow-yellow-500/40
                                       transition-all duration-300"
                        >
                            <GraduationCap className="size-14 text-yellow-500 mx-auto mb-4 drop-shadow-lg" />
                            <p className="text-6xl font-bold text-yellow-500">
                                <Counter target={800} />+
                            </p>
                            <p className="mt-4 text-lg tracking-wide text-gray-200">
                                Students Trained
                            </p>
                        </motion.div>
                    </TiltCard>

                    {/* Card 2 */}
                    <TiltCard>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "easeInOut",
                                delay: 0.2,
                            }}
                            className="p-8 rounded-2xl backdrop-blur-lg bg-white/10
                                       border border-white/20 shadow-2xl
                                       hover:border-yellow-500/70 hover:shadow-yellow-500/40
                                       transition-all duration-300"
                        >
                            <Briefcase className="size-14 text-yellow-500 mx-auto mb-4 drop-shadow-lg" />
                            <p className="text-6xl font-bold text-yellow-500">
                                <Counter target={400} />+
                            </p>
                            <p className="mt-4 text-lg tracking-wide text-gray-200">
                                Students Placed
                            </p>
                        </motion.div>
                    </TiltCard>

                    {/* Card 3 */}
                    <TiltCard>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "easeInOut",
                                delay: 0.4,
                            }}
                            className="p-8 rounded-2xl backdrop-blur-lg bg-white/10
                                       border border-white/20 shadow-2xl
                                       hover:border-yellow-500/70 hover:shadow-yellow-500/40
                                       transition-all duration-300"
                        >
                            <Star className="size-14 text-yellow-500 mx-auto mb-4 drop-shadow-lg" />
                            <p className="text-6xl font-bold text-yellow-500">
                                <Counter target={5} />+
                            </p>
                            <p className="mt-4 text-lg tracking-wide text-gray-200">
                                Years Experience
                            </p>
                        </motion.div>
                    </TiltCard>

                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-16 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
                >
                    Delivering consistent results and building credibility through expert training.
                    Our students succeed because we focus on real-world skills, hands-on learning,
                    and practical guidance.
                </motion.p>
            </div>
        </section>
    );
}
