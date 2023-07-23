import React, { useEffect, useState } from 'react';
import CollegesCard from './CollegesCard';
import useTitle from '../Home/Shared/useTitle';

const Colleges = () => {
  useTitle('Colleges');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/colleges`)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className=' my-32 grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1'>
      {data.map(item => <CollegesCard key={item._id} item={item} />)}
    </div>
  );
};

export default Colleges;
