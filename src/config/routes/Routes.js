import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import RouteArray from "./RouteConfig";

const Routes = () => {
  return (
    <Switch>
      {RouteArray.map((route, index) => {
        if (route.component && !route.redirect) {
          return (
            <Route path={route.path} component={route.component} key={index} />
          );
        } else if (route.redirect) {
          return <Redirect to={route.redirect} key={index} />;
        }
      })}
    </Switch>
  );
};

export default Routes;
