import Register from "./views/Register";
import Login from "./views/Login";
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export const LoginRouter = () => (
    <Router>
        <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
);
