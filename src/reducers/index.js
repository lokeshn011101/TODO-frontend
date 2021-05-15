import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
  auth: authReducer,
  taskAdd: taskReducer,
  data: dataReducer,
});
