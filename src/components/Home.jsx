import React from 'react';
import 'animate.css';
import { motion } from 'framer-motion';

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection && projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-center py-10 mt-16">
      <h1 className="text-4xl font-bold animate__animated animate__fadeInDown">¡Hola! Soy Martin Torres</h1>
      <p className="mt-4 text-lg animate__animated animate__fadeInUp animate__delay-1s">Desarrollador Full-Stack apasionado por crear soluciones eficientes.</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToProjects}
        className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ver Proyectos
      </motion.button>
    </div>
  );
}

export default Home;
