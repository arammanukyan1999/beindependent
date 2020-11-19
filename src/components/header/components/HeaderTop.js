import React from "react";
import "./HeaderTop.scss";
const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
        <div className="header-top-left ">
          <form action="#">
            <label htmlFor="singnUp" className="sign-up-txt">
              Join with Email
            </label>
            <input
              type="text"
              className="sign-up-inpt"
              placeholder="name@example.com"
            />
            <button className="sign-up-btn">Sign Up</button>
            <span>Or</span>
            <button className="sign-in-btn">Sign In</button>
          </form>
        </div>
        <div className="header-top-right ">
          <span className="">Or login with:</span>
          <div className="tweet">
            <i className="fa fa-twitter"></i>
          </div>
          <div className="facebook">
            <i className="fa fa-facebook-f"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderTop;
