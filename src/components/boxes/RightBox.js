import React from 'react'
import "./box.css"
import RecommendationPage from './recconded'

export default function RightBox() {
  return (
    <div  >
      <div className='rightBox-input d-flex'>
      <i className="bi bi-geo-alt-fill icon"></i>
        <input placeholder='Enter Your Location'  />
        <i className="bi bi-pencil-fill icon"></i>
      </div>

      <div className='d-flex my-4 info-text'>
      <i className="bi bi-info-circle"></i>
      Your location will help us serve better and extend a personalised experience.
      </div>

      <div>
        <RecommendationPage />
      </div>
    </div>
  )
}
