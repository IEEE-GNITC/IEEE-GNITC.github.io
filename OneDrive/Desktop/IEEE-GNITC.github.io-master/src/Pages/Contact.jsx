import React from "react";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoGithub,
  IoLogoWhatsapp,
} from "react-icons/io";
import {
  FaDiscord,
  FaSquareXTwitter,
  FaReddit,
  FaInstagram,
} from "react-icons/fa6";

export default function Contact() {
  const socialLinks = [
    {
      Icon: IoLogoLinkedin,
      url: "https://linkedin.com/company/ieee-gnitc",
      color: "hover:text-blue-400",
    },
    {
      Icon: IoLogoYoutube,
      url: "https://www.youtube.com/channel/UCrG5uoqFoiS31ZauRihrQXA",
      color: "hover:text-red-500",
    },
    {
      Icon: FaInstagram,
      url: "https://www.instagram.com/ieee_gnitc/",
      color: "hover:text-pink-400",
    },
    {
      Icon: FaSquareXTwitter,
      url: "https://twitter.com/IEEE_GNITC",
      color: "hover:text-white",
    },
    {
      Icon: FaReddit,
      url: "https://www.reddit.com/r/ieee_gnitc/",
      color: "hover:text-orange-400",
    },
    {
      Icon: IoLogoWhatsapp,
      url: "https://wa.me/918008243308",
      color: "hover:text-green-400",
    },
    {
      Icon: IoLogoGithub,
      url: "https://github.com/IEEE-GNITC",
      color: "hover:text-gray-300",
    },
    {
      Icon: FaDiscord,
      url: "https://discord.gg/4G3jXV7",
      color: "hover:text-indigo-400",
    },
  ];

  return (
    <div id="contact" className="w-full px-4 py-20 md:px-20 text-white">
      <div className="w-full max-w-screen-2xl mx-auto">

        {/* Section container without background */}
        <div className="w-full p-8 md:p-16 rounded-2xl transition-all duration-500 group">

          {/* Heading */}
          <h2 className="text-center text-4xl font-bold mb-12 font-serif tracking-wider transition-transform duration-700 hover:scale-105">
            CONTACT US
          </h2>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-12 text-sm text-slate-300">

            {/* About Section */}
            <div className="transition-transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-semibold mb-4 hover:underline">
                IEEE GNI
              </h3>
              <p className="mb-2">
                <a
                  href="https://gniindia.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline hover:text-cyan-400"
                >
                  GURUNANAK INSTITUTIONS
                </a>
              </p>
              <p className="leading-relaxed">
                Empowering tech enthusiasts to innovate, collaborate, and build
                the future through IEEE.
              </p>
            </div>

            {/* Contact Team */}
            <div className="transition-transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-semibold mb-4 hover:underline">
                Contact Team
              </h3>
              <div className="mb-5">
                <p className="font-semibold">Abhinav Erolla</p>
                <p className="text-blue-300 text-sm">
                  abhinaverolla7@gmail.com
                </p>
                <p>📞 +91 96183 86000</p>
              </div>
              <div className="mb-5">
                <p className="font-semibold">P R S Santosh Naidu</p>
                <p className="text-blue-300 text-sm">prssn.raja@gmail.com</p>
                <p>📞 +91 70753 51027</p>
              </div>
              <p className="font-semibold">Email</p>
              <p className="text-blue-300 text-sm">ieee_gnitc@gniindia.org</p>
            </div>

            {/* Social Icons */}
            <div className="transition-transform hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-semibold mb-4 hover:underline">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-5 mt-3">
                {socialLinks.map(({ Icon, url, color }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className={`transition-all duration-300 hover:scale-125 ${color}`}
                  >
                    <div className="p-3 rounded-full bg-white/10 hover:bg-white/20">
                      <Icon className="text-2xl md:text-3xl" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-14 pt-6 border-t border-white/10 text-sm text-slate-400">
            <p>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
                © {new Date().getFullYear()} IEEE GNI
              </span>{" "}
              — All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
