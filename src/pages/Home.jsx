import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/local/Hero";
import ProjectCard from "../components/local/ProjectCard";
import DDCImage1 from "../assets/image/dulux-design-competition-2025-resmi-dibuka.jpg";
import DDCImage2 from "../assets/image/dulux-design-competition-2025-login.png";
import CPMAAImage1 from "../assets/image/cpmaa.jpg";
import CPMAAImage2 from "../assets/image/cpmaa2.jpg";

const Home = () => {
  const featuredProjects = [
    {
      title: "Dulux Design Competition 2025",
      description:
        "As a Front-End Developer for the Dulux Design Competition 2025 platform, I was responsible for bringing the user interface to life using Next.js. I collaborated closely with the UI/UX team and the project manager to align design goals with technical execution. Throughout the development process, I contributed numerous interface improvements to enhance user experience, responsiveness, and overall visual consistency—ensuring a polished, intuitive, and engaging platform for designers and architects to showcase their work.",
      images: [DDCImage1, DDCImage2],
      technologies: ["Next.js", "React", "Tailwind CSS"],
      link: "https://duluxdesigncompetition.com/home",
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
