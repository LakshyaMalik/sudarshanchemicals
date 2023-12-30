// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from 'react-icons/fa';
import { FaMapLocationDot } from "react-icons/fa6";
import './footer.css';

const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <footer className="footer">


      <div className="ptsn">

          <div className="footer-f-section">
          <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FAlpha-logo.jpeg?alt=media&token=6f63a0e5-a172-4340-aa2f-959b212c7b73" alt="Alpha Sudarshan" />
          <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FALPSUD-logo.jpg?alt=media&token=873fff38-62f5-4740-855b-f5392d7063de" alt="ALPSUD" />
          <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/sudrshanchemicals.appspot.com/o/other-assets%2FALNKOTA-logo.jpg?alt=media&token=223c2579-5018-47fa-972c-9550f8562835" alt="Aln Kota" />
            <p>
              We strive to lead the industry with unwavering commitment, innovation, and excellence. Our aim is to exceed standards, meet diverse customer needs, and uphold integrity in delivering quality solutions for scientific research and mortuary requirements.
            </p>
          </div>

      </div>

      <div className="ptsn">

          <div className="social-icons">
            <ul>
           <li> <a href="/enquiry"><FaFacebook /></a> </li>
           <li> <a href="https://www.instagram.com/sanjeev7856/?utm_source=ig_web_button_share_sheet&igshid=MmVlMjlkMTBhMg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> </li>
           <li> <a href="mailto:sudarshanchemicals@gmail.com"><BiLogoGmail /></a> </li>
           <li> <a href="https://maps.app.goo.gl/dZbREF94P3qK9DQRA" target="_blank" rel="noopener noreferrer"><FaMapLocationDot /></a> </li>
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
