import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/authAction";
import { googleLogout } from "../../actions/googleAction";
import PropTypes from "prop-types";
//MUI
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  handleLogout = (event) => {
    this.props.logout();
    this.props.googleLogout();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const auth_links = (
      <div>
        <h4>{user ? `Hello: ${user.username}` : ""}</h4>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
    const guest_links = (
      <div>
        <Typography variant="h6" noWrap>
          Register
        </Typography>
        <Typography variant="h6" noWrap>
          Login
        </Typography>
      </div>
    );
    return (
      <Fragment>
        <AppBar position="fixed" className={this.props.classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={this.props.handleDrawerToggle}
              className={this.props.classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Responsive drawer
            </Typography>
            {isAuthenticated ? auth_links : guest_links}
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, googleLogout })(Navbar);
