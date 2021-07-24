import React, { useContext } from "react";

import Signup from "../Signup";
import Login from "../Login";
import Profile from "../Profile";
import ForgotPassword from "../ForgotPassword";
import { useAuth } from '../../../contexts/AuthContext';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import UpdateProfile from "../UpdateProfile";
import Home from "../Home"
import Sale from '../../Sale/Sales'


export default function Routes() {
  
  return (
    <>
    
      
        <Switch>
          {/* Drive */}
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Sale} />
        

          {/* Profile */}
          <Route path="/user" component={Profile} />
          <Route path="/update-profile" component={UpdateProfile} />

          {/*Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>

      </>
  );
}
