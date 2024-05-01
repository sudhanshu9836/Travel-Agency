import React from "react";
import "./contact.css";
import "./contact_repo.css";
const Contact = () => {
  return (
    <>
      <div className="contact_us_header">
        <h2>Send us a message</h2>
      </div>
      <div className="contact_us_body">
        <div className="contact_left">
          <i className="fa-solid fa-message"></i>
          <h3>Contact Info</h3>
          <h5>Bhopal</h5>
          <p>
            <span className="fa-solid fa-map">&nbsp;&nbsp;</span>
            <span>Mp nagar Zone 1</span>
          </p>
          <p>
            <span className="fa-solid fa-phone">&nbsp;&nbsp;</span>
            <span> +91 1234567890</span>
          </p>
          <p>
            <span className="fa-solid fa-square-envelope">&nbsp;&nbsp;</span>
            <span> Trevelo123@gmail.com</span>{" "}
          </p>
        </div>
        <div className="contact_right">
          <div className="col-md-12 form-group">
            <label htmlFor="name" className="col-form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="col-md-12 form-group">
            <label htmlFor="contact" className="col-form-label">
              Contact no.
            </label>
            <input
              type="number"
              className="form-control"
              id="contact"
              placeholder="Enter your contact no."
              required
            />
          </div>
          <div className="col-md-12 form-group">
            <label htmlFor="email" className="col-form-label">
              E-mail
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter E-mail" required />
          </div>
          <div className="col-md-12 form-group">
            <label htmlFor="text" className="col-form-label">
              Message
            </label>
            <textarea className="form-control " id="text" placeholder="Your message for us" required />
          </div>

          <div className="contact-btn">
            <button id="bt1" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
