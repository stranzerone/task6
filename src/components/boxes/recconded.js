import React from 'react';
import './box.css'; // Import your CSS file
import { Raw } from './rec-data';
const RecommendationPage = () => {
  return (

    <div>

<div className='recomend-heading'>
<i className="bi bi-hand-thumbs-up"></i>
       Recommended Groups
       </div>
{Raw.map((data)=>(




   
    <div key={data.id} className="recommendation-container">
      <div className="avatar-container">
      
        <div className='col-2'>
        <img
          className="avatar"
          src={data.ava} // Replace with your avatar image source
          alt="Avatar"
        />
        </div>

        <div className='col-6'>
        <h3 className="user-name">{data.name}</h3>

        </div>
      
      <div className='col-4 ' >
      <button className="follow-button">Follow</button>

      </div>
      </div>
    </div>
    ))}
    </div>
  );
};

export default RecommendationPage;
