import React, { useState } from "react";

const Card = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        relative 
        transition-all 
        duration-500 
        ease-in-out 
        rounded-xl 
        shadow-lg 
        overflow-hidden 
        ${isHovered 
          ? "fixed top-0 left-0 w-full h-full bg-white/95 z-50 flex items-center justify-center p-6 md:p-20" 
          : "w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 hover:scale-105"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Normal State */}
      {!isHovered && (
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
          <p className="text-gray-600 line-clamp-3">{description}</p>
        </div>
      )}

      {/* Expanded State */}
      {isHovered && (
        <div className="text-center max-w-4xl mx-auto">
          <button 
            onClick={() => setIsHovered(false)}
            className="absolute top-6 right-6 text-3xl text-gray-500 hover:text-gray-800"
          >
            &times;
          </button>
          
          <h2 className="text-4xl font-bold mb-6 text-gray-900">{title}</h2>
          <p className="text-xl text-gray-700 leading-relaxed">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
