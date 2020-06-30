import {
  GET_CLASSES,
  DELETE_CLASS,
  ADD_CLASS,
  SET_CURR_CLASS,
  CLASSES_LOADED,
} from "../actions/types";

const initialState = {
  classes: [],
  current_class: null,
  classes_loaded: false,
};

function classesReducer(state = initialState, action) {
  switch (action.type) {
    case CLASSES_LOADED:
      return {
        ...state,
        classes_loaded: action.payload,
      };
    case GET_CLASSES:
      return {
        ...state,
        classes: action.payload,
      };
    case DELETE_CLASS:
      return {
        ...state,
        classes: state.classes.filter(
          (oneclass) => oneclass.id !== action.payload
        ),
      };
    case ADD_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload],
      };
    case SET_CURR_CLASS:
      return {
        ...state,
        current_class: action.payload,
      };
    default:
      return state;
  }
}

export default classesReducer;
