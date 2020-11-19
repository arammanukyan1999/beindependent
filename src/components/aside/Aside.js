import React from "react";
import "./Aside.scss";
const Aside = () => {
  return (
    <>
      <div className="aside-body">
        <div className="circlebody">
          <div className="circle1">
            <i class="fa fa-facebook-f"></i>
          </div>
          <p>Sign in with Facebook</p>
        </div>
        <div className="circlebody">
          <div className="circle2">
            <i class="fa fa-twitter"></i>
          </div>
          <p>Sign in with Twitter</p>
        </div>
        <div className="circlebody">
          <div className="circle3">
            <i class="fa fa-envelope"></i>
          </div>
          <p>Sign in with Email</p>
        </div>
      </div>
    </>
  );
};
export default Aside;
