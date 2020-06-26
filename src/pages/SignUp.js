import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignUp } from '../actions';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            passwordConfirm: "",
            message: "",
            error: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        console.error(" next props : ", nextProps);
        if (nextProps.authUser) {
            const { email_verified_at } = nextProps.authUser;
            console.error(" next props email_verified_at : ", email_verified_at);
            
            if(email_verified_at) this.props.history.push('/home');
            else this.props.history.push('/verification');
        }
    }

    render() {
        return (
            <main id="main-container">
                <div className="bg-image" style={{ backgroundImage: "url('assets/media/photos/background-2.jpg')" }}>
                    <div className="row no-gutters bg-black-75">
                        <div
                            className="hero-static col-md-6 d-none d-md-flex align-items-md-center justify-content-md-center text-md-center">
                            <div className="p-3">
                                <p className="display-4 font-w700 text-white mb-3">
                                    Welcome to the VIDEOSTREAM
                            </p>
                            </div>
                        </div>
                        <div className="hero-static col-md-6 d-flex align-items-center bg-white">
                            <div className="p-3 w-100">
                                <div className="mb-3 text-center">
                                    <Link className="link-fx text-primary font-w700 font-size-h1" to="/">
                                        <span className="text-primary">VIDEOSTREAM</span>
                                    </Link>
                                    <p className="text-uppercase font-w700 font-size-sm text-muted">Create New Account</p>
                                </div>

                                <div className="row no-gutters justify-content-center">
                                    <div className="col-sm-8 col-xl-6">
                                        <div className="py-3">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg form-control-alt"
                                                    id="signup-username"
                                                    name="signup-username"
                                                    placeholder="Username"
                                                    onChange={(ev) => { this.setState({ username: ev.target.value, message: "", error: "" }) }} />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control form-control-lg form-control-alt"
                                                    id="signup-email"
                                                    name="signup-email"
                                                    placeholder="Email"
                                                    onChange={(ev) =>
                                                        this.setState({
                                                            email: ev.target.value,
                                                            message: "",
                                                            error: ""
                                                        })
                                                    } />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg form-control-alt"
                                                    id="signup-password"
                                                    name="signup-password"
                                                    placeholder="Password"
                                                    onChange={(ev) =>
                                                        this.setState({
                                                            password: ev.target.value,
                                                            message: "",
                                                            error: ""
                                                        })
                                                    } />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg form-control-alt"
                                                    id="signup-password-confirm"
                                                    name="signup-password-confirm"
                                                    placeholder="Password Confirm"
                                                    onChange={(ev) =>
                                                        this.setState({
                                                            passwordConfirm: ev.target.value,
                                                            message: "",
                                                            error: ""
                                                        })
                                                    } />
                                            </div>
                                            {/* <div className="form-group">
                                                    <div className="custom-control custom-checkbox custom-control-primary">
                                                        <input type="checkbox" className="custom-control-input"
                                                            id="signup-terms" name="signup-terms" />
                                                        <label className="custom-control-label" for="signup-terms">I agree
                                                        to Terms &amp; Conditions</label>
                                                        </div>
                                                    </div> */}
                                            <div className="invalid-feedback justify-content-center">{this.state.error}</div>
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
                                                : (this.props.status || <div className="invalid-feedback justify-content-center">{this.props.error}</div>)
                                            }
                                        </div>
                                        <div className="form-group">
                                            <button
                                                className="btn btn-block btn-hero-lg btn-hero-primary"
                                                onClick={() => {
                                                    if (this.state.password && this.state.username && this.state.password && this.state.password === this.state.passwordConfirm) {
                                                        this.setState({ message: "", error: "" })
                                                        this.props.userSignUp({
                                                            name: this.state.username,
                                                            email: this.state.email,
                                                            password: this.state.password,
                                                            passwordConfirm: this.state.passwordConfirm
                                                        });
                                                    } else {
                                                        this.setState({
                                                            error: "Please input valid information",
                                                            password: "",
                                                            passwordConfirm: ""
                                                        });
                                                    }
                                                }}
                                            >
                                                <i className="fa fa-fw fa-plus mr-1"></i> Sign Up
                                            </button>
                                            <p className="mt-3 mb-0 d-lg-flex justify-content-lg-between">
                                                <Link className="btn btn-sm btn-light d-block d-lg-inline-block mb-1" to="/signin">
                                                    <i className="fa fa-sign-in-alt text-muted mr-1"></i> Sign In
                                                    </Link>
                                                {/* <Link className="btn btn-sm btn-light d-block d-lg-inline-block mb-1" to="policy">
                                                        <i className="fa fa-book text-muted mr-1"></i> Read Terms
                                                    </Link> */}
                                            </p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </main>
        );
    }
}

const mapStateToProps = ({ auth, commonData }) => {
    const { error, loading, status } = commonData;
    const { authUser } = auth;
    return { error, loading, status, authUser };
};

export default connect(mapStateToProps, { userSignUp })(SignUp);