import { motion } from "framer-motion";

export default function AnimatedLetters({ text, className = "" }) {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block cursor-pointer"
          whileHover={{
            y: -15,
            rotate: [0, -10, 10, -5, 0], // wave
            scale: 1.25,
            transition: {
              duration: 0.5,
              ease: [0.42, 0, 0.58, 1], // easeInOut for smoother wave
            },
          }}
          animate={{
            y: 0,
            rotate: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 10, // <-- elastic bounce effect
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
