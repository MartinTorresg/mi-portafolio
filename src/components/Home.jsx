import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import illustration from '../assets/web-developer.svg';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-10 space-y-16 mt-16"
    >
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <img src={illustration} alt="Developer Illustration" className="w-full max-w-sm mx-auto" />
        </div>

        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-white mb-4">Hi There! 👋</h1>
          <h2 className="text-3xl text-primary font-bold">I'm Martin Torres</h2>
          <h3 className="text-lg text-gray-300">
            <Typewriter
              words={['Full-Stack Developer', 'React Enthusiast', 'Problem Solver']}
              loop={0}
              cursor
              cursorStyle="_"
            />
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
            I'm a passionate <span className="text-primary font-semibold">React Developer</span> with experience building dynamic and scalable web applications. Focused on clean code, performance optimization, and user-friendly designs.
            <br /><br />
            I use <span className="font-semibold text-primary">Node.js, Express, PostgreSQL</span>, and modern frameworks like <span className="text-primary font-semibold">React.js</span> to create robust applications.
          </p>

          <motion.button
            className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold mt-6 shadow-lg transform transition duration-200 hover:scale-105 hover:bg-purple-600"
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate('/projects')}
          >
            View Projects
          </motion.button>
        </div>
      </div>

      <div id="contact" className="w-full py-16 text-center mt-16">
        <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          Feel free to reach out to me through any of the following platforms:
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <a href="mailto:mart.torresg@duocuc.cl" className="text-purple-400 hover:text-purple-500 flex flex-col items-center">
            <FaEnvelope size={36} />
            <span className="mt-2 text-gray-300">mart.torresg@duocuc.cl</span>
          </a>
          <a href="https://www.linkedin.com/in/martin-torres-edc/" className="text-purple-400 hover:text-purple-500 flex flex-col items-center">
            <FaLinkedin size={36} />
            <span className="mt-2 text-gray-300">LinkedIn</span>
          </a>
          <a href="https://github.com/MartinTorresg" className="text-purple-400 hover:text-purple-500 flex flex-col items-center">
            <FaGithub size={36} />
            <span className="mt-2 text-gray-300">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
