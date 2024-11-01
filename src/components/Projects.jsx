import React from 'react';
import { motion } from 'framer-motion';
import peluqueriaImg from '../assets/peluqueria.png';
import pizzeriaImg from '../assets/pizzeria.png';

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="container mx-auto py-10 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center">Proyectos</h2>
      <div className="mt-6 space-y-6">
        <div className="bg-gray-100 p-4 rounded shadow flex flex-col md:flex-row">
          <img src={peluqueriaImg} alt="Sistema de Gestión de Peluquería" className="w-full md:w-1/3 rounded mb-4 md:mb-0 md:mr-4" />
          <div>
            <h3 className="text-2xl font-semibold">Sistema de Gestión de Peluquería</h3>
            <p className="mt-2">Una aplicación para la gestión interna de una peluquería, desarrollada con Electron, React y TailwindCSS.</p>
            <a href="https://github.com/MartinTorresg/peluqueria" className="text-blue-500 mt-2 inline-block">Ver en GitHub</a>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded shadow flex flex-col md:flex-row">
          <img src={pizzeriaImg} alt="Sistema de Gestión de Pizzería" className="w-full md:w-1/3 rounded mb-4 md:mb-0 md:mr-4" />
          <div>
            <h3 className="text-2xl font-semibold">Sistema de Gestión de Pizzería</h3>
            <p className="mt-2">Aplicación de escritorio para la gestión de una pizzería, construida con Electron y otras tecnologías web.</p>
            <a href="https://github.com/MartinTorresg/pizzeria-electron" className="text-blue-500 mt-2 inline-block">Ver en GitHub</a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
