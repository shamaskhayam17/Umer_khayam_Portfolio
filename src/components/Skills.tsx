import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React.js',
        'React Native',
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'Tailwind',
        'Material UI',
        'Flux',
        'Redux'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: '🎨'
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'Django',
        '.NET',
        'REST APIs'
      ],
      color: 'from-green-500 to-emerald-500',
      icon: '⚙️'
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'],
      color: 'from-purple-500 to-pink-500',
      icon: '🗄️'
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'C++', 'C#'],
      color: 'from-orange-500 to-red-500',
      icon: '💻'
    },
    {
      title: 'DevOps & Deployment',
      skills: ['Netlify', 'Vercel', 'Render', 'Heroku'],
      color: 'from-indigo-500 to-blue-500',
      icon: '🚀'
    },
    {
      title: 'Version Control',
      skills: ['Git', 'GitHub'],
      color: 'from-gray-600 to-gray-800',
      icon: '🔄'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web and mobile applications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 cursor-default transform hover:scale-105"
                    style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className={`mt-4 h-1 bg-gradient-to-r ${category.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
