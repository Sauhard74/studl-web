import React, { useState } from 'react';
import NavBar from "./NavBar";
import Card from "./Card";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 transition-all duration-300">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row p-6 md:p-10 gap-6 max-w-7xl mx-auto">
        {/* Left Section: Two Smaller Cards */}
        <div className="flex flex-col gap-6 w-full md:w-2/3">
          <div 
            onMouseEnter={() => setHoveredCard('card1')}
            onMouseLeave={() => setHoveredCard(null)}
            className={`transition-all duration-500 ease-in-out ${
              hoveredCard === 'card1' ? 'w-full md:w-[80%]' : 'w-full'
            }`}
          >
            <Card 
              title="Card 1" 
              description="This is the first card."
              className={`transform transition-all duration-500 ease-in-out ${
                hoveredCard === 'card1' 
                  ? 'scale-105 shadow-2xl' 
                  : 'scale-100 shadow-lg hover:shadow-xl'
              }`}
            />
          </div>
          <div 
            onMouseEnter={() => setHoveredCard('card2')}
            onMouseLeave={() => setHoveredCard(null)}
            className={`transition-all duration-500 ease-in-out ${
              hoveredCard === 'card2' ? 'w-full md:w-[80%]' : 'w-full'
            }`}
          >
            <Card 
              title="Card 2" 
              description="This is the second card."
              className={`transform transition-all duration-500 ease-in-out ${
                hoveredCard === 'card2' 
                  ? 'scale-105 shadow-2xl' 
                  : 'scale-100 shadow-lg hover:shadow-xl'
              }`}
            />
          </div>
        </div>

        {/* Right Section: One Larger Card */}
        <div 
          className={`w-full md:w-1/3 transition-all duration-500 ease-in-out ${
            hoveredCard === 'card3' ? 'w-full md:w-[80%]' : 'w-full md:w-1/3'
          }`}
          onMouseEnter={() => setHoveredCard('card3')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Card 
            title="Card 3" 
            description="This is the larger card on the right."
            className={`transform transition-all duration-500 ease-in-out ${
              hoveredCard === 'card3' 
                ? 'scale-105 shadow-2xl' 
                : 'scale-100 shadow-lg hover:shadow-xl'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;