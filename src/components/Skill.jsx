import React from 'react';
import { FaJs, FaHtml5, FaPython, FaJava, FaNodeJs, FaReact, FaPhp, FaAngular, FaDatabase, FaSlack, FaGit } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiJquery, SiBootstrap, SiAstro, SiMongodb, SiOracle, SiTableau, SiTrello } from 'react-icons/si';

const Skills = () => {
  return (
    <div id="skills" className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center">Technical Skills and Software Proficiency</h2>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-center text-primary mb-4">Web Development</h3>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="m-4 text-center">
            <FaJs size={50} className="mx-auto text-yellow-500" />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="m-4 text-center">
            <FaHtml5 size={50} className="mx-auto text-orange-500" />
            <p className="mt-2">HTML</p>
          </div>
          <div className="m-4 text-center">
            <FaPython size={50} className="mx-auto text-blue-500" />
            <p className="mt-2">Python</p>
          </div>
          <div className="m-4 text-center">
            <FaJava size={50} className="mx-auto text-red-500" />
            <p className="mt-2">Java</p>
          </div>
          <div className="m-4 text-center">
            <SiTailwindcss size={50} className="mx-auto text-blue-400" />
            <p className="mt-2">Tailwind CSS</p>
          </div>
          <div className="m-4 text-center">
            <FaPhp size={50} className="mx-auto text-indigo-500" />
            <p className="mt-2">PHP</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-center text-primary mb-4">Frameworks</h3>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="m-4 text-center">
            <FaReact size={50} className="mx-auto text-blue-500" />
            <p className="mt-2">React</p>
          </div>
          <div className="m-4 text-center">
            <SiDjango size={50} className="mx-auto text-green-800" />
            <p className="mt-2">Django</p>
          </div>
          <div className="m-4 text-center">
            <SiOracle size={50} className="mx-auto text-red-600" />
            <p className="mt-2">Oracle SQL</p>
          </div>
          <div className="m-4 text-center">
            <FaNodeJs size={50} className="mx-auto text-green-500" />
            <p className="mt-2">Node.js</p>
          </div>
          <div className="m-4 text-center">
            <SiJquery size={50} className="mx-auto text-blue-600" />
            <p className="mt-2">jQuery</p>
          </div>
          <div className="m-4 text-center">
            <SiBootstrap size={50} className="mx-auto text-purple-500" />
            <p className="mt-2">Bootstrap</p>
          </div>
          <div className="m-4 text-center">
            <SiAstro size={50} className="mx-auto text-orange-500" />
            <p className="mt-2">Astro</p>
          </div>
          <div className="m-4 text-center">
            <FaAngular size={50} className="mx-auto text-red-500" />
            <p className="mt-2">Angular</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-center text-primary mb-4">Database Management</h3>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="m-4 text-center">
            <FaDatabase size={50} className="mx-auto text-indigo-500" />
            <p className="mt-2">SQL</p>
          </div>
          <div className="m-4 text-center">
            <SiOracle size={50} className="mx-auto text-orange-500" />
            <p className="mt-2">PL/SQL</p>
          </div>
          <div className="m-4 text-center">
            <SiMongodb size={50} className="mx-auto text-green-500" />
            <p className="mt-2">MongoDB</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-center text-primary mb-4">Data Analysis</h3>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="m-4 text-center">
            <FaDatabase size={50} className="mx-auto text-blue-500" />
            <p className="mt-2">BPM</p>
          </div>
          <div className="m-4 text-center">
            <SiOracle size={50} className="mx-auto text-orange-500" />
            <p className="mt-2">Data Modeler</p>
          </div>
          <div className="m-4 text-center">
            <FaDatabase size={50} className="mx-auto text-purple-500" />
            <p className="mt-2">Big Data</p>
          </div>
          <div className="m-4 text-center">
            <SiTableau size={50} className="mx-auto text-blue-400" />
            <p className="mt-2">Looker Studio</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-center text-primary mb-4">Collaboration Tools</h3>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="m-4 text-center">
            <FaSlack size={50} className="mx-auto text-pink-500" />
            <p className="mt-2">Slack</p>
          </div>
          <div className="m-4 text-center">
            <SiTrello size={50} className="mx-auto text-blue-500" />
            <p className="mt-2">Trello</p>
          </div>
          <div className="m-4 text-center">
            <FaGit size={50} className="mx-auto text-orange-500" />
            <p className="mt-2">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
