import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as Constants from "./config/Constants";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";

const Routes = () => {
  return (
    <Switch>
      <Route path={Constants.ROUTE_USERS} component={Users} />
      <Route path={Constants.ROUTE_CREATE_USERS} component={CreateUser} />
      <Route path={Constants.ROUTE_LOGOUT}>
        <Redirect path={"/"} />
      </Route>
    </Switch>
  );
};

export default Routes;
