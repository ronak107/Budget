import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        {" "}
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
          <PrivateRoute component={Main} path="/budget-list" exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default Routes;
