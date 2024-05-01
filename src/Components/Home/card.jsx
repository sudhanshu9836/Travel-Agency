import React from 'react'
import "./card.css"
import "./card_respo.css"
function Card({city,name,rating,image}) {
  return (
    <div className='main' style={{backgroundImage: `url(${image})` }}>
      <h4 id='cityName'>{city}</h4>
      <div className="bottom">
        <h3>{name}</h3>
        <h3>{rating}</h3>
      </div>
    </div>
  )
}

export default Card
