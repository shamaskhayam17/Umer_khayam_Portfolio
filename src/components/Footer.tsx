import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Umer Khayam
          </h3>
          <p className="text-slate-400 mb-6">
            MERN Stack Developer passionate about creating innovative web solutions
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:umerkhayam1717@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/umer-khayam-3369a8270"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/UmerKhayam17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              GitHub
            </a>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 text-sm">
              © 2024 Umer Khayam. All rights reserved. Built with React and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
