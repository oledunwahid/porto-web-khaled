import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/local/ProjectCard";

const Projects = () => {
  const allProjects = [
    {
      title: "Public Project 1",
      description: "A brief description of public project 1",
      image: "/path/to/project1-image.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://project1.com",
      isInternal: false,
    },

    {
      title: "IT Support System",
      description:
        "Submit your IT-related issues here. Our IT team will assist you as soon as possible. (Additional or RAM Replacement, Drive or Cloud storage request, Email, Printer, Scan, Software problems etc).",
      image: "/path/to/it-support-image.jpg", // You'll need to replace this with an actual image path
      technologies: ["IT", "Support"],
      link: "",
      isInternal: true,
    },
    {
      title: "Building Maintenance",
      description:
        "Submit building and facility-related maintenance requests here. Our team will assist you with building maintenance needs.",
      image: "/path/to/building-maintenance-image.jpg",
      technologies: ["Facilities", "Maintenance"],
      link: "",
      isInternal: true,
    },
    {
      title: "Other Facilities Request",
      description:
        "For purchasing and replacing items, please attach the approved material request form and submit your request here.",
      image: "/path/to/other-facilities-image.jpg",
      technologies: ["Facilities", "Procurement"],
      link: "",
      isInternal: true,
    },
    {
      title: "Laptop Facilities Request",
      description:
        "For purchasing and replacing laptops, please attach the approved material request form and submit your request here.",
      image: "/path/to/laptop-request-image.jpg",
      technologies: ["IT", "Hardware"],
      link: "",
      isInternal: true,
    },
    {
      title: "ATK/Stationary",
      description:
        "Submit your stationary-related requests here. Our team will assist you with ATK/Stationary needs.",
      image: "/path/to/stationary-request-image.jpg",
      technologies: ["Office Supplies"],
      link: "",
      isInternal: true,
    },
    {
      title: "Delivery",
      description:
        "Submit your delivery-related requests here. Our team will assist you with delivery needs.",
      image: "/path/to/delivery-request-image.jpg",
      technologies: ["Logistics"],
      link: "",
      isInternal: true,
    },
    {
      title: "Public Project Example",
      description:
        "This is an example of a public project that would be visible and accessible to everyone.",
      image: "/path/to/public-project-image.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://example-public-project.com",
      isInternal: false,
    },
    // You can add more public projects here if needed
  ];

  const [filter, setFilter] = useState("All");
  const categories = ["All", "Public", "Internal", "Web", "Mobile", "AI/ML"];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : filter === "Public"
      ? allProjects.filter((project) => !project.isInternal)
      : filter === "Internal"
      ? allProjects.filter((project) => project.isInternal)
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
