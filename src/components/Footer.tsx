import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-10 bg-[#06101c] border-t border-white/10 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © {new Date().getFullYear()} Hafizur Rahman. All rights reserved.
        </motion.p>

        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-emerald-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-emerald-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
