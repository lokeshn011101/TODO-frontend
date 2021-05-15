import React, { Component } from "react";
import Filters from "./Filters";

class DueBy extends Component {
  render() {
    return (
      <div>
        <Filters history={this.props.history} />
        DueBy
      </div>
    );
  }
}

export default DueBy;
