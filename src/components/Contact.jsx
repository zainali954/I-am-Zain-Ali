
import { motion } from "motion/react";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-6 py-20 max-w-3xl mx-auto text-center text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-6 font-sora"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-zinc-400 mb-10 text-lg font-quicksand"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Whether you have an idea or just want to connect, I’m always open to
        discussing new projects or opportunities.
      </motion.p>

      <motion.a
        href="mailto:zainali.portfolio@gmail.com"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 8px 20px rgba(237, 179, 89, 0.25)",
        }}
        whileTap={{ scale: 0.97 }}
        className="bg-[#EDB359] hover:bg-[#e1bb80] text-black px-6 py-3 rounded-2xl font-semibold transition mt-6 inline-block"
      >
        Let's Talk
      </motion.a>
    </motion.section>
  );
}

export default Contact;
