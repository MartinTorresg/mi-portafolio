import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10 h-16"
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">Martin Torres</a>
        <div className="flex space-x-4">
          <motion.a
            href="#home"
            className="px-4"
            whileHover={{ scale: 1.1, color: '#3b82f6' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Inicio
          </motion.a>
          <motion.a
            href="#projects"
            className="px-4"
            whileHover={{ scale: 1.1, color: '#3b82f6' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Proyectos
          </motion.a>
          <motion.a
            href="#contact"
            className="px-4"
            whileHover={{ scale: 1.1, color: '#3b82f6' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Contacto
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
