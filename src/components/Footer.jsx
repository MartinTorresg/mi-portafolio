import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-500 p-4 md:p-6 text-center mt-8 md:mt-16">
      <p className="text-sm md:text-base">&copy; 2024 Martin Torres. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-3 md:space-x-4">
        <a
          href="https://github.com/MartinTorresg"
          className="text-purple-400 hover:text-purple-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/martin-torres-edc/"
          className="text-purple-400 hover:text-purple-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
