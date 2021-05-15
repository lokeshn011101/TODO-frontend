import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    console.log(this.props);
    const today = new Date();
    return (
      <div className="header p-5 h-20">
        <div className="date-and-profile w-full flex flex-row justify-between">
          <div className="title-div">
            <h1 className="title text-3xl md:text-4xl">Todo</h1>
            <h3 className="subtitle">{today.toDateString()}</h3>
          </div>
          <div className="profile mr-2">Profile</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Header);
