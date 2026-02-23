import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import pro1 from "../assets/pro1.webp";
import pro2 from "../assets/pro2.webp";
import pro3 from "../assets/pro3.webp";
import pro4 from "../assets/pro4.webp";
import pro5 from "../assets/pro5.webp";

interface ProjectContainerProps {
  image: string;
  title: string;
  description: string;
  stack: string[];
  liveLink: string;
  githubLink: string;
}
const ProjectData: ProjectContainerProps[] = [
  {
    image: pro1,
    title: "Task Flow Management App",
    description:
      "A task management system with role-based dashboards where admins assign tasks and employees track their task status using Context API and LocalStorage.",
    stack: ["React", "TailwindCSS", "Context API"],
    liveLink: "https://task-flow-employee-task-manager.vercel.app/",
    githubLink:
      "https://github.com/tonmoystark/task-flow-employee-task-manager",
  },
  {
    image: pro2,
    title: "Mood Tracking App",
    description:
      "A simple and calming interface that helps users log daily moods and sleep patterns, encouraging self-reflection.",
    stack: ["HTML", "TailwindCSS", "JavaScript"],
    liveLink: "https://mood-tracking-ui.vercel.app/",
    githubLink: "https://github.com/tonmoystark/mood-tracking-ui",
  },
  {
    image: pro3,
    title: "Bookmark Manager App",
    description:
      "An intuitive bookmark manager that allows users to organize, search, and categorize saved links.",
    stack: ["HTML", "TailwindCSS", "JavaScript"],
    liveLink: "https://bookmark-manager-weld.vercel.app/",
    githubLink: "https://github.com/tonmoystark/bookmark-manager",
  },
  {
    image: pro4,
    title: "Frontend Developer Portfolio",
    description:
      "A responsive personal portfolio website designed to showcase projects and experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://tonmoystark.github.io/FrontEnd-Developer-Tonmoy/",
    githubLink: "https://github.com/tonmoystark/FrontEnd-Developer-Tonmoy",
  },
  {
    image: pro5,
    title: "Quiz App",
    description:
      "An interactive quiz application with instant feedback and score display..",
    stack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://tonmoystark.github.io/quiz-app/",
    githubLink: "https://github.com/tonmoystark/quiz-app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative pb-32 pt-24 bg-[#0d1f3a] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-3xl md:text-4xl mb-12 font-heading font-semibold tracking-tight leading-snug text-white"
        >
          Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProjectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08,
              }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col grow p-6">
                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>

                <p className="text-gray-300 text-sm mb-4 grow">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  <motion.a
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 hover:border-emerald-400 hover:text-emerald-400 transition"
                  >
                    <FaGithub />
                    GitHub
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-emerald-500 text-black font-medium hover:bg-emerald-400 transition"
                  >
                    <FiExternalLink />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
