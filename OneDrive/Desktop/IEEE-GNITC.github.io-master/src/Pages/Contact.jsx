import React from "react";
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoGithub,
  IoLogoWhatsapp,
} from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Contact() {
  return (
    <div
      id="contact"
      className="bg-[#180d49] text-white py-6 px-4 md:px-20 -skew-y-3" // Reduced from py-10 to py-6
    >
      <div className="skew-y-3 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Get to Know Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="ml-0">
                <a
                  href="https://gniindia.org/"
                  className="hover:underline"
                >GURUNANAK INSTITUTIONS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div>
                <p>Email:{" "}
                  <a href="mailto:ieee_gnitc@gniindia.org" className="underline">
                    ieee_gnitc@gniindia.org
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">Abhinav Erolla</p>
                <p>Email:{" "}
                  <a href="mailto:abhinaverolla7@gmail.com" className="underline">
                    abhinaverolla7@gmail.com
                  </a>
                </p>
                <p>Phone:{" "}
                  <a href="tel:+919618386000" className="underline">
                    +91 9618386000
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">P R S Santosh Naidu</p>
                <p>Email:{" "}
                  <a href="mailto:prssn.raja@gmail.com" className="underline">
                    prssn.raja@gmail.com
                  </a>
                </p>
                <p>Phone:{" "}
                  <a href="tel:+917075351027" className="underline">
                    +91 7075351027
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Connect with Us</h3>
            <div className="flex flex-wrap gap-4 text-3xl text-gray-400">
              <a href="https://linkedin.com/company/ieee-gnitc" target="_blank" rel="noreferrer">
                <IoLogoLinkedin className="hover:text-blue-400" />
              </a>
              <a href="https://www.youtube.com/channel/UCrG5uoqFoiS31ZauRihrQXA" target="_blank" rel="noreferrer">
                <IoLogoYoutube className="hover:text-red-500" />
              </a>
              <a href="https://www.instagram.com/ieee_gnitc/" target="_blank" rel="noreferrer">
                <FaInstagramSquare className="hover:text-pink-400" />
              </a>
              <a href="https://twitter.com/IEEE_GNITC" target="_blank" rel="noreferrer">
                <FaSquareXTwitter className="hover:text-gray-300" />
              </a>
              <a href="https://www.reddit.com/r/ieee_gnitc/" target="_blank" rel="noreferrer">
                <FaReddit className="hover:text-orange-500" />
              </a>
              <a href="https://wa.me/918008243308" target="_blank" rel="noreferrer">
                <IoLogoWhatsapp className="hover:text-green-500" />
              </a>
              <a href="https://github.com/IEEE-GNITC" target="_blank" rel="noreferrer">
                <IoLogoGithub className="hover:text-gray-300" />
              </a>
              <a href="https://discord.gg/4G3jXV7" target="_blank" rel="noreferrer">
                <FaDiscord className="hover:text-indigo-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-400">
          ALL RIGHTS RESERVED | © IEEE GNITC
        </div>
      </div>
    </div>
  );
}

export default Contact;
