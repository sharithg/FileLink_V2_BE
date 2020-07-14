import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "./Loader.jsx";

const DashRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (
        props.match.params.dashId != "schedule" &&
        props.match.params.dashId != "quicklinks"
      )
        return <Redirect to="/404" />;
      return <Component {...props} />;
    }}
  />
);

export default DashRoute;
