import React from "react";

function EventImageItem({ img}) {
  return (
   
  
    <div className="bg-slate-700 border-2 p-2 rounded-xl overflow-hidden shadow-md ">

        
      <img src={img} alt="Employee Image" className="  hover:p-2  hover:rounded-2xl   rounded-xl" />
    </div>
   
  );
}

export default EventImageItem;
