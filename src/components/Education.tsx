
import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Bachelor's Degree */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Bachelor of Computer Science</h3>
                <p className="text-xl text-blue-600 font-semibold mb-2">PMAS (Arid Agriculture)</p>
                <p className="text-slate-600 mb-4">Rawalpindi, Pakistan | 07/2020 – 07/2024</p>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-slate-800 mb-3">Major Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'C#', 'HTML, CSS, JavaScript', 'C++', 'DSA', 'OOP'].map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Certificate of Excellence</h3>
                <p className="text-orange-600 font-semibold mb-4">Final Year Project - "Kitty Party App (React Native)"</p>
                <p className="text-slate-700 leading-relaxed">
                  Awarded for outstanding performance in developing a comprehensive Kitty Party Management Application 
                  using React Native and C# with MS SQL backend, demonstrating excellence in cross-platform development 
                  and complex financial system architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
