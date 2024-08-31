import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/local/Hero";
import ProjectCard from "../components/local/ProjectCard";

const Home = () => {
  const featuredProjects = [
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
  ];

  return (
    <div>
      <Hero />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
