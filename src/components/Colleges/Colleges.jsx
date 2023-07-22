import React, { useEffect, useState } from 'react';
import CollegesCard from './CollegesCard';

const Colleges = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('../../../public/Data.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    })
    return (
        <div className='mt-10'>

   {
       data.map(item=><CollegesCard key={item.id} item={item} ></CollegesCard>
       )
   }
        </div>
    );
};

export default Colleges;