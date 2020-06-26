import React, { Component } from 'react';
import axios from '../util/Api';
import { Link } from 'react-router-dom';

class VerifiedShow extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            success: false,
            token: props.match.params.token
        }
    }
    onHandleClick = (ev) => {
        ev.preventDefault();
    }
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            axios.get(`/email/verify/${this.state.token}`)
                .then(({ data }) => {
                    console.log(" email verification res : ", data);
                    this.setState({ loading: false, success: true });
                })
                .catch(error => {
                    console.error(" error : ", error.message);
                    this.setState({ loading: false, success: false });
                });
        }
    }

    render() {
        console.log("++++++++++++++ this.props : ", this.state.token)
        return (
            <div className="bg-image" style={{ backgroundImage: "url('/assets/media/photos/background.jpg')" }}>
                <div className="row no-gutters justify-content-center bg-black-75">
                    <div className="hero-static col-sm-8 col-md-6 col-xl-4 d-flex align-items-center p-2 px-sm-0">
                        <div className="block block-transparent block-rounded w-100 mb-0 overflow-hidden">
                            <div className="block-content block-content-full px-lg-5 px-xl-6 py-4 py-md-5 py-lg-6 bg-white">
                                <div className="mb-2 text-center">
                                    <span className="text-primary font-w700 font-size-h1">
                                        VIDEOSTREAM
                                    </span>
                                    <p className="text-uppercase font-w700 font-size-sm text-muted">Email verification</p>
                                </div>
                                {
                                    this.state.loading ?
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
                                        <div className="row justify-content-center">
                                            {
                                                this.state.success ?
                                                    <>
                                                        <div className="valid-feedback justify-content-center mb-2">Email verification successed.</div>
                                                        <Link to="/signin" className="btn btn-primary">Go and SignIn</Link>
                                                    </>
                                                    : <div className="invalid-feedback justify-content-center">Email verification failed.</div>
                                            }
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VerifiedShow;