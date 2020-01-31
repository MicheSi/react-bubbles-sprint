import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Login from "./components/Login";
// styles
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
