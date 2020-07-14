import React, { Component } from 'react';
import axios from '../util/Api';

export default class ResetPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: props.match.params.token,
            email: "",
            password: "",
            passwordConfirm: "",
            error: "",
            message: "",
            loading: false
        };
    }
    onHandleClick = (ev) => {
        ev.preventDefault();
        if (this.state.password !== this.state.passwordConfirm) {
            this.setState({
                error: "Please double check your password",
                password: "",
                passwordConfirm: ""
            })
        }
        else {
            this.setState({ loading: true });
            const data = {
                token: this.state.token,
                email: this.state.email,
                password: this.state.password
            };
            axios.post('/password/reset', data)
                .then(({ data }) => {
                    this.setState({ loading: false });
                    this.setState({ loading: false, message: data.message });
                })
                .catch(err => {
                    this.setState({ loading: false });
                    this.setState({ loading: false, error: err.message });
                });
        }
    }
    render() {
        return (
            <div className="bg-image" style={{ backgroundImage: "url('/assets/media/photos/background.jpg')" }}>
                <div className="row no-gutters justify-content-center bg-black-75">
                    <div className="hero-static col-sm-8 col-md-6 col-xl-4 d-flex align-items-center p-2 px-sm-0">
                        {/* <!-- Reminder Block --> */}
                        <div className="block block-transparent block-rounded w-100 mb-0 overflow-hidden">
                            <div className="block-content block-content-full px-lg-5 px-xl-6 py-4 py-md-5 py-lg-6 bg-white">
                                {/* <!-- Header --> */}
                                <div className="mb-2 text-center">
                                    <span className="text-primary font-w700 font-size-h1">
                                        VIDEOSTREAM
                                    </span>
                                    <p className="text-uppercase font-w700 font-size-sm text-muted">Password Reset</p>
                                </div>
                                {/* <!-- END Header --> */}

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Email"
                                            onChange={(ev) => this.setState({ email: ev.target.value, message: "", error: "" })} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="fa fa-user-circle"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="input-group mb-2">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Password"
                                            onChange={(ev) => this.setState({ password: ev.target.value, message: "", error: "" })} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="fa fa-asterisk"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="input-group mb-2">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password-confirmation"
                                            placeholder="Password confirmation"
                                            onChange={(ev) => this.setState({ passwordConfirm: ev.target.value, message: "", error: "" })} />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="fa fa-asterisk"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-hero-primary" onClick={(ev) => this.onHandleClick(ev)}>
                                        <i className="fa fa-fw fa-reply mr-1"></i> Reset Password
                                        </button>
                                </div>
                                {
                                    this.state.loading &&
                                    <div className="row justify-content-center mb-2">
                                        <div className="spinner-grow text-danger" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div><div className="spinner-grow text-danger" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div><div className="spinner-grow text-danger" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                }
                                <div className="invalid-feedback justify-content-center">{this.state.error}</div>
                                <div className="valid-feedback justify-content-center">{this.state.message}</div>
                            </div>
                        </div>
                        {/* <!-- END Reminder Block --> */}
                    </div>
                </div>
            </div >
        );
    }
}