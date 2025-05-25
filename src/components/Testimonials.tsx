
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sohaib Ahmed",
      role: "Project Manager at Smart Solutions",
      company: "Smart Solutions",
      image: "data:image/jpeg;base64,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",
      content: "Umer is an exceptional MERN stack developer. His attention to detail and ability to deliver scalable solutions on time made our CRM project a huge success. His problem-solving skills are outstanding.",
      rating: 5
    },
    {
      name: "Saqib Haroon",
      role: "Senior Developer",
      company: "Click Masters",
      image: "https://png.pngtree.com/png-clipart/20230529/original/pngtree-businessman-logo-png-image_9173394.png",
      content: "Working with Umer on the Hospital Management System was a pleasure. He brings innovative ideas and writes clean, maintainable code. His expertise in React and Node.js is impressive.",
      rating: 5
    },
    {
      name: "Hania Malik",
      role: "Tech Lead",
      company: "InnovateTech",
      image: "https://img.pikbest.com/png-images/20241009/professional-corporate-woman-icon-_10941890.png!bw700",
      content: "Umer's work on our React Native application exceeded expectations. He delivered a robust, user-friendly solution with excellent performance optimization. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what colleagues and clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <Quote className="text-blue-500 opacity-50" size={24} />
                <div className="flex ml-auto">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
              
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
