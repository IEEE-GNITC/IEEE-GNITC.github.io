import React from 'react';
import computer_society from '../assets/computer_society.png';
import communication_society from '../assets/communication_society.png';
import circuits_and_systems_society from '../assets/circuits_and_systems_society.png';
import ieeecis from "../assets/ieeecis.jpg";
import ieeepes from "../assets/ieeepes.jpg";
import ieeesmc from "../assets/ieeesmc.jpg";
import { FaLayerGroup } from 'react-icons/fa';

function Societies() {
  const societies = [
    { name: 'Computer Society', img: computer_society },
    { name: 'Circuits and Systems', img: circuits_and_systems_society },
    { name: 'Communication Society', img: communication_society },
    { name: 'IEEE CIS', img: ieeecis },
    { name: 'IEEE PES', img: ieeepes },
    { name: 'IEEE SMC', img: ieeesmc },
  ];

  return (
    <div id="societies" className="px-4 py-16 md:px-20 bg-transparent text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white animate-pulse drop-shadow-lg">
          <FaLayerGroup className="inline-block mr-2 mb-1 text-pink-400" /> Our Societies
        </h2>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto text-sm md:text-base">
          Explore the diverse technical societies we are proud to represent.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {societies.map((society, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md border border-slate-500 hover:scale-[1.05] transition-transform duration-300 hover:shadow-lg w-64 h-64 flex flex-col items-center justify-center text-center"
          >
            <img
              src={society.img}
              alt={society.name}
              className="w-28 h-28 sm:w-32 sm:h-32 object-contain rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-white">{society.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Societies;
