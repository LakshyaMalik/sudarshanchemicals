import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { SlSocialFacebook } from "react-icons/sl";
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/product">Products</Link></li>
                    <li><Link to="/Certificates">Certificates</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/enquiry">Enquiry</Link></li>
                    <li id="social">
                        <h4><a href="https://www.facebook.com/profile.php?id=100010836252495" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.instagram.com/sanjeev7856/?utm_source=ig_web_button_share_sheet&igshid=MmVlMjlkMTBhMg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></h4>
                    </li>
                </ul>
            </div>
        </div>
    );
};
