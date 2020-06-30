import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
	static propTypes = {
		error: PropTypes.object.isRequired,
		message: PropTypes.object.isRequired,
	};

	componentDidUpdate(prevProps) {
		const { error, alert, message } = this.props;
		if (error !== prevProps.error) {
			if (error.message.file_id)
				alert.error(`ID: ${error.message.file_id.join()}`);
			else if (error.message.file_type)
				alert.error(`Type: ${error.message.file_type.join()}`);
			else if (error.message.file_name)
				alert.error(`Name: ${error.message.file_name.join()}`);
			else if (error.message.file_view_link)
				alert.error(`View Link: ${error.message.file_view_link.join()}`);
			else if (error.message.file_icon_link)
				alert.error(`Icon Link: ${error.message.file_icon_link.join()}`);
			else if (error.message.non_field_errors)
				alert.error(`Login Error: ${error.message.non_field_errors.join()}`);
			else if (error.message.username)
				alert.error(`Login Error: ${error.message.username.join()}`);
		}
		if (message !== prevProps.message) {
			console.log("HEREEEEE");
			if (message.file_added) alert.success(message.file_added);
			else if (message.file_deleted) alert.success(message.file_deleted);
			else if (message.passwordNotMatch)
				alert.error(`Register Error: ${message.passwordNotMatch}`);
		}
	}

	render() {
		return <Fragment />;
	}
}

const mapStateToProps = (state) => {
	return {
		error: state.errors,
		message: state.messages,
	};
};

export default connect(mapStateToProps)(withAlert()(Alerts));
