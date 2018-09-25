import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../views/home';
import Page1 from '../views/page1';
import Counter from "../views/counter";
import Loadable from "../components/Loadable";
import Layout from "../modules/dashboard/views/Layout"
import { LoginRouter } from "../modules/login/router";

const AsyncHome = Loadable({
    loader: () => import("../views/home")
})
const AsyncCounter = Loadable({
    loader: () => import("../views/counter")
})

const getRouter = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Layout} />
                <Route path="/page1" component={Page1} />
                <Route path="/counter" component={AsyncCounter} />
                <LoginRouter />
            </Switch>
        </div>
    </Router>
);

export default getRouter;