import React, { Component } from 'react';
import SiteFooterWrapper from '../../components/SiteFooterWrapper';
import SignUpBasicHeader from '../../components/SignUpBasicHeader';
import './style.css';

import { loadStripe } from '@stripe/stripe-js';
import { connect } from 'react-redux';
import PaypalButton from './PaypalButton';
import { Redirect } from 'react-router';

const stripePromise = loadStripe('pk_test_QrZH6eK829YqqtgMkLo8rVLc00cjlP2fEX');

class PaymentSelect extends Component {
    constructor(props) {
        super(props);
        this.stateData = null;
    }
    componentDidMount() {
        if (!this.props.location.state) {
            this.props.history.push('/subscription');
        } else {
            this.stateData = this.props.location.state;
        }
    }
    onClickStripe = async () => {
        const { planNo } = this.stateData;
        let priceId = '';
        if (planNo === 1) priceId = 'price_1H6sEUF1bIjC0LFHgHYUefDq';
        else if (planNo === 2) priceId = 'price_1H6sFOF1bIjC0LFHaRjbE7DQ';
        else priceId = 'price_1H6sFzF1bIjC0LFH4ZC8hZcs';

        console.log("==== Price ID ==== ", priceId);

        const { token } = this.props.auth;

        const successUrl = process.env.NODE_ENV === "production" ?
            `https://www.videostream.ovh/st-success/${planNo}/${priceId}`
            : `http://localhost:3000/st-success/${planNo}/${priceId}`;
        const cancelUrl = process.env.NODE_ENV === "production" ?
            `https://www.videostream.ovh/subscription`
            : `http://localhost:3000/subscription`;

        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                // Replace with the ID of your price
                { price: `${priceId}`, quantity: 1 }
            ],
            mode: 'subscription',
            successUrl: `${successUrl}`,
            cancelUrl: `${cancelUrl}`,
        });

        if (error) {
            alert(error.message);
        }
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `error.message`.
    }
    onClickPaypal = () => {

    }

    render() {
        if (this.props.location.state) {
            const { planNo } = this.props.location.state;
            return (
                <div className="netflix-sans-font-loaded">
                    <div className="basicLayout modernInApp signupSimplicity-payAndStartMembershipWithContext simplicity" lang="en-US" dir="ltr">
                        <SignUpBasicHeader />
                        <div className="simpleContainer" data-transitioned-child="true">
                            <div className="centerContainer contextStep with-mobile-mop-logos"
                                style={{ display: 'block', transform: 'none', opacity: 1, transitionDuration: '250ms' }}>
                                <div className="paymentContainer">
                                    <div>
                                        <div className="stepLogoContainer">
                                            <span className="stepLogo paymentStepLogo" />
                                        </div>
                                        <div className="stepHeader-container">
                                            <div className="stepHeader" data-a11y-focus="true" tabIndex={0}>
                                                <span className="stepIndicator" data-uia>STEP <b>3</b> OF <b>3</b></span>
                                                <h1 className="stepTitle">Set up your payment.</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="secure-server-badge"><svg id="secure-server-icon" viewBox="0 0 12 16"
                                        className="secure-server-badge--icon">
                                        <g fill="none">
                                            <g fill="#FFB53F">
                                                <path
                                                    d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z">
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                        <div className="secure-server-badge--text">Secure Server</div>
                                    </div>
                                    <div>
                                        <div className="nfTabSelectionWrapper" id="creditOrDebitCardDisplayStringId">
                                            <div className="nfTabSelection nfTabSelection--active paymentPicker standardHeight" id="stripeButton" style={{ marginBottom: "15px", backgroundColor: "cyan" }}
                                                onClick={this.onClickStripe}>
                                                <div className="mopNameAndLogos" style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}>
                                                    <div className="logosContainer">
                                                        <span className="logos logos-inline"
                                                            aria-label="We accept VISA, MASTERCARD, AMEX and DISCOVER.">
                                                            <img alt="" className="logoIcon"
                                                                src="/assets/media/icons/stripe.png" />
                                                            {/* <img alt="" className="logoIcon VISA"
                                                        src="/assets/media/icons/visa-v2.svg" />
                                                    <img alt="" className="logoIcon MASTERCARD"
                                                        src="/assets/media/icons/mastercard-v2.svg" />
                                                    <img alt="" className="logoIcon AMEX"
                                                        src="/assets/media/icons/amex-v2.svg" />
                                                    <img alt="" className="logoIcon DISCOVER"
                                                        src="/assets/media/icons/icon_discover.png"
                                                        srcSet="/assets/media/icons/icon_discover_2x.png 2x" /> */}
                                                        </span>
                                                    </div>
                                                    <div className="nfTabSelection--text card-type-text paymentActive">
                                                        <span className="selectionLabel">Stripe Subsciption</span></div>
                                                </div>
                                                {/* <span className="ui-svg-icon ui-svg-icon--chevron pull-right pickerArrow" /> */}
                                            </div>
                                        </div>
                                        <div className="nfTabSelectionWrapper" id="paypalDisplayStringId">
                                            {/* <div className="nfTabSelection nfTabSelection--active paymentPicker standardHeight" onClick={this.onClickPaypal}>
                                            <div className="mopNameAndLogos">
                                                <div className="nfTabSelection--text card-type-text paymentActive">
                                                    <span className="selectionLabel">PayPal</span>
                                                </div>
                                                <div className="logosContainer">
                                                    <span className="logos logos-inline"
                                                        aria-label="We accept PAYPAL_NO_TEXT.">
                                                        <img alt="" className="logoIcon PAYPAL_NO_TEXT"
                                                            src="/assets/media/icons/paypal.svg" />
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="ui-svg-icon ui-svg-icon--chevron pull-right pickerArrow" />
                                        </div> */}
                                            <PaypalButton planNo={planNo} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SiteFooterWrapper />
                    </div>
                </div>
            );
        } else {
            return <Redirect to="/subscription" />
        }
    }
}
const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps, () => ({}))(PaymentSelect);