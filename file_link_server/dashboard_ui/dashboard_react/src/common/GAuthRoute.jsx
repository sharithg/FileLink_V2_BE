import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const GAuthRoute = ({
  component: Component,
  googleAuth,
  current_class,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!googleAuth.isGoogleAuth || googleAuth.isGoogleAuth === null) {
        return <Component {...props} />;
      } else {
        return <Redirect to="/dashboard/schedule" />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  googleAuth: state.google,
  current_class: state.classes.current_class,
});

export default connect(mapStateToProps)(GAuthRoute);
