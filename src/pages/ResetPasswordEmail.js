import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    
} from '../actions';
import axios from '../util/Api';

class ResetPasswordEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: "",
            message: "",
            error: ""
        };
    }
    onHandleClick = (ev) => {
        ev.preventDefault();
        this.setState({ loading: true });
        axios.post('/password/email', { email : this.state.email })
        .then(({data}) => {
            this.setState({ loading: false});
            this.setState({ message: data.message });
        })
        .catch(err => {
            this.setState({ loading: false});
            console.error("___ reset pass api error ___", err.response.data.error);
            this.setState({ error: err.response.data.error });
        });
    }
    render() {
        console.log("__ email : ", this.state.email)
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
                                    <div className="input-group">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            name="email" 
                                            placeholder="Email" 
                                            onChange={(ev) => {
                                                this.setState({ 
                                                    email: ev.target.value,
                                                    error: "",
                                                    message: "" 
                                                });
                                            }} 
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="fa fa-user-circle"></i>
                                            </span>
                                        </div>
                                        <div className="valid-feedback justify-content-center">{this.state.message}</div>
                                        <div className="invalid-feedback justify-content-center">{this.state.error}</div>
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-hero-primary" onClick={(ev) => this.onHandleClick(ev)}>
                                        <i className="fa fa-fw fa-reply mr-1"></i> Send Password Reset Link
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
                            </div>
                        </div>
                        {/* <!-- END Reminder Block --> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(() => ({}), {  })(ResetPasswordEmail);