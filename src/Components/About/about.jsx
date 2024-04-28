import React from "react";

import "./About.css";
function About() {
  return (
    <div className="about_section_parent">
      <div className="company_profile">
        <h2>About our agency</h2>
        <div className="about_list">
          <a href="#about_company" className="About_list_li">
            About Company
          </a>
          <a href="#ourMoto" className="About_list_li">
            Our Moto
          </a>
          <a href="#whyUs" className="About_list_li">
            Why choose us
          </a>
          <a href="#about_services" className="About_list_li">
            Our services
          </a>

          <a href="#about_testimonials" className="About_list_li">
            Testimonials
          </a>
        </div>
        <div className="about_company" id="about_company">
          <h2>About Company</h2>
          <div className="about_container">
            <p className="descriptionOfCompany">
            Welcome to Travelo, where the love for exploration meets the power of technology. 
            Our journey began with a simple yet profound belief: that travel has the remarkable 
            ability to enrich lives, foster understanding, and connect people across borders. 
            Founded by a diverse team of seasoned globetrotters, travel enthusiasts, and tech innovators,
            our platform is more than just a tool for booking flights and hotels; it's a gateway to
            immersive experiences, cultural exchange, and personal growth. At Travelo, we're dedicated to
            democratizing travel, making it accessible to all, regardless of budget, background, or expertise.
            From backpackers seeking off-the-beaten-path adventures to luxury travelers craving indulgent
            escapes, we cater to every wanderlust-driven soul. Our commitment to excellence extends beyond
            our digital platform; it's woven into the fabric of every interaction, every recommendation, 
            and every partnership we forge. Whether you're embarking on a solo expedition, planning a romantic
            getaway, or organizing a group retreat, we're here to be your trusted companion, guiding you 
            through the vast tapestry of the world's wonders. Join us on this exhilarating journey of 
            discovery, where each destination is a chapter waiting to be written, and every traveler is a 
            protagonist in their own story. Experience the world with Travelo, where every adventure begins.
            </p>
            <div className="img_container">
              <img
                className="about_img"
                src="https://wallpapers.com/images/featured/travel-ibk7fgrvtvhs7qzg.webp"
                alt="travel_image"
              />
              <p>
              Travelo: where the journey becomes the destination, and every moment is a story waiting to be told.
              </p>
            </div>
          </div>
        </div>
        <div className="why_us " id="whyUs">
          <h2 className="h2">Why us </h2>
          <div className="whyUs_contaniner ">
            <div className="why_us_description">
              <div className="whyUs_content ">
                <h3>Quality</h3>
                <p>
                
                </p>
              </div>
              <div className="whyUs_content">
                <h3>Price</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  doloribus?
                </p>
              </div>
              <div className="whyUs_content">
                <h3>Support</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  doloribus?
                </p>
              </div>
              <div className="whyUs_content">
                <h3>Experience</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  doloribus?
                </p>
              </div>
            </div>
            <div className="why_us_img">
              <img
                src="https://c1.wallpaperflare.com/preview/722/907/815/question-mark-hand-drawn-solution-think.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="our_moto" id="ourMoto">
          <h2>Our Moto</h2>
          <div className="moto_body">
            <div className="moto_description">
              <div className="moto_items">
                <h3>Customer satisfaction: </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi non beatae ut labore reiciendis eos, tempora nobis
                  numquam nihil, facere, distinctio molestiae est pariatur ipsa
                  corrupti perferendis fugiat deleniti accusamus?
                </p>
              </div>
              <div className="moto_items">
                <h3>Quality services:</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas est odit, asperiores possimus ad sunt dolores nobis
                  harum maxime architecto, consequuntur quo totam optio et
                  repellendus, aspernatur distinctio officia natus!
                </p>
              </div>
            </div>
            <div className="moto_img">
              <img src="https://wallpaperaccess.com/full/254381.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="about_services" id="about_services">
          <div className="about_header">
            <h2>About Services</h2>
            <p>
            Our travel website offers a comprehensive range of services designed to enhance every aspect
             of your journey. From seamless booking experiences to personalized trip planning and expert 
             travel advice, we're here to make your travel dreams a reality. Explore our array of services,
              including flight and hotel bookings, destination guides, travel insurance, and more, all aimed
               at ensuring your trip is unforgettable from start to finish. Let us be your trusted partner in
                exploring the world and creating memories that last a lifetime.
            </p>
          </div>
          <div className="about_services_description">
            <div className="services_list">
              <h3>Travalo offers the following services:</h3>
              <h4>What we do “our tours”:</h4>
              <a href="">Cultural Tours in India:</a>
              <a href="">Heritage Tours</a>
              <a href="">Adventure Tours in India:</a>
              <a href="">Educational Tour</a>
              <a href="">Enlightenment Journeys in India:</a>
              <a href="">Recreation Holidays in India:</a>
              <a href="">Special Interest Journeys in India:</a>
            </div>
            <div className="services_img">
              <img
                src="https://t3.ftcdn.net/jpg/03/96/59/82/360_F_396598277_fmx8Ykhw4woErijL1CCug9563VwLOKxt.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="about_testimonials" id="about_testimonials">
          <h3>Testimonials</h3>
          <div className="testimonials_contanier">
            <div className="testimonials_card">
              <img
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                alt=""
              />
              <h5>Mr. XYZ</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                laboriosam.
              </p>
            </div>
            <div className="testimonials_card">
              <img
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                alt=""
              />
              <h5>Mr. XYZ</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                laboriosam.
              </p>
            </div>
            <div className="testimonials_card">
              <img
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                alt=""
              />
              <h5>Mr. XYZ</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                laboriosam.
              </p>
            </div>
            <div className="testimonials_card">
              <img
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                alt=""
              />
              <h5>Mr. XYZ</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
                laboriosam.
              </p>
            </div>
          </div>
        </div>
        {/* above code is for about page */}
      </div>
    </div>
  );
}

export default About;
