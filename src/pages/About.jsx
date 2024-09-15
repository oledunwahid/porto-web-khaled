import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Work1 from "../assets/image/work1.jpg";
import Work2 from "../assets/image/work2.jpg";
import Work3 from "../assets/image/work3.jpg";

const About = () => {
  const hardSkills = [
    "Foreign Language Proficiency",
    "CSS",
    "HTML",
    "UI/UX Design",
    "Web Development",
    "XML",
    "Database Design",
    "Git",
    "JavaScript",
    "Figma",
    "Technical Documentation",
    "React.js",
    "MySQL",
    "Tailwind CSS",
  ];

  const softSkills = [
    "Adaptive",
    "Commitment",
    "Problem Solving",
    "Patience",
    "Clear Communication",
    "Goal-oriented",
    "Timeliness",
    "Listening",
    "Curiosity",
    "Project Management",
  ];

  const careerJourney = [
    { year: "2024", role: "Junior Programmer at Mineral Alam Abadi Group" },
    {
      year: "2023",
      role: "IT Programmer Internship at Mineral Alam Abadi Group",
    },
    {
      year: "2023",
      role: "Software Engineer (UI/UX) Internship at Ministry of Communication and Information Technology of the Republic of Indonesia",
    },
    {
      year: "2023 - Now",
      role: "Business System Analyst at Codenito",
    },
  ];

  const photos = [Work1, Work2, Work3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="text-gray-300 mb-4">
            I&apos;m a dedicated and adaptable full-stack developer with a
            passion for continuous learning. In my role as a Junior Programmer,
            I navigate both front-end and back-end challenges, always ready to
            embrace new technologies and approaches.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Hard Skills</h3>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Career Journey */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Career Journey</h2>
        <ul className="space-y-4">
          {careerJourney.map(({ year, role }, index) => (
            <li key={index} className="text-gray-300">
              <strong>{year}</strong> - {role}
            </li>
          ))}
        </ul>
      </div>

      {/* Photo Section with Carousel */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Work Photos</h2>
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={photo}
                alt={`Work Photo ${index + 1}`}
                className="w-full h-96 object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default About;
