import React from 'react';
import { motion } from 'framer-motion';
import peluqueriaImg from '../assets/peluqueria.png';
import pizzeriaImg from '../assets/pizzeria.png';

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col items-center text-center px-4 py-10 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-500 mb-4">My Recent Works</h2>
      <p className="text-base sm:text-lg text-gray-300 mb-8">Here are a few projects I've worked on recently.</p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 w-full max-w-4xl">
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg border border-purple-500">
          <img src={peluqueriaImg} alt="Hair Salon Management System" className="rounded mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Hair Salon Management System</h3>
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            A comprehensive desktop application for managing a hair salon's daily operations, built with <span className="text-primary font-bold">Electron</span> and <span className="text-primary font-bold">React</span>, styled using <span className="text-primary font-bold">Tailwind CSS</span>.
          </p>
          <a href="https://github.com/MartinTorresg/peluqueria" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
            GitHub
          </a>
        </div>

        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg border border-purple-500">
          <img src={pizzeriaImg} alt="Pizzeria Management System" className="rounded mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Pizzeria Management System</h3>
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            A robust desktop solution for managing a pizzeria's workflow, developed with <span className="text-primary font-bold">Electron</span> and enhanced with <span className="text-primary font-bold">React</span> and <span className="text-primary font-bold">Tailwind CSS</span>.
          </p>
          <a href="https://github.com/MartinTorresg/pizzeria-electron" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
            GitHub
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
