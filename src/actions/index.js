import { GET_DATA, LOGIN } from "./types";
import axios from "axios";

const baseURL = "https://todo-backend-lokesh.herokuapp.com/todos/";

export const getData = () => async (dispatch) => {
  const res = await axios.get(baseURL);
  dispatch({ type: GET_DATA, payload: res.data });
};

export const addTask = (dt, txt) => async (dispatch) => {
  const res = await axios.post(baseURL, {
    due_by: dt,
    task: txt,
  });
  dispatch({ type: GET_DATA, payload: res.data });
};

export const deleteTask = (id) => async (dispatch) => {
  await axios.delete(baseURL + `${id}`);
  const res = await axios.get(baseURL);
  dispatch({ type: GET_DATA, payload: res.data });
};

export const login = (username, password) => async (dispatch) => {
  const res = await axios.post(baseURL + "authenticate", {
    params: {
      username: username,
      password: password,
    },
  });
  dispatch({ type: LOGIN, payload: res.data });
};
