
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'MERN STACK DEVELOPER',
      company: 'Click Masters',
      duration: '20/09/2024 – Present (6 months)',
      location: '',
      type: 'Current Position',
      highlights: [
        'Developing a SaaS-based CRM platform from scratch using the MERN stack, focusing on modular architecture and scalable backend services',
        'Implementing key CRM features such as user management, lead tracking, task automation, email integration, and activity dashboards',
        'Contributing to the Hospital Management System, designing modules for patient records, doctor scheduling, billing, pharmacy, and appointment booking',
        'Collaborating closely with UI/UX designers and QA testers to ensure responsive, user-friendly interface and seamless performance',
        'Working with MongoDB, MySQL, and PostgreSQL for data handling and performance optimization',
        'Managing API integrations, backend logic, and deploying apps on cloud platforms using CI/CD pipelines'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Smart Solutions',
      duration: '01/2024 – 09/2024 (8 months)',
      location: '',
      type: 'Full-time',
      highlights: [
        'Built and maintained full-stack web applications using the MERN stack, focusing on real-time data processing and user interactivity',
        'Developed admin panels with dynamic dashboards, data visualization (Chart.js), and CRUD operations',
        'Integrated third-party APIs (payment gateways, Google Maps) and implemented JWT-based authentication',
        'Improved application performance by optimizing MongoDB queries and implementing caching with Redis',
        'Assisted in migrating legacy systems to microservices architecture for better scalability'
      ]
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Smart Solutions',
      duration: '9/2023 – 12/2023 (3 months)',
      location: '',
      type: 'Internship',
      highlights: [
        'Assisted in developing React.js frontends with reusable components and state management (Redux)',
        'Worked on Node.js/Express.js backend APIs and MongoDB schema design',
        'Debugged and tested applications using Postman and ensuring code quality',
        'Gained exposure to Agile methodologies and version control (Git/GitHub)'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-12 last:mb-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-30"></div>
              )}
              
              <div className="bg-white rounded-2xl shadow-lg p-8 ml-16 hover:shadow-xl transition-shadow duration-300">
                {/* Timeline dot */}
                <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    exp.type === 'Current Position' ? 'bg-green-100 text-green-800' :
                    exp.type === 'Full-time' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {exp.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.title}</h3>
                <h4 className="text-xl font-semibold text-blue-600 mb-4">{exp.company}</h4>
                
                <div className="flex flex-wrap gap-4 mb-6 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  )}
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
