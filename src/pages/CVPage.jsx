import React from "react";
import { motion } from "framer-motion";
import cvPDF from "/src/assets/file/KHALED MAKKAWIRELANG-CV.pdf";

const CVPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">
        Curriculum Vitae Khaled Makkawirelang
      </h1>
      <div className="flex justify-center">
        <iframe
          src={cvPDF}
          className="w-full h-[800px] border-2 border-gray-300 rounded-lg"
          title="CV PDF Viewer"
        />
      </div>
    </motion.div>
  );
};

export default CVPage;
