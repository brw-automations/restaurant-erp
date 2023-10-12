import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import CustomLink from "../customlink/CustomLink";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="navbar-links_container">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/products">Products</CustomLink>
          <CustomLink to="/checkout">Checkout</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </div>
      </div>
      <div className="navbar-sign">
        <CustomLink to="/auth">Sign in</CustomLink>
        <CustomLink to="/auth">
          <button type="button">Sign up</button>
        </CustomLink>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            className="nav_btn"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="nav_btn"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container slide-fwd-center">
            <div className="navbar-menu_container-links">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/products">Products</CustomLink>
              <CustomLink to="/checkout">Checkout</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
            </div>
            <div className="navbar-menu_container-links-sign">
              <CustomLink to="/auth" >Sign in</CustomLink>
              
              <CustomLink to="/auth">
                <button type="button">Sign up</button>
              </CustomLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
