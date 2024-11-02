import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav 
      className="bg-white/10 backdrop-blur-md text-white p-4 fixed w-full top-0 z-10 h-16 shadow-lg"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-24"></div>

        <div className="flex space-x-6">
          <a href="#/" className="flex items-center space-x-1 hover:text-purple-400">
            <FaHome /> <span>Home</span>
          </a>
          <a href="#/about" className="flex items-center space-x-1 hover:text-purple-400">
            <FaUser /> <span>About Me</span>
          </a>
          <a href="#/projects" className="flex items-center space-x-1 hover:text-purple-400">
            <FaBriefcase /> <span>Projects</span>
          </a>
          <a href="#/resume" className="flex items-center space-x-1 hover:text-purple-400">
            <FaFileAlt /> <span>Resume</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
