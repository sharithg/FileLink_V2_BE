import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { googleAuth } from "../../actions/googleAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));



function Auth(props) {
	Auth.propTypes = {
		googleAuth: PropTypes.func.isRequired,
	};
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Button variant="outlined" onClick={() => props.googleAuth()}>
				Link to google drive
			</Button>
		</div>
	);
}

export default connect(null, { googleAuth })(Auth);
