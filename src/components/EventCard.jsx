import React from "react";
import img1 from "../assets/Event1.png";
const EventCard = ({ imgSrc, title, description , link }) => {
  return (
    <div className=" max-w-md rounded overflow-hidden shadow-lg my-4">
      <div className="m-1">
        {" "}
        <img className="eventcardimg max-w-[24rem] md:max-w-[30rem] flex flex-shrink " src={img1} alt={title} />
      </div>
      <div className="bg-white p-4   mx-4 ">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-center">
          {description}{" "}
          <a href={link} className="text-blue-500">
            ...more
          </a>
        </p>
      </div>
    </div>
  );
};

export default EventCard;
