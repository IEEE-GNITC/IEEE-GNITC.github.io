import React from "react";

function About() {
  let info1 = `IEEE is a non-profit organization, and the world's largest
            technical professional organization dedicated to advancing
            technology for the benefit of humanity. IEEE and its members inspire
            a global community to innovate for a better tomorrow through its
            highly cited publications, conferences, technology standards, and
            professional and educational activities. IEEE is the trusted “voice”
            for engineering, computing, and technology information around the
            globe.`;
  return (
    <div className="py-12 px-4 my-2 md:px-12" id="About">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        About us 
      </h2>

      <div className="flex flex-col  md:flex-row justify-around items-center gap-10">
        <div className=" greenabout p-6 rounded-xl text-gray-800 md:text-[1.3rem] leading-relaxed shadow-lg  max-w-xl">
          {info1}
        </div>
        <div className=" orgabout text-gray-800 md:text-[1.3rem] leading-relaxed p-6 rounded-xl shadow-lg  max-w-xl">
          {info1}
        </div>
      </div>
    </div>
  );
}

export default About;
