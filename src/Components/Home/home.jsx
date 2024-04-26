import React from 'react'
import "./home.css"
import Card from './card'
function Home() {
  return (
    <div className='home'>
      <div className="segment1">
      <h3>------ Popular destinations</h3>
      <div id='segment1-heading'>TOP NOTCH DESTINATIONS</div>
        <div className="cards">
          <Card
          city = {"Udaipur"}
          name= {"Lake Pichola"}
          rating= {"★★★★☆"}
          image={"https://i.pinimg.com/564x/6e/e1/da/6ee1da1b9d59ac20d01d66d2637346f9.jpg"}
          />
          <Card
          city={"Varanasi"}
          name={"Manikarnika Ghat"}
          rating={"★★★★★"}
          image={"https://i.pinimg.com/564x/07/b0/fa/07b0faa9315c357a09c6f9fde9745c23.jpg"}
          />
          <Card
          city={"Goa"}
          name={"Palolem Beach"}
          rating={"★★★☆☆"}
          image={"https://i.pinimg.com/564x/a6/74/f4/a674f407d8af1d8987e6599c0e51d5bc.jpg"}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
