import React from "react";
import { motion } from "framer-motion";

import reactIcon from "./../assets/react-icon.svg";
import nodejsIcon from "./../assets/nodejs-icon.svg";
import expressjsIcon from "./../assets/express-icon.svg";
import mongodbIcon from "./../assets/mongodb-icon.svg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Hero() {
  return (
    <motion.section
      className="relative h-screen flex flex-col items-center justify-center text-center px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Tech Icons - Adjusted for fixed topbar and better balance */}
      <img
        src={reactIcon}
        alt="React"
        className="absolute top-32 left-20 w-10 opacity-40"
      />
      <img
        src={expressjsIcon}
        alt="Express.js"
        className="absolute top-40 right-24 w-10 opacity-40"
      />
      <img
        src={nodejsIcon}
        alt="Node.js"
        className="absolute bottom-24 left-28 w-10 opacity-40"
      />
      <img
        src={mongodbIcon}
        alt="MongoDB"
        className="absolute bottom-36 right-20 w-10 opacity-40"
      />

      {/* Heading */}
      <motion.h3
        variants={fadeUp}
        className="text-xl font-medium mb-4 font-quicksand text-gray-300"
      >
        Hey, I'm{" "}
        <span className="font-caveat italic text-[#EDB359]">Zain Ali</span>
      </motion.h3>

      {/* Main Title */}
      <motion.div
        variants={fadeUp}
        className="text-7xl md:text-9xl font-extrabold font-sora leading-16 md:leading-[7rem]"
      >
        <div className="bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          FullStack
        </div>
        <div className="bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Developer
        </div>
      </motion.div>

      {/* Subtext with scribble */}
      <motion.p
        variants={fadeUp}
        className="relative text-xl text-zinc-400 mt-6 mb-6 font-oswald"
      >
        Specialized in{" "}
        <span className="font-medium text-zinc-200">MERN Stack</span>
        <svg
          width="216"
          height="66"
          viewBox="0 0 216 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-5 -right-6 w-32"
        >
          <motion.path
            d="M191.737 16.8559C181.084 13.2674 159.729 7.78545 147.085 5.41221C117.034 -0.255488 83.7154 -1.54268 55.6953 1.8862C35.6606 4.30713 21.0111 7.22602 12.8207 10.4461C6.97852 12.7055 2.42984 15.9592 1.73819 18.3426C1.51557 19.1747 1.54126 19.1856 2.21552 18.2017C4.13173 15.4108 9.56981 13.5292 24.0982 10.6276C28.2397 9.77496 34.8412 8.45503 38.7404 7.63695C52.2133 4.8713 70.6419 2.49027 82.6229 1.97475C97.2122 1.36371 115.199 1.88351 127.437 3.29584C144.429 5.28168 152.395 6.73594 168.898 10.9163C185.83 15.21 187.623 15.7983 197.472 19.9381C205.924 23.5203 206.12 23.6379 208.656 25.6046C213.608 29.4533 215.055 31.4735 215.326 34.9856C215.676 38.9085 214.819 40.8789 211.699 43.434C209.201 45.4638 201.644 49.4667 197.351 51.0103C176.55 58.4594 151.365 62.5753 113.564 64.707C93.1047 65.8497 75.6725 65.702 48.9295 64.0445C27.4709 62.7394 15.78 60.1866 7.18546 54.9656C2.61115 52.1691 1.12927 50.1685 0.760881 46.3064C0.551143 44.1243 0.612012 43.6354 1.32015 41.2933C2.02829 38.9512 2.24331 38.5277 3.74218 36.8295C7.98346 32.0044 15.1414 27.2143 23.8443 23.3536C30.8324 20.2759 42.9017 16.4007 50.9701 14.6387C55.6495 13.6366 64.2003 12.3879 69.7421 11.8885C74.7994 11.4583 93.2271 10.5181 103.98 10.1341C108.428 9.99452 112.082 9.79339 112.04 9.7412C111.826 9.20424 76.2446 10.3208 66.5359 11.1817C51.9608 12.4164 34.7718 16.8326 22.3673 22.4874C11.0332 27.6693 2.23271 34.9201 0.56812 40.4255C-0.785681 44.9989 0.33635 50.1069 3.33401 52.75C9.77877 58.4667 21.6543 62.2301 38.2835 63.7875C50.346 64.9194 77.1591 66.0575 90.9442 65.9977C111.859 65.9398 143.929 63.7814 159.129 61.4389C175.705 58.8563 183.377 57.0636 195.285 53.0513C201.843 50.8208 206.426 48.5082 211.43 44.8985C214.738 42.4913 216.252 39.4958 215.966 35.8402C215.635 31.3762 213.979 28.9929 208.445 24.8634C206.001 23.0727 205.053 22.5677 199.454 20.092C195.995 18.5916 192.526 17.1217 191.737 16.8559Z"
            fill="#C5C0C1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            stroke="#C5C0C1"
            strokeWidth={1}
            fillOpacity={0}
          />
        </svg>
      </motion.p>
      {/* Button */}
      <motion.a
        variants={fadeUp}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 8px 20px rgba(237, 179, 89, 0.25)",
        }}
        whileTap={{ scale: 0.97 }}
        href="#projects"
        className="bg-[#EDB359] hover:bg-[#e1bb80] text-black px-6 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-sm"
      >
        See My Work
      </motion.a>
    </motion.section>
  );
}

export default Hero;
