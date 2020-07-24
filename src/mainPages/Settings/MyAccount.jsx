import React, { Component } from 'react';
import './style.scoped.css';
import { connect } from 'react-redux';
import { userSignOut, cancelSubscription } from '../../actions';
import { Link } from 'react-router-dom';

class MyAccount extends Component {
    state = {

    };
    onHandleUnsubscribe = () => {

        this.props.cancelSubscription();
    }
    render() {
        const { authUser } = this.props.auth;
        return (
            <div className="bd" style={{
                fontSize: "16px",
                margin: 0,
                padding: "50px",
                backgroundColor: "white"
            }}>
                <div className="responsive-account-container">
                    <div>
                        <h1 className="account-header">
                            <font style={{ verticalAlign: 'inherit' }}>
                                <font style={{ verticalAlign: 'inherit' }}>Account</font>
                            </font>
                        </h1>
                        <div className="account-messages-container" />
                        <div className="responsive-account-content" data-uia="account-content">
                            <div className="account-section collapsable-panel clearfix membership-section-wrapper membership-section-with-button"
                                data-uia="membership-section">
                                <header className="account-section-header collapsable-section-toggle">
                                    <h2 className="account-section-heading">
                                        <font style={{ verticalAlign: 'inherit' }}>
                                            <font style={{ verticalAlign: 'inherit' }}>MEMBERSHIP AND PAYMENTS</font>
                                        </font>
                                        {/* <button className="btn account-cancel-button btn-plain btn-small" type="button"
                                            autoComplete="off" tabIndex={0} data-uia="action-cancel-plan" style={{ outline: "none" }}
                                            onClick={this.onHandleUnsubscribe}>
                                            <span>
                                                <font style={{ verticalAlign: 'inherit' }}>
                                                    <font style={{ verticalAlign: 'inherit' }}>Unsubscribe</font>
                                                </font>
                                            </span>
                                        </button> */}
                                    </h2>
                                </header>
                                <section className="collapsable-section-content account-section-content">
                                    <div className="account-subsection clearfix">
                                        <div className="clearfix">
                                            <div className="account-section-group">
                                                <div data-uia="account-email"
                                                    className="account-section-item account-section-email">
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>I {authUser && authUser.email}
                                                        </font>
                                                    </font>
                                                </div>
                                                <div data-uia="account-password"
                                                    className="account-section-item account-section-item-disabled">
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>Password: </font>
                                                    </font>{/* */}
                                                    {/* */}
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>********</font>
                                                    </font>
                                                </div>
                                            </div>
                                            <div className="account-section-group">
                                                <div className="account-section-item" style={{ marginTop: "29px" }}>
                                                    <Link data-uia="account-password-link"
                                                        className="account-section-link" to="/pr/change-password">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Change password</font>
                                                        </font>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="account-subsection clearfix">
                                        <div className="clearfix">
                                            <div className="account-section-group -wide">
                                                <div className="account-section-item" data-uia="payment-subsection-top-content">
                                                    <div className="account-section-item" data-uia="nextBillingDate-item">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Your subscription payment type is
                                                    </font>
                                                        </font><b>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}></font>
                                                            </font>
                                                        </b>
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}></font>
                                                        </font>
                                                    </div>
                                                    <div className="payment-type" data-uia="payment-type">
                                                        <span className="icon-payment" data-uia="payment-icon">
                                                            {
                                                                authUser && authUser.stripe_price_id ?
                                                                    <img src="/assets/media/icons/stripe.png" style={{ width: 35, paddingRight: 10 }} alt="" />
                                                                    : null
                                                            }
                                                            {
                                                                authUser && authUser.paypal_subscription_id ?
                                                                    <img src="/assets/media/icons/paypal.svg" style={{ width: 35, paddingRight: 10 }} alt="" />
                                                                    : null
                                                            }
                                                        </span>
                                                        <span className="mopType" data-uia="mopType">
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>{authUser && (authUser.stripe_price_id ? "Stripe " : authUser.paypal_subscription_id ? "Paypal" : "")}
                                                                </font>
                                                            </font>
                                                        </span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="account-section collapsable-panel clearfix" data-uia="plan-section">
                                <header className="account-section-header collapsable-section-toggle">
                                    <h2 className="account-section-heading">
                                        <font style={{ verticalAlign: 'inherit' }}>
                                            <font style={{ verticalAlign: 'inherit' }}>PLAN DETAILS</font>
                                        </font>
                                    </h2>
                                </header>
                                <section className="collapsable-section-content account-section-content">
                                    <div className="account-subsection clearfix">
                                        <div className="clearfix">
                                            <div className="account-section-group">
                                                <div className="account-section-item"><b>
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>Basic</font>
                                                    </font>
                                                </b> </div>
                                            </div>
                                            {/* <div className="account-section-group">
                                                <div className="account-section-item">
                                                    <Link data-uia="action-change-plan"
                                                        className="account-section-link" to="/pr/change-plan">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Change plan</font>
                                                        </font>
                                                    </Link>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="account-section collapsable-panel clearfix" data-uia="settings-section">
                                <header className="account-section-header collapsable-section-toggle">
                                    <h2 className="account-section-heading">
                                        <font style={{ verticalAlign: 'inherit' }}>
                                            <font style={{ verticalAlign: 'inherit' }}>SETTINGS</font>
                                        </font>
                                    </h2>
                                </header>
                                <section className="collapsable-section-content account-section-content">
                                    <div className="account-subsection clearfix">
                                        <div className="clearfix">
                                            <div className="account-section-group">
                                                <div>
                                                    <div className="account-section-item">
                                                        <div className="account-section-link" data-uia="action-sign-out-all-devices" style={{ cursor: "pointer" }}
                                                            onClick={this.props.userSignOut}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Sign out on all devices</font>
                                                            </font>
                                                        </div>
                                                    </div>
                                                    {/* <div className="account-section-item">
                                                        <div data-uia="external-data-request-link" className="account-section-link" style={{ cursor: "pointer" }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Download your personal information</font>
                                                            </font>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="account-section-group left-align" />
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = { userSignOut, cancelSubscription };
export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);