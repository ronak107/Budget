import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path='/' exacts>
          <Main />
        </Route>
      </Switch>
    </div>
  );
};
export default Routes;
