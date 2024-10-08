import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "GitHub", path: "https://github.com/oledunwahid", external: true },
    {
      name: "LinkedIn",
      path: "https://linkedin.com/in/khaled-makkawirelang-a29174236",
      external: true,
    },
  ];

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className="fixed w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          KM
        </Link>
        <motion.button
          className="text-white text-3xl z-50"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 right-0 bottom-0 w-64 bg-gray-900 text-white p-8 flex flex-col justify-between"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <ul className="flex flex-col space-y-6 mt-16">
              {menuItems.map(({ name, path, external }) => (
                <motion.li key={name} variants={itemVariants}>
                  {external ? (
                    <a
                      href={path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl transition duration-300 relative overflow-hidden block"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        className="relative z-10 block"
                        whileHover={{
                          color: "#2196f3",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {name}
                      </motion.span>
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{
                          scaleX: 1,
                          transition: { duration: 0.2 },
                        }}
                      />
                    </a>
                  ) : (
                    <Link
                      to={path}
                      className="text-2xl transition duration-300 relative overflow-hidden block"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        className="relative z-10 block"
                        whileHover={{
                          color: "#2196f3",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {name}
                      </motion.span>
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{
                          scaleX: 1,
                          transition: { duration: 0.2 },
                        }}
                      />
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 text-center mb-4">
              <p className="text-sm text-gray-400">
                &copy; 2024. All rights reserved.
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Topbar;
