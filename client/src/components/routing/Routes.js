import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile-form/CreateProfile";
import EditProfile from "../profile-form/EditProfile";
import AddExperience from "../profile-form/AddExperience";
import AddEducation from "../profile-form/AddEducation";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import NotFound from "../layout/NotFound";

import Privateroute from "../routing/Privateroute";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <Privateroute exact path="/dashboard" component={Dashboard} />
        <Privateroute exact path="/create-profile" component={CreateProfile} />
        <Privateroute exact path="/edit-profile" component={EditProfile} />
        <Privateroute exact path="/add-experience" component={AddExperience} />
        <Privateroute exact path="/add-education" component={AddEducation} />
        <Privateroute exact path="/posts" component={Posts} />
        <Privateroute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
