import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
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
      <div className="relative z-10 py-20 text-center">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hey, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
            Khaled
          </span>
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Full Stack Developer & Creative Coder
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:shadow-lg transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Hero;
