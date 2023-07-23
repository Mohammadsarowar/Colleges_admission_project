import React from "react";

import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../Home/Shared/useTitle";

const CollegesDetails = () => {
  useTitle('Colleges Details');
  const CollegesDetails = useLoaderData();
  console.log(CollegesDetails);
  return (
    <div className="hero min-h-screen bg-base-200 mt-14">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src={CollegesDetails?.college_image}
            alt=""
            className="w-full rounded-lg shadow-2xl"
          />
        </div>

        <div className="w-1/2 mx-auto">
          {" "}
          <h1 className="text-3xl font-mono font-bold">
            {" "}
            {CollegesDetails?.college_name}
          </h1>
          <p className="py-6 font-serif">
            {CollegesDetails?.research_history?.significant_discoveries}
          </p>
          <div className="divider">Event</div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>event_name</th>
                  <th>Date</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>{CollegesDetails?.events[0]?.event_name}</td>
                  <td>{CollegesDetails?.events[0]?.date}</td>
                  <td>{CollegesDetails?.events[0]?.location}</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>{CollegesDetails?.events[1]?.event_name}</td>
                  <td>{CollegesDetails?.events[1]?.date}</td>
                  <td>{CollegesDetails?.events[1]?.location}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="divider">Sports</div>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>Popular Sports</th>
                  <td>{CollegesDetails?.sports?.popular_sports[0]}</td>
                  <td>{CollegesDetails?.sports?.popular_sports[1]}</td>
                  <td>{CollegesDetails?.sports?.popular_sports[2]}</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th>Sports Facilities</th>
                  <td>{CollegesDetails?.sports?.sports_facilities[0]}</td>
                  <td>{CollegesDetails?.sports?.sports_facilities[1]}</td>
                  <td>{CollegesDetails?.sports?.sports_facilities[2]}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-actions justify-end mt-10">
            {" "}
            <Link to='/' className="btn btn-outline btn-primary">Home</Link>
            <Link to="/colleges" className="btn btn-outline btn-secondary">Colleges</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegesDetails;
