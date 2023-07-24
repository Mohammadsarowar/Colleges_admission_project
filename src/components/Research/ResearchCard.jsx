import React from 'react';

const ResearchCard = ({item}) => {
    return (
        <div className="card w-96 bg-base-200 shadow-xl hover:text-white hover:rounded-xl rounded-none hover:bg-red-500 mx-auto mt-5">
  <div className="card-body">
    <h2 className="card-title">{item?.research_name}</h2>
    <p className=' text-gray-500 hover:text-white'>{item?.research_description}</p>
  </div>
</div>
    );
};

export default ResearchCard;