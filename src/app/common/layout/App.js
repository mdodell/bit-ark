import React, { Fragment } from 'react';
import {DASHBOARD_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NOT_FOUND_ROUTE} from "../constants";
import {Route, Switch, withRouter} from "react-router-dom";
import HomePage from "../../pages/HomePage";
import NavBar from "../components/NavBar";
import LoginPage from "../../pages/LoginPage";
import DashboardPage from "../../pages/DashboardPage"
import {UserIsAuthenticated, UserIsNotAuthenticated} from "./authentication";
import NotFoundPage from "../../pages/NotFoundPage";

const App = ({location}) => {
  return (
    <Fragment>
        <Route exact path={HOME_ROUTE} component={HomePage} />
        <Route
            path="/(.+)"
            render={() => (
                <Fragment>
                    <NavBar />
                    <Switch key={location.key}>
                        <Route exact path={LOGIN_ROUTE} component={UserIsNotAuthenticated(LoginPage)} />
                        <Route exact path={DASHBOARD_ROUTE} component={UserIsAuthenticated(DashboardPage)} />
                        <Route exact path={NOT_FOUND_ROUTE} component={NotFoundPage} />
                    </Switch>
                </Fragment>
            )}
        />
    </Fragment>
  );
};

export default withRouter(App);
