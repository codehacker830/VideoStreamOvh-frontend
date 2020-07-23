import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import { withRouter, Redirect } from "react-router";
import axios from "../../util/Api";

const CLIENT = {
    sandbox:
        "AeyRklLx01gRIOyV8-8U9j4dG7isE4OATl46NGxnc3LI9hkpy4oNOf3geQYwdTKbzwuAcxrQLMkp0H8v",
    production:
        "AeyRklLx01gRIOyV8-8U9j4dG7isE4OATl46NGxnc3LI9hkpy4oNOf3geQYwdTKbzwuAcxrQLMkp0H8v"
};

const CLIENT_ID =
    process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;
//create button here
let PayPalButton = null;

// next create the class and Bind React and ReactDom to window
//as we will be needing them later

class PaypalButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showButtons: false,
            loading: true
        };
        this.plan_id = null;
        if (this.props.planNo === 1) this.plan_id = 'P-2XH08447HM000705RL4KIEII';
        else if (this.props.planNo === 2) this.plan_id = 'P-4N187084RV636940HL4KIEYY';
        else this.plan_id = 'P-26H7050110035443AL4KIGIQ';
        console.log(" Paypal Plan Index -", this.props.planNo);
        window.React = React;
        window.ReactDOM = ReactDOM;
    }
    componentDidMount() {
        const { isScriptLoaded, isScriptLoadSucceed } = this.props;

        if (isScriptLoaded && isScriptLoadSucceed) {
            PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
            this.setState({ loading: false, showButtons: true });
        }
    }
    componentWillReceiveProps(nextProps) {
        const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

        const scriptJustLoaded =
            !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

        if (scriptJustLoaded) {
            if (isScriptLoadSucceed) {
                PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
                this.setState({ loading: false, showButtons: true });
            }
        }
    }

    createSubscription = (data, actions) => {
        console.log(" called cretate subscription ");
        return actions.subscription.create({
            'plan_id': `${this.plan_id}`,
            'application_context': {
                'brand_name': 'Video streaming service',
                "locale": "en-US",
                "shipping_preference": "NO_SHIPPING",
                "user_action": "SUBSCRIBE_NOW",
                "payment_method": {
                    "payer_selected": "PAYPAL",
                    "payee_preferred": "IMMEDIATE_PAYMENT_REQUIRED"
                }
            }
        })
    };
    onApprove = (data, actions) => {
        console.log(" onApprove data ->  ", data);
        const payload = {
            plan_id: this.props.planNo,
            paypal_subscription_id: data.subscriptionID
        };
        axios.post('/paypal-subscribe', payload).then(res => {
            this.history.push('/pr');
        });
    };

    // createOrder = (data, actions) => {
    //     return actions.order.create({
    //         purchase_units: [
    //             {
    //                 description: "Mercedes G-Wagon",
    //                 amount: {
    //                     currency_code: "USD",
    //                     value: 200
    //                 }
    //             }
    //         ]
    //     });
    // };

    // onApprove = (data, actions) => {
    //     actions.order.capture().then(details => {
    //         const paymentData = {
    //             payerID: data.payerID,
    //             orderID: data.orderID
    //         };
    //         console.log("Payment Approved: ", paymentData);
    //     });
    // };


    render() {
        const { showButtons, loading } = this.state;

        return (
            <div className="main">
                {loading && <h5 style={{ display: "flex", color: "black" }}>Loading ...</h5>}

                {showButtons && (
                    <div>
                        <PayPalButton
                            createSubscription={(data, actions) => this.createSubscription(data, actions)}
                            // createOrder={(data, actions) => this.createOrder(data, actions)}
                            onApprove={(data, actions) => this.onApprove(data, actions)}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}&vault=true`)(withRouter(PaypalButton));