import React, { Component } from 'react';
import './style.scoped.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignIn } from '../../actions';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isChecked: false
        };
    }
    onInputHandle = (ev) => {
        const name = ev.target.name;
        if (name === "email") {
            this.setState({ email: ev.target.value });
        }
        if (name === "password") {
            this.setState({ password: ev.target.value });
        }
    }
    componentWillReceiveProps(nextProps) {
        console.error(" ___ next props in SignIn page ___ ", nextProps);
        if (nextProps.authUser) {
            const { email_verified_at } = nextProps.authUser;
            if (!email_verified_at) this.props.history.push('/verification');
            else this.props.history.push('/pr');
        }
    }
    render() {
        return (
            <div className="login-wrapper hybrid-login-wrapper">
                <div className="login-wrapper-background">
                    <img className="concord-img vlv-creative"
                        src="https://assets.nflxext.com/ffe/siteui/vlv3/c385496a-2ed6-4081-9783-49a1ac8a5bbf/eac98c12-f9cc-411b-b5d9-1719ad931736/US-en-20200629-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/c385496a-2ed6-4081-9783-49a1ac8a5bbf/eac98c12-f9cc-411b-b5d9-1719ad931736/US-en-20200629-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c385496a-2ed6-4081-9783-49a1ac8a5bbf/eac98c12-f9cc-411b-b5d9-1719ad931736/US-en-20200629-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c385496a-2ed6-4081-9783-49a1ac8a5bbf/eac98c12-f9cc-411b-b5d9-1719ad931736/US-en-20200629-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
                        alt="" />
                </div>
                <div className="nfHeader login-header signupBasicHeader">
                    <Link to="/" className="svg-nfLogo signupBasicHeader" data-uia="netflix-header-svg-logo">
                        <img className="svg-icon svg-icon-netflix-logo" src="/assets/media/logo.svg" alt="" />
                        <span className="screen-reader-text">VideoStream</span>
                    </Link>
                </div>
                <div className="login-body">
                    <div>
                        <noscript>
                            &lt;div data-uia="error-message-container" class="ui-message-container ui-message-error"&gt;
                            &lt;div class="ui-message-icon"&gt;&lt;/div&gt;
                            &lt;div data-uia="text" class="ui-message-contents"&gt;Looks like you have disabled JavaScript. Please
                            enable JavaScript to restore full page functionality.&lt;/div&gt;
                            &lt;/div&gt;
                        </noscript>
                        <div className="login-content login-form hybrid-login-form hybrid-login-form-signup"
                            data-uia="login-page-container">
                            <div className="hybrid-login-form-main">
                                <h1>Sign In</h1>
                                <div className="login-form">
                                    <div data-uia="login-field+container"
                                        className="nfInput nfEmailPhoneInput login-input login-input-email">
                                        <div className="nfInputPlacement">
                                            <div className="nfEmailPhoneControls">
                                                <label className="input_id">
                                                    <input type="text" data-uia="login-field" name="email"
                                                        className={`nfTextField${this.state.email ? " hasText" : ""}`}
                                                        id="id_userLoginId" tabIndex={0} autoComplete="email"
                                                        value={this.state.email}
                                                        onChange={(ev) => this.onInputHandle(ev)}
                                                    />
                                                    <label htmlFor="id_userLoginId" className="placeLabel">Email address</label>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-uia="password-field+container" className="nfInput nfPasswordInput login-input login-input-password">
                                        <div className="nfInputPlacement">
                                            <div className="nfPasswordControls">
                                                <label className="input_id">
                                                    <input type="password"
                                                        data-uia="password-field"
                                                        name="password" 
                                                        className={`nfTextField${this.state.password ? " hasText" : ""}`}
                                                        id="id_password" tabIndex={0} autoComplete="password"
                                                        value={this.state.password}
                                                        onChange={(ev) => { this.setState({ password: ev.target.value }) }}
                                                    />
                                                    <label htmlFor="id_password" className="placeLabel">Password</label>
                                                </label>
                                                {/* <button data-uia="password-visibility-toggle" id="id_password_toggle" type="button"
                                                    className="nfPasswordToggle" title="Show Password">SHOW
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn login-button btn-submit btn-small outline-none w-100" tabIndex={0} data-uia="login-submit-button"
                                        onClick={(ev) => {
                                            ev.preventDefault();
                                            this.props.userSignIn({ email: this.state.email, password: this.state.password });
                                        }}>Sign In
                                    </button>
                                    <div className="hybrid-login-form-help">
                                        <div className="ui-binary-input login-remember-me">
                                            <input type="checkbox" name="rememberMe" id="bxid_rememberMe_true" checked={this.state.isChecked} tabIndex={0}
                                                data-uia="rememberMe" onChange={() => { this.setState({ isChecked: !this.state.isChecked }) }} />
                                            <label htmlFor="bxid_rememberMe_true" data-uia="label+rememberMe">
                                                <span className="login-remember-me-label-text">Remember me</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hybrid-login-form-other">
                                <div className="login-signup-now" data-uia="login-signup-now">New to VideoStream?
                                    <Link to="/sign-up">Sign up now</Link>.
                                </div>
                                <div className="recaptcha-terms-of-use" style={{ marginBottom: "120px" }} data-uia="recaptcha-terms-of-use">
                                    <p>
                                        <span>Did you forget password?</span>
                                        &nbsp;
                                        <Link to="/forgot-password" className="recaptcha-terms-of-use--link-button" data-uia="recaptcha-learn-more-button">Forgot password.</Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer-wrapper login-footer">
                    <div className="footer-divider" />
                    <div className="site-footer">
                        <p className="footer-top">Questions? Call
                        <a className="footer-top-a" href="tel:1-844-505-2993">x-xxx-xxx-xxxx</a>
                        </p>
                        <ul className="footer-links structural">
                            <li className="footer-link-item" placeholder="footer_responsive_link_gift_card_terms_item">
                                <Link className="footer-link" data-uia="footer-link" to="/faq"
                                    placeholder="footer_responsive_link_gift_card_terms">
                                    <span data-uia="data-uia-footer-label">FAQ</span>
                                </Link>
                            </li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_terms_item">
                                <Link className="footer-link" data-uia="footer-link" to="/terms-of-use"
                                    placeholder="footer_responsive_link_terms">
                                    <span data-uia="data-uia-footer-label">Terms of Use</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="lang-selection-container" id="lang-switcher">
                            <div data-uia="language-picker+container" className="ui-select-wrapper">
                                <label htmlFor="undefined-select" className="ui-label no-display">
                                    <span className="ui-label-text" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({ auth, commonData }) => {
    const { authUser } = auth;
    const { status, loading, error, message } = commonData;
    return { authUser, status, loading, error, message }
};

const mapDispatchToProps = { userSignIn };
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);