import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import Home from "./components/Home.js";
import "./App.css";
import history from "./history";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route to="/" exact component={Home} />
      </Router>
    );
  }
}

export default App;
