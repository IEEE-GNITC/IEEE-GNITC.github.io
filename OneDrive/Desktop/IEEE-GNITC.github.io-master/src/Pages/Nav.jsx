import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const timeout = setTimeout(() => setLogoVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (target) => {
    if (isHome) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${target}`);
    }
    setIsOpen(false);
  };

  const navItem = (label, target, index = 0) => (
    <span
      onClick={() => handleNavClick(target)}
      className="text-sm font-medium text-center hover:text-blue-400 transition duration-300 opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {label}
    </span>
  );

  return (
    <div className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md border-b border-gray-700 shadow-md">
      <div className="flex items-center justify-between px-4 py-2 md:px-10 md:h-20">
        {/* Logo */}
        <div
          className={`flex items-center transition-all duration-700 ease-out ${
            logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <span onClick={() => handleNavClick("home")}>
            <img
              src={logo}
              alt="Gnitc"
              className="h-14 md:h-20 w-auto rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-110 hover:rotate-1"
            />
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-slate-200 font-medium items-center">
          {navItem("About Us", "aboutus")}
          {navItem("Societies", "societies")}
          {navItem("Events", "events")}
          {navItem("Top Leadership", "TopLeadership")}
          {navItem("Faculty Advisors", "advisors")}
          {navItem("Our Team", "team")}
          {navItem("Contact", "contact")}
          <RouterLink
            to="/PreviousTeam"
            className="cursor-pointer transition-all duration-300 hover:text-blue-400"
          >
            Previous Team
          </RouterLink>
          <a
            href="https://hackarena.ieeegnitc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-all duration-300 hover:text-blue-400"
          >
            HackArena
          </a>
          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-all duration-300 hover:text-blue-400"
          >
            IEEE.org
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center text-white">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="relative md:hidden mx-4 mt-2 mb-4 rounded-lg overflow-hidden animate-slideDown transition-all duration-300">
          {/* Sparkle animation remains, but no background */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-40 animate-softTwinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 150}ms`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center text-slate-200 text-sm font-medium py-4 space-y-4 z-10">
            {navItem("About Us", "aboutus", 0)}
            {navItem("Societies", "societies", 1)}
            {navItem("Events", "events", 2)}
            {navItem("Top Leadership", "topleadership", 3)}
            {navItem("Faculty Advisors", "advisors", 4)}
            {navItem("Our Team", "team", 5)}
            {navItem("Contact", "contact", 6)}
            <RouterLink
              to="/PreviousTeam"
              onClick={closeMenu}
              className="text-center text-sm font-medium hover:text-blue-400 transition duration-300 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `700ms` }}
            >
              Previous Team
            </RouterLink>
            <a
              href="https://hackarena.ieeegnitc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-medium hover:text-blue-400 transition duration-300 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `800ms` }}
            >
              HackArena
            </a>
            <a
              href="https://www.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-medium hover:text-blue-400 transition duration-300 opacity-0 animate-fadeInUp"
              style={{ animationDelay: `900ms` }}
            >
              IEEE.org
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
