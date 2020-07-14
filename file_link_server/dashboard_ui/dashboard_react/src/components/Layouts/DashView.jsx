import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrClass } from "../../actions/classAction";
import QuickLinks from "./QuickLinks.jsx";
import Schedule from "./Schedule.jsx";

function DashView(props) {
  useEffect(() => {
    props.setCurrClass(props.match.params.dashId);
  }, []);
  if (props.match.params.dashId === "schedule") return <Schedule />;
  if (props.match.params.dashId === "quicklinks") return <QuickLinks />;
}

export default connect(null, { setCurrClass })(DashView);
