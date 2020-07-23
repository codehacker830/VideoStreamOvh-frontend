import React, { Component } from 'react';
import SignUpBasicHeader from '../../components/SignUpBasicHeader';
import SiteFooterWrapper from '../../components/SiteFooterWrapper';
import axios from '../../util/Api';
import { Link } from 'react-router-dom';

export default class Subscription extends Component {
    _isMounted = false;
    state = {
        plans: [],
        checkedPlanId: null
    };
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            axios.get('/plans',
            ).then(({ data }) => {
                this.setState({ plans: data.plans });
            }).catch(err => {
                console.error(" Error during get plans", err);
            })
        }
    }
    onClickContinue = () => {
        const { checkedPlanId } = this.state;
        if (checkedPlanId) {
            this.props.history.push({
                pathname: '/payment',
                state: { planNo: checkedPlanId }
            });
        } else {
            alert(" You must check one subscription model !");
        }
    }
    render() {
        const { plans } = this.state;
        console.log("this.state", this.state);
        return (
            <div className="netflix-sans-font-loaded">
                <div className="basicLayout modernInApp signupSimplicity-planSelection simplicity" lang="en-US" dir="ltr">
                    <SignUpBasicHeader />
                    <div className="simpleContainer" data-transitioned-child="true">
                        <div className="centerContainer narrowCenterContainer"
                            style={{ display: 'block', transform: 'none', opacity: 1, transitionDuration: '250ms' }}>
                            <div className="planFormContainer planCardSelection">
                                <div>
                                    <div className="stepHeader-container">
                                        <div className="stepHeader" tabIndex={0}>
                                            <span className="stepIndicator" style={{ color: "black" }}>STEP <b>2</b> OF <b>3</b></span>
                                            <h1 className="stepTitle" style={{ color: "black" }}>Choose the plan that’s right for you.</h1>
                                        </div>
                                    </div>
                                    {/* <div className="changeAnytime" style={{ color: "black"}}>Pay $0.00 today. Cancel online anytime.</div> */}
                                </div>
                                <div className="plan-card-container alt-visuals">
                                    <div className="cards-flex-container">
                                        {
                                            plans && plans.length ?
                                                plans.map((plan, index) => {
                                                    console.log(plan);
                                                    return <label className="plan-card standalone with-shadow clickable" key={index} onClick={() => this.setState({ checkedPlanId: plan.id })}>
                                                        <div className="radioContainer">
                                                            <input type="radio" name="planChoice" />
                                                            <div className="header">
                                                                <span className="header-text">
                                                                    <div className="title" style={{ textTransform: "uppercase" }}>{plan.name}</div>
                                                                    <div className="subtitle">${plan.price}/month</div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="divider visible" />
                                                        <div className="cardBody">
                                                            <div className="features">
                                                                {/* <div className="icons" style={{ color: 'rgb(229, 9, 20)', fill: 'rgb(229, 9, 20)' }}>
                                                                    <svg width={40}
                                                                        height={26} className="featureIcon">
                                                                        <path
                                                                            d="M11 24v-5.056H0v-3.232L11 2h4v13.424h3v3.52h-3V24h-4zm-6.656-8.576h6.636V7.136l-6.636 8.288zM21 24V2h3.985v8.752L34.23 2h5.228L28.906 12.384 40 24h-5.643l-9.372-9.472V24H21z"
                                                                            fillRule="nonzero" />
                                                                    </svg>
                                                                    <svg width={54} height={26} className="featureIcon">
                                                                        <path
                                                                            d="M42 1c6.627 0 12 5.373 12 12s-5.373 12-12 12H12C5.373 25 0 19.627 0 13S5.373 1 12 1h30zm0 1H12C5.925 2 1 6.925 1 13c0 5.979 4.77 10.843 10.712 10.996L12 24h30c6.075 0 11-4.925 11-11 0-5.979-4.77-10.843-10.712-10.996L42 2z">
                                                                        </path>
                                                                        <path
                                                                            d="M12 18V8h2v4h5V8h2v10h-2v-4h-5v4h-2zm11 0V8h3.779c.996 0 1.87.206 2.622.618a4.47 4.47 0 011.767 1.738c.426.747.696 1.629.696 2.644 0 1.015-.27 1.897-.696 2.644a4.47 4.47 0 01-1.767 1.738c-.752.412-1.626.618-2.622.618H23zm2-2h1.664c.613 0 1.156-.118 1.63-.354a2.694 2.694 0 001.121-1.022c.273-.445.41-.986.41-1.624 0-.638-.137-1.179-.41-1.624a2.694 2.694 0 00-1.12-1.022c-.475-.236-1.018-.354-1.631-.354H25v6zm9 2V8h4.08c1.227 0 2.182.292 2.867.876.685.585 1.027 1.549 1.027 2.545 0 1.453-.567 2.588-1.988 3.112L42.42 18h-2.686l-1.783-3H36v3h-2zm2-5h1.93c.747 0 1.296-.13 1.645-.39.35-.26.525-.642.525-1.144 0-.503-.175-.872-.525-1.11-.35-.237-.898-.356-1.645-.356H36v3z">
                                                                        </path>
                                                                    </svg>
                                                                    <svg width={53} height={26} className="featureIcon">
                                                                        <path
                                                                            d="M51 0a2 2 0 012 2v22a2 2 0 01-2 2H29a2 2 0 01-2-2V2a2 2 0 012-2h22zm0 1H29a1 1 0 00-.993.883L28 2v22a1 1 0 00.883.993L29 25h22a1 1 0 00.993-.883L52 24V2a1 1 0 00-.883-.993L51 1z">
                                                                        </path>
                                                                        <path
                                                                            d="M43.36 20v-3.44h2.18v-1.62h-2.18V6.08H41.6l-7.14 9.06v1.42h7.04V20h1.86zm-1.86-5.06h-5l5-6.34v6.34zM7.5 0c-.219.29-.375.631-.45 1H2a1 1 0 00-.993.884L1 2v22a1 1 0 00.883.993L2 25h5.05c.075.37.232.71.45 1.001H2a2 2 0 01-2-2V2a2 2 0 012-2zM16.5 0c-.219.29-.375.631-.45 1H11a1 1 0 00-.993.884L10 2v22a1 1 0 00.883.993L11 25h5.05c.075.37.232.71.45 1.001H11a2 2 0 01-2-2V2a2 2 0 012-2zM25.5 0c-.219.29-.375.631-.45 1H20a1 1 0 00-.993.884L19 2v22a1 1 0 00.883.993L20 25h5.05c.075.37.232.71.45 1.001H20a2 2 0 01-2-2V2a2 2 0 012-2z">
                                                                        </path>
                                                                    </svg>
                                                                </div> */}
                                                                <div className="label">{plan.description}</div>
                                                            </div>
                                                        </div>
                                                    </label>
                                                })
                                                : null
                                        }
                                    </div>
                                    <div className="supplimental-flex-container"><small
                                        className="planGrid__legal legal-disclaimer">
                                        <span>HD and Ultra HD availability subject to your
                                        Internet service and device capabilities. Not all content available in HD or Ultra
                                        HD. See
                                    <Link to="/terms-of-use" style={{ color: "blue" }} target="_blank"> Terms of Use </Link> for more details.</span>
                                    </small>
                                        <div className="submitBtnContainer submit-button">
                                            <button type="button" autoComplete="off"
                                                className="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize"
                                                placeholder="planSelection_button_continue"
                                                onClick={this.onClickContinue}>CONTINUE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loadingText">
                                <div className="loadingTextContent">
                                    <span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SiteFooterWrapper />
                </div>
            </div>
        );
    }
}