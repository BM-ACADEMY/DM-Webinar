import { motion } from "motion/react";

export default function SectionTitle({ text1, text2, text3, Icon }) {
    return (
        <>
            <motion.div
                 className="flex items-center justify-center gap-2 font-medium text-yellow-600 mt-28 px-10 py-2 rounded-full bg-yellow-950/70 border border-yellow-800 w-max mx-auto"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {Icon && <Icon className="text-yellow-500 text-xl" />}
                <span>{text1}</span>
            </motion.div>

            <motion.h3
                className="text-3xl font-semibold text-center mx-auto mt-4"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                {text2}
            </motion.h3>

            <motion.p
                className="text-slate-300 text-center mt-2 max-w-xl mx-auto"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                {text3}
            </motion.p>
        </>
    );
}
