import React from 'react'
import "./package.css"
import "./package_resp.css"
function Package({price,image, time, people, location, heading, reviews, para}) {
  return (
    <div className='package'>
        <div className="up" style={{backgroundImage: `url(${image})`}}>
            <h3 className='price'>&#8377;{price}/per person</h3>
            <div className="inner-box">
                <h4><i class="fa-regular fa-clock"></i>{time}</h4>
                <h4><i class="fa-solid fa-users"></i>{people}</h4>
                <h4><i class="fa-solid fa-location-dot"></i>{location}</h4>
            </div>
        </div>
        <div className="bottom" id='package-bottom'>
            <h2>{heading}</h2>
            <h5>{reviews}</h5>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default Package
