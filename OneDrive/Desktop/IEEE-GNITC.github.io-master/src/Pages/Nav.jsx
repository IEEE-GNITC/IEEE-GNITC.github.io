import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react"; // You can use any icon library or SVG
import logo from "../assets/logo.jpg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 w-full z-50 bg-[#0f172a] border-b border-gray-700">
      <div className="flex items-center justify-between px-4 py-3 md:px-10 md:h-20 mr-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <ScrollLink to="home" smooth={true} duration={500}>
            <img
              src={logo}
              alt="Gnitc"
              className="h-12 w-auto rounded-xl cursor-pointer"
            />
          </ScrollLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-slate-200 font-medium items-center">
          <ScrollLink to="aboutus" smooth={true} duration={500} className="cursor-pointer">About Us</ScrollLink>
          <ScrollLink to="societies" smooth={true} duration={500} className="cursor-pointer">Societies</ScrollLink>
          <ScrollLink to="events" smooth={true} duration={500} className="cursor-pointer">Events</ScrollLink>
          <ScrollLink to="TopLeadership" smooth={true} duration={500} className="cursor-pointer">Top Leadership</ScrollLink>
          <ScrollLink to="advisors" smooth={true} duration={500} className="cursor-pointer">Faculty Advisors</ScrollLink>
          <ScrollLink to="team" smooth={true} duration={500} className="cursor-pointer">Our Team</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</ScrollLink>
          <a href="https://hackarena.ieeegnitc.org/" className="cursor-pointer">HACKARENA</a>
          <a href="https://www.ieee.org/" className="cursor-pointer">IEEE.org</a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center text-white">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] px-4 pb-4 text-slate-200 space-y-4 text-base font-medium">
          <ScrollLink to="aboutus" smooth={true} duration={500} className="block cursor-pointer" onClick={toggleMenu}>About Us</ScrollLink>
          <ScrollLink to="societies" smooth={true} duration={500} className="block cursor-pointer" onClick={toggleMenu}>Societies</ScrollLink>
          <ScrollLink to="events" smooth={true} duration={500} className="block cursor-pointer" onClick={toggleMenu}>Events</ScrollLink>
          <ScrollLink to="TopLeadership" smooth={true} duration={500} className="block cursor-pointer" onClick={toggleMenu}>Top Leadership</ScrollLink>
          <ScrollLink to="advisors" smooth={true} duration={500} className="block cursor-pointer" onClick={toggleMenu}>Faculty Advisors</ScrollLink>
          <ScrollLink to="team" smooth={true} duration={500} className="block cursor-pointer" onClick={toggleMenu}>Our Team</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="block cursor-pointer" onClick={toggleMenu}>Contact</ScrollLink>
          <a href="https://hackarena.ieeegnitc.org/" className="block cursor-pointer">HACKARENA</a>
          <a href="https://www.ieee.org/" className="block cursor-pointer">IEEE.org</a>
        </div>
      )}
    </div>
  );
}
