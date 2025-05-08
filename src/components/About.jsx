import React from "react";
import { motion } from "framer-motion";
import { Download04Icon } from "hugeicons-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function About() {
  return (
    <motion.section
      className="px-6 py-20 max-w-3xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        variants={fadeUp}
        className="text-4xl md:text-4xl font-bold text-white mb-6 tracking-tight font-sora"
      >
        Who I Am
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="text-lg md:text-2xl text-zinc-400 mb-10 leading-relaxed font-quicksand"
      >
        I’m a self-taught developer passionate about building practical web apps.
        Every project I create helps me learn, improve, and get closer to real-world readiness.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="border-t border-zinc-800 pt-10"
      >
        <h3 className="text-2xl font-semibold text-gray-200 mb-2 font-oswald">Education</h3>
        <p className="text-zinc-400 text-base">
          <span className="font-medium text-gray-300">Bachelor of Sciences in Computer Science (BSCS)</span><br />
          University of Mianwali, 2020–2024<br />
          CGPA: <span className="text-orange-400 font-semibold">3.4 / 4.0</span>
        </p>
      </motion.div>

      <motion.a
        variants={fadeUp}
        href="https://drive.google.com/file/d/1XMS7GXx-FljlbCnH8Zg_n85QSIRgASQP/view?usp=sharing"
        download
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-[#EDB359] hover:bg-[#e1bb80] text-black  transition-shadow shadow-lg hover:shadow-xl"
      >
        <Download04Icon size={18}/>
        Download Resume
      </motion.a>
    </motion.section>
  );
}

export default About;
