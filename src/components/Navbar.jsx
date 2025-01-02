import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      className="bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400 text-white p-4 shadow-md"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">MyWeatherly</h1>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <a
              href="/"
              className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-200 via-blue-100 to-teal-300 text-black p-4 mt-4 rounded-lg shadow-md">
          <ul className="space-y-4 text-lg">
            <li>
              <a
                href="/"
                className="block hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
