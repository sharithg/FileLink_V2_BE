import { GOOGLE_AUTH, LOGOUT_GOOGLE } from "./types";
import axios from "axios";
import { returnErrors } from "./messagesAction";
import { tokenConfig } from "./authAction";

export const isAuthGoogle = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/is_google_auth/", tokenConfig(getState))
    .then((res) => {
      console.log(res);
      if (res.data) {
        dispatch({ type: GOOGLE_AUTH });
      }
    })
    .catch((err) => console.log(err));
};

var opened;
export const googleAuth = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/authorize/", tokenConfig(getState))
    .then((res) => {
      console.log(res.data);
      opened = window.open(
        res.data.redirect,
        "Authenticate",
        "height=600,width=600"
      );
      var popupTick = setInterval(function () {
        // if (opened.closed) {
        // clearInterval(popupTick);
        axios
          .get("http://127.0.0.1:8000/in_auth_flow/", tokenConfig(getState))
          .then((res) => {
            if (res.data.inflow === "False" || opened.closed) {
              if (!opened.closed) opened.close();
              axios
                .get(
                  "http://127.0.0.1:8000/is_google_auth/",
                  tokenConfig(getState)
                )
                .then((res) => {
                  if (res.data) {
                    dispatch({ type: GOOGLE_AUTH });
                    clearInterval(popupTick);
                  }
                  clearInterval(popupTick);
                })
                .catch((err) => console.log(err));
            }
          })
          .catch((err) => console.log(err));
        // }
      }, 100);
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const googleLogout = () => (dispatch) => {
  dispatch({ type: LOGOUT_GOOGLE });
};

if (opened) {
  opened.addEventListener(
    "message",
    function (e) {
      console.log(e.data); //e.data is the string message that was sent.
    },
    true
  );
}
