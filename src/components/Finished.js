import React, { Component } from "react";
import Filters from "./Filters";

class Finished extends Component {
  render() {
    return (
      <div>
        <Filters history={this.props.history} />
        Finished
      </div>
    );
  }
}

export default Finished;
