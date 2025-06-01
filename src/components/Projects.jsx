import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "LinkVault",
    description:
      "LinkVault is a personal link management app that lets users save, categorize, and tag links with a secure login system. It includes features like smart search, favorites, filtering, and a full dashboard with category, tag, and task organization.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    imageUrl: "https://res.cloudinary.com/dyt6y8t5r/image/upload/v1748774960/linkvault_qfn445.png",
    githubLink: "https://github.com/zainali954/Linkvault",
    liveDemoLink: "https://linkvault-six.vercel.app/",
  },
  {
    title: "ZephyrLint",
    description:
      "ZephyrLint delivers secure, AI-powered code reviews through a web dashboard, utilizing the Gemini model for analysis across most programming languages. Benefit from diverse review options (deep, rewrite, performance), history preservation, and full control to copy, download, or share your results.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Echart.js"],
    imageUrl: "https://res.cloudinary.com/dyt6y8t5r/image/upload/v1748774960/zephyrlint_fihyiy.png",
    githubLink: "https://github.com/zainali954/ZephyrLint",
    liveDemoLink: "https://zephyrlint.vercel.app/",
  },
  {
    title: "Tickure",
    description:
      "Tickure is a personal task management web app featuring user authentication, category and label-based organization, advanced filtering and sorting, and a detailed analytics dashboard. It includes a full CRUD system with a responsive UI and supports calendar view and subtask tracking.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Echart.js"],
    imageUrl: "https://res.cloudinary.com/dyt6y8t5r/image/upload/v1746683072/Tickure_2025-05-08T05-42-44-372Z_ybgwo1.png",
    githubLink: "https://github.com/zainali954/tickure",
    liveDemoLink: "https://tickure.vercel.app/",
  },
  {
    title: "Snapsack",
    description:
      "Snapsack is a full-featured e-commerce web application with user authentication, product listing, search, sorting, filtering, cart functionality, and a complete admin panel. All core features have been implemented except for payment integration.",
    techStack: ["React", "Tailwind", "MongoDB", "EChart.js", "Node.js", "Express.js"],
    imageUrl: "https://res.cloudinary.com/dyt6y8t5r/image/upload/v1746683073/SnapSack_2025-05-08T05-42-19-188Z_og4ofy.png",
    githubLink: "https://github.com/zainali954/snapsack",
    liveDemoLink: "https://snapsack-user-frontend.vercel.app/",
  },
];

// Animation variant
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="px-6 py-20 max-w-6xl mx-auto space-y-14"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-center text-4xl font-bold text-white mb-4 font-sora"
        variants={item}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-zinc-400 text-lg text-center mb-10 font-quicksand"
        variants={item}
      >
        A few projects that reflect my journey, skills, and love for problem-solving.
      </motion.p>

      <motion.div variants={container} className="space-y-14">
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
