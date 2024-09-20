import React from "react";
import chairman from "../assets/TopLeaders/chairman.webp"
import vc from "../assets/TopLeaders/vc.webp"
import md from "../assets/TopLeaders/md.webp"



function TopLeader() {
  const leaders = [
    {
      role: "Chairman",
      name: "SARDAR TAVINDER SINGH KOHLI",
      imgSrc: chairman, // Replace with correct path
    },
    {
      role: "Vice Chairman",
      name: "SARDAR GAGANDEEP SINGH KOHLI",
      imgSrc: vc, // Replace with correct path
    },
    {
      role: "Managing Director",
      name: "DR. H S SAINI",
      imgSrc: md, // Replace with correct path
    },
  ];

  return (
    <div className="p-6 my-10 pb-20 border-b  ">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Top Leadership</h2>
      <div className="flex flex-col md:flex-row justify-around   md:mx-20 items-center gap-8">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="max-w-md p-4 bg-white shadow-md rounded-lg text-center"
          >
            <img
              src= {leader.imgSrc}
              alt={leader.name}
              className=" w-[20rem] mx-auto rounded-md mb-4 object-cover"
            />
            <h3 className="text-2xl p-2 font-semibold text-gray-900 mb-2">
              {leader.role}
            </h3>
            <p className="text-md font-bold text-gray-600">{leader.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopLeader;
