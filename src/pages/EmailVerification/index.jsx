import React, { Component } from 'react';
import './style.scoped.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    resendEmail
} from '../../actions';

class EmailVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }
    onHandleClick = (ev) => {
        ev.preventDefault();
        this.props.resendEmail();
    }

    componentWillReceiveProps(nextProps) {
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
                            style={{ minHeight: "400px"}}>
                            <div className="hybrid-login-form-main">
                                <h1>Email Verification</h1>
                                <div className="login-form">
                                    
                                    <button className="btn login-button btn-submit btn-small outline-none w-100"
                                        tabIndex={0} onClick={(ev) => this.onHandleClick(ev)}>
                                        Resend Verification Link
                                    </button>
                                </div>
                                {
                                    this.props.loading ?
                                        
                                    <p style={{ fontSize: "16px", color: 'gray' }}>Sending email ...</p>
                                        :
                                        (
                                            this.props.status ?
                                            <p style={{ fontSize: "16px", color: 'gray' }}>{this.props.message}</p>
                                                : <p style={{ fontSize: "16px", color: 'gray' }}>{this.props.error}</p>
                                        )
                                }
                            </div>
                            <div className="hybrid-login-form-other">
                                <div className="login-signup-now" data-uia="login-signup-now">Already have account?
                                    <Link to="/sign-in">Sign in</Link>.
                                </div>
                                <div className="recaptcha-terms-of-use" style={{ marginBottom: "90px" }} data-uia="recaptcha-terms-of-use">
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
const mapStateToProps = ({ commonData }) => {
    const { loading, status, message, error } = commonData;
    return { loading, status, message, error };
};
export default connect(mapStateToProps, { resendEmail })(EmailVerification);