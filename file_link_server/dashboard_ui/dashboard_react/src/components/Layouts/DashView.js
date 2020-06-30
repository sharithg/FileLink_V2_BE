import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrClass } from "../../actions/classAction";

function DashView(props) {
  useEffect(() => {
    props.setCurrClass(props.match.params.dashId);
  }, []);
  return <h1>Sch and QL</h1>;
}

export default connect(null, { setCurrClass })(DashView);
