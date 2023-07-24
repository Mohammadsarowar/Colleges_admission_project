import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import {CiLocationOn} from "react-icons/Ci";

const MyColleges = () => {
    const {user} = useContext(AuthContext)
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://endgame-task-project-server.vercel.app/getAdmission")
      .then(res => res.json())
      .then(data => {
       
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); 
  let filter = data.filter(item => item?.oldUser == user?.email);
   console.log(filter);
    return (
        <div className='mt-20'>
         
         <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>College Image </th>
        <th>Student Name & Address</th>
        <th>Email & Phone</th>
        
        <th>Delete</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
                filter.map(item =><tr key={item._id} item={item}>
    
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={item?.imgUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
        <td> <div>
              <div className="font-bold ml-5">{item?.name}</div>
              <div className="text-sm opacity-50 flex items-center"><CiLocationOn/>{item?.address}</div>
            </div></td>
        <td>
          {item?.email}
          <br/>
          <span className="badge badge-ghost badge-sm">{item?.phone}</span>
        </td>
      
        <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>)
            }
      
      
    </tbody>

    
  </table>
</div>

        </div>
    );
};

export default MyColleges;