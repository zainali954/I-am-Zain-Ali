import React from "react";

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-50 backdrop-blur-md bg-black/30 border border-white/10 text-white px-6 py-3 rounded-2xl shadow-md flex items-center justify-between">
      
      {/* Left: Name */}
      <div className="text-lg font-semibold tracking-wide font-caveat">Zain Ali</div>

      {/* Center: Projects */}
      <a href="#projects" className=" absolute  left-1/2 transform -translate-x-1/2  text-center text-sm sm:text-base font-medium text-zinc-200 tracking-wider hidden sm:block px-4 py-2 rounded-xl hover:bg-[#edb25913] border border-transparent hover:border-[#EDB359] hover:cursor-pointer transition-all duration-300 font-quicksand">
        Projects
      </a>

      {/* Right: Social Links */}
      <div className="text-sm sm:text-base font-medium font-quicksand text-zinc-300 flex gap-2 sm:gap-3 items-center whitespace-nowrap">
        <a href="https://github.com/zainali954/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EDB359] transition">
          GitHub
        </a>
        <span className="opacity-40">/</span>
        <a href="https://www.linkedin.com/in/zain-ali-1a49b2361/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EDB359] transition">
          LinkedIn
        </a>
        <span className="opacity-40">/</span>
        <a href="mailto:zainali.portfolio@gmail.com" className="hover:text-[#EDB359] transition">
          Email
        </a>
      </div>
    </header>
  );
}
