import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "./Loader.jsx";

const GoogleRoute = ({ component: Component, googleAuth, files, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!googleAuth.isGoogleAuth || googleAuth.isGoogleAuth === null) {
        return <Redirect to="/dashboard/gauth/googleauth" />;
      } else if (files.isLoading) {
        return <Loader />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  googleAuth: state.google,
  files: state.files,
});

export default connect(mapStateToProps)(GoogleRoute);
