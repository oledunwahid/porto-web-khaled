import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/local/Hero";
import ProjectCard from "../components/local/ProjectCard";
import EIPImage1 from "../assets/image/eip.jpg";
import EIPImage2 from "../assets/image/eip2.jpg";
import CPMAAImage1 from "../assets/image/cpmaa.jpg";
import CPMAAImage2 from "../assets/image/cpmaa2.jpg";

const Home = () => {
  const featuredProjects = [
    {
      title: "Employee Information Portal",
      description:
        "The Employee Information Portal is a comprehensive company application designed to meet various internal needs. It serves as a centralized platform for essential functions such as IT ticketing, procurement purchase requests, stationary requests, and more. This portal is tailored to address the specific requirements of internal resources, ensuring streamlined operations and efficient management of company processes.",
      images: [EIPImage1, EIPImage2],
      technologies: ["PHP", "MYSQL"],
      isInternal: true,
    },
    {
      title: "Company Profile Mineral Alam Abadi",
      description: "Company Profile for Mineral Alam Abadi Group",
      images: [CPMAAImage1, CPMAAImage2],
      technologies: ["PHP", "Javascript", "Bootstrap 5", "MYSQL", "CSS"],
      link: "https://mineralalamabadi.com/",
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
