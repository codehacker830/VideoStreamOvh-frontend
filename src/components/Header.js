import React from 'react';
import { connect } from 'react-redux';
import { getCartList, searchByTitle, userSignOut } from "../actions";
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            searchKey: ""
        }
    }
    render() {
        return (
            <div className="pinning-header">
                <div className="pinning-header-container">
                    <div className="main-header has-billboard menu-navigation" role="navigation">
                        <Link to="/pr" aria-label="Netflix" className="logo">
                            <img src="assets/media/logo.svg" alt=""/>
                        </Link>
                        <ul className="tabbed-primary-navigation">
                            <li className="navigation-menu">
                                <Link className="menu-trigger" role="button" aria-haspopup="true" tabIndex="0">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">Browse</span>
                                    </span>
                                </Link></li>
                            <li className="navigation-tab">
                                <Link to="/Kids" className="current">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">Home page</span>
                                    </span>
                                </Link></li>
                            <li className="navigation-tab">
                                <Link to="/Kids/characters">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">Characters</span>
                                    </span>
                                </Link>
                                </li>
                            <li className="navigation-tab">
                                <Link to="/browse/genre/2496491">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">Series</span>
                                    </span>
                                </Link></li>
                            <li className="navigation-tab">
                                <Link to="/browse/genre/2495600">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">Movies</span>
                                    </span>
                                </Link></li>
                            <li className="navigation-tab">
                                <Link to="/latest">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">The Newests</span>
                                    </span>
                                </Link></li>
                            <li className="navigation-tab">
                                <Link to="/browse/my-list">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">List</span>
                                    </span>
                                </Link></li>
                        </ul>
                        <div className="secondary-navigation">
                            <div className="nav-element">
                                <div className="searchBox"><button className="searchTab" tabIndex="0"
                                    aria-label="Search" data-uia="search-box-launcher"><span
                                        className="icon-search"></span></button></div>
                            </div>
                            <div className="nav-element">
                                <div className="account-menu-item">
                                    <div className="account-dropdown-button">
                                        <Link to="/Profiles" role="button" tabIndex="0" aria-haspopup="true"
                                            aria-expanded="false"
                                            aria-label="Child - Account and Settings"><span
                                                className="profile-link" role="presentation">
                                                <img
                                                    className="profile-icon"
                                                    src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABWYjLL1WmaA68UglG6WrAeDFzuyEjz8aH5nfgiud9DqVyj8sU0T_oiToyGiNf06N0oLKd9Qeaze4sEBU2koUnWY.png?r=8f0"
                                                    alt="" />
                                            </span>
                                        </Link>
                                        <div className="exit-kids">
                                            <span className="v-align-inherit">
                                                <span className="v-align-inherit">Exit child</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const { authUser } = auth;
    return { authUser }
};
const mapDispatchToProps = { searchByTitle, userSignOut };
export default connect(mapStateToProps, mapDispatchToProps)(Header)