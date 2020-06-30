import axios from "axios";
import { returnErrors } from "./messagesAction";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

// Check the token and load user
export const loadUser = () => (dispatch, getState) => {
  //User loadig
  dispatch({ type: USER_LOADING });

  axios
    .get("http://127.0.0.1:8000/api/auth/user/", tokenConfig(getState))
    .then((res) => {
      dispatch({ type: USER_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

export const login = (username, password) => (dispatch) => {
  // headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //request body
  const body = JSON.stringify({ username, password });
  console.log(username, password);

  axios
    .post("http://127.0.0.1:8000/api/auth/login/", body, config)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAIL });
    });
};

export const registerUser = ({ username, password, email }) => (dispatch) => {
  // headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //request body
  const body = JSON.stringify({ username, password, email });

  axios
    .post("http://127.0.0.1:8000/api/auth/register/", body, config)
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: REGISTER_FAIL });
    });
};

export const logout = () => (dispatch, getState) => {
  //User loadig
  dispatch({ type: USER_LOADING });

  axios
    .post("http://127.0.0.1:8000/api/auth/logout/", null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// const checkAuth = () => (dispatch, getState) => {};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;

  // headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //if token is present, add to header
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
