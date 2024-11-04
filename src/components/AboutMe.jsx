import React from 'react';
import { FaPlane, FaGamepad, FaGuitar } from 'react-icons/fa';
import illustration from '../assets/web-developer2.svg';
import Skill from './Skill';

const AboutMe = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-10 mt-16">
      <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-8 md:space-y-0 w-full">
        
        {/* Ilustración */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img src={illustration} alt="Developer Illustration" className="w-full max-w-xs md:max-w-sm mx-auto" />
        </div>

        {/* Texto de Introducción */}
        <div className="w-full md:w-2/3 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Know Who I'M</h1>
          <p className="text-base md:text-lg text-gray-400">
            Hi everyone, I am <span className="text-primary font-bold">Martin Torres</span> from <span className="text-primary font-bold">Viña Del Mar, Chile</span>.
          </p>
          <p className="text-base md:text-lg text-gray-400">
            I am currently seeking my next career opportunity as a software developer.
          </p>
          <p className="text-base md:text-lg text-gray-400">
            Apart from coding, some other activities that I love to do!
          </p>
          <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2 text-primary">
              <FaPlane size={24} /> <span>Travelling</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <FaGamepad size={24} /> <span>Gaming</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <FaGuitar size={24} /> <span>Playing Guitar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Componente de Habilidades */}
      <div className="mt-16 w-full">
        <Skill />
      </div>
    </section>
  );
};

export default AboutMe;
