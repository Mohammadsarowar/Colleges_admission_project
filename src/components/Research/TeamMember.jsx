import React from 'react';

const TeamMember = ({item}) => {
    return (
       
            <div className="card w-96  mx-auto">
  <figure className="">
    <img src={item?.team_member_image} alt="Shoes" className=" h-96 w-80" />
  </figure>
  <div className="card-body items-center text-center m-0 gap-0">
    <h2 className="card-title m-0 gap-0 font-sans">{item?.team_member_name}</h2>
    <p></p>
    <div className="divider font-serif text-red-600">PHD Student</div> 
  </div>
</div>
   
    );
};

export default TeamMember;