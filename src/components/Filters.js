import React, { Component } from "react";

class Filters extends Component {
  render() {
    return (
      <div className="filters flex flex-row w-2/6 mx-auto items-center justify-around">
        <div>Filters: </div>
        <button
          className="bg-gray-600 rounded-md px-3 py-1 text-white"
          onClick={() => this.props.history.push("/overdue")}
        >
          Overdue
        </button>
        <button
          className="bg-gray-600 rounded-md px-3 py-1 text-white"
          onClick={() => this.props.history.push("/finished")}
        >
          Finished
        </button>
        <button
          className="bg-gray-600 rounded-md px-3 py-1 text-white"
          onClick={() => this.props.history.push("/due_by")}
        >
          Due By
        </button>
      </div>
    );
  }
}

export default Filters;
