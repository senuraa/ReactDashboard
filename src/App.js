import React from "react";
import { Switch, Route } from "react-router-dom";
import { ScreenClassProvider } from "react-grid-system";
import Login from "./pages/Login";
import { addIcons } from "./config/IconLibrary";
import * as Constants from "./config/Constants";
import Dashboard from "./pages/Dashboard";

function App() {
  addIcons();
  return (
    <ScreenClassProvider>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path={Constants.ROUTE_DASHBOARD}>
          <Dashboard />
        </Route>
      </Switch>
    </ScreenClassProvider>
  );
}

export default App;
