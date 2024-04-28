import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <section className="footer-content">
                <article className="footer-box footer-about">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolor molestiae blanditiis sequi eius et! Libero iure, officiis earum nulla modi possimus dolor quae molestias corrupti facere voluptatem magnam a.</p>
                    <div className="footer-social">
                        <a href="https://www.facebook.com" aria-label="Facebook"><span className="fab fa-facebook-f"></span></a>
                        <a href="https://twitter.com" aria-label="Twitter"><span className="fab fa-twitter"></span></a>
                        <a href="https://www.instagram.com" aria-label="Instagram"><span className="fab fa-instagram"></span></a>
                        <a href="https://www.youtube.com" aria-label="YouTube"><span className="fab fa-youtube"></span></a>
                    </div>
                </article>
                <article className="footer-box footer-address">
                    <h2>Address</h2>
                    <div className="footer-container">
                        <div className="footer-place">
                            <span className="fas fa-map-marker-alt"></span>
                            <span className="text">Bhopal, Madhya Pradesh</span>
                        </div>
                        <div className="footer-phone">
                            <span className="fas fa-phone"></span>
                            <span className="text">+91 8964813465</span>
                        </div>
                        <div className="footer-email">
                            <span className="fas fa-envelope"></span>
                            <span className="text">Trevelo123@gmail.com</span>
                        </div>
                    </div>
                </article>
                <article className="footer-box footer-contact">
                    <h2>Contact Us</h2>
                    <form className="footer-form" aria-label="Contact Form">
                        <div className="footer-form-group">
                            <label htmlFor="email">Email </label>
                            <input type="email" className='contactUs_entity' id="email" name="email"  placeholder='Enter E-mail' required />
                        </div>
                        <div className="footer-form-group">
                            <label htmlFor="message">Message </label>
                            <input type='text' id="message" name="message" className='contactUs_entity_message' placeholder='Your message' required /> 
                        </div>
                        <div className="footer-btn">
                            <button id='bt1' type="submit">Send</button>
                        </div>
                    </form>
                </article>
            </section>
            <p className="footer-copyright">
                Copyright &copy; 2024 - All rights reserved
            </p>
        </footer>
    );
}

export default Footer;
