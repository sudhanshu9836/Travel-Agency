import React, { useState } from "react";
import "./home.css";
import "./home_responsive.css";
import Card from "./card";
import Package from "./package";
function Home() {
  const [hidePackage, setHidePackage] = useState(false); // hidePackage to show whether all packhages should be displaywd on screen or not
  return (
    <div className="home">
    {/* Segment 1 containg cards of different cities */}
      <div className="segment1">
        <h3 className="segment-description">------ Popular destinations</h3>
        <div className="segment-heading">TOP NOTCH DESTINATIONS</div>
        <div className="cards">
          <Card
            city={"Udaipur"}
            name={"Lake Pichola"}
            rating={"★★★★☆"}
            image={
              "https://i.pinimg.com/564x/6e/e1/da/6ee1da1b9d59ac20d01d66d2637346f9.jpg"
            }
          />
          <Card
            city={"Varanasi"}
            name={"Manikarnika Ghat"}
            rating={"★★★★★"}
            image={
              "https://i.pinimg.com/564x/07/b0/fa/07b0faa9315c357a09c6f9fde9745c23.jpg"
            }
          />
          <Card
            city={"Goa"}
            name={"Palolem Beach"}
            rating={"★★★☆☆"}
            image={
              "https://i.pinimg.com/564x/a6/74/f4/a674f407d8af1d8987e6599c0e51d5bc.jpg"
            }
          />
        </div>
      </div>
      {/* Segment 2 contaings packages */}
      <div className="segment2">
        <div className="segment-description">EXPLORE GREAT PLACES</div>
        <div className="segment-heading">POPULAR PACKAGES</div>
        <p className="segment2-para">
       Discover a world of breathtaking destinations with our carefully curated packages. From sun-soaked beaches to majestic mountains, our travel options are designed to suit every kind of explorer. Whether you're seeking adventure, relaxation, or cultural immersion, we offer unforgettable experiences that will leave you with cherished memories. Let us guide you on your next journey to explore the wonders of the world.
       </p>

        <div className="packages">
          <Package
            image={
              "https://i.pinimg.com/736x/9c/80/d3/9c80d3db455361b3fcc5ab229599bc9d.jpg"
            }
            price={22000}
            time={"5D/6N"}
            location={"Lakshdweep"}
            heading={"Exploring the natural beauty of island"}
            reviews={"★★★★★"}
            people={2}
            para={"Discovering the untamed allure of island life, where every sunset whispers secrets of the sea."}
          />
          <Package
            image={
              "https://i.pinimg.com/564x/58/78/17/587817f9e65e5cc9f4e3f9e015ec7b48.jpg"
            }
            price={12000}
            time={"2D/3N"}
            location={"Ladakh"}
            heading={"Tracking and biking throgh the snowy hills"}
            reviews={"★★★★☆"}
            people={2}
            para={"Navigating the snowy hillsides on bike, tracing nature's elegant curves with each pedal."}
          />
          <Package
            image={
              "https://i.pinimg.com/564x/d8/c6/ad/d8c6ad5c620c852b824091c66c6ab6ea.jpg"
            }
            price={20000}
            time={"3D/4N"}
            location={"Srinagar"}
            heading={"Exploring the heaven on India"}
            reviews={"★★★★☆"}
            people={5}
            para={"Embarking on a heavenly journey through the enchanting landscapes of Srinagar, India."}
          />
        </div>
        {/* Pachkages that will be hidden until pressed button to show them */}
        <div
          className="hidden-package"
          style={{ display: hidePackage ? "flex" : "none" }}
        >
          <Package
            image={
              "https://i.pinimg.com/564x/90/bd/10/90bd10235c6a48e896f03b6c2e56a1ec.jpg"
            }
            price={10000}
            time={"3D/4N"}
            location={"Varanasi"}
            heading={"Discovering Cultural Capital of India"}
            reviews={"★★★☆☆"}
            people={5}
            para={"Timeless tapestry where spirituality, tradition, and history weave together along the sacred banks of the Ganges."}
          />
          <Package
            image={
              "https://i.pinimg.com/564x/03/79/e3/0379e3670519e9aba350731d1115c961.jpg"
            }
            price={20000}
            time={"5D/5N"}
            location={"Goa"}
            heading={"Relaxing on the Sunny and stunning beaches"}
            reviews={"★★★★☆"}
            people={2}
            para={"Golden sands meet vibrant culture, offering a tapestry of beaches, spirituality, and endless festivities."}
          />
          <Package
            image={
              "https://i.pinimg.com/564x/9f/3f/8a/9f3f8abd3d355a186cac70713af2cad4.jpg"
            }
            price={18000}
            time={"4D/4N"}
            location={"Udaipur"}
            heading={"Boating and exploring the City of Lakes"}
            reviews={"★★★★☆"}
            people={2}
            para={"Where every street tells a story and every sunset paints a masterpiece against the backdrop of majestic palaces."}
          />
        </div>
        <button
          id="bt1_packages"
          style={{ display: hidePackage ? "none" : "inline" }}
          onClick={() => {
            setHidePackage(true);
          }}
        >
          View All Packages
        </button>
        <button
          id="bt1_packages"
          style={{ display: hidePackage ? "inline" : "none" }}
          onClick={() => {
            setHidePackage(false);
          }}
        >
          See less
        </button>
      </div>
      {/* Segment 3 for adventure box */}
      <div className="segment3">
        <img
          src="https://i.pinimg.com/564x/75/f7/a4/75f7a49f0a16de42632289d97204274a.jpg"
          alt="image"
        />
        <div className="box">
          <h4>----- Callback for more</h4>
          <h1>
            GO TRAVEL. DISCOVER. <br />
            REMEMBER US !!
          </h1>
          <p>
            Journey far and wide, embrace every moment with courage.
            Life's beauty lies in the unknown, so step forth boldly.
            Let the world guide you to stories that enrich your soul,
            creating memories that linger long after your travels end.
          </p>

          <div className="segment3-icons">
            <div className="icon">
              <i className="fa-solid fa-users"></i>
              <div>
                <h1>500 K+</h1>
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className="icon">
              <i className="fa-solid fa-user-tie"></i>
              <div>
                <h1>15 K+</h1>
                <p>Active Members</p>
              </div>
            </div>
            <div className="icon">
              <i className="fa-solid fa-award"></i>
              <div>
                <h1>250+</h1>
                <p>Award Achieved</p>
              </div>
            </div>
            <div className="icon">
              <i className="fa-solid fa-map"></i>
              <div>
                <h1>10 K+</h1>
                <p>Tour Destination</p>
              </div>
            </div>
          </div>
          <div className="contact-box">
            <i className="fa-solid fa-phone"></i>
            <div className="c_box_details">
              <p>Our 24/7 Emergency Phone Services</p>
              <h2>Call : 123-245-7890</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Segment 4 for activities */}
      <div className="segment4">
      <div className="segment4-description">Travel by Activity</div>
        <div className="segment4-heading">ADVENTURE AND ACTIVITY</div>
        <p className="segment3-para">
          Embark on a journey filled with thrilling adventures and captivating activities! 
          Whether you're a seasoned adventurer or new to the world of exploration, our travel packages offer something for everyone. 
          Experience the rush of outdoor sports, discover breathtaking landscapes, and immerse yourself in vibrant cultures. 
          Join us for an unforgettable adventure tailored to your interests and unleash the adventurer within!
        </p>
        <div className="images">
          <div className="images-box">
            <img
              src="https://i.pinimg.com/564x/be/46/34/be4634680fcce59ad55035d2eae4db8c.jpg"
              alt="img"
            />
            <h4>Trekking</h4>
          </div>
          <div className="images-box">
            <img
              src="https://i.pinimg.com/564x/03/1f/55/031f550c198fc8b73e9d1a0139f0f0e1.jpg"
              alt="img"
            />
            <h4>Camp Fire</h4>
          </div>
          <div className="images-box">
            <img
              src="https://i.pinimg.com/564x/0b/89/2e/0b892e1638003eeed05fdbf26281413a.jpg"
              alt="img"
            />
            <h4>Camping</h4>
          </div>
          <div className="images-box">
            <img
              src="https://i.pinimg.com/564x/84/d2/b0/84d2b040ff89178c6622c98a62227d2a.jpg"
              alt="img"
            />
            <h4>Off Road</h4>
          </div>
        </div>
      </div>
      <br /><br /><br /> <br /><br /><br /><br />
      <div className="segment-heading">BEST TRAVELER'S SHARED PHOTOS</div>
      <br /><br />
      {/* Segment 5 for photos shared by travellers  */}
      <div className="segment5">
        <img
          src="https://i.pinimg.com/736x/2d/ec/f0/2decf0d2566eb3c13d122171e4a19dbd.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/564x/40/82/59/408259ab71a98f0e4b7709c22d8b748d.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/564x/41/19/73/411973cee24645105071f19842757ab9.jpg"
          alt=""
        />

        <img
          src="https://e0.pxfuel.com/wallpapers/697/73/desktop-wallpaper-kumbhalgarh-fort-in-rajasthan-has-got-the-second-largest-wall-in-the-world-tourist-places-holiday-destinations-tourist.jpg"
          alt=""
        />

        <img
          src="https://i.pinimg.com/564x/60/5a/39/605a39bd855753637c565e76ef12a619.jpg"
          alt=""
        />
      </div>
      <div className="segment5b">
        <img
          src="https://miro.medium.com/v2/resize:fit:2000/1*jN5OXdbxDaNXlrzWfmZIig.jpeg"
          alt=""
        />

        <img
          src="https://i.pinimg.com/564x/a4/11/70/a411703f77db8d0e516ff6561e7e69fd.jpg"
          alt=""
        />

        <img src="https://wallpapercave.com/wp/wp7231528.jpg" alt="" />
      </div>
      {/* Segment 6 for advertisements */}
      <div className="segment6">
        <div className="segment-description_offer">----HOLIDAY PACKAGE OFFER</div>
        <div className="segment-heading_offer">HOLIDAY SPECIAL 25% OFF !</div>
        <p className="segment6-p">
          {" "}
          Sign up now to recieve hot special offers and information about the
          best tour packages, updates and discounts !!{" "}
        </p>
        <div className="offer_login">
          <input type="email" placeholder="Your Email Address.." />
          <button id="bt_offer" className="offerbutton">Sign Up Now</button>
        </div>
        <p className="offer_p_bottom">
          Offer closing soon ...
        </p>
      </div>
    </div>
  );
}

export default Home;
