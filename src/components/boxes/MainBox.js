import React from 'react'
import "./box.css"
import RightBox from './RightBox'
import LeftBox from './LeftBox'
import DownBox from './downBox'
export default function MainBox() {


  return (
  <div >

  <div>


<div className='d-flex main-coin' >

<div className='box-head '>
<h1>All Posts(32)</h1>

<h2>Article</h2>
<h2>Events</h2>
<h2>Eduction</h2>
<h2>Job</h2>
<button className='mobile-filter-button'>Filter:All <i className="bi bi-caret-down-fill d-icon"></i></button>

</div>

<div className=' left-buttons '>

<button className='write-post-button'>Write a Post <i  className="bi bi-caret-down-fill d-icon mx-3"></i></button>
<button className='join-grup-button'><i className="bi bi-person-plus-fill px-2 "></i>Join Group</button>


</div>


</div>
<div className='box-coin'>
<div className='left-box'>

<LeftBox />
<DownBox />
</div>

<div className='right-box'>
  <RightBox />
</div>


    </div>

   
</div>


    </div>
  )
}
