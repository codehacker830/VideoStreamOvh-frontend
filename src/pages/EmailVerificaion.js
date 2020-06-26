import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    resendEmail
} from '../actions';
import axios from '../util/Api';

class EmailVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }
    onHandleClick = (ev) => {
        ev.preventDefault();
        this.props.resendEmail();
    }
    render() {
        return (
            <div className="bg-image" style={{ backgroundImage: "url('/assets/media/photos/background.jpg')" }}>
                <div className="row no-gutters justify-content-center bg-black-75">
                    <div className="hero-static col-sm-8 col-md-6 col-xl-4 d-flex align-items-center p-2 px-sm-0">
                        <div className="block block-transparent block-rounded w-100 mb-0 overflow-hidden">
                            <div className="block-content block-content-full px-lg-4 px-xl-6 py-4 py-md-5 py-lg-5 bg-white">
                                <div className="mb-2 text-center">
                                    <span className="text-primary font-w700 font-size-h1">
                                        VIDEOSTREAM
                                    </span>
                                    <p className="text-uppercase font-w700 font-size-sm text-muted">Email verification</p>
                                </div>
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary" onClick={(ev) => this.onHandleClick(ev)}>
                                        <i className="fa fa-fw fa-reply mr-1"></i> Resend Verification Link
                                    </button>
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
                                        :
                                        (
                                            this.props.status ?
                                                <div className="valid-feedback justify-content-center">{this.props.message}</div>
                                                : <div className="invalid-feedback justify-content-center">{this.props.error}</div>
                                        )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
const mapStateToProps = ({ commonData }) => {
    const { loading, status, message, error } = commonData;
    return { loading, status, message, error };
};
export default connect(mapStateToProps, { resendEmail })(EmailVerification);