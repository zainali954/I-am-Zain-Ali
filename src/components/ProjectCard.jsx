import React from "react";
const ProjectCard = ({
  title,
  description,
  techStack,
  imageUrl,
  githubLink,
  liveDemoLink,
}) => {
  return (
    <div className=" h-full flex flex-col lg:flex-row items-center gap-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
    {/* Project Image */}
    <div className="h-60 w-full lg:w-fit aspect-video flex-shrink-0 lg:ms-4">
      <img
        src={imageUrl}
        loading="lazy"
        alt={title}
        className="object-cover w-full h-full rounded-xl"
      />
    </div>
  
    {/* Project Content */}
    <div className="w-full p-6 flex flex-col justify-between">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="text-sm px-3 py-1 bg-zinc-700/60 text-zinc-100 rounded-full border border-zinc-500"
          >
            {tech}
          </span>
        ))}
      </div>
  
      {/* Title */}
      <h3 className="text-3xl font-bold text-white mb-3 font-oswald">{title}</h3>
  
      {/* Description */}
      <p className="text-zinc-400 mb-6 font-quicksand">{description}</p>
  
      {/* Action Buttons */}
      <div className="flex gap-4 font-quicksand">
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#EDB359] hover:bg-[#e1bb80] text-black font-sm font-semibold px-4 py-2 rounded-xl transition"
        >
          Live Demo
        </a>
  
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[#EDB359] text-zinc-200 hover:text-[#e1bb80] hover:border-[#e1bb80] px-4 py-2 rounded-xl transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default ProjectCard;
