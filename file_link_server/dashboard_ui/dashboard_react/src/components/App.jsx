// React imports
import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// React components
import { Content, Alerts } from "./Layouts";
import { Login, Register } from "./Accounts";
import PrivateRoute from "../common/PrivateRoute.jsx";
// Redux imports
import { Provider } from "react-redux";
import store from "../store";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { loadUser } from "../actions/authAction";
import Error from "./Layouts/404.jsx";

const alert_options = {
  timeout: 3000,
  position: "top center",
  offset: "90px",
};

console.log(store);

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alert_options}>
          <Router>
            <Fragment>
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute path="/dashboard" component={Content} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/404" component={Error} />
                  <Redirect from="*" to="/404" />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
