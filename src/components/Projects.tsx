
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Kitty Party App',
      subtitle: 'Final Year Project',
      description: 'A comprehensive Kitty Party Management Application built with React Native and C# backend, featuring multiple committee types and secure financial management.',
      technologies: ['React Native', 'C#', 'MS SQL', 'API Development'],
      features: [
        'Cross-platform functionality with React Native frontend',
        'APIs for multiple committee types (random, sequential, bidding-based)',
        'Secure data handling and real-time transaction tracking',
        'Optimized architecture for complex financial calculations',
        'User-friendly interfaces for seamless experience'
      ],
      award: 'Certificate of Excellence'
    },
    {
      title: 'Moob Monitoring',
      subtitle: 'Crowd Safety Application',
      description: 'An intelligent crowd monitoring application using React and Django, enhancing public safety through real-time crowd detection and counting.',
      technologies: ['React', 'Django', 'Machine Learning', 'Computer Vision'],
      features: [
        'Real-time crowd counts for enhanced public safety',
        'Machine learning models for accurate individual detection',
        'Reliable data management and intuitive user interface',
        'Collaboration with data scientists for performance optimization',
        'Scalable architecture for large-scale deployment'
      ]
    },
    {
      title: 'SaaS Based CRM',
      subtitle: 'Customer Relationship Management Platform',
      description: 'A comprehensive CRM platform built with MERN stack, featuring multi-tenant SaaS architecture and advanced business management tools.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
      features: [
        'Multi-tenant SaaS architecture for scalable business use',
        'Lead tracking, task management, and user role management',
        'Analytics dashboards and activity logging',
        'JWT-based authentication and role-based access control',
        'Email notifications and streamlined communication',
        'Cloud deployment with CI/CD pipelines'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8">
                {project.award && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      🏆 {project.award}
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{project.subtitle}</p>
                <p className="text-slate-700 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
