import React from 'react'
import Volunter from './pages/Volunter'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact={true} path={"/volunter"} component={Volunter} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
