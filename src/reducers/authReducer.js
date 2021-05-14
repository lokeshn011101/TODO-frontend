import { AUTH } from "../actions/types";
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH:
      return { ...state };
    default:
      return state;
  }
};
export default authReducer;
