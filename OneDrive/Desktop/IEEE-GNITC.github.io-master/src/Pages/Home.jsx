import React from "react";
import IEEE from "../assets/IEEE.png";

function Home() {
  return (
    <div
      id="home"
      className="h-screen w-full flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <img src={IEEE} alt="IEEE Logo" className="h-24 md:h-40 mb-6" />
        <h1 className="text-white text-2xl md:text-5xl font-serif text-center">
 IEEE GNI
        </h1>
      </div>
    </div>
  );
}

export default Home;
