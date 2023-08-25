import React from "react";
import { Link } from "react-router-dom";
import { app, logo, pay, play } from "../img";
import "./footer.css";
const Footer = () => {
  return (
    // <div className="footer">
    //   <h4 className="text-center"> All Rights Reserved &copy; Shoppad </h4>
    //   <p className="text-center mt-2">
    //     <Link to="/about"> About</Link>|<Link to="/contact">Contact </Link>|
    //     <Link to="/policy">Privacy & Policy </Link>
    //   </p>
    // </div>

    <>
      <footer className="section-p1">
        <div className="col">
          <img src={logo} style={{ marginBottom: "3rem" }} alt="ok" />
          <p>
            <strong>Address:</strong> Block "R" North Nazmabad
          </p>
          <p>
            <strong>Phone:</strong> 03198167101 /
          </p>
          <p>
            <strong>Hours:</strong> 10:00-18:00.Mon-Sat
          </p>
          <div className="follow">
            <h4>Follow Us</h4>
            <div className="icon">
              <i className="fab fa-facebook-f" />
              <i className="fab fa-twitter" />
              <i className="fab fa-instagram" />
              <i className="fab fa-pinterest-p" />
              <i className="fab fa-youtube" />
            </div>
          </div>
        </div>
        <div className="col1">
          <h4>About</h4>
          <Link to="/" />
          About Us
          <Link to="/" />
          Delivery Information
          <Link to="/" />
          Privicy &amp; Policy
          <Link to="/" />
          Contact Us
        </div>
        <div className="col1">
          <h4>My Account</h4>
          <Link to="/" />
          Sign In
          <Link to="/" />
          View Cart
          <Link to="/" />
          My wistlist
          <Link to="/" />
          Track My Order
          <Link to="/" />
          Help
        </div>
        <div className="col install">
          <h4>Install App</h4>
          <p>Form App Store or Google Play</p>
          <div className="footer-row">
            <img src={app} alt="ok" />
            <img src={play} alt="ok" />
          </div>
          <p>Payment GatWay</p>
          <img src={pay} alt="ok" />
        </div>
        <div className="copyright">
          <hr />
          <p>
            E-Commerce App and all related logos are trademarks of E-Commerce.
            All other trademarks and copyrights are the property of their
            respective owners.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
