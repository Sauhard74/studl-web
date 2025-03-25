import React from "react";
import { IoCalendarNumber } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-black text-white">
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <path d="M12 13V2l8 4-8 4" />
          <path d="M12 13v9l8-4-8-4" />
          <path d="M12 13 4 9l8-4" />
          <path d="M12 13l-8 4 8 4" />
        </svg>
      
        
      </div>

      {/* Right Side - Icons Calender + Profile */}
      <div className="flex items-center space-x-4">
        <IoCalendarNumber 
          className="text-2xl cursor-pointer hover:text-blue-300 transition-colors" 
          title="Calendar"
        />
        <CgProfile 
          className="text-2xl cursor-pointer hover:text-blue-300 transition-colors" 
          title="Profile"
        />
      </div>
    </div>
  );
};

export default NavBar;