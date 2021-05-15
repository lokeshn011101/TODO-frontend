import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import Home from "./Home";

class Login extends Component {
  state = { uname: "", pwd: "" };
  constructor(props) {
    super(props);
    this.lform = React.createRef();
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.uname, this.state.pwd);
    this.props.login(this.state.uname, this.state.pwd);
    this.setState({ uname: "", ped: "" });
    this.lform.current.reset();
  };

  render() {
    console.log(this.props.auth);
    if (this.props.auth === "Admin") return <Home user="Admin" />;
    else if (this.props.auth === "User") return <Home user="User" />;
    else {
      return (
        <div className="login-screen flex flex-row justify-center items-center h-screen w-screen">
          <div className="border-gray-300 rounded-md border-2 lg:w-2/6 md:w-3/6 w-5/6 p-8">
            <div className="flex flex-col mb-8">
              <div className="login-tit text-4xl">TODO App</div>
              <div className="desc text-sm">
                Login to manage all your daily tasks in one single place
              </div>
            </div>
            <form
              className="lg-form flex flex-col justify-center"
              onSubmit={(e) => this.onFormSubmit(e)}
              ref={this.lform}
            >
              <div className="uname flex flex-col mb-4">
                <label htmlFor="un" className="text-lg">
                  Username:
                </label>
                <input
                  placeholder="Enter your Username"
                  className="outline-none"
                  type="text"
                  id="un"
                  autoComplete="off"
                  onChange={(e) => this.setState({ uname: e.target.value })}
                />
              </div>
              <div className="pwd flex flex-col">
                <label htmlFor="pw" className="text-lg">
                  Password:
                </label>
                <input
                  placeholder="Enter your Password"
                  type="password"
                  id="pw"
                  className="outline-none"
                  autoComplete="off"
                  onChange={(e) => this.setState({ pwd: e.target.value })}
                />
              </div>
              <div className="fsubmit mx-auto">
                <input
                  id="submit"
                  type="submit"
                  value="Login!"
                  placeholder="Login!"
                  className="w-20 h-10 mt-4"
                />
              </div>
            </form>
            {this.props.auth === "Failure" ? (
              <div className="w-full">
                <div className="failure text-red-500 mx-auto -mb-2 mt-3 w-full text-center">
                  Incorrect Username or Password!
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { login })(Login);
