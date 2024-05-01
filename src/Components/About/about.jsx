import React from "react";


import "./About.css";
import "./about_repo.css";
function About() {
  return (
    <div className="about_section_parent" id="about">
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              autem, vitae unde fugiat eveniet, cupiditate, odio iste mollitia
              recusandae possimus quas ut porro similique aliquam doloribus.
              Molestiae aliquam dolore quasi atque quibusdam nihil voluptatum
              iure quisquam quos sint nulla quod omnis illum suscipit explicabo,
              non, quam saepe, esse ad? Vel voluptates beatae ex facilis rerum
              recusandae repellat dolores rem assumenda! Sequi minima tenetur
              culpa iure, in labore nemo perspiciatis magni. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Optio voluptatum sunt
              inventore eaque deserunt repellendus omnis. Ab ea ipsum odit fugit
              assumenda numquam delectus, eaque porro corrupti veritatis ipsam,
              quod hic dolores quam? Corporis ipsam sint quas blanditiis
              voluptatem praesentium, aperiam nulla obcaecati sed assumenda in,
              aut veniam velit molestias unde dolores consequuntur numquam
              dicta. Tenetur voluptatum deserunt veritatis aliquam consequuntur
              distinctio q
            </p>
            <div className="img_container">
              <img
                className="about_img"
                src="https://wallpapers.com/images/featured/travel-ibk7fgrvtvhs7qzg.webp"
                alt="travel_image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                doloribus numquam error
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                  doloribus?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              beatae nesciunt, excepturi quasi ea magni aspernatur quas rem
              ducimus vitae. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Architecto laboriosam eveniet aliquid quod doloremque
              assumenda rem id doloribus accusantium, odit voluptas adipisci
              unde ea tempore aperiam iure aut quae illo.
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
