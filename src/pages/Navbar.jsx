import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import { RiCloseLargeFill } from "react-icons/ri";
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-2 mt-2 bg-white sticky top-0 z-50  border-b shadow-lg bottom-2">
      <div className="flex flex-row justify-between gap-3 items-center">
        <span>
          <img
            src={logo}
            alt="Logo"
            className="max-w-48 p-1 overflow-hidden flex justify-center items-center"
          />
        </span>

        <div className="hidden md:flex text-xl flex-row w-[60%] flex-wrap  p-2 justify-around">
          <ScrollLink
            to="About"
            smooth={true}
            duration={500}
            className="hover:text-red-600 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="Societies"
            smooth={true}
            duration={500}
            className="hover:text-red-600 cursor-pointer"
          >
            Societies
          </ScrollLink>
          <ScrollLink
            to="Events"
            smooth={true}
            duration={500}
            className="hover:text-red-600 cursor-pointer"
          >
            Events
          </ScrollLink>
          <ScrollLink
            to="Leadership"
            smooth={true}
            duration={500}
            className="hover:text-red-600 cursor-pointer"
          >
            Leadership
          </ScrollLink>
          <ScrollLink
            to="Faculty"
            smooth={true}
            duration={500}
            className="hover:text-red-600 cursor-pointer"
          >
            Faculty
          </ScrollLink>
        </div>

        <span className="p-3 rounded-xl bg-sky-700 hover:bg-sky-600 text-white text-xl">
          <ScrollLink
            to="Contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </ScrollLink>
        </span>

        <span onClick={toggleMenu} className="flex cursor-pointer md:hidden">
          <img src={menu} alt="Menu" className="max-w-10" />
        </span>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-20 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-4 border rounded text-white bg-gray-800"
          >
            <RiCloseLargeFill />
          </button>

          <ScrollLink
            to="About"
            smooth={true}
            duration={500}
            className="text-white text-xl m-4 cursor-pointer"
            onClick={toggleMenu}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="Societies"
            smooth={true}
            duration={500}
            className="text-white text-xl m-4 cursor-pointer"
            onClick={toggleMenu}
          >
            Societies
          </ScrollLink>
          <ScrollLink
            to="Events"
            smooth={true}
            duration={500}
            className="text-white text-xl m-4 cursor-pointer"
            onClick={toggleMenu}
          >
            Events
          </ScrollLink>
          <ScrollLink
            to="Leadership"
            smooth={true}
            duration={500}
            className="text-white text-xl m-4 cursor-pointer"
            onClick={toggleMenu}
          >
            Leadership
          </ScrollLink>
          <ScrollLink
            to="Faculty"
            smooth={true}
            duration={500}
            className="text-white text-xl m-4 cursor-pointer"
            onClick={toggleMenu}
          >
            Faculty
          </ScrollLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
