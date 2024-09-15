import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/local/ProjectCard";
import Travmate from "../assets/image/Travmate.jpeg";
import Travmate2 from "../assets/image/Travmate2.jpg";
import Mercu from "../assets/image/mercu1.jpg";
import Mercu2 from "../assets/image/mercu2.jpg";
import IT from "../assets/image/it.jpg";
import IT2 from "../assets/image/it2.jpg";

const Projects = () => {
  const allProjects = [
    {
      title: "IT Support System - Ticketing Request System",
      description:
        "Request IT support for hardware, software, and network issues.",
      images: [IT, IT2],
      technologies: ["IT", "Support"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Building Maintenance System",
      description:
        "Submit and manage building maintenance requests efficiently.",
      image: "/path/to/building-maintenance-image.jpg",
      technologies: ["Facilities", "Maintenance"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Inhouse Company Facilities Request System",
      description: "Manage material requests and facility purchases in-house.",
      image: "/path/to/other-facilities-image.jpg",
      technologies: ["Facilities", "Procurement"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Stationary Request System - Stock In/Out",
      description: "Manage stationary stock and requests for office supplies.",
      image: "/path/to/stationary-request-image.jpg",
      technologies: ["Office Supplies"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Courier Service - Sent and Received Package System",
      description: "Track and manage package delivery and receipt services.",
      image: "/path/to/delivery-request-image.jpg",
      technologies: ["Logistics"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Asset Management System",
      description: "Track and manage company assets for efficient use.",
      image: "/path/to/asset-management-image.jpg",
      technologies: ["Logistics"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Travel Business - Travel Request System",
      description: "Submit and manage travel requests for business trips.",
      image: "/path/to/travel-request-image.jpg",
      technologies: ["Logistics"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Procurement - Purchase Request System",
      description: "Submit purchase requests and manage procurement processes.",
      image: "/path/to/procurement-request-image.jpg",
      technologies: ["Logistics"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Career Screening Management System",
      description: "Manage and track career screening processes efficiently.",
      image: "/path/to/career-screening-image.jpg",
      technologies: ["Logistics"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Industrial Relation - Live Chat",
      description: "Internal live chat system for complaints and grievances.",
      image: "/path/to/industrial-relation-image.jpg",
      technologies: ["Logistics"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Internal Company Driver Booking System",
      description: "Book company drivers for official trips and transport.",
      image: "/path/to/driver-booking-image.jpg",
      technologies: ["Logistics"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "PTSMS Data Management System",
      description:
        "Management system for client PTSMS to efficiently manage their internal database with this system and to ease internal employee management.",
      image: "/path/to/ptsms-image.jpg",
      technologies: ["Logistics"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Company Profile - CLA Legal Associate",
      description: "Company profile site for CLA Legal Associate.",
      image: "/path/to/cla-legal-image.jpg",
      technologies: ["Vite.js", "React", "TailwindCSS", "Node.js"],
      link: "https://client-cla-indonesia.vercel.app/",
      isInternal: false,
      isWeb: true,
    },
    {
      title: "Flora Care",
      description: "Marketplace focused on plant care services.",
      image: "/path/to/public-project-image.jpg",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "https://floracare-khaled-makkawirelangs-projects.vercel.app/",
      isInternal: false,
    },
    {
      title: "Perfect Pallete",
      description: "An online makeup palette marketplace.",
      image: "/path/to/public-project-image.jpg",
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "https://client-perfect-pallete.vercel.app/",
      isInternal: false,
    },
    {
      title: "Redesign University's Website",
      description:
        "UI/UX redesign for a university's website to improve user experience.",
      images: [Mercu, Mercu2],
      technologies: [
        "Figma",
        "High Fidelity",
        "User Interface",
        "User Experience",
      ],
      link: "https://www.figma.com/proto/WK1BK14lTqKFiXlpif8S53/Project-Redesign-Website-Mercu",
      isUIUX: true,
      isInternal: false,
    },
    {
      title: "Travmate (Airbnb UI/UX Project)",
      description:
        "UI/UX design for a travel and accommodation booking platform.",
      images: [Travmate, Travmate2],
      technologies: [
        "Figma",
        "High Fidelity",
        "User Interface",
        "User Experience",
      ],
      link: "https://www.figma.com/proto/JCUOF8bX1YGhuCiUOFntS5/Project",
      isUIUX: true,
      isInternal: false,
    },

    // You can add more public projects here if needed
  ];

  const [filter, setFilter] = useState("All Projects");
  const categories = ["All Projects", "Public", "Inhouse", "Web", "UI/UX"];

  const filteredProjects =
    filter === "All Projects"
      ? allProjects
      : filter === "Public"
      ? allProjects.filter((project) => !project.isInternal)
      : filter === "Inhouse"
      ? allProjects.filter((project) => project.isInternal)
      : filter === "Web"
      ? allProjects.filter((project) => project.isWeb)
      : filter === "UI/UX"
      ? allProjects.filter((project) => project.isUIUX)
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
            className={`mr-2 mt-2 px-6 py-2 lg:mr-4 lg:px-4   rounded-full ${
              filter === category
                ? "bg-blue-500 text-white"
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
