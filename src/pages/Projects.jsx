import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/local/ProjectCard";
import Travmate from "../assets/image/Travmate.jpeg";
import Travmate2 from "../assets/image/Travmate2.jpg";
import Mercu from "../assets/image/mercu1.jpg";
import Mercu2 from "../assets/image/mercu2.jpg";
import IT from "../assets/image/it.jpg";
import IT2 from "../assets/image/it2.jpg";
import Building from "../assets/image/building.jpg";
import Building2 from "../assets/image/building2.jpg";
import Flora1 from "../assets/image/flora1.jpg";
import Flora2 from "../assets/image/flora2.jpg";
import PTSMS1 from "../assets/image/ptsms1.jpg";
import PTSMS2 from "../assets/image/ptsms2.jpg";
import PTSMS3 from "../assets/image/ptsms3.jpg";
import CLA1 from "../assets/image/cla1.jpg";
import CLA2 from "../assets/image/cla2.jpg";
import Perfect1 from "../assets/image/perfect1.jpg";
import Perfect2 from "../assets/image/perfect2.jpg";
import Facilities1 from "../assets/image/facilities1.jpg";
import Facilities2 from "../assets/image/facilities2.jpg";
import Courier1 from "../assets/image/courier1.jpg";
import Courier2 from "../assets/image/courier2.jpg";
import ATK1 from "../assets/image/atk1.jpg";
import ATK2 from "../assets/image/atk2.jpg";
import Asset1 from "../assets/image/asset1.jpg";
import Asset2 from "../assets/image/asset2.jpg";
import IR1 from "../assets/image/ir1.jpg";
import IR2 from "../assets/image/ir2.jpg";
import Driver1 from "../assets/image/driver1.jpg";
import Driver2 from "../assets/image/driver2.jpg";
import Travel1 from "../assets/image/travel1.jpg";
import Travel2 from "../assets/image/travel2.jpg";
import Proc1 from "../assets/image/proc1.jpg";
import Proc2 from "../assets/image/proc2.jpg";
import Career1 from "../assets/image/career1.jpg";
import Career2 from "../assets/image/career2.jpg";

const Projects = () => {
  const allProjects = [
    {
      title: "IT Support System - Ticketing Request System",
      description:
        "Request IT support for hardware, software, and network issues.",
      images: [IT, IT2],
      technologies: ["PHP", "MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Building Maintenance System",
      description:
        "Submit and manage building maintenance requests efficiently.",
      images: [Building, Building2],
      technologies: ["PHP", "MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Inhouse Company Facilities Request System",
      description: "Manage material requests and facility purchases in-house.",
      images: [Facilities1, Facilities2],
      technologies: ["PHP", "MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Stationary Request System - Stock In/Out",
      description: "Manage stationary stock and requests for office supplies.",
      images: [ATK1, ATK2],
      technologies: ["PHP", "MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Courier Service - Sent and Received Package System",
      description: "Track and manage package delivery and receipt services.",
      images: [Courier1, Courier2],
      technologies: ["PHP", "MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Asset Management System",
      description: "Track and manage company assets for efficient use.",
      images: [Asset1, Asset2],
      technologies: ["PHP", "MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Travel Business - Travel Request System",
      description: "Submit and manage travel requests for business trips.",
      images: [Travel1, Travel2],
      technologies: ["PHP", "MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Procurement - Purchase Request System",
      description: "Submit purchase requests and manage procurement processes.",
      images: [Proc1, Proc2],
      technologies: ["PHP", "MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Career Screening Management System",
      description: "Manage and track career screening processes efficiently.",
      images: [Career1, Career2],
      technologies: ["PHP", "MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Industrial Relation - Live Chat",
      description: "Internal live chat system for complaints and grievances.",
      images: [IR1, IR2],
      technologies: ["PHP", "MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Internal Company Driver Booking System",
      description: "Book company drivers for official trips and transport.",
      images: [Driver1, Driver2],
      technologies: ["PHP", "MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "PTSMS Data Management System",
      description:
        "Management system for client PTSMS to efficiently manage their internal database with this system and to ease internal employee management.",
      images: [PTSMS1, PTSMS2, PTSMS3],
      technologies: ["React.js, Express.js, MySQL"],
      link: "",
      isInternal: true,
      isWeb: true,
    },
    {
      title: "Company Profile - CLA Legal Associate",
      description: "Company profile site for CLA Legal Associate.",
      images: [CLA1, CLA2],
      technologies: ["Vite.js", "React", "TailwindCSS", "Node.js"],
      link: "https://client-cla-indonesia.vercel.app/",
      isInternal: false,
      isWeb: true,
    },
    {
      title: "Flora Care",
      description: "Marketplace focused on plant care services.",
      images: [Flora1, Flora2],
      technologies: ["React", "Node.js", "Tailwind CSS"],
      link: "https://floracare-khaled-makkawirelangs-projects.vercel.app/",
      isInternal: false,
    },
    {
      title: "Perfect Pallete",
      description: "An online makeup palette marketplace.",
      images: [Perfect1, Perfect2],
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

    //Add more public projects here if needed
  ];

  const [filter, setFilter] = useState("All Projects");
  const categories = [
    "All Projects",
    "Public Projects",
    "Inhouse/Internal Projects",
    "Web",
    "UI/UX",
  ];

  const filteredProjects =
    filter === "All Projects"
      ? allProjects
      : filter === "Public Projects"
      ? allProjects.filter((project) => !project.isInternal)
      : filter === "Inhouse/Internal Projects"
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
