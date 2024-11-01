import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiDjango, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <div id="skills" className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center">Habilidades Técnicas</h2>
      <div className="flex flex-wrap justify-center mt-6">
        <div className="m-4 text-center">
          <FaReact size={50} className="mx-auto text-blue-500" />
          <p className="mt-2">React</p>
        </div>
        <div className="m-4 text-center">
          <FaNodeJs size={50} className="mx-auto text-green-500" />
          <p className="mt-2">Node.js</p>
        </div>
        <div className="m-4 text-center">
          <SiJavascript size={50} className="mx-auto text-yellow-500" />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="m-4 text-center">
          <SiTailwindcss size={50} className="mx-auto text-blue-400" />
          <p className="mt-2">Tailwind CSS</p>
        </div>
        <div className="m-4 text-center">
          <FaDatabase size={50} className="mx-auto text-indigo-500" />
          <p className="mt-2">SQL</p>
        </div>
        <div className="m-4 text-center">
          <FaPython size={50} className="mx-auto text-yellow-600" />
          <p className="mt-2">Python</p>
        </div>
        <div className="m-4 text-center">
          <SiDjango size={50} className="mx-auto text-green-800" />
          <p className="mt-2">Django</p>
        </div>
        <div className="m-4 text-center">
          <FaJava size={50} className="mx-auto text-red-600" />
          <p className="mt-2">Java</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
