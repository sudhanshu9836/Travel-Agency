import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"
function Header(){
    return(
        <div id='header'>
        <div className="navigation-bar">
            <Link to={"/home"}>
            Home
            </Link>
            <Link to={"/about"}>
                About
            </Link>
            <button id='bt1'>BOOK NOW</button>
        </div>
        </div>
    )
}

export default Header;