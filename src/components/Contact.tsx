import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'umerkhayam1717@gmail.com',
      href: 'mailto:umerkhayam1717@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '03165511251',
      href: 'tel:03165511251'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Alipur Islamabad',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-700 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.label}</h3>
                  {item.href !== '#' ? (
                    <a
                      href={item.href}
                      className="text-slate-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-slate-600">{item.value}</span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Work Together?</h3>
              <p className="text-slate-700 mb-6">
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:umerkhayam1717@gmail.com"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send Email
                </a>
                <a
                  href="tel:03165511251"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
