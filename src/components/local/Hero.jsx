import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/image/profile-khaled.jpeg";

const Hero = () => {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleExplore = () => {
    navigate("/projects");
  };

  const handleOpenCV = () => {
    navigate("/cv");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0">
        {/* Animated background shapes */}
        {["bg-pink-400", "bg-blue-400", "bg-green-400", "bg-yellow-400"].map(
          (color, index) => (
            <motion.div
              key={index}
              className={`absolute ${color} rounded-full mix-blend-multiply filter blur-xl opacity-70`}
              style={{
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: Math.random() * 400 - 200,
                y: Math.random() * 400 - 200,
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          )
        )}
      </div>
      <div className="relative z-10 text-center mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src={profile}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
          />
        </motion.div>
        <motion.h1
          className="text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hey, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-200">
            Khaled Makkawirelang
          </span>
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Full Stack Developer
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          style={{
            perspective: 1000,
          }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-violet-500 text-white font-bold lg:py-3 py-3 px-1 m-3 lg:px-8 rounded-full text-lg hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              x.set(e.clientX - rect.left - rect.width / 2);
              y.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
            onClick={handleExplore}
          >
            Explore My Work
          </motion.button>
          <motion.button
            className="bg-white text-blue-500 font-bold lg:py-3 lg:px-8 py-3 px-8 rounded-full m-3 text-lg hover:shadow-lg transition duration-300 "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              x.set(e.clientX - rect.left - rect.width / 2);
              y.set(e.clientY - rect.top - rect.height / 2);
            }}
            onMouseLeave={() => {
              x.set(0);
              y.set(0);
            }}
            onClick={handleOpenCV}
          >
            Open CV
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
