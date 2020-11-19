import React from "react";
import Volunteer from "./pages/Volunter/Volunter";
import Contact from './pages/contacts/Contact'
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/index";
const App = () => {
  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path={"/volunter"} component={Volunteer} />
          <Route exact path={"/contact"} component={Contact} />

        </Switch>
      </div>
    </>
  );
};

export default App;
