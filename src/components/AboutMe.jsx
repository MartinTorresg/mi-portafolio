import React from 'react';
import fotoPerfil from '../assets/imagen-perfil.jpeg';

const AboutMe = () => {
  return (
    <div id="about" className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center">Sobre Mí</h2>
      <div className="flex flex-col md:flex-row items-center mt-6">
        <img src={fotoPerfil} alt="Martin Torres" className="w-48 h-48 rounded-full mx-auto md:mx-0" />
        <div className="md:ml-6 mt-4 md:mt-0 text-justify">
          <p>
            Soy Ingeniero Informático titulado en 2024 por Duoc UC, actualmente trabajando como Desarrollador Full-Stack.
            Tengo experiencia en el desarrollo de soluciones tecnológicas utilizando React, Node.js, HTML, CSS y SQL,
            tanto en proyectos empresariales como freelance.
          </p>
          <p className="mt-4">
            Me apasiona la tecnología y la posibilidad de crear soluciones eficientes y escalables que mejoren la vida de
            las personas. Soy proactivo, curioso y disfruto trabajar en equipo, siempre buscando aplicar buenas prácticas
            de desarrollo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
