import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainPage404 extends Component {
    render() {
        return (
            <div style={{
                height: '80vh', display: 'flex',
                backgroundImage: 'url("/assets/media/images/bg-lost-in-space.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover"
            }}>
                <div style={{ margin: 'auto', width: '60vw' }}>
                    <h1 style={{ fontSize: "36px", textAlign: 'center' }}>
                        <font style={{ verticalAlign: 'inherit' }}>
                            <font style={{ verticalAlign: 'inherit' }}>Have you lost your way?</font>
                        </font>
                    </h1>
                    <div>
                        <p style={{ textAlign: 'center', fontSize: "16px" }}>
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Sorry, we couldn't find the page you were looking for.</font>
                                <font style={{ verticalAlign: 'inherit' }}>But there is a lot of content you can discover on the homepage.</font>
                            </font>
                        </p>
                        <div style={{ display: 'flex' }}>
                            <Link to="/pr" tabIndex={-1} style={{ margin: 'auto' }}>
                                <button className="button-primary medium hasLabel ltr-ublg01"
                                    type="button">
                                    <span className="ltr-18i00qw">
                                        <font style={{ verticalAlign: 'inherit' }}>
                                            <font style={{ verticalAlign: 'inherit' }}>VideoStream Homepage</font>
                                        </font>
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 12, margin: 12 }}>
                            <span>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    <font style={{ verticalAlign: 'inherit' }}>Error Code </font>
                                </font>
                                <strong style={{
                                    color: "red",
                                    borderLeft: "2px solid red",
                                    paddingLeft: "4px"
                                }}>
                                    <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>404</font>
                                    </font>
                                </strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}