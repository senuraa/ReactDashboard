import React from "react";
import { Route, Switch } from "react-router-dom";
import RouteArray from "./RouteConfig";

const Routes = () => {
  return (
    <Switch>
      {RouteArray.map((route, index) => {
        if (route.component) {
          return (
            <Route path={route.path} component={route.component} key={index} />
          );
        }
      })}
    </Switch>
  );
};

export default Routes;
