import { GET_DATA, LOGIN } from "./types";
import axios from "axios";

const baseURL = "https://todo-backend-lokesh.herokuapp.com/todos/";

export const getData = () => async (dispatch) => {
  document.getElementById("lineloader").style.display = "block";
  const res = await axios.get(baseURL);
  dispatch({ type: GET_DATA, payload: res.data });
  document.getElementById("lineloader").style.display = "none";
};

export const addTask = (dt, txt, status) => async (dispatch) => {
  document.getElementById("lineloader").style.display = "block";
  const res = await axios.post(baseURL, {
    due_by: dt,
    task: txt,
    statuss: status,
  });
  dispatch({ type: GET_DATA, payload: res.data });
  document.getElementById("lineloader").style.display = "none";
};

export const deleteTask = (id) => async (dispatch) => {
  document.getElementById("lineloader").style.display = "block";
  await axios.delete(baseURL + `${id}`);
  const res = await axios.get(baseURL);
  dispatch({ type: GET_DATA, payload: res.data });
  document.getElementById("lineloader").style.display = "none";
};

export const updateTaskStatus = (id, status) => async (dispatch) => {
  document.getElementById("lineloader").style.display = "block";
  await axios.put(baseURL + `${id}`, {
    statuss: status,
  });
  const res = await axios.get(baseURL);
  dispatch({ type: GET_DATA, payload: res.data });
  document.getElementById("lineloader").style.display = "none";
};

export const login = (username, password) => async (dispatch) => {
  document.getElementById("lineloader").style.display = "block";
  const res = await axios.post(baseURL + "authenticate", {
    params: {
      username: username,
      password: password,
    },
  });
  dispatch({ type: LOGIN, payload: res.data });
  document.getElementById("lineloader").style.display = "none";
};

export const getDataOd = () => async (dispatch) => {
  document.getElementById("lineloader").style.display = "block";
  const res = await axios.get(baseURL + "overdue");
  dispatch({ type: GET_DATA, payload: res.data });
  document.getElementById("lineloader").style.display = "none";
};

export const getDataFs = () => async (dispatch) => {
  document.getElementById("lineloader").style.display = "block";
  const res = await axios.get(baseURL + "finished");
  dispatch({ type: GET_DATA, payload: res.data });
  document.getElementById("lineloader").style.display = "none";
};

export const getDataDb = (date) => async (dispatch) => {
  document.getElementById("lineloader").style.display = "block";
  console.log(date);
  const res = await axios.get(baseURL + "due", {
    params: {
      due_date: date,
    },
  });
  dispatch({ type: GET_DATA, payload: res.data });
  document.getElementById("lineloader").style.display = "none";
};
