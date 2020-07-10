import { SET_CURRENT_ADD_FILE } from "../actions/types";

const initialState = {
  current_add_file: null,
};

const reactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ADD_FILE:
      return {
        ...state,
        current_add_file: action.payload,
      };
    default:
      return state;
  }
};

export default reactReducer;
