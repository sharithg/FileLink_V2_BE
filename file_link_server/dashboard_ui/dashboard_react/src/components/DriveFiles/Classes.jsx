import React, { Component, Fragment } from "react";
// React redux imports
import PropTypes from "prop-types";

import { connect } from "react-redux";
// Action imports
import { getClasses } from "../../actions/classAction";
// To use props
import { Sidebar } from "../Layouts";

class Classes extends Component {
  componentDidMount() {
    getClasses();
  }

  render() {
    return (
      <Fragment>
        <Sidebar classes={this.props} />
      </Fragment>
    );
  }
}

Classes.propTypes = {
  getClasses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  classes: state.classes.classes,
});

export default connect(mapStateToProps, { getClasses })(Classes);
