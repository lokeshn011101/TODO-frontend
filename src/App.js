import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
// import Finished from "./components/Finished.js";
// import Overdue from "./components/Overdue.js";
// import DueBy from "./components/DueBy.js";
import "./App.css";
import history from "./history";

class App extends Component {
  render() {
    return (
      <div className="app h-screen">
        <Router history={history}>
          <Route path="/" exact component={Login} />
          {/* <Route path="/home" exact component={Home} /> */}
          {/* <Route path="/finished" exact component={Finished} />
          <Route path="/overdue" exact component={Overdue} />
          <Route path="/due_by" exact component={DueBy} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
