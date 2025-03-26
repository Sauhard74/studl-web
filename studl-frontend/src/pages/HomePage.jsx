import React from "react";
import NavBar from "./NavBar";
import Card from "./Card";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex p-10 gap-6">
        {/* Left Section: Two Smaller Cards */}
        <div className="flex flex-col gap-6 w-2/3">
          <Card title="Card 1" description="This is the first card." />
          <Card title="Card 2" description="This is the second card." />
        </div>

        {/* Right Section: One Larger Card */}
        <div className="w-1/3">
          <Card title="Card 3" description="This is the larger card on the right." />
        </div>
      </div>
    </div>
  );
};

export default Home;
