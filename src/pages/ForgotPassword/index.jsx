import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../util/Api';
import './style.scoped.css';

export default class ForgotPassword extends Component {
    state = {
        loading: false,
        email: "",
        message: "",
        error: ""
    };
    onHandleClick = (ev) => {
        ev.preventDefault();
        this.setState({ loading: true });
        axios.post('/password/email', { email: this.state.email })
            .then(({ data }) => {
                this.setState({ loading: false });
                this.setState({ message: "Please have a check your mail box" });
            })
            .catch(err => {
                this.setState({ loading: false });
                console.error("___ reset pass api error ___", err.response.data.error);
                this.setState({ error: "Error during sending email !" });
            });
    }
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-wrapper-background login-wrapper-default" />
                <div className="nfHeader login-header signupBasicHeader">
                    <Link to="/" className="svg-nfLogo signupBasicHeader"
                        data-uia="netflix-header-svg-logo">
                        <img className="svg-icon svg-icon-netflix-logo" src="/assets/media/logo.svg" alt="" />
                        <span className="screen-reader-text">VideoStream</span>
                    </Link>
                    <Link to="/sign-in"
                        className="authLinks signupBasicHeader" data-uia="header-login-link">Sign In</Link></div>
                <div className="login-body">
                    <div className="login-content">
                        <div data-uia="password-reset-wrapper">
                            <h1 data-uia="password-reset-header">Forgot Email/Password</h1>
                            <div>
                                <p style={{ fontSize: "16px" }}>We will send you an email with instructions on how to reset your password.</p>
                                <div className="contact-input-wrapper">
                                    <label className="contact-method-input ui-label ui-input-label" id="lbl-forgot_password_input"
                                        placeholder="forgot_password_input">
                                        <span className="ui-label-text" />
                                        <input type="email"
                                            data-uia="forgot_password_input"
                                            className="ui-text-input hasText"
                                            name="forgot_password_input"
                                            id="forgot_password_input"
                                            placeholder="name@example.com"
                                            tabIndex={0}
                                            value={this.state.email}
                                            onChange={(ev) => {
                                                this.setState({
                                                    email: ev.target.value,
                                                    error: "",
                                                    message: ""
                                                });
                                            }} />
                                    </label>
                                </div>
                            </div>
                            <button className="btn forgot-password-action-button btn-blue btn-large"
                                type="button"
                                autoComplete="off"
                                tabIndex={0}
                                data-uia="action_forgot_password"
                                onClick={(ev) => this.onHandleClick(ev)}>Email Me</button>
                        </div>
                    </div>
                </div>
                <div className="site-footer-wrapper login-footer">
                    <div className="footer-divider" />
                    <div className="site-footer" style={{ fontSize: 16 }}>
                        <p className="footer-top">Questions? Call
                        <a className="footer-top-a"
                                href="tel:1-844-505-2993">x-xxx-xxxx-xxxx</a>
                        </p>
                        <ul className="footer-links structural">
                            <li className="footer-link-item" placeholder="footer_responsive_link_terms_item">
                                <Link className="footer-link" data-uia="footer-link" to="/term-of-use"
                                    placeholder="footer_responsive_link_terms">
                                    <span id data-uia="data-uia-footer-label">Terms of Use</span>
                                </Link>
                            </li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_privacy_item">
                                <Link className="footer-link" data-uia="footer-link" to="/privacy"
                                    placeholder="footer_responsive_link_privacy">
                                    <span id data-uia="data-uia-footer-label">Privacy Statement</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}