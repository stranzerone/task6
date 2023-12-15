import React from 'react'
import { useState } from 'react'
import "./box.css"
import image3 from "../../Images/image3.png"
import ava3 from "../../Images/ava3.png"
import ava4 from "../../Images/ava4.png"
export default function DownBox() {

    const [openDropdown, setOpenDropdown] = useState(false);
    const [openDropdown2, setOpenDropdown2] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const opendriver2 = () => {
    setOpenDropdown2(!openDropdown2);
  };
  return (
 
     
<div>


<div  className='box-1'>


<div >
<img  className='img1'  src={image3}  alt='auto'/>

</div>
    

<div className='box1-text'>

<h1>💼️ Job</h1>
<div className='d-flex top-box'>
<h2>Finance & Investment Elite Social Mixer @Lujiazui</h2>
<div onClick={opendriver2} className='more-options'> ... </div>
{openDropdown2? (
                <div className='options-dropdown'>
                  <div>Option 1</div>
                  <div>Option 2</div>
                  <div>Option 3</div>
                </div>
              ):null}

</div>
<div className=' down-box'>
<div className='d-flex mid-text' >
<div className='type-box'><i className="bi bi-calendar-event"></i> <h3>Fri, 12 Oct, 2018</h3></div>
<div className='type-box location'>
<i className="bi bi-geo-alt-fill"></i>
<h3>Ahmedabad, India</h3>

</div>

</div>


<button className='viewWeb-button '>View Website</button>

<div className='d-flex down-name'>
<img className='ava1' src={ava3} alt='1' />
<div className='mobile-views'>
<h1 className='my-3' >Joseph Gray</h1>
<h3 className='mx-3 '>800 views</h3>
</div>

<div className='viewsBox'><i className="bi bi-eye"></i> <h3>1.4k views</h3></div>

<div className='shareButton'><i className="bi bi-share-fill"></i></div>
</div>




</div>
</div>

</div>






















<div  className='box-1'>



    

<div className='box1-text'>
<h1>💼️ Job</h1>

<div className='d-flex top-box'>
<h2>Software Developer - II</h2>
<div  onClick={() => toggleDropdown()} className='more-options'> ... </div>
{openDropdown? (
                <div className='options-dropdown'>
                  <div>Option 1</div>
                  <div>Option 2</div>
                  <div>Option 3</div>
                </div>
              ):null}


</div>
<div className=' down-box'>
<div className='d-flex mid-text' >
<div className='type-box'>
 <i className="bi bi-briefcase"></i> <h3>Innovaccer Analytic...</h3></div>






<div className='type-box location'>
<i className="bi bi-geo-alt-fill"></i>
<h3>Noida, India</h3>

</div>
</div>

<button className='viewWeb-button button2 '>Apply on Timesjobs</button>

<div className='d-flex down-name'>
<img className='ava1' src={ava4} alt='1' />

<div className='mobile-views'>
<h1 className='my-3' >Ronal Jones</h1>
<h3 className='mx-3 '>1.4k views</h3>
</div>
<div className='viewsBox'><i className="bi bi-eye"></i> <h3>1.4k views</h3></div>

<div className='shareButton'><i className="bi bi-share-fill"></i></div>
</div>




</div>
</div>

</div>

    </div>
  )
}
