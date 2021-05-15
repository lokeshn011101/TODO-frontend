import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, addTask, deleteTask } from "../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Tasks from "./Tasks";
import Filters from "./Filters";
import Header from "./Header.js";

class Home extends Component {
  state = { formiptxt: "", formipdt: "" };
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.formIpDate = React.createRef();
    this.formIp = React.createRef();
  }
  componentDidMount() {
    this.props.getData();
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.formipdt, this.state.formiptxt);
    this.setState({ formipdt: "", formiptxt: "" });
    this.formRef.reset();
  };

  onDelete = (e) => {
    if (e.target.tagName === "svg")
      this.props.deleteTask(parseInt(e.target.parentElement.id));
    else
      this.props.deleteTask(parseInt(e.target.parentElement.parentElement.id));
  };
  onEdit = (e) => {
    let task, dt, id;
    if (e.target.tagName === "svg") {
      id = e.target.parentElement.id;
      dt = e.target.parentElement.firstChild.childNodes[1];
      task = e.target.parentElement.firstChild.childNodes[0];
    } else {
      id = e.target.parentElement.parentElement.id;
      dt = e.target.parentElement.parentElement.firstChild.childNodes[1];
      task = e.target.parentElement.parentElement.firstChild.childNodes[0];
    }
    this.formIp.current.value = task.outerText;
    this.formIpDate.current.value = dt.outerText;
    this.setState({ formiptxt: task.outerText });
    this.setState({ formipdt: dt.outerText });
    this.props.deleteTask(id);
  };
  render() {
    return (
      <>
        <Header />
        <div className="home-container p-5 pt-0 flex flex-col justify-between items-center">
          <Filters history={this.props.history} />
          <Tasks
            user={this.props.user}
            data={this.props.data}
            onDelete={this.onDelete}
            onEdit={this.onEdit}
          />

          {this.props.user === "Admin" ? (
            <div className="new-task h-14 w-5/6 smm:w-full bg-gray-600 text-white rounded-sm smm:px-2 px-4 flex flex-row items-center">
              <form
                onSubmit={(e) => this.onSubmit(e)}
                className="flex flex-row justify-between w-full"
                ref={(el) => (this.formRef = el)}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="h-full pt-1 text-gray-300"
                />
                <input
                  ref={this.formIp}
                  className=" tasks-input w-full h-full bg-gray-600 text-white outline-none pl-4"
                  type="text"
                  placeholder=" Add a task"
                  id="tasks-ip"
                  autoComplete="off"
                  onChange={(e) => this.setState({ formiptxt: e.target.value })}
                />
                <input
                  ref={this.formIpDate}
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
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: Object.values(state.data) };
};

export default connect(mapStateToProps, { getData, addTask, deleteTask })(Home);
