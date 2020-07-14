import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "./Loader.jsx";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.isLoading) {
        return <Loader />;
      } else if (!auth.isAuthenticated && auth.isAuthenticated !== null) {
        return <Redirect from="/dashboard" to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
