import React from 'react'
import "./home.css"
import Card from './card'
import Package from './package'
function Home() {
  return (
    <div className='home'>
      <div className="segment1">
      <h3 className='segment-description'>------ Popular destinations</h3>
      <div className='segment-heading'>TOP NOTCH DESTINATIONS</div>
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
      <div className="segment2">
          <div className="segment-description">EXPLORE GREAT PLACES</div>
          <div className="segment-heading">POPULAR PACKAGES</div>
          <p className='segment2-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi tenetur dolor repudiandae libero laborum explicabo aspernatur doloribus eaque eos cupiditate consequatur deleniti, perferendis vel, fugit praesentium consequuntur? Molestiae, consequuntur?
          Iure totam omnis ut pariatur eos optio fugit nobis eveniet sapiente dolores molestias, et iste quia labore dolor illo id amet eligendi numquam ab exercitationem harum. Illo ab sunt beatae.</p>
          <div className="packages">
            <Package 
            image={"https://i.pinimg.com/736x/9c/80/d3/9c80d3db455361b3fcc5ab229599bc9d.jpg"}
            price={22000}
            time={"5D/6N"}
            location={"Lakshdweep"}
            heading={"Exploring the natural beauty of island"}
            reviews={"★★★★★"}
            people={2}
            para={"uweheuheuidhiqw3h3uy478ry"}
            />
            <Package
            image={"https://i.pinimg.com/564x/58/78/17/587817f9e65e5cc9f4e3f9e015ec7b48.jpg"}
            price={12000}
            time={"2D/3N"}
            location={"Ladakh"}
            heading={"Tracking and biking throgh the snowy hills"}
            reviews={"★★★★☆"}
            people={2}
            para={"jsdffhyuedghfuywghueghdgekeidj"}
            />
            <Package
            image={"https://i.pinimg.com/564x/d8/c6/ad/d8c6ad5c620c852b824091c66c6ab6ea.jpg"}
            price={20000}
            time={"3D/4N"}
            location={"Srinagar"}
            heading={"Exploring the heaven on India"}
            reviews={"★★★★☆"}
            people={5}
            para={"jsifhwuiehhedbcbcndfjehfuhruhe"}
            />
          </div>
          <button id='bt1'>View All Packages</button>
      </div>
      <div className="segment3">
        <img src="https://i.pinimg.com/564x/75/f7/a4/75f7a49f0a16de42632289d97204274a.jpg" alt="image" />
        <div className="box">
          <h4>----- Callback for more</h4>
          <h1>GO TRAVEL. DISCOVER. <br />REMEMBER US !!</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium maxime possimus suscipit, voluptatem odit consequuntur sit quidem natus, necessitatibus repudiandae quos ad animi minus harum deserunt beatae tempora accusantium culpa?</p>
          <div className="segment3-icons">
            <div className="icon">
            <i class="fa-solid fa-users"></i>
            <div>
            <h1>500 K+</h1>
            <p>Satisfied Clients</p>
            </div>
            </div>
            <div className="icon">
            <i class="fa-solid fa-user-tie"></i>
            <div>
            <h1>15 K+</h1>
            <p>Active Members</p>
            </div>
            </div>
            <div className="icon">
            <i class="fa-solid fa-award"></i>
            <div>
            <h1>250+</h1>
            <p>Award Achieved</p>
            </div>
            </div>
            <div className="icon">
            <i class="fa-solid fa-map"></i>
            <div>
            <h1>10 K+</h1>
            <p>Tour Destination</p>
            </div>
            </div>
          </div>
          <div className="contact-box">
          <i class="fa-solid fa-phone"></i>
          <div>
          <p>Our 24/7 Emergency Phone Services</p>
          <h1>Call : 123-245-7890</h1>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
