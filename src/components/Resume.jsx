import React from 'react';
import { FaDownload } from 'react-icons/fa';
import profileImage from '../assets/imagen-perfil.jpeg';

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-10 min-h-screen flex flex-col items-center" style={{ marginTop: '5rem' }}>
      <a
        href="/CVMartinTorresENG.pdf"
        download
        className="bg-blue-500 text-white px-4 py-2 rounded mb-8 inline-flex items-center"
      >
        <FaDownload className="mr-2" /> Download CV
      </a>

      <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-700 p-4 rounded-lg text-center md:text-left md:w-1/3">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-32 h-32 mx-auto md:mx-0 md:mb-4"
            />
            <h3 className="text-3xl font-semibold mt-4">Martin Torres Gomez</h3>
            <p className="text-xl text-purple-400">React Developer</p>
          </div>

          <div className="md:w-2/3 md:pl-6 mt-6 md:mt-0">
            <h2 className="text-5xl font-bold text-gray-200">Martin Torres Gomez</h2>
            <p className="text-gray-400">Email: mart.torresg@duocuc.cl | Phone: +56 9 7948 5378 | <a href="https://martintorresg.github.io/mi-portafolio" className="text-purple-400">Portfolio</a></p>
            <div className="text-gray-300 mt-4">
              <h4 className="text-lg font-semibold text-purple-500">Summary</h4>
              <p>
                I am a Computer Science Engineer graduated in 2024 from Duoc UC, currently working as a Full-Stack Developer. Experienced in developing technological solutions using React, Node.js, HTML, CSS, and SQL in both corporate and freelance projects. Passionate about technology and building efficient and scalable solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-purple-400 mb-4">Technical Skills</h4>
            <ul className="text-gray-300 space-y-2">
              <li>Web Development: JavaScript, HTML, Python, Java, Tailwind CSS, PHP</li>
              <li>Frameworks: React, Django, Oracle SQL, Node.js, jQuery, Bootstrap, Astro, Angular</li>
              <li>Database Management: SQL, PL/SQL, MongoDB</li>
              <li>Data Analysis: BPM, Data Modeler, Big Data, Looker Studio</li>
              <li>Collaboration Tools: Slack, Trello, Git</li>
              <li>Languages: Spanish (Native), English (Advanced, TOEIC C1)</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-purple-500">Work Experience</h4>

            <div className="mt-6">
              <h5 className="text-md font-bold text-white">Technical Support / Data Analyst</h5>
              <p className="text-sm text-gray-400">Conecta 360 | Remote | August 2024 – September 2024</p>
              <ul className="text-gray-300 mt-2 list-disc list-inside">
                <li>Provided technical support to over 100 users, resolving 95% of issues on the first attempt.</li>
                <li>Performed data analysis with Looker Studio, reducing data loading errors by 30%.</li>
                <li>Created performance reports, improving employee productivity by 15%.</li>
                <li>Collaborated to optimize system functions, reducing downtime by 10%.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h5 className="text-md font-bold text-white">Full-Stack Developer (Junior)</h5>
              <p className="text-sm text-gray-400">Contraplano | Reñaca, Viña del Mar | December 2023 – March 2024</p>
              <ul className="text-gray-300 mt-2 list-disc list-inside">
                <li>Developed responsive interfaces with React, HTML, and CSS, improving load time by 20%.</li>
                <li>Maintained backend with Node.js, ensuring continuous availability.</li>
                <li>Managed SQL and PL/SQL databases, achieving 100% uptime for critical data services.</li>
                <li>Implemented WordPress updates, increasing website functionality by 25%.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h5 className="text-md font-bold text-white">Web Developer (Full-Stack)</h5>
              <p className="text-sm text-gray-400">Freelance | Remote | August 2023 – Present</p>
              <ul className="text-gray-300 mt-2 list-disc list-inside">
                <li>Designed and developed websites for over 5 clients, achieving a 100% satisfaction rate.</li>
                <li>Applied React, Tailwind CSS, and Node.js for modern, scalable web solutions.</li>
                <li>Managed projects end-to-end, consistently meeting deadlines and improving client retention by 30%.</li>
              </ul>
            </div>

            <div className="mt-6">
              <h5 className="text-md font-bold text-white">Full-Stack Developer (Trainee)</h5>
              <p className="text-sm text-gray-400">Centro Cultural Reñaca | Remote | January 2022 – May 2022</p>
              <ul className="text-gray-300 mt-2 list-disc list-inside">
                <li>Developed and optimized front-end with HTML and JavaScript, reducing load times by 40%.</li>
                <li>Integrated backend systems with front-end, improving user interaction and reducing errors by 15%.</li>
                <li>Worked closely with the IT team to enhance website functionality, increasing user satisfaction.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
