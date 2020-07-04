import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignIn } from '../actions';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        console.error(" next props : ", nextProps);
        if(nextProps.authUser) {
            const { email_verified_at } = nextProps.authUser;
            console.error(" next props email_verified_at : ", email_verified_at);

            if(email_verified_at === null) this.props.history.push('/verification');
            else this.props.history.push('/home');
        }
    }
    render() {
        return (
            <main id="main-container">
                <div className="bg-image" style={{ backgroundImage: "url('/assets/media/photos/background-2.jpg')" }}>
                    <div className="row no-gutters bg-black-75">
                        <div className="hero-static col-md-6 d-flex align-items-center bg-white">
                            <div className="p-3 w-100">
                                <div className="mb-3 text-center">
                                    <Link className="link-fx font-w700 font-size-h1" to="/">
                                        <span className="text-primary">VIDEOSTREAM</span>
                                    </Link>
                                    <p className="text-uppercase font-w700 font-size-sm text-muted">Sign In</p>
                                </div>

                                <div className="row no-gutters justify-content-center">
                                    <div className="col-sm-8 col-xl-6">
                                        <div className="py-3">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control form-control-lg form-control-alt"
                                                    id="login-email"
                                                    name="login-email"
                                                    placeholder="Email"
                                                    value={this.state.email}
                                                    onChange={(event) => { this.setState({ email: event.target.value }) }} />
                                            </div>
                                            <div className="form-group">
                                                <input type="password"
                                                    className="form-control form-control-lg form-control-alt"
                                                    id="login-password"
                                                    name="login-password"
                                                    placeholder="Password"
                                                    value={this.state.password}
                                                    onChange={(event) => { this.setState({ password: event.target.value }) }} />
                                            </div>
                                            {
                                                this.props.loading ?
                                                    <div className="row justify-content-center mb-2">
                                                        <div className="spinner-grow text-danger" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div><div className="spinner-grow text-danger" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div><div className="spinner-grow text-danger" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    </div>
                                                    : ( this.props.status || <div className="invalid-feedback justify-content-center">{this.props.error}</div> )
                                            }
                                        </div>
                                        <div className="form-group">
                                            <button
                                                className="btn btn-block btn-hero-lg btn-hero-primary"
                                                onClick={(ev) => {
                                                    ev.preventDefault();
                                                    this.props.userSignIn({ email: this.state.email, password: this.state.password });
                                                }}>
                                                <i className="fa fa-fw fa-sign-in-alt mr-1"></i> Sign In
                                                </button>
                                            <p className="mt-3 mb-0 d-lg-flex justify-content-lg-between">
                                                <Link className="btn btn-sm btn-light d-block d-lg-inline-block mb-1"
                                                    to="/password-reset-email">
                                                    <i className="fa fa-exclamation-triangle text-muted mr-1"></i> Forgot password
                                                </Link>
                                                <Link className="btn btn-sm btn-light d-block d-lg-inline-block mb-1"
                                                    to="/signup">
                                                    <i className="fa fa-plus text-muted mr-1"></i> Create Account
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="hero-static col-md-6 d-none d-md-flex align-items-md-center justify-content-md-center text-md-center">
                            <div className="p-3">
                                <p className="display-4 font-w700 text-white mb-3">
                                    Welcome to the VIDEOSTREAM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
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