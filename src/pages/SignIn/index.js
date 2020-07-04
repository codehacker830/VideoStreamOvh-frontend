import React, { Component } from 'react';
import './style.scoped.css';

class SignIn extends Component {
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
                    <a href="/" className="svg-nfLogo signupBasicHeader" data-uia="netflix-header-svg-logo">
                        <img className="svg-icon svg-icon-netflix-logo" src="/assets/media/logo.svg" alt="" />
                        <span className="screen-reader-text">VideoStream</span>
                    </a>
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
                                <form method="post" className="login-form" action>
                                    <div data-uia="login-field+container"
                                        className="nfInput nfEmailPhoneInput login-input login-input-email">
                                        <div className="nfInputPlacement">
                                            <div className="nfEmailPhoneControls"><label className="input_id">
                                                <input type="text"
                                                    data-uia="login-field" name="userLoginId" className="nfTextField"
                                                    id="id_userLoginId" defaultValue tabIndex={0} autoComplete="email"
                                                    dir />
                                                <label htmlFor="id_userLoginId" className="placeLabel">Email or phone number</label></label>
                                                <div data-uia="phone-country-selector+container"
                                                    className="ui-select-wrapper country-select"><a
                                                        data-uia="phone-country-selector+target" href="#"
                                                        className="ui-select-wrapper-link">
                                                        <div className="ui-select-current"
                                                            placeholder="{&quot;current_selected_country&quot;:&quot;US&quot;}">
                                                            <span className="country-select-flag nf-flag nf-flag-us" /><span
                                                                className="country-select-code">+
                                                    {/* */}1</span></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-uia="password-field+container"
                                        className="nfInput nfPasswordInput login-input login-input-password">
                                        <div className="nfInputPlacement">
                                            <div className="nfPasswordControls"><label className="input_id"><input type="password"
                                                data-uia="password-field" name="password" className="nfTextField"
                                                id="id_password" defaultValue tabIndex={0} autoComplete="password"
                                                dir /><label htmlFor="id_password"
                                                    className="placeLabel">Password</label></label><button
                                                        data-uia="password-visibility-toggle" id="id_password_toggle" type="button"
                                                        className="nfPasswordToggle" title="Show Password">SHOW</button></div>
                                        </div>
                                    </div>
                                    <button className="btn login-button btn-submit btn-small outline-none w-100" type="submit" autoComplete="off" tabIndex={0} data-uia="login-submit-button">Sign In
                                    </button>
                                    <div className="hybrid-login-form-help">
                                        <div className="ui-binary-input login-remember-me">
                                            <input type="checkbox" className
                                                name="rememberMe" id="bxid_rememberMe_true" defaultValue="true" tabIndex={0}
                                                data-uia="rememberMe" defaultChecked />
                                            <label htmlFor="bxid_rememberMe_true" data-uia="label+rememberMe">
                                                <span className="login-remember-me-label-text">Remember me</span>
                                            </label>
                                            <div className="helper" />
                                        </div>
                                    </div>
                                    <input type="hidden" name="flow" defaultValue="websiteSignUp" />
                                    <input type="hidden" name="mode" defaultValue="login" />
                                    <input type="hidden" name="action" defaultValue="loginAction" />
                                    <input type="hidden" name="withFields" defaultValue="rememberMe,nextPage,userLoginId,password,countryCode,countryIsoCode,recaptchaResponseToken,recaptchaError,recaptchaResponseTime" /><input
                                        type="hidden" name="authURL"
                                        defaultValue="1593786596016.Lcy1SV96FKkunkaCjGScVC2+MYc=" />
                                    <input type="hidden" name="nextPage" defaultValue />
                                    <input type="hidden" name="showPassword" defaultValue />
                                    <input type="hidden" name="countryCode" defaultValue={+1} />
                                    <input type="hidden" name="countryIsoCode" defaultValue="US" />
                                </form>
                            </div>
                            <div className="hybrid-login-form-other">
                                <form method="post" className="login-form" action>
                                    <div className="facebookForm regOption">
                                        <div className="fb-minimal">
                                            <hr />
                                            <button className="btn minimal-login btn-submit btn-small" type="submit"
                                                autoComplete="off" tabIndex={0} data-uia>
                                                <div className="fb-login" data-uia="fb-login">
                                                    <img className="icon-facebook" src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="" />
                                                    <span className="fbBtnText">Login with Facebook</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <input type="hidden" name="flow" defaultValue="websiteSignUp" />
                                    <input type="hidden" name="mode" defaultValue="login" />
                                    <input type="hidden" name="action" defaultValue="facebookLoginAction" />
                                    <input type="hidden" name="withFields" defaultValue="rememberMe,nextPage,accessToken" />
                                    <input type="hidden" name="authURL" defaultValue="1593786596016.Lcy1SV96FKkunkaCjGScVC2+MYc=" />
                                    <input type="hidden" name="nextPage" defaultValue />
                                    <input type="hidden" name="showPassword" defaultValue />
                                    <input type="hidden" name="countryCode" defaultValue={+1} />
                                    <input type="hidden" name="countryIsoCode" defaultValue="US" />
                                    <input type="hidden" name="accessToken" defaultValue />
                                </form>
                                <div className="login-signup-now" data-uia="login-signup-now">New to VideoStream? <a className=" "
                                    target="_self" href="/">Sign up now</a>.</div>
                                <div className="recaptcha-terms-of-use" data-uia="recaptcha-terms-of-use">
                                    <p>
                                        <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>&nbsp;
                                        <button className="recaptcha-terms-of-use--link-button"
                                            data-uia="recaptcha-learn-more-button">Learn more.</button>
                                    </p>
                                    <div className="recaptcha-terms-of-use--disclosure" data-uia="recaptcha-disclosure">
                                        <span id data-uia="recaptcha-disclosure-text">The information collected by Google reCAPTCHA is subject to the Google
                                            <a href="https://policies.google.com/privacy" data-uia="recaptcha-privacy-link">Privacy Policy</a> and
                                            <a href="https://policies.google.com/terms" data-uia="recaptcha-tos-link">Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA
                                                service and for general security purposes (it is not used for personalized advertising
                                                by Google).
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer-wrapper login-footer">
                    <div className="footer-divider" />
                    <div className="site-footer">
                        <p className="footer-top">Questions? Call <a className="footer-top-a"
                            href="tel:1-844-505-2993">1-844-505-2993</a>
                        </p>
                        <ul className="footer-links structural">
                            <li className="footer-link-item" placeholder="footer_responsive_link_gift_card_terms_item"><a
                                className="footer-link" data-uia="footer-link" href="/giftterms"
                                placeholder="footer_responsive_link_gift_card_terms"><span id
                                    data-uia="data-uia-footer-label">Gift Card Terms</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_terms_item"><a
                                className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/termsofuse"
                                placeholder="footer_responsive_link_terms"><span id data-uia="data-uia-footer-label">Terms of
                            Use</span></a></li>
                            <li className="footer-link-item" placeholder="footer_responsive_link_privacy_item"><a
                                className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/privacy"
                                placeholder="footer_responsive_link_privacy"><span id data-uia="data-uia-footer-label">Privacy
                            Statement</span></a></li>
                        </ul>
                        <div className="lang-selection-container" id="lang-switcher">
                            <div data-uia="language-picker+container" className="ui-select-wrapper"><label
                                htmlFor="undefined-select" className="ui-label no-display"><span
                                    className="ui-label-text" /></label>
                                <div className="select-arrow medium prefix globe"><select data-uia="language-picker"
                                    className="ui-select medium" id="undefined-select" tabIndex={0} placeholder="lang-switcher">
                                    <option selected value="/login" data-language="en" data-country="US">English</option>
                                    <option value="/us-es/login" data-language="es" data-country="US">Español</option>
                                </select></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;