import { GET_DATA } from "../actions/types";
const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DATA:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
};
export default dataReducer;
