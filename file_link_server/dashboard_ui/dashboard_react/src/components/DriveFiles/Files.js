import React, { Component, Fragment } from "react";
// React redux imports
import { connect } from "react-redux";
// Action imports
import { getFiles } from "../../actions/filesAction";
// To use props
import PropTypes from "prop-types";

import { FileTable } from "../Layouts";

class Files extends Component {
  static propTypes = {
    files: PropTypes.array.isRequired,
    getFiles: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getFiles();
  }
  render() {
    return (
      <Fragment>
        <FileTable files={this.props} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  files: state.files.files,
});

export default connect(mapStateToProps, { getFiles })(Files);
