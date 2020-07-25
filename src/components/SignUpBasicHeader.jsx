import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpBasicHeader extends Component {
    render() {
        return (
            <div className="nfHeader noBorderHeader signupBasicHeader">
                <Link to="/" className="svg-nfLogo signupBasicHeader">
                    <img className="svg-icon svg-icon-netflix-logo" src="/assets/media/logo.svg" alt="" />
                    <span className="screen-reader-text">VideoStream</span></Link>
                <Link to="/sign-in" className="authLinks signupBasicHeader" style={{ textDecoration: "none"}}>Sign In</Link>
            </div>

        );
    }
}

export default SignUpBasicHeader;