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
    <div id="societies" className="px-4 py-16 md:px-20 text-white">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white relative inline-block pb-2 animate-pulse">
          <FaLayerGroup className="inline-block mr-3 mb-1 text-pink-400" />
          Our Societies
          <span
            className="block h-1 w-24 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full mt-2 mx-auto"
            aria-hidden="true"
          />
        </h2>
        <p className="text-gray-300 mt-4 text-sm md:text-base font-light">
          Explore the diverse technical societies we are proud to represent.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
        {societies.map((society, index) => (
          <div
            key={index}
            className="w-72 h-72 bg-white/5 backdrop-blur-lg rounded-3xl border border-transparent shadow-lg flex flex-col items-center justify-center text-center p-6
              transition-transform duration-300 ease-in-out
              hover:scale-105 hover:shadow-[0_15px_30px_rgba(255,105,180,0.4)]
              hover:border-pink-400"
            aria-label={society.name}
          >
            <img
              src={society.img}
              alt={society.name}
              className="w-32 h-32 object-contain rounded-full mb-5 drop-shadow-md"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-white tracking-wide">{society.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Societies;
