import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "./header_responsive.css";
function Header() {
  let person;
  const [pop, setPop] = useState(false);
  const [price, setPrice] = useState(1);
  return (
    <>
      <div id="header" >

        <div className="navigation-bar">
          <h2 id="logo">
            Travalo<i className="fa-solid fa-plane-departure"></i>
          </h2>
          <div className="links">
            <Link to={"/"} className="nav-links">
              HOME
            </Link>
            <Link to={"/about"} className="nav-links">
              ABOUT
            </Link>
            <Link className="nav-links">BLOG</Link>
            <Link to={"/contact"} className="nav-links">
              CONTACT
            </Link>
            <button className="bt-t1" id="bt1" onClick={() => setPop(true)}>
              BOOK NOW
            </button>
          </div>
        </div>
        <form id="booking-main" style={{ display: pop ? "inline-block" : "none" }}>
          <div className="cross" onClick={() => setPop(false)}>
            X
          </div>
          <div className="inputs">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="people">No of people :</label>
            <input
              type="number"
              name="people"
              id="people"
              value={person}
              min={1}
              max={10}
              placeholder="Enter number of people"
              required
            />
          </div>
          <div className="inputs">
            <label htmlFor="city">Destination :</label>
            <select name="city" id="city" required>
              <option value="default">Select destination</option>
              <option value="Goa">Goa</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshdweep">Lakshdweep</option>
              <option value="Srinagar">Srinagar</option>
              <option value="Udaipur">Udaipur</option>
              <option value="Varanasi">Varanasi</option>
            </select>
          </div>
          <button id="bt1_popup">Book now</button>
        </form>

        <div className="banner_text_para" style={{ display: pop ? "none" : "block" }}>
          <h1 id="banner-text">
            TRAVELLING AROUND <br /> INDIA
          </h1>{" "}
          <br />
          <br />
          <p id="banner-para">
            Traveling is one of life greatest joys, offering the chance to
            explore new cultures, savor exotic cuisines, and immerse yourself in
            unfamiliar landscapes. Whether you seek adventure, relaxation, or a
            deeper connection with the world, our travel agency is here to guide
            you.We provide personalized travel planning and curated experiences
            tailored to your interests, ensuring every aspect of your trip is
            smooth and enjoyable. With our expertise, you can focus on soaking
            in the beauty and wonder of your journey, knowing that all the
            details are taken care of. Let us help you create memories that will
            last a lifetime.
          </p>
          <button className="bt-t1" id="bt2">
            Read More
          </button>
        </div>
        
      </div>
      
    </>
  );
}

export default Header;
