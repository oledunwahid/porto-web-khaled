import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, technologies, link }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-sm rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition duration-300"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
