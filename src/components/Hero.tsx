
import React from 'react';
import { Mail, Phone, MapPin, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  UK
                </span>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-lg animate-pulse"></div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Umer Khayam
            </span>
          </h1>
          
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg sm:text-xl font-semibold mb-6 shadow-lg">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            MERN Stack Developer
          </div>
          
          <p className="text-lg sm:text-xl text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Detail-oriented and enthusiastic MERN Stack Developer with a strong foundation in full-stack web development, 
            database management, and data-driven applications. Passionate about crafting clean code, integrating APIs, 
            and delivering user-friendly interfaces.
          </p>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <Mail className="text-blue-600 mx-auto mb-2" size={24} />
              <p className="text-sm text-slate-600 font-medium">umerkhayam1717@gmail.com</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <Phone className="text-blue-600 mx-auto mb-2" size={24} />
              <p className="text-sm text-slate-600 font-medium">03165511251</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <MapPin className="text-blue-600 mx-auto mb-2" size={24} />
              <p className="text-sm text-slate-600 font-medium">Alipur Islamabad</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <span>View My Work</span>
              <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full font-semibold hover:bg-white border-2 border-blue-600/20 hover:border-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
