import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"
function Header(){
    return(
        <div id='header'>
        <div className="navigation-bar">
            <h2 id='logo'>Travalo<i class="fa-solid fa-plane-departure"></i></h2>
            <div className="links">
            <Link to={"/"} className='nav-links'>
            HOME
            </Link>
            <Link to={"/about"} className='nav-links'>
                ABOUT
            </Link>
            <Link  className='nav-links'>
                BLOG
            </Link>
            <Link  className='nav-links'>
                CONTACT
            </Link>
            </div>
            <button className='bt-t1' id='bt1'>BOOK NOW</button>
        </div>
            <h1 id='banner-text'>TRAVELLING AROUND <br /> INDIA</h1> <br /><br />
            <p id='banner-para'>Traveling is one of life's greatest joys, offering the chance to explore
                new cultures, savor exotic cuisines, and immerse yourself in unfamiliar
                landscapes. Whether you seek adventure, relaxation, or a deeper connection
                with the world, our travel agency is here to guide you.We provide 
                personalized travel planning and curated experiences tailored to your 
                interests, ensuring every aspect of your trip is smooth and enjoyable. 
                With our expertise, you can focus on soaking in the beauty and wonder of 
                your journey, knowing that all the details are taken care of. 
                Let us help you create memories that will last a lifetime.</p>
                <button className='bt-t1' id='bt2'>Read More</button>
        </div>
    )
}

export default Header;