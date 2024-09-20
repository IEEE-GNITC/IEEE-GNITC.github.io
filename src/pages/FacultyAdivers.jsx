import React from "react";
import vc from "../assets/TopLeaders/vc.webp"

function FacultyAdvisers() {
  const advisers = [
    {
      name: "Dr. Abhay Jere",
      title: "CIO, MIC & VCM, AICTE",
      imgSrc: "path/to/image1.jpg", // Replace with actual image path
    },
    {
      name: "Prof. Rajive Kumar",
      title: "Member Secretary, AICTE",
      imgSrc: "path/to/image2.jpg", // Replace with actual image path
    },
    {
      name: "Gaurav Singh",
      title: "Director, MoE",
      imgSrc: "path/to/image3.jpg", // Replace with actual image path
    },
    {
      name: "Sh. Yogesh Brahmankar",
      title: "Innovation Director, MIC",
      imgSrc: "path/to/image4.jpg", // Replace with actual image path
    },
    {
      name: "Sh. Pradeep Dhage",
      title: "Assistant Innovation Director",
      imgSrc: "path/to/image5.jpg", // Replace with actual image path
    },
    {
      name: "Pratap Sanap",
      title: "VP & Head of Research & Innovation, Neilsoft",
      imgSrc: "path/to/image6.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="p-6 my-5 overflow-hidden ">
      <h2 className="text-center text-3xl font-bold mb-16">Faculty Advisers</h2>
      <div className="md:ml-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 grid-">
        {advisers.map((adviser, index) => (
          <div
            key={index}
            className="bg-white max-w-md mb-16 shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={vc}
              alt={adviser.name}
              className="w-48  mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {adviser.name}
            </h3>
            <p className="text-md text-gray-600">{adviser.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultyAdvisers;
