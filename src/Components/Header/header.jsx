import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "./header_responsive.css";

function Header() {
    const [pop, setPop] = useState(false);
    const [price, setPrice] = useState(0); // Start with a default value of 0
    const [person, setPerson] = useState(1); // Initialize person state with 1
    const [destination, setDestination] = useState("");

    // Toggle menu visibility
    function menuClick() {
        document.querySelector("#links_id").classList.toggle("show");
        document.querySelector(".fa-bars").style.display = "none";
        document.querySelector(".fa-xmark").style.display = "block";
    }

    function menuClickx() {
        document.querySelector("#links_id").classList.toggle("show");
        document.querySelector(".fa-bars").style.display = "block";
        document.querySelector(".fa-xmark").style.display = "none";
    }

    // Update person count
    const handlePersonChange = (event) => {
        const newPersonCount = parseInt(event.target.value, 10);
        setPerson(newPersonCount);
    };

    // Update destination and price
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setDestination(selectedValue);
        calculatePrice(selectedValue, person);
    };

    // Calculate the price based on the destination and the number of people
    const calculatePrice = (destination, personCount) => {
        let calculatedPrice = 0;

        switch (destination) {
            case 'Goa':
                calculatedPrice = 22000 * personCount;
                break;
            case 'Ladakh':
                calculatedPrice = 12000 * personCount;
                break;
            case 'Lakshadweep':
                calculatedPrice = 20000 * personCount;
                break;
            case 'Srinagar':
                calculatedPrice = 20000 * personCount;
                break;
            case 'Udaipur':
                calculatedPrice = 18000 * personCount;
                break;
            case 'Varanasi':
                calculatedPrice = 10000 * personCount;
                break;
            default:
                calculatedPrice = 0;
                break;
        }
        setPrice(calculatedPrice);
    };

    // Use useEffect to recalculate the price whenever the person count or destination changes
    useEffect(() => {
        calculatePrice(destination, person);
    }, [person, destination]);

    return (
        <>
            <div id="header">
                <div className="navigation-bar">
                    <div className="nav_list">
                        <h2 id="logo" style={{ marginRight: pop ? "71.8vw" : "0" }}>
                            Travelo<i className="fa-solid fa-plane-departure"></i>
                        </h2>
                        <i className="fa-solid fa-bars _repo_icons" onClick={menuClick}></i>
                        <i className="fa-solid fa-xmark _repo_icons" onClick={menuClickx}></i>
                    </div>
                    <div
                        className="links"
                        id="links_id"
                        style={{ display: pop ? "none" : "block" }}
                    >
                        <Link to="/" className="nav-links">
                            HOME
                        </Link>
                        <Link to="/about" className="nav-links">
                            ABOUT
                        </Link>
                        <Link to="/blogs" className="nav-links">
                            BLOG
                        </Link>
                        <Link to="/contact" className="nav-links">
                            CONTACT
                        </Link>
                        <button id="bt1_header" onClick={() => setPop(true)}>
                            BOOK NOW
                        </button>
                    </div>
                </div>

                <div className="banner_text_para">
                    <h1 id="banner-text">
                        TRAVELLING AROUND <br /> INDIA
                    </h1>
                    <p id="banner-para">
                        Traveling is one of life's greatest joys, offering the chance to explore new cultures, savor exotic cuisines, and immerse yourself in unfamiliar landscapes. Whether you seek adventure, relaxation, or a deeper connection with the world, our travel agency is here to guide you. We provide personalized travel planning and curated experiences tailored to your interests, ensuring every aspect of your trip is smooth and enjoyable. Let us help you create memories that will last a lifetime.
                    </p>
                    <button
                        className="bt-t1"
                        id="bt2"
                        onClick={() => setPop(true)}
                        style={{ display: pop ? "none" : "block" }}
                    >
                        BOOK NOW
                    </button>
                </div>
            </div>

            <form id="booking-main" style={{ display: pop ? "block" : "none" }}>
                <div className="cross" onClick={() => setPop(false)}>
                    X
                </div>
                <div className="inputs">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="inputs">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="inputs">
                    <label htmlFor="people">No of people:</label>
                    <input
                        type="number"
                        name="people"
                        id="people"
                        value={person}
                        min={1}
                        max={10}
                        onChange={handlePersonChange}
                        placeholder="Enter number of people"
                        required
                    />
                </div>
                <div className="inputs">
                    <label htmlFor="city">Destination:</label>
                    <select
                        name="city"
                        id="city"
                        required
                        onChange={handleSelectChange}
                    >
                        <option value="">Select destination</option>
                        <option value="Goa">Goa</option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Srinagar">Srinagar</option>
                        <option value="Udaipur">Udaipur</option>
                        <option value="Varanasi">Varanasi</option>
                    </select>
                    {price !== NaN && price > 0 && <h1>Price: {price}</h1>}
                </div>
                <button id="bt1_popup">Book now</button>
            </form>
        </>
    );
}

export default Header;
