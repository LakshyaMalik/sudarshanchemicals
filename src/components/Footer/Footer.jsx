// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from 'react-icons/fa';
import { FaMapLocationDot } from "react-icons/fa6";
import './Footer.css';

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="footer">


      <div className="ptsn">

          <div className="footer-f-section">
          <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/alpha.png?alt=media&token=2078074c-5124-4e5f-a2ce-8fa60db4b9fb" alt="Alpha Sudarshan" />
            <p>
              We strive to lead the industry with unwavering commitment, innovation, and excellence. Our aim is to exceed standards, meet diverse customer needs, and uphold integrity in delivering quality solutions for scientific research and mortuary requirements.
            </p>
          </div>

      </div>

      <div className="ptsn">

          <div className="social-icons">
            <ul>
           <li> <Link to="/enquiry"><FaFacebook /></Link> </li>
           <li> <Link to="https://www.instagram.com/sanjeev7856/?utm_source=ig_web_button_share_sheet&igshid=MmVlMjlkMTBhMg=="><FaInstagram /></Link> </li>
           <li> <Link to="/sudarshanchemicals@gmail.com"><BiLogoGmail /></Link> </li>
           <li> <Link to="/enquiry"><FaMapLocationDot /></Link> </li>
            </ul>
          </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/product">Products</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/enquiry">Enquiry</Link></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact Information</h3>
        <p>Phone: +91 9414188018</p>
        <p>Landline: 0744 2362345</p>
      </div>

      </div>


      <div className="footer-bottom">
        <p>&copy; {currYear} Sudarshan Chemicals</p>
      </div>
    </footer>
  );
};

export default Footer;
