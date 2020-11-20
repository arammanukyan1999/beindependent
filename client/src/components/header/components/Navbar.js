import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <a className="navbar-brand" href="/">
            <img
              src="https://d3n8a8pro7vhmx.cloudfront.net/independentamerica/sites/1/meta_images/original/brandmark-design.png?1598261672"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fa fa-bars"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink exact className="nav-item nav-link" to="/">
                INDEPENDENT America
              </NavLink>
              <NavLink className="nav-item nav-link" to="/join">
                Join
              </NavLink>
              <NavLink className="nav-item nav-link" to="/volunteer">
                Volunteer
              </NavLink>
              <NavLink className="nav-item nav-link" to="/contact">
                Contact
              </NavLink>
              <NavLink className="nav-item nav-link" to="/support">
                Support
              </NavLink>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
