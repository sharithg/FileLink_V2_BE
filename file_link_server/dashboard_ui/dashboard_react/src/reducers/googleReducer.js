import { GOOGLE_AUTH, LOGOUT_GOOGLE } from "../actions/types";

const initialState = {
  isGoogleAuth: null,
};

function googleReducer(state = initialState, action) {
  switch (action.type) {
    case GOOGLE_AUTH:
      return {
        ...state,
        isGoogleAuth: true,
      };
    case LOGOUT_GOOGLE:
      return { ...state, isGoogleAuth: false };
    default:
      return state;
  }
}

export default googleReducer;
