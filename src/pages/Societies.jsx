import React from "react";
import img1 from "../assets/computer.png";
import img2 from "../assets/cas.png";
import img3 from "../assets/com.png";

function Societies() {
  return (
    <div>
        <span className="flex my-10 md:text-5xl justify-center items-center text-4xl font-bold" id="Societies">Societies</span>
      <div className=" flex flex-col md:flex-row gap-10 items-center justify-center my-10">
        <a href=""><img src={img1} alt="img" className=" img1 w-[20rem] md:w-[28rem]  rounded-3xl " /></a >
        <a href=""><img src={img2} alt="img" className=" img2 w-[20rem] md:w-[28rem] rounded-3xl"/></a >
        <a href=""><img src={img3} alt="img" className=" img3 w-[20rem] md:w-[28rem]  rounded-3xl"/></a >
      </div>
    </div>
  );
} 

export default Societies;
