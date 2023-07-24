import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResearchCard from "./ResearchCard";
import ExtaPage from "./exta/ExtaPage";
import TeamMember from "./TeamMember";

const Research = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://endgame-task-project-server.vercel.app/research`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="my-10">
      <div
        className="hero h-56 lg:w-[1250px] rounded-lg mx-auto"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600)",
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-start text-neutral-content my-5">
          <div className="max-w-md bg-orange-600 text-white p-5 font-serif">
            <h1 className=" text-5xl font-bold">Research Page</h1>
            <span>
              <Link className="hover:text-blue-500" to="/">
                Home
              </Link>{" "}
              / Research
            </span>
          </div>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto lg:w-5/6">
        {data.map((item) => (
          <ResearchCard key={item._id} item={item} />
        ))}
      </div>
      <ExtaPage />
      <div>
        <div className="lg:w-80 lg:ml-32 my-10 mx-auto">
          <h3 className="text-center text-3xl font-serif">Team Member</h3>
          <div className="divider font-serif text-red-600">Our Team</div>{" "}
        </div>

        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
          {data.map((item) => (
            <TeamMember key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
