import { ADD_TASK } from "../actions/types";
const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
};
export default taskReducer;
