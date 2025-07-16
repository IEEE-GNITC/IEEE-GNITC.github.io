import React from 'react';
import computer_society from '../assets/computer_society.png';
// import women_in_engineering from '../assets/women_in_engineering.png'
import communication_society from '../assets/communication_society.png';
import circuits_and_systems_society from '../assets/circuits_and_systems_society.png';
import ieeecis from "../assets/ieeecis.jpg";
import ieeepes from "../assets/ieeepes.jpg";
import ieeesmc from "../assets/ieeesmc.jpg";

function Societies() {
  return (
    <div id="societies" className="px-4">
      <div className="heading mt-10 text-center text-3xl font-bold text-white mr-6">
        Societies
      </div>

      {/* Responsive Grid for All Logos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 mt-10 mb-16 place-items-center">
        <a href="/#">
          <div className="floatdiv">
            <img
              src={computer_society}
              alt="computer society"
              className="w-36 sm:w-44 md:w-56"
            />
          </div>
        </a>

        <a href="/#">
          <div className="floatdiv">
            <img
              className="rounded-full w-36 sm:w-44 md:w-56"
              src={circuits_and_systems_society}
              alt="circuits and systems society"
            />
          </div>
        </a>

        <a href="/#">
          <div className="floatdiv">
            <img
              src={communication_society}
              alt="communication society"
              className="w-36 sm:w-44 md:w-56"
            />
          </div>
        </a>

        <a href="/#">
          <div className="floatdiv">
            <img
              src={ieeecis}
              alt="ieee cis"
              className="rounded-full w-36 sm:w-44 md:w-56"
            />
          </div>
        </a>

        <a href="/#">
          <div className="floatdiv">
            <img
              className="rounded-full w-36 sm:w-44 md:w-56"
              src={ieeepes}
              alt="ieee pes"
            />
          </div>
        </a>

        <a href="/#">
          <div className="floatdiv">
            <img
              src={ieeesmc}
              alt="ieee smc"
              className="rounded-full w-36 sm:w-44 md:w-56"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Societies;
