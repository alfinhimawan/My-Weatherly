import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400 text-white p-6 mt-8 text-center rounded-tl-lg rounded-tr-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
    >
      <p className="text-lg font-medium">
        &copy; 2025 <span className="font-extrabold">MyWeatherly</span>. All
        Rights Reserved.
      </p>
      <div className="mt-4">
        <a
          href="/privacy"
          className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105"
        >
          Privacy Policy
        </a>
        <span className="mx-4">|</span>
        <a
          href="/terms"
          className="text-white hover:text-yellow-300 transition duration-300 transform hover:scale-105"
        >
          Terms of Service
        </a>
      </div>
    </motion.footer>
  );
}

export default Footer;
