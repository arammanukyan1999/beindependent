import React, { useEffect, useState } from "react";
import Volunteer from "./pages/Volunter/Volunteer";
import Contact from "./pages/contacts/Contact";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Aside from "./components/aside/Aside";
import "./App.scss";
const App = () => {
  const [classed, setClass] = useState("scrolled");
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 80) {
        setClass("scrolled2");
      } else {
        setClass("scrolled");
      }
    };
  }, []);
  return (
    <>
      <Header />
      <div className={classed}>
        <Aside />
      </div>
      <div className="App">
        <Switch>
          <Route exact path={"/volunteer"} component={Volunteer} />
          <Route exact path={"/contact"} component={Contact} />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
