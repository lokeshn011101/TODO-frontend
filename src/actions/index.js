import { GET_DATA } from "./types";
import axios from "axios";

export const getData = () => async (dispatch) => {
  const res = await axios.get("http://127.0.0.1:5000/todos/");
  dispatch({ type: GET_DATA, payload: res.data });
};

export const addTask = (dt, txt) => async (dispatch) => {
  const res = await axios.post("http://127.0.0.1:5000/todos/", {
    due_by: dt,
    task: txt,
  });
  dispatch({ type: GET_DATA, payload: res.data });
};

export const deleteTask = (id) => async (dispatch) => {
  const del = await axios.delete(`http://127.0.0.1:5000/todos/${id}`);
  const res = await axios.get("http://127.0.0.1:5000/todos/");
  dispatch({ type: GET_DATA, payload: res.data });
};
