import React from "react";
import reactIcon from "./../assets/react-icon.svg";
import nodejsIcon from "./../assets/nodejs-icon.svg"
import expressjsIcon from "./../assets/express-icon.svg"
import mongodbIcon from "./../assets/mongodb-icon.svg"
import reduxIcon from "./../assets/redux-icon.svg"
import firebaseIcon from "./../assets/firebase-icon.svg"
import tailwindcssIcon from "./../assets/tailwindcss-icon.svg"
import gitIcon from "./../assets/git-icon.svg"
import { motion } from "motion/react";

const skills = [
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "Express.js", icon: expressjsIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Tailwind CSS", icon: tailwindcssIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "Git & GitHub", icon: gitIcon },
];

// Animation variant for skill cards
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  }),
};

function Skills() {
  return (
    <motion.section
      className="px-6 py-20 max-w-4xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-4xl md:text-4xl font-bold text-white mb-4 tracking-tight font-sora"
        variants={cardVariant}
        custom={0}
      >
        Tech Stack
      </motion.h2>

      <motion.p
        className="text-zinc-400 text-lg text-center mb-10 font-quicksand"
        variants={cardVariant}
        custom={1}
      >
        The tools and technologies I work with every day.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="bg-zinc-950 backdrop-blur-3xl border border-zinc-800 rounded-2xl p-5 flex flex-col items-center justify-center text-white hover:shadow-lg hover:border-[#EDB359] transition duration-300"
            variants={cardVariant}
            custom={i + 2}
          >
            <img src={skill.icon} alt={skill.name} className="w-16" />

            <span className="text-lg font-medium font-oswald">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
