import React, { useState } from 'react';
import { data } from './PostData';

export default function LeftBox() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.key} className='box-1'>
          <div>
            <img className='img1' src={item.img} alt='auto' />
          </div>

          <div className='box1-text'>
            <h1>{item.type}</h1>
            <div className='d-flex top-box'>
              <h2>{item.text1}</h2>
              <div
                onClick={() => toggleDropdown(item.key)}
                className='more-options'
              >
                ...
              </div>

              {openDropdown === item.key && (
                <div className='options-dropdown'>
                  <div>Option 1</div>
                  <div>Option 2</div>
                  <div>Option 3</div>
                </div>
              )}
            </div>
            <h3>{item.text2}</h3>
            <div className='d-flex tt'>
              <img className='ava1' src={item.avatar} alt='1' />

<div className='mobile-views'> 
<h4 className='name'>{item.name}</h4>
<h3>1.4k views</h3>

 </div>
              <div className='viewsBox'>
                <i className='bi bi-eye'></i> <h3>1.4k views</h3>
              </div>

              <div className='shareButton'>
                <i className='bi bi-share-fill'></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
