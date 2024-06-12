import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      key={project.id}
      className="overflow-hidden cursor-pointer relative w-80 h-60 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        className="w-full h-full object-cover rounded-lg"
        src={project.imgSrc}
      />
      {isHovered && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] 
        flex items-center justify-center flex-col rounded-md gap-2">
          <p className="text-xl text-highlightYellow">{project?.name}</p>
          <a href={project?.gitURL}>
            <FaGithub className="text-3xl text-white hover:text-highlightYellow" />
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
