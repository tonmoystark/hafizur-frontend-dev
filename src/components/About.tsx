import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGit,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const skills = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "REST API", icon: TbApi },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: FaGithub },
];

import { useRef } from "react";
import picture from "/picture.png";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
};

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Continuous parallax transforms
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 bg-[#0a192f] text-white overflow-hidden"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start"
      >
        {/* LEFT — TEXT */}
        <motion.div style={{ y: textY }} className="space-y-6 text-gray-300">
          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="font-heading text-3xl md:text-4xl font-semibold tracking-tight leading-snug text-white"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            I’m a dedicated{" "}
            <span className="text-emerald-400 font-medium">
              Frontend Developer
            </span>{" "}
            who builds clean, responsive, and performance-focused web
            applications with attention to detail and user experience.
          </motion.p>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            I work primarily with React and TypeScript, designing modern
            interfaces that combine technical precision with smooth interactions
            and intuitive design systems.
          </motion.p>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ y: imageY, scale: imageScale }}
          whileHover={{ y: -8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 rounded-xl overflow-hidden border border-white/10 backdrop-blur-md">
            {/* Ambient Border Glow */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-br from-emerald-400/20 to-cyan-400/20 blur-2xl" />

            <img
              src={picture}
              alt="Hafizur Rahman"
              className="relative z-10 w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* TECH STACK GRID */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <h3 className="text-2xl font-semibold text-emerald-400 mb-10">
          Tech Stack
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -6 }}
                className="group px-5 py-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md text-sm text-gray-300 flex items-center justify-center gap-3 transition"
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition" />
                <span className="group-hover:text-white transition">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
