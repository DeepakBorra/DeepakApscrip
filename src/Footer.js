import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LiaFlagUsaSolid } from "react-icons/lia";
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-top">
      <div >
        <h4>BE THE FIRST TO KNOW</h4>
        <p>Sign up for updates from mettà muse.</p>
        <input type="email" placeholder="Enter your email" />
        <button>SUBSCRIBE</button>
        <div>
            <h6>CONTACT US</h6>
            <p>+442211335360</p>
            <p>customercare@metamuse.com</p>
            <h7>CURRENCY</h7>
            <p> <LiaFlagUsaSolid /> USD</p>
            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      </div>
      <div className="footer-links">
        <div className="footer-section">
          <h5>mettà muse</h5>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>QUICK LINKS</h5>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Follow Us</p>
        <div className="social-icons">
          <FaInstagram />
          <CiLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
