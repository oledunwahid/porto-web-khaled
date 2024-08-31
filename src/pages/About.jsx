import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "AWS",
  ];

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
            I'm a passionate full-stack developer with a love for creating
            elegant, efficient, and user-friendly web applications. With [X]
            years of experience in the industry, I've had the opportunity to
            work on a wide range of projects, from small business websites to
            large-scale enterprise applications.
          </p>
          <p className="text-gray-300">
            When I'm not coding, you can find me [Your hobbies or interests]. I
            believe in continuous learning and am always excited to take on new
            challenges in the ever-evolving world of web development.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
