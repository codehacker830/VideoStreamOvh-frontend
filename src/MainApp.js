import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import configureStore, { history } from "./store";
import './style.css';
import App from "./App";
export const store = configureStore();

const MainApp = () =>
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" render={(props) => (<App {...props} />)} />
            </Switch>
        </Router>
    </Provider>

export default MainApp;