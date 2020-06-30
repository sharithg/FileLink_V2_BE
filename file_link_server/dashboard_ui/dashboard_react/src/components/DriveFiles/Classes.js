import React, { Component, Fragment } from "react";
// React redux imports
import { connect } from "react-redux";
// Action imports
import { getClasses } from "../../actions/classAction";
// To use props
import PropTypes from "prop-types";

import { Sidebar } from "../Layouts";

class Classes extends Component {
	static propTypes = {
		classes: PropTypes.array.isRequired,
		getClasses: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.getClasses();
	}

	render() {
		return (
			<Fragment>
				<Sidebar classes={this.props} />
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	classes: state.classes.classes,
});

export default connect(mapStateToProps, { getClasses })(Classes);
