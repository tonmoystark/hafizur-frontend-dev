import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "About", "Projects", "Contact"];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for dynamic header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const throttled = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", throttled);
    return () => window.removeEventListener("scroll", throttled);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
      whileHover={{ backdropFilter: "blur(22px)" }}
    >
      <motion.div
        animate={{
          backdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
          backgroundColor: scrolled ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)",
        }}
        transition={{ duration: 0.4 }}
        className="border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo with subtle floating animation */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="text-sm tracking-widest text-white">HAFIZUR</span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-300">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.1,
                  color: "#34d399",
                }}
                className="relative"
              >
                {item}
                <motion.span
                  className="absolute left-0 -bottom-1 h-px w-full bg-emerald-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative md:hidden w-8 h-8"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute w-8 h-0.5 bg-white top-2"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute w-8 h-0.5 bg-white top-4"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute w-8 h-0.5 bg-white top-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <motion.nav
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="flex flex-col items-center py-6 space-y-6 text-gray-300"
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.1, color: "#34d399" }}
                    className="text-lg"
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
};

export default Header;
