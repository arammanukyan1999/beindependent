import React from "react";
import "./FooterBottom.scss";
import { NavLink } from "react-router-dom";
const FooterBottom = () => {
  return (
    <>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="items-foot">
            <div>
              <NavLink to="/" className="rightLink">
                INDEPENDENT America
              </NavLink>
            </div>
            <div>
              <NavLink to="/join" className="midLink">
                Join
              </NavLink>
            </div>

            <NavLink to="/">Volunteer</NavLink>
          </div>
          <div className="items-foot">
            <NavLink to="/">Contact</NavLink>
            <NavLink to="/">Support</NavLink>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="footer-bottom-container">
          <p>
            Sign in with <a href="https://facebook.com">Facebook</a>,{" "}
            <a href="https://facebook.com">Twitter</a> or{" "}
            <a href="https://facebook.com">email</a>.
          </p>
          <p>
            Created with <a href="https://facebook.com">NationBuilder</a>, Theme
            by -<a href="https://facebook.com">Tectonica</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
