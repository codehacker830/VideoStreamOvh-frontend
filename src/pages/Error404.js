import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Error404 extends Component {
    render() {
        return (
            <div className="error-page not-found">
                <div className="error-page--content">
                    <h1>
                        <font style={{ verticalAlign: 'inherit' }}>
                            <font style={{ verticalAlign: 'inherit' }}>Have you lost your way?</font>
                        </font>
                    </h1>
                    <div className="error-page--content--body">
                        <p>
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Sorry, we couldn't find the page you were looking for.</font>
                                <font style={{ verticalAlign: 'inherit' }}>But there is a lot of content you can discover on the homepage.</font>
                            </font>
                        </p>
                        <div className="error-page--content--buttons">
                            <Link to="/pr" tabIndex={-1}>
                                <button className="button-primary medium hasLabel ltr-ublg01" type="button">
                                    <span className="ltr-18i00qw">
                                        <font style={{ verticalAlign: 'inherit' }}>
                                            <font style={{ verticalAlign: 'inherit' }}>VideoStream Homepage</font>
                                        </font>
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div className="error-page--content--errorCode">
                            <span>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    <font style={{ verticalAlign: 'inherit' }}>Error Code </font>
                                </font><strong>
                                    <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>404</font>
                                    </font>
                                </strong>
                            </span></div>
                    </div>
                </div>
            </div>
        );
    }
}