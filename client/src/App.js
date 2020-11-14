import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
import AddExperience from "./components/profile-form/AddExperience";

import AddEducation from "./components/profile-form/AddEducation";
import Privateroute from "./components/routing/Privateroute";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Privateroute exact path="/dashboard" component={Dashboard} />
              <Privateroute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <Privateroute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              <Privateroute
                exact
                path="/add-experience"
                component={AddExperience}
              />
              <Privateroute
                exact
                path="/add-education"
                component={AddEducation}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
