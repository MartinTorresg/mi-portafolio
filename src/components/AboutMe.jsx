import React from 'react';
import { FaPlane, FaGamepad, FaGuitar } from 'react-icons/fa';
import illustration from '../assets/web-developer2.svg';
import Skill from './Skill';

const AboutMe = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-10 mt-16">
      <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-8 md:space-y-0">
        
        <div className="md:w-1/3">
          <img src={illustration} alt="Developer Illustration" className="w-full max-w-sm mx-auto" />
        </div>

        <div className="md:w-2/3 space-y-4">
          <h1 className="text-4xl font-bold text-white">Know Who I'M</h1>
          <p className="text-lg text-gray-400">
            Hi everyone, I am <span className="text-primary font-bold">Martin Torres</span> from <span className="text-primary font-bold">Viña Del Mar, Chile</span>.
          </p>
          <p className="text-lg text-gray-400">
            I am currently seeking my next career opportunity as a software developer.
          </p>
          <p className="text-lg text-gray-400">
            Apart from coding, some other activities that I love to do!
          </p>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2 text-primary">
              <FaPlane /> <span>Travelling</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <FaGamepad /> <span>Gaming</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <FaGuitar /> <span>Playing Guitar</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 w-full">
        <Skill />
      </div>
    </section>
  );
};

export default AboutMe;
