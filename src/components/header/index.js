import React from "react";
import HeaderTop from "./components/HeaderTop";
import Navbar from "./components/Navbar";
const Header = () => {
  return (
    <>
      <HeaderTop />
      <header className="header">
        <Navbar />
      </header>
    </>
  );
};
export default Header;
