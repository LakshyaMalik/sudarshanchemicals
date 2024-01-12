import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { SiInstagram } from "react-icons/si";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`navbar ${isOpen ? 'open' : ''}`}>
            <input type="checkbox" id="menu-toggle" onChange={toggleMenu} />
            <label htmlFor="menu-toggle" className={`hamburger`}>
                {!isOpen ? <RxHamburgerMenu /> : <RxCross2 />}
            </label>

            <div className={`link ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About US</li></Link>
                    <Link to="/product"><li>Products</li></Link>
                    <Link to="/Certificates"><li>Certificates</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                    <Link to="/enquiry"><li>Enquiry</li></Link>
                    <li id="social">
                        <h4>
                        <a href="https://www.instagram.com/sanjeev7856/?utm_source=ig_web_button_share_sheet&igshid=MmVlMjlkMTBhMg==" target="_blank" rel="noopener noreferrer"><SiInstagram /></a></h4>
                    </li>
                </ul>
            </div>
        </div>
    );
};
