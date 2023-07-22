import React, { useEffect, useState } from 'react';
import AdmissionCard from './AdmissionCard';

const Admission = () => {
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
    }, []);
    console.log(data);
    return (
        <div className=' my-32 grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1'>
      {data.map(item => <AdmissionCard key={item._id} item={item} />)}
    </div>
    );
};

export default Admission;