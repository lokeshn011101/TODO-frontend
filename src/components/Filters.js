import React, { Component } from "react";

class Filters extends Component {
  render() {
    return (
      <div className="filters flex flex-row md:w-3/6 sm:w-4/6 w-full mx-auto items-center justify-around">
        <div>Filters: </div>

        {this.props.one === "Due By" ? (
          <div className="w-2/6">
            <span>Due By</span>
            <input
              ref={this.formIpDate}
              type="date"
              id="due_by"
              name="due_by"
              className="task-date-ip w-full bg-gray-600 outline-none text-white rounded-sm px-2"
              placeholder="Due Date"
              onChange={(e) => {
                console.log(e);
                this.props.onFilter(this.props.one, e.target.value);
              }}
            />
          </div>
        ) : (
          <button
            className="bg-gray-600 rounded-sm px-3 py-1 text-white"
            onClick={() => this.props.onFilter(this.props.one)}
          >
            {this.props.one}
          </button>
        )}

        {this.props.two === "Due By" ? (
          <div className="w-2/6">
            <div className="w-20 inline">Due By</div>
            <input
              ref={this.formIpDate}
              type="date"
              id="due_by"
              name="due_by"
              className="task-date-ip w-full bg-gray-600 outline-none text-white rounded-sm px-2"
              placeholder="Due Date"
              onChange={(e) => {
                console.log(e);
                this.props.onFilter(this.props.two, e.target.value);
              }}
            />
          </div>
        ) : (
          <button
            className="bg-gray-600 rounded-sm px-3 py-1 text-white"
            onClick={() => this.props.onFilter(this.props.two)}
          >
            {this.props.two}
          </button>
        )}
        {this.props.three === "Due By" ? (
          <div className="w-2/6">
            <span>Due By</span>
            <input
              ref={this.formIpDate}
              type="date"
              id="due_by"
              name="due_by"
              className="task-date-ip w-full bg-gray-600 outline-none text-white rounded-sm px-2"
              placeholder="Due Date"
              onChange={(e) => {
                this.props.onFilter(this.props.three, e.target.value);
              }}
            />
          </div>
        ) : (
          <button
            className="bg-gray-600 rounded-sm px-3 py-1 text-white"
            onClick={(e) => this.props.onFilter(this.props.three)}
          >
            {this.props.three}
          </button>
        )}
      </div>
    );
  }
}

export default Filters;
