import React from "react";
import Volunteer from "./pages/Volunter/Volunter";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/index";
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact={true} path={"/volunter"} component={Volunteer} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
