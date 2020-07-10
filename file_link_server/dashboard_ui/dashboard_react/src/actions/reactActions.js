import { SET_CURRENT_ADD_FILE } from "./types";

export const setCurrentAddFile = (file_type) => (dispatch) => {
  dispatch({ type: SET_CURRENT_ADD_FILE, payload: file_type });
};
