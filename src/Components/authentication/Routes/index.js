import React, { useContext } from "react";

import Signup from "../Signup";
import Login from "../Login";
import Profile from "../Profile";
import ForgotPassword from "../ForgotPassword";
import { AuthProvider } from "../../../contexts/AuthContext";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import UpdateProfile from "../UpdateProfile";
import Home from "../Home";
import Sale from "../../Sale/Sales";
import Attributes from "../../Sale/Attributes";
import AdsList from "../../Sale/AdsList";
import Photos from "../../Sale/Attributes/Photos";

export default function Routes() {
  return (
    <>
      <AuthProvider>
        <Switch>
          {/* Drive */}
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Photos} />
          <Route exact path="/adslist" component={AdsList} />
          <Route exact path="/sale" component={Sale} />
          <Route exact path="/attributes" component={Attributes} />

          {/* Profile */}
          <Route path="/user" component={Profile} />
          <Route path="/update-profile" component={UpdateProfile} />

          {/*Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/:myads" component={AdsList} />
          <Route exact path="/edit/:postId" component={Attributes} />
        </Switch>
      </AuthProvider>
    </>
  );
}
