import React from "react";
import {BsFillCalendarDateFill } from "react-icons/Bs";
import {FcViewDetails } from "react-icons/Fc";

import { Link } from "react-router-dom";
import useTitle from "../Home/Shared/useTitle";
const CollegesCard = ({ item }) => {
  useTitle('Colleges');
  return (
    <div key={item._id} className="card w-96 glass mx-auto focus:bg-slate-300">
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
{/* 
<div> <h2 className=" text-lg font-serif">Research: {item?.research_history?.number_of_research_projects}</h2><br/>
 <h2 className=" text-lg font-serif">Founding year: {item?.research_history?.founding_year}</h2></div> */}


        <Link to={`/colleges/${item?._id}`} className="btn flex btn-primary hover:bg-sky-700 text-white"><FcViewDetails className="text-2xl"/>Details</Link>
      </div>
    </div>
  </div>
  );
};

export default CollegesCard;
