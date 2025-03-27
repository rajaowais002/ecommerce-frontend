import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="Subscription">
                <h2>Subscribe to our emails</h2>
                <p>Subscribe to our mailing list for insider news, product launches, and more.</p>
                <form className="subscribe-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="footer-content">
                <div className='footer-2'>
                    <h2>RAJA MOBILES</h2>
                </div>
                <div className="footer-section">
                    <h3>Quick links</h3>
                    <ul>
                        <li><a href="/search">Search</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/return-refund-policy">Return and Refund Policy</a></li>
                        <li><a href="/terms-conditions">Terms & Conditions</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Info</h3>
                    <ul>
                        <li><a href="/faqs">FAQ’s</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Talk to us</h3>
                    <p>Monday-Saturday: 10am-10pm PST</p>
                    <p>Call Us at: +92 332 2461767</p>
                    <p>Customer Support: rajaowais002@gmail.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025. Raja Mobiles Powered by Shopify</p>
            </div>
        </footer>
    );
};

export default Footer;