import React from "react";
import Volunteer from "./pages/Volunter/Volunter";
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
        </Switch>
      </div>
    </>
  );
};

export default App;
