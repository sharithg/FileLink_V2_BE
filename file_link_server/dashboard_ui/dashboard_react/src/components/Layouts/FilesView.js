import React, { Fragment, useEffect } from "react";
import { Files, AddFile } from "../DriveFiles";
import { connect } from "react-redux";
import { setCurrClass } from "../../actions/classAction";

function FilesView(props) {
  useEffect(() => {
    props.setCurrClass(props.match.params.classId);
  }, []);
  return (
    <Fragment>
      <AddFile />
      <Files match={props.match} />
    </Fragment>
  );
}
export default connect(null, { setCurrClass })(FilesView);
