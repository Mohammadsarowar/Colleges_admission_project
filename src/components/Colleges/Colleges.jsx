import React, { useEffect, useState } from 'react';
import CollegesCard from './CollegesCard';
import useTitle from '../Home/Shared/useTitle';

const Colleges = () => {
  useTitle('Colleges');
  const [data, setData] = useState([]);
  const [searchText,setSearchText] = useState('')

  const handleSearch = () => {
    fetch(`https://endgame-task-project-server.vercel.app/SearchText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      });
  };

  useEffect(() => {
    fetch(`https://endgame-task-project-server.vercel.app/colleges`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <>
      <div className="input-group justify-center mt-28 mb-5">
    <input onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
    <button onClick={handleSearch}  className="btn btn-square btn-primary btn-outline">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
     <div className='  grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1'>
    
      {data.map(item => <CollegesCard key={item._id} item={item} />)}
    </div></>
   
  );
};

export default Colleges;
