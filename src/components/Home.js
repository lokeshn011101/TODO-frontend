import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, addTask } from "../actions";

class Tasks extends Component {
  render() {
    return (
      <div className="tasks w-5/6 h-5/6 smm:w-full mt-10 mb-2 overflow-scroll">
        {Object.keys(this.props.data).length ? (
          this.props.data.map((el) => {
            return (
              <div
                key={el.id}
                className="old-task h-11 my-2 bg-gray-400 text-white rounded-sm smm:px-2 px-4 flex flex-row items-center"
              >
                {el.task}
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    );
  }
}

class Home extends Component {
  state = { formiptxt: "", formipdt: "" };
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  componentDidMount() {
    this.props.getData();
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.formipdt, this.state.formiptxt);

    this.props.addTask(this.state.formipdt, this.state.formiptxt);

    this.setState({ formipdt: "", formiptxt: "" });
    this.formRef.reset();
  };

  render() {
    const today = new Date();
    return (
      <div className="home-container p-5 h-screen flex flex-col justify-between items-center">
        <div className="date-and-profile w-full h-12 flex flex-row justify-between">
          <div className="title-div">
            <h1 className="title text-3xl md:text-4xl">Todo</h1>
            <h3 className="subtitle">{today.toDateString()}</h3>
          </div>
          <div className="profile mr-2">Profile</div>
        </div>

        <Tasks data={this.props.data} />

        <div className="new-task h-11 w-5/6 smm:w-full bg-gray-600 text-white rounded-sm smm:px-2 px-4 flex flex-row items-center">
          <form
            onSubmit={(e) => this.onSubmit(e)}
            className="flex flex-row justify-between w-full"
            ref={(el) => (this.formRef = el)}
          >
            <input
              className=" tasks-input w-full h-full bg-gray-600 text-white outline-none"
              type="text"
              placeholder="+ Add a task"
              id="tasks-ip"
              autoComplete="off"
              onChange={(e) => this.setState({ formiptxt: e.target.value })}
            />
            <input
              type="date"
              id="due_by"
              name="due_by"
              className="task-date-ip bg-gray-600 text-gray-600 outline-none"
              placeholder="Due Date"
              onChange={(e) => this.setState({ formipdt: e.target.value })}
            />
            <input
              type="submit"
              className="form-submit bg-transparent rounded cursor-pointer pl-10"
              value="✅"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: Object.values(state.data) };
};

export default connect(mapStateToProps, { getData, addTask })(Home);
