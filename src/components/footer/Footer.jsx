import React from "react";
import CustomLink from "../customlink/CustomLink";
import "./Footer.css";


const pages = ["About", "Products & Services", "Contact"];
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <div className="footer-wrapper">
        <div className="footer-description">
          <h2 className="footer-header">About us</h2>
          <div className="footer-description__about">
            <p>
              Josephine Caribbean Restaurant, is an ode to Josephine, a
              wonderful, eccentric, and vibrant woman who was a native of
              British Guiana, now Guyana, and the grandmother of Brian Loe, the
              founder and CEO of the restaurant. It aims to keep her spirit
              alive with a culture that reflects her past life: offering lovely
              food, great drinks, and good vibes. Come and enjoy the true taste
              of Caribbean feels at Josephine Caribbean Restaurant.
            </p>
          </div>
          <div className="footer-description__contact">
            <h2 className="footer-header">Contact Us</h2>
            <address>
              Craft Center, Gigiri Lane,
              <br />
              Nairobi, Kenya.
              <br />
              <a
                href="info@josephinebbq.com"
                style={{ textDecoration: "none", color: "white" }}
              >
                Email: info@josephinebbq.com
              </a>
              <br />
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="tel:+254706089666"
              >
                Phone: +254 706 089666
              </a>
            </address>
          </div>
          <div className="footer-description__quicklinks">
            <h2 className="footer-header">Quick Links</h2>
            <div className="footerLinks">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/products">Products</CustomLink>
              <CustomLink to="/checkout">Checkout</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; {currentYear} Josephine Caribbean BBQ Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    );
}

export default Footer;
