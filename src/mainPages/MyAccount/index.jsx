import React, { Component } from 'react';
import './style.scoped.css';

export default class MyAccount extends Component {
    render() {
        return (
            <div className="bd" style={{
                fontSize: "16px",
                margin: 0,
                padding: "30px",
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
                                        </font><button className="btn account-cancel-button btn-plain btn-small" type="button"
                                            autoComplete="off" tabIndex={0} data-uia="action-cancel-plan"><span>
                                                <font style={{ verticalAlign: 'inherit' }}>
                                                    <font style={{ verticalAlign: 'inherit' }}>Unsubscribe</font>
                                                </font>
                                            </span></button>
                                    </h2>
                                </header>
                                <section className="collapsable-section-content account-section-content">
                                    <div className="account-subsection clearfix">
                                        <div className="clearfix">
                                            <div className="account-section-group">
                                                <div data-uia="account-email"
                                                    className="account-section-item account-section-email">
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>I senior.master.dev@yandex.co
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
                                                <div data-uia="account-phone"
                                                    className="account-section-item account-section-item-disabled">
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>Phone: 0506 414 03 85</font>
                                                    </font>
                                                </div>
                                            </div>
                                            <div className="account-section-group">
                                                <div className="account-section-item"><a data-uia="account-email-link"
                                                    className="account-section-link" href="/email">
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>Change email</font>
                                                    </font>
                                                </a></div>
                                                <div className="account-section-item"><a data-uia="account-password-link"
                                                    className="account-section-link" href="/password">
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>Change password</font>
                                                    </font>
                                                </a></div>
                                                <div className="account-section-item"><a data-uia="account-phone-link"
                                                    className="account-section-link" href="/phonenumber">
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>Change phone number</font>
                                                    </font>
                                                </a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="account-subsection clearfix">
                                        <div>
                                            <div className="clearfix">
                                                <div className="account-section-group -wide">
                                                    <div className="account-section-item" data-uia="payment-subsection-top-content">
                                                        <div id className="account-section-item" data-uia="nextBillingDate-item">
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Your next billing date is
                                                    </font>
                                                            </font><b>
                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                    <font style={{ verticalAlign: 'inherit' }}>August 16, 2020</font>
                                                                </font>
                                                            </b>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}> .</font>
                                                            </font>
                                                        </div>
                                                        <div className="payment-type" data-uia="payment-type"><span
                                                            className="icon-payment icon-payment-mastercard"
                                                            data-uia="payment-icon"><span className="text-payment"
                                                                data-uia="payment-text">
                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                    <font style={{ verticalAlign: 'inherit' }}>MASTERCARD</font>
                                                                </font>
                                                            </span> </span><span id className="mopType" data-uia="mopType">
                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                    <font style={{ verticalAlign: 'inherit' }}>•••• •••• •••• 6526
                                                        </font>
                                                                </font>
                                                            </span></div>
                                                    </div>
                                                </div>
                                                <div className="account-section-group -thin">
                                                    <div className="account-section-item"><a data-uia="action-update-payment"
                                                        className="account-section-link" href="/YourAccountPayment">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Update payment information
                                                    </font>
                                                        </font>
                                                    </a></div>
                                                    <div className="account-section-item"><a className="account-section-link"
                                                        data-uia="action-billing-details" href="/BillingActivity">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Invoice details</font>
                                                        </font>
                                                    </a></div>
                                                    <div className="account-section-item"><a data-uia="action-update-billing-date"
                                                        className="account-section-link" href="/simplemember/billingdateedit">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Change billing day</font>
                                                        </font>
                                                    </a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="account-subsection clearfix is-external-gift-redemption">
                                        <div className="clearfix">
                                            <div className="u-ta-right-desktop gifts-link-group">
                                                <div className="account-section-item account-section-item"><a
                                                    className="account-section-link" data-uia="action-redeem-link"
                                                    href="/redeem">
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>Redeem a gift card or promo
                                                        code
                                                </font>
                                                    </font>
                                                </a></div>
                                                <div className="account-section-item account-section-item"><a
                                                    className="account-section-link" data-uia="action-gift-cards-link"
                                                    href="/gift-cards" target="_blank" rel="noopener noreferrer">
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>Where you can get a gift card
                                                </font>
                                                    </font>
                                                </a></div>
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
                                            <div className="account-section-group">
                                                <div className="account-section-item"><a data-uia="action-change-plan"
                                                    className="account-section-link" href="/ChangePlan">
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>Change plan</font>
                                                    </font>
                                                </a></div>
                                            </div>
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
                                                    <div className="account-section-item"><a className="account-section-link"
                                                        href="/pin" data-uia="action-content-restrictions">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>18+ Content Access PIN
                                                    </font>
                                                        </font>
                                                    </a></div>
                                                    <div className="account-section-item account-section-item"><a
                                                        className="account-section-link" href="/DoNotTest"
                                                        data-uia="action-test-participation">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Participation in the test
                                                    </font>
                                                        </font>
                                                    </a></div>
                                                    <div className="account-section-item account-section-item"><a
                                                        className="account-section-link" href="/deviceManagement"
                                                        data-uia="action-device-management">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Manage content downloads
                                                        devices</font>
                                                        </font>
                                                    </a></div>
                                                    <div className="account-section-item"><a className="account-section-link"
                                                        href="/Activate" data-uia="action-activate-device">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Enable device</font>
                                                        </font>
                                                    </a></div>
                                                    <div className="account-section-item"><a className="account-section-link"
                                                        data-uia="action-account-access" href="/AccountAccess">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Recent monitoring activity
                                                            of
                                                        connected devices</font>
                                                        </font>
                                                    </a></div>
                                                    <div className="account-section-item"><a className="account-section-link"
                                                        href="/ManageDevices" data-uia="action-sign-out-all-devices">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Sign out on all devices
                                                    </font>
                                                        </font>
                                                    </a></div>
                                                    <div className="account-section-item"><a data-uia="external-data-request-link"
                                                        className="account-section-link" href="/account/getmyinfo">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Download your personal
                                                        information</font>
                                                        </font>
                                                    </a></div>
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