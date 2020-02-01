import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import AddColor from "./components/AddColor";
// styles
import "./styles.scss";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path='/bubbles' component={BubblePage}/>
          <PrivateRoute path='/add-color' component={AddColor} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
