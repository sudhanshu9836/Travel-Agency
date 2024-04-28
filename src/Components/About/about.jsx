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
                Choose us for your travel needs because we prioritize quality experiences above all else.
                 With meticulous attention to detail and a commitment to excellence, we ensure every journey 
                 is seamless, memorable, and exceeds expectations
                </p>
              </div>
              <div className="whyUs_content">
                <h3>Price</h3>
                <p>
                Choose us for your travel needs because we offer competitive prices without compromising on 
                quality. Enjoy incredible value for your money, ensuring budget-friendly options without 
                sacrificing the excellence of your travel experience.
                </p>
              </div>
              <div className="whyUs_content">
                <h3>Support</h3>
                <p>
                Choose us for your travel needs because our dedicated support team is available around the clock to 
                assist you. From booking assistance to resolving any travel-related queries, trust us to provide 
                prompt and reliable support, ensuring a stress-free and enjoyable journey.
                </p>
              </div>
              <div className="whyUs_content">
                <h3>Experience</h3>
                <p>
                Choose us for your travel needs because we bring years of industry experience to the table. With a 
                proven track record of delivering exceptional travel experiences, trust us to leverage our expertise
                 to ensure your journey is seamless, memorable, and tailored to your preferences
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
                At Travelo, our commitment to customer satisfaction is unwavering. From the moment you start planning
                 your trip to the moment you return home, we strive to exceed your expectations at every turn. 
                 Our experienced team is dedicated to crafting personalized experiences that cater to your unique
                  preferences and needs. We value your feedback and are constantly seeking ways to enhance our services 
                  to ensure your journey with us is nothing short of extraordinary. Your satisfaction is our greatest 
                  reward, and we look forward to welcoming you on your next adventure.
                </p>
              </div>
              <div className="moto_items">
                <h3>Quality services:</h3>
                <p>
                At Travelo, we pride ourselves on delivering top-notch services that elevate every aspect of 
                your travel experience. From meticulously curated itineraries to seamless booking processes and
                 expert guidance, we ensure that every detail of your journey is meticulously planned and
                  executed. Our team of seasoned professionals is dedicated to providing personalized attention
                   and assistance, ensuring that your trip exceeds expectations every step of the way. Trust us
                    to deliver exceptional quality and reliability, so you can focus on making unforgettable memories
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
              <h5>Mr.Potter</h5>
              <p>
              "Travelo  turned my travel dreams into unforgettable memories!"
              </p>
            </div>
            <div className="testimonials_card">
              <img
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                alt=""
              />
              <h5>Mr. Weasley</h5>
              <p>
              They handled everything, so I could just relax and enjoy the adventure. Thanks, Travelo !
              </p>
            </div>
            <div className="testimonials_card">
              <img
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                alt=""
              />
              <h5>Mr. Malfoy</h5>
              <p>
              Expert advice, great deals - Travelo  made planning a breeze.
              </p>
            </div>
            <div className="testimonials_card">
              <img
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                alt=""
              />
              <h5>Mr. Granger</h5>
              <p>
              The world is my oyster, thanks to Travelo 's incredible service!
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
