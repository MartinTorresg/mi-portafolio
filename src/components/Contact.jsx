import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto py-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p className="text-lg mb-4">Puedes contactarme a través de los siguientes medios:</p>
      <div className="flex justify-center space-x-6 mb-6">
        <a href="mailto:mart.torresg@duocuc.cl" className="text-blue-500 hover:text-blue-600">
          <FaEnvelope size={30} />
          <p className="mt-2">mart.torresg@duocuc.cl</p>
        </a>
        <a href="https://www.linkedin.com/in/martin-torres-edc/" className="text-blue-500 hover:text-blue-600">
          <FaLinkedin size={30} />
          <p className="mt-2">LinkedIn</p>
        </a>
        <a href="https://github.com/MartinTorresg" className="text-blue-500 hover:text-blue-600">
          <FaGithub size={30} />
          <p className="mt-2">GitHub</p>
        </a>
      </div>
      <a
        href="/CV_Martin_Torres_ESP.pdf"
        download
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Descargar CV
      </a>
    </div>
  );
};

export default Contact;
