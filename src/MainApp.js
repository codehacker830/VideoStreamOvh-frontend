import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import configureStore, { history } from "./store";
import './style.css';
import App from "./App";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_QrZH6eK829YqqtgMkLo8rVLc00cjlP2fEX");
export const store = configureStore();

const MainApp = () =>
    <Elements stripe={stripePromise}>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/" render={(props) => (<App {...props} />)} />
                </Switch>
            </Router>
        </Provider>
    </Elements>

export default MainApp;