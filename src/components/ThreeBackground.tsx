
import React from 'react';

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        {/* Animated particles using CSS */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg transform rotate-45 animate-bounce" 
             style={{ animationDuration: '6s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg transform -rotate-12 animate-bounce" 
             style={{ animationDuration: '8s' }} />
      </div>
    </div>
  );
};

export default ThreeBackground;
