import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; 2024 Khaled. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: FaGithub, link: "https://github.com/oledunwahid" },
              {
                icon: FaLinkedin,
                link: "https://linkedin.com/in/khaled-makkawirelang-a29174236/",
              },
            ].map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-pink-500 transition duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
