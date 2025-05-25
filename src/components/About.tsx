
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a passionate MERN Stack Developer with expertise in building responsive, scalable, and high-performance 
              web applications. My journey in full-stack development has equipped me with strong skills in MongoDB, 
              Express.js, React.js, and Node.js.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I have hands-on experience in database management, API integration, and creating user-friendly interfaces. 
              I'm always eager to learn new technologies and contribute to innovative teams that push the boundaries of 
              modern web development.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Currently working on SaaS-based CRM platforms and Hospital Management Systems, I continuously expand my 
              expertise in modern JavaScript technologies and best practices in software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
