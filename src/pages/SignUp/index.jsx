import React, { Component } from 'react';
import './style.scoped.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignUp } from '../../actions';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            isChecked: false
        };
    }

    componentWillReceiveProps(nextProps) {
        console.error(" next props : ", nextProps);
        if (nextProps.authUser) {
            const { email_verified_at } = nextProps.authUser;
            console.error(" next props email_verified_at : ", email_verified_at);

            if (email_verified_at === null) this.props.history.push('/verification');
            else this.props.history.push('/pr');
        }
    }
    render() {
        console.log(" this.state !!!", this.state);
        return (
            <div className="netflix-sans-font-loaded">
                <div className="basicLayout modernInApp signupSimplicity-registration simplicity" lang="en-US" dir="ltr">
                    <div className="nfHeader noBorderHeader signupBasicHeader">
                        <Link to="/" className="svg-nfLogo signupBasicHeader">
                            <img className="svg-icon svg-icon-netflix-logo" src="/assets/media/logo.svg" alt="" />
                            <span className="screen-reader-text">VideoStream</span></Link><a href="/login"
                                className="authLinks signupBasicHeader">Sign In</a></div>
                    <div className="simpleContainer" data-transitioned-child="true">
                        <div className="centerContainer"
                            style={{ display: 'block', transform: 'none', opacity: 1, transitionDuration: '250ms' }}>
                            <form method="POST">
                                <div className="regFormContainer">
                                    <div className="stepHeader-container">
                                        <div className="stepHeader" style={{ color: "black" }} data-a11y-focus="true" tabIndex={0}>
                                            <span className="stepIndicator">STEP <b>1</b> OF <b>3</b></span>
                                            <h1 className="stepTitle" style={{ color: "black" }}>Create a password to start your subscription.</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="contextRow" style={{ color: "black" }}>Just a few more steps and you're done!</div>
                                        <div className="contextRow" style={{ color: "black" }}>We hate paperwork, too.</div>
                                        <ul className="simpleForm structural ui-grid">
                                            <li className="nfFormSpace">
                                                <div className="nfInput nfInputOversize">
                                                    <div className="nfInputPlacement">
                                                        <label className="input_id" placeholder="name">
                                                            <input name="name"
                                                                className="nfTextField hasText"
                                                                type="text"
                                                                tabIndex={0}
                                                                autoComplete="on"
                                                                maxLength={50} minLength={5}
                                                                dir="ltr"
                                                                value={this.state.name}
                                                                onChange={(ev) => this.setState({ name: ev.target.value })}
                                                            />
                                                            <label className="placeLabel">Name</label>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nfFormSpace">
                                                <div className="nfInput nfInputOversize">
                                                    <div className="nfInputPlacement">
                                                        <label className="input_id" placeholder="email">
                                                            <input name="email"
                                                                className="nfTextField hasText"
                                                                type="email"
                                                                tabIndex={0}
                                                                autoComplete="on"
                                                                maxLength={50} minLength={5}
                                                                dir="ltr"
                                                                value={this.state.email}
                                                                onChange={(ev) => this.setState({ email: ev.target.value })}
                                                            />
                                                            <label htmlFor="id_email" className="placeLabel">Email</label>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nfFormSpace">
                                                <div className="nfInput validated nfInputOversize">
                                                    <div className="nfInputPlacement"><label className="input_id"
                                                        placeholder="password">
                                                        <input name="password"
                                                            className="nfTextField hasText"
                                                            type="password"
                                                            tabIndex={0}
                                                            autoComplete="off"
                                                            maxLength={68}
                                                            minLength={4}
                                                            dir="ltr"
                                                            value={this.state.password}
                                                            onChange={(ev) => this.setState({ password: ev.target.value })}
                                                        />
                                                        <label htmlFor="id_password"
                                                            className="placeLabel">Add a password</label></label></div>
                                                </div>
                                            </li>
                                            <li className="nfFormSpace">
                                                <div className="nfInput validated nfInputOversize">
                                                    <div className="nfInputPlacement"><label className="input_id"
                                                        placeholder="password">
                                                        <input name="password"
                                                            className="nfTextField hasText"
                                                            type="password"
                                                            tabIndex={0}
                                                            autoComplete="off"
                                                            maxLength={68}
                                                            minLength={4}
                                                            dir="ltr"
                                                            value={this.state.passwordConfirm}
                                                            onChange={(ev) => this.setState({ passwordConfirm: ev.target.value })}
                                                        />
                                                        <label htmlFor="id_password"
                                                            className="placeLabel">Confirm password</label></label></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="submitBtnContainer">
                                    <button autoComplete="off"
                                        className="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize"
                                        placeholder="regForm_button_continue" onClick={
                                            (ev) => {
                                                ev.preventDefault();
                                                if (this.state.password === this.state.passwordConfirm) {
                                                    this.props.userSignUp({
                                                        name: this.state.email,
                                                        email: this.state.email,
                                                        password: this.state.password
                                                    });
                                                } else {
                                                    alert("Please check your password again !");
                                                }
                                            }}
                                        disabled={this.props.loading ? true : false}
                                    >
                                        CONTINUE
                                            </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="site-footer-wrapper centered" style={{ transitionDuration: '250ms', opacity: 1 }}>
                        <div className="footer-divider" />
                        <div className="site-footer">
                            <p className="footer-top">Questions? Call
                            <a className="footer-top-a"
                                    href="tel:x-xxx-xxx-xxxx">x-xxx-xxx-xxxx</a>
                            </p>
                            <ul className="footer-links structural">
                                <li className="footer-link-item" placeholder="footer_responsive_link_faq_item">
                                    <a className="footer-link"
                                        href="/"
                                        placeholder="footer_responsive_link_faq">
                                        <span>FAQ</span>
                                    </a>
                                </li>
                                <li className="footer-link-item" placeholder="footer_responsive_link_terms_item">
                                    <a className="footer-link"
                                        href="/"
                                        placeholder="footer_responsive_link_terms">
                                        <span>Terms of Use</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="a11yAnnouncer" aria-live="assertive" tabIndex={-1} />
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

const mapDispatchToProps = { userSignUp };
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);