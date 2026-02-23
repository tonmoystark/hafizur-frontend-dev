import { motion, type Variants } from "framer-motion";

const name: string = "Hafizur Rahman";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 bg-[#041b16] flex items-center justify-center overflow-hidden z-9999"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-150 h-150 bg-emerald-400/20 rounded-full blur-[150px]"
      />

      {/* Name Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative text-3xl md:text-4xl font-semibold text-white tracking-widest flex"
      >
        {name.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      {/* Bottom subtle line animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-20 h-0.5 bg-emerald-400"
      />
    </motion.div>
  );
};

export default Loader;
