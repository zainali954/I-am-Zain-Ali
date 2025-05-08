import { Github01Icon, Linkedin01Icon, Mail01Icon } from "hugeicons-react";
import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-zinc-400 text-sm py-6 px-4 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">&copy; 2025 Zain Ali. All rights reserved.</p>
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/zainali954/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <Github01Icon size={18}/>
          </a>
          <a href="https://www.linkedin.com/in/zain-ali-1a49b2361/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <Linkedin01Icon size={18}/>
          </a>
          <a href="mailto:zainali.portfolio@gmail.com" className="hover:text-white transition">
            <Mail01Icon size={18}/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
