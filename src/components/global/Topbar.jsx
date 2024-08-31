import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Topbar = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Khaled
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {["Home", "Projects", "About"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-pink-500 transition duration-300"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Topbar;
