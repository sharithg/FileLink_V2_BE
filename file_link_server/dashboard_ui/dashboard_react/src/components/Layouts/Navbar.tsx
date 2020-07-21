import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/authAction";
import { googleLogout } from "../../actions/googleAction";
import PropTypes from "prop-types";
//MUI
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { IRootState, IAuthState } from "../../actions/types";

interface INavbarProps {
  appBar: string;
  menuButton: string;
  auth: IAuthState;
  handleDrawerToggle: () => void;
  logout: () => void;
  googleLogout: () => void;
}

const Navbar: React.FC<INavbarProps> = (props) => {
  const handleLogout = () => {
    props.logout();
    props.googleLogout();
  };

  const { isAuthenticated, user } = props.auth;
  const auth_links = (
    <div>
      <Typography variant="h6">
        {user ? `Hello, ${user.username}` : ""}
      </Typography>
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
      <AppBar position="fixed" className={props.appBar}>
        <Toolbar>
          {isAuthenticated ? auth_links : guest_links}
          <button onClick={handleLogout}>Logout</button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

const mapStateToProps = (state: IRootState) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout, googleLogout })(Navbar);
