import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { FiDownload } from "react-icons/fi";
import { useRef } from "react";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "JavaScript Enthusiast",
  "React Developer",
  "Web Developer",
  "TypeScript Enthusiast",
  "UI Engineer",
];

const Hero = () => {
  const ref = useRef(null);

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = isDeleting ? 60 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1),
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll transforms (ONLY deeper movement)
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen font-heading font-semibold flex items-center justify-center overflow-hidden bg-linear-to-br from-[#041b16] via-[#0b2c2a] to-[#0a192f] text-white"
    >
      {/* Ambient Glow Left */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-112.5 h-112.4 blur-[170px] top-[25%] left-[5%]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(52,211,153,0.35) 0%, rgba(52,211,153,0.15) 50%, transparent 75%)",
        }}
      />

      {/* Ambient Glow Right */}
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-112.5 h-112.5 blur-[170px] bottom-[20%] right-[5%]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.3) 0%, rgba(99,102,241,0.12) 50%, transparent 75%)",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          y: scrollY,
          scale: scrollScale,
          opacity: scrollOpacity,
        }}
        className="relative z-10 text-center px-6"
      >
        <motion.p className="uppercase tracking-[0.4em] text-sm text-emerald-400 mb-6 min-h-6">
          {text}
          <span className="animate-pulse">|</span>
        </motion.p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="bg-linear-to-r font-heading text-4xl md:text-6xl font-semibold tracking-tight from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent">
            Hafizur Rahman
          </span>
        </h1>

        <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-lg">
          I design and build modern, responsive and performance-focused web
          applications using React, Javascript and TypeScript.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="px-7 py-3 bg-emerald-500 text-black font-semibold rounded-md shadow-xl hover:bg-emerald-400 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-7 py-3 border border-emerald-400/50 text-emerald-400 rounded-md hover:bg-emerald-400 hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <motion.a
            href="./hafizur-frontend-resume.pdf"
            download
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition"
          >
            <FiDownload className="text-base opacity-70" />
            Download Resume
          </motion.a>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://github.com/tonmoystark"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-400 hover:bg-emerald-400/10 transition"
          >
            <Github className="w-5 h-5 text-gray-300 hover:text-emerald-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/md-hafizur-rahman-69b723258/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-400 hover:bg-emerald-400/10 transition"
          >
            <Linkedin className="w-5 h-5 text-gray-300 hover:text-emerald-400 transition" />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfpsNNFhVxJRRkmMvpGVssrHbVlwHWRgJJfBgblBRqRjzpSVSSDfkdlkbPsQmqMRscJVZg"
            target="_blank"
            className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-400 hover:bg-emerald-400/10 transition"
          >
            <Mail className="w-5 h-5 text-gray-300 hover:text-emerald-400 transition" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
