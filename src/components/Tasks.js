import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

class Tasks extends Component {
  render() {
    const color = {
      not_started: "bg-red-500",
      in_progress: "bg-yellow-500",
      finished: "bg-green-500",
    };
    return (
      <div className="tasks w-5/6 smm:w-full mt-2 mb-2 overflow-scroll">
        {Object.keys(this.props.data).length ? (
          this.props.data.map((el) => {
            return (
              <div
                key={el.id}
                id={el.id}
                className={`old-task h-16 my-2 ${
                  color[el.statuss]
                } text-white rounded-sm smm:px-2 px-4 flex flex-row items-center`}
              >
                <div className="flex flex-col justify-center items-start old-task h-11 text-white smm:px-2 px-3">
                  <div className="flex flex-row justify-center text-xl">
                    {el.task}
                  </div>
                  <div className="flex flex-row justify-center text-xs text-gray-200">
                    {el.due_by}
                  </div>
                </div>
                {this.props.user === "Admin" ? (
                  <>
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      className="m-3 cursor-pointer"
                      onClick={(e) => this.props.onEdit(e)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="m-3 cursor-pointer"
                      onClick={(e) => this.props.onDelete(e)}
                    />
                  </>
                ) : (
                  <></>
                )}
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

export default Tasks;
