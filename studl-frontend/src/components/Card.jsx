import React, { useState } from "react";

const Card = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ease-in-out p-6 shadow-md rounded-xl cursor-pointer overflow-hidden 
        ${isHovered ? "w-full h-screen absolute top-0 left-0 bg-white z-50 p-20" : "w-1/3 h-64 bg-gray-200"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
