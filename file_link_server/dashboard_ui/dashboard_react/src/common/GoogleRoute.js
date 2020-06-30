import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "./Loader";

const GoogleRoute = ({ component: Component, googleAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!googleAuth.isGoogleAuth || googleAuth.isGoogleAuth === null) {
        return <Redirect to="/dashboard/gauth/googleauth" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  googleAuth: state.google,
});

export default connect(mapStateToProps)(GoogleRoute);
