import React, { Component } from 'react';
import './style.scoped.css';
import { Link } from 'react-router-dom';
import { changePassword } from '../../actions';
import { connect } from 'react-redux';

class ChangePassword extends Component {
    state = {
        currentPass: "",
        newPass: "",
        confirmPass: "",
        validationError: ""
    };
    onClickSave = () => {
        const { currentPass, newPass, confirmPass } = this.state;
        if (currentPass && newPass && confirmPass) {
            if (newPass === confirmPass) {
                const data = { currentPass, newPass };
                this.props.changePassword(data);
            }
            else {
                this.setState({ validationError: "Please confirm your new password again !" });

            }
        } else {
            this.setState({ validationError: "All fields are required !" });
        }

    }
    onClickCancel = () => {
        this.setState({
            currentPass: "",
            newPass: "",
            confirmPass: "",
            validationError: ""
        });
        this.props.history.push('/pr/my-account');
    }
    render() {
        const { currentPass, newPass, confirmPass } = this.state;
        console.log(" POPS -> ", this.props);
        const { loading, status, message, error } = this.props.commonData;
        const { validationError } = this.state;
        return (
            <div className="bd" style={{
                fontSize: "16px",
                margin: 0,
                padding: "30px",
                backgroundColor: "#eee"
            }}>
                <div className="responsive-account-container">
                    <form className="change-password-form" method="post" noValidate>
                        <h1>Change Password</h1>
                        <ul className="simpleForm structural ui-grid">
                            <li className="nfFormSpace">
                                <div className="nfInput">
                                    <div className="nfInputPlacement">
                                        <label className="input_id" placeholder="currentPassword">
                                            <input type="password"
                                                name="currentPassword"
                                                className={`nfTextField ${currentPass ? " hasText" : ""}`}
                                                id="id_currentPassword"
                                                tabIndex="{0}"
                                                autoComplete="off"
                                                maxLength="60" minLength="4"
                                                onChange={(ev) => this.setState({ currentPass: ev.target.value, validationError: "" })} />
                                            <label htmlFor="id_currentPassword" className="placeLabel">Current Password</label>
                                        </label>
                                    </div>
                                    <div className="inputCaption">
                                        <Link to="/forgot-password">Forgot password?</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nfFormSpace">
                                <div className="nfInput">
                                    <div className="nfInputPlacement">
                                        <label className="input_id" placeholder="newPassword">
                                            <input type="password"
                                                name="newPassword"
                                                className={`nfTextField${newPass ? " hasText" : ""}`}
                                                id="id_newPassword"
                                                tabIndex="{0}"
                                                autoComplete="off"
                                                maxLength="{60}" minLength="{4}"
                                                onChange={(ev) => this.setState({ newPass: ev.target.value, validationError: "" })} />
                                            <label htmlFor="id_newPassword" className="placeLabel">New password (4-60 characters)</label>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li className="nfFormSpace">
                                <div className="nfInput">
                                    <div className="nfInputPlacement">
                                        <label className="input_id" placeholder="confirmNewPassword">
                                            <input type="password"
                                                name="confirmNewPassword"
                                                className={`nfTextField${confirmPass ? " hasText" : ""}`}
                                                id="id_confirmNewPassword"
                                                tabIndex="{0}"
                                                autoComplete="off"
                                                maxLength="60" minLength="4"
                                                onChange={(ev) => this.setState({ confirmPass: ev.target.value, validationError: "" })} />
                                            <label htmlFor="id_confirmNewPassword" className="placeLabel">Confirm new password</label>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li className="nfFormSpace">
                                <div>
                                    {
                                        validationError ?
                                            <span style={{ color: "red" }}>{validationError}</span>
                                            : null
                                    }
                                </div>
                            </li>
                            <li className="nfFormSpace">
                                <div>
                                    {
                                        !loading &&
                                        <span style={{
                                            color: `${status ? 'green' : 'red'}`
                                        }}>{status ? message : error}</span>
                                    }

                                </div>
                            </li>
                        </ul>
                        <div className="nf-btn-bar change-password-buttons">
                            <button id="btn-save" type="button"
                                autoComplete="off"
                                className="nf-btn nf-btn-primary nf-btn-retro nf-btn-small"
                                onClick={this.onClickSave}>
                                Save</button>
                            <button id="btn-cancel" type="button" autoComplete="off"
                                className="nf-btn nf-btn-secondary nf-btn-retro nf-btn-small"
                                onClick={this.onClickCancel}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ commonData }) => ({ commonData });
const mapDispatchToProps = { changePassword };
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);