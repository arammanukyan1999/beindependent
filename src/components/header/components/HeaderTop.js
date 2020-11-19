import React from "react";
import "./HeaderTop.scss";
const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
        <div className="header-top-left col-lg-4">
          <form action="#">
            <label htmlFor="singnUp" className="sign-up-txt">
              Join with Email
            </label>
            <input
              type="text"
              className="sign-up-inpt"
              placeholder="name@example.com"
            />
            <button>Sign Up</button>
          </form>
          <span>Or</span>
          <button>Sign In</button>
        </div>
        <div className="header-top-right ">
          <span className="">Or login with:</span>
          <div className="tweet">
            <i class="fa fa-twitter"></i>
          </div>
          <div className="facebook">
            <i class="fa fa-facebook-f"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderTop;
