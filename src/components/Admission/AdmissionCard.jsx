import React from "react";
import {BsFillCalendarDateFill } from "react-icons/Bs";
import {FcViewDetails } from "react-icons/Fc";

import { Link } from "react-router-dom";
const AdmissionCard = ({ item }) => {
  return (
    <Link to='/inputFilds' key={item._id} className="card w-96 glass mx-auto focus:bg-slate-300 hover:bg-gray-200 hover:border-dotted border-2 border-indigo-600">
    <figure>
      <img className="bg-cover h-52 w-full" src={item.college_image} alt="Class!" />
    </figure>
    <div className="flex justify-around m-2">
        <p className="font-light flex items-center gap-2">
        <BsFillCalendarDateFill className="text-xl text-blue-700"/>
         {item?.admission_dates?.fall}   <span className="badge mx-1 border-dotted border-2 border-indigo-600">From</span><BsFillCalendarDateFill className="text-xl text-blue-700"/>  {item?.admission_dates?.spring}
        </p>
   
    
      </div>
    <div className="m-5">
    
    <h2 className="card-title font-mono">{item?.college_name}</h2>
        <h2 className="text-lg font-serif">
      <span className=" font-semibold">Research history:</span> {item?.research_history?.significant_discoveries}
        </h2>
       
      <div className="divider"></div>
      <div className="card-actions justify-end ">


      </div>
    </div>
  </Link>
  );
};

export default AdmissionCard;