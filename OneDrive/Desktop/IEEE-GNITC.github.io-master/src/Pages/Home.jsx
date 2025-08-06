import React from "react";
import IEEE from "../assets/IEEE.png";
import { ChevronDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  return (
    <div
      id="home"
      className="h-screen w-full flex items-center justify-center relative text-white bg-transparent overflow-hidden"
    >
      {/* Glowing Animated Rings */}
      <div className="absolute w-[600px] h-[600px] border-[2px] border-purple-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl opacity-20 animate-spin-slow z-0" />
      <div className="absolute w-[800px] h-[800px] border-[1px] border-cyan-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl opacity-10 animate-spin-reverse z-0" />

      {/* Floating Star Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-30 animate-float twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center px-4 space-y-6 animate-fadeInUp">
        <img
          src={IEEE}
          alt="IEEE Logo"
          className="h-24 md:h-40 drop-shadow-[0_0_40px_rgba(0,255,255,0.5)] transition-transform duration-500 hover:scale-110"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl">
          IEEE GNI
        </h1>

        <p className="text-white text-base md:text-lg max-w-xl leading-relaxed">
          Fostering innovation, research, and future tech at{" "}
          <span className="font-semibold underline-offset-2">
            Guru Nanak Institutions
          </span>.
        </p>

        <ScrollLink
          to="FutureEventTimeLine"
          smooth={true}
          duration={800}
          offset={-60}
          className="cursor-pointer mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full shadow-xl hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/50"
        >
          Explore IEEE
        </ScrollLink>

        <div className="mt-6 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); opacity: 0.3; }
            50% { transform: translateY(-8px); opacity: 0.6; }
            100% { transform: translateY(0); opacity: 0.3; }
          }

          .animate-float {
            animation-name: float;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 1.5s ease-out both;
          }

          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes spin-reverse {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }

          .animate-spin-slow {
            animation: spin-slow 60s linear infinite;
          }

          .animate-spin-reverse {
            animation: spin-reverse 100s linear infinite;
          }

          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }

          .twinkle {
            animation: twinkle 2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
