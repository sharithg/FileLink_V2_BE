import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrClass } from "../../actions/classAction";
import { getFiles } from "../../actions/filesAction";
import PropTypes from "prop-types";
import FileTable from "./FileTable.jsx";

function ClassView(props) {
  ClassView.propTypes = {
    files: PropTypes.array.isRequired,
    getFiles: PropTypes.func.isRequired,
  };

  useEffect(() => {
    props.getFiles();
  }, []);
  return (
    <Fragment>
      <FileTable files={props.files.files} />
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  files: state.files.files,
});

export default connect(mapStateToProps, { getFiles })(ClassView);
