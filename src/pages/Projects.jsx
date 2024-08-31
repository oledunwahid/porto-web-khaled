import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/local/ProjectCard";

const Projects = () => {
  const allProjects = [
    {
      title: "Project 1",
      description: "A brief description of project 1",
      image: "/path/to/project1-image.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://project1.com",
    },
    {
      title: "Project 2",
      description: "A brief description of project 2",
      image: "/path/to/project2-image.jpg",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "https://project2.com",
    },
    // Add more projects here
  ];

  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web", "Mobile", "AI/ML"];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.technologies.includes(filter));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`mr-4 px-4 py-2 rounded-full ${
              filter === category
                ? "bg-pink-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
