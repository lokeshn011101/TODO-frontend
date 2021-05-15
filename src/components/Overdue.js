import React, { Component } from "react";
import Filters from "./Filters";

class Overdue extends Component {
  render() {
    return (
      <div>
        <Filters history={this.props.history} />
        Overdue
      </div>
    );
  }
}

export default Overdue;
