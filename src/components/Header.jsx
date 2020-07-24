import React from 'react';
import { connect } from 'react-redux';
import { getCartList, searchByTitle, userSignOut } from "../actions";
import { Link, withRouter } from 'react-router-dom';
import SubHeader from './SubHeader';
import axios from '../util/Api';

class Header extends React.Component {
    constructor() {
        super();
        this.from = '/pr';
        this.state = {
            show: false,
            isOpen: false,
            searchKey: "",
            isDropdown: false
        }
        this.toggleContainer = React.createRef();
    }
    onHandleOpen = () => {
        this.setState({ isOpen: true });
        console.log(" this.props.location.pathname ---", this.props.location.pathname);
        this.from = this.props.location.pathname === '/pr/search' ? '/pr' : this.props.location.pathname;
    }
    onHandleClose = () => {
        this.setState({ searchKey: "", isOpen: false });
        console.log(" this.props.location.pathname ---", this.props.location.pathname);
        this.props.history.push(`${this.from}`);
    }
    onHandleSearch = (ev) => {
        this.setState({ searchKey: ev.target.value });
        this.props.history.push({
            pathname: `/pr/search`,
            state: {
                q: ev.target.value
            }
        });
    }
    onClickOutsideHandler = (ev) => {
        if(this.state.isDropdown && !this.toggleContainer.current.contains(ev.target)) {
            this.setState({ isDropdown: false });
        }
    }
    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler);
    }
    componentWillReceiveProps(nextProps) {
        console.log(" befroeProps =>", this.props);
        console.log(" HEADER nextProps =>", nextProps);
        if (nextProps.location.pathname !== '/pr/search') {
            if (this.props.location.pathname !== nextProps.location.pathname) {
                this.from = "/pr";
                this.setState({ searchKey: "", isOpen: false });
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler);
    }
    render() {
        const { isOpen, isDropdown } = this.state;
        const { authUser } = this.props;
        console.log("~~ authUser ~~", authUser);
        let title = "";
        if (this.props.location.pathname === "/pr/series") title = "Series";
        if (this.props.location.pathname === "/pr/movies") title = "Movies";
        if (this.props.location.pathname === "/pr/latest") title = "The Newest";
        if (this.props.location.pathname === "/pr/my-list") title = "My List";
        if (this.props.location.pathname === "/pr/search") title = "Search Result";

        return (
            <div className="pinning-header">
                <div className="pinning-header-container">
                    <div className="main-header has-billboard menu-navigation" role="navigation">
                        <Link to="/pr" aria-label="VideoStream" className="logo">
                            <img src="/assets/media/logo.svg" alt="logo" />
                        </Link>
                        <ul className="tabbed-primary-navigation">
                            <li className="navigation-menu"
                                onClick={() => this.setState({ show: !this.state.show })}>
                                <Link to="/pr" className="menu-trigger" style={{ outline: "none" }} role="button" aria-haspopup="true" tabIndex="0">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">Browse</span>
                                    </span>
                                </Link>
                                {
                                    this.state.show ?
                                        <div className="sub-menu theme-lakira" style={{ opacity: 1, transitionDuration: '150ms' }} onMouseLeave={() => this.setState({ show: false })}>
                                            <div className="callout-arrow" />
                                            <div className="topbar" />
                                            <ul className="sub-menu-list">
                                                <li className="sub-menu-item">
                                                    <Link to="/pr/">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Home Page</font>
                                                        </font>
                                                    </Link>
                                                </li>
                                                {/* <li className="sub-menu-item">
                                                    <Link to="/pr/series">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Series</font>
                                                        </font>
                                                    </Link>
                                                </li> */}
                                                <li className="sub-menu-item">
                                                    <Link to="/pr/movies">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Movies</font>
                                                        </font>
                                                    </Link>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <Link to="/pr/latest">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>Latest</font>
                                                        </font>
                                                    </Link>
                                                </li>
                                                <li className="sub-menu-item">
                                                    <Link to="/pr/my-list">
                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>My List</font>
                                                        </font>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        : null
                                }
                            </li>
                            <li className="navigation-tab">
                                <Link to="/pr/" className="current">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">Home page</span>
                                    </span>
                                </Link>
                            </li>
                            {/* <li className="navigation-tab">
                                <Link to="/pr/series">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">Series</span>
                                    </span>
                                </Link>
                            </li> */}
                            <li className="navigation-tab">
                                <Link to="/pr/movies">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">Movies</span>
                                    </span>
                                </Link>
                            </li>
                            <li className="navigation-tab">
                                <Link to="/pr/latest">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">The Newests</span>
                                    </span>
                                </Link>
                            </li>
                            <li className="navigation-tab">
                                <Link to="/pr/my-list">
                                    <span className="v-align-inherit">
                                        <span className="v-align-inherit">List</span>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <div className="secondary-navigation search-focused">
                            <div className="nav-element">
                                <div className="searchBox">
                                    {
                                        isOpen ?
                                            <div className="searchInput">
                                                <span className="icon-search"></span>
                                                <input type="text"
                                                    name="searchInput"
                                                    placeholder="Title, Category, Content"
                                                    // placeholder="Content, Character, Genre"
                                                    data-search-input="true"
                                                    maxLength="80"
                                                    value={this.state.searchKey}
                                                    onChange={this.onHandleSearch}
                                                />
                                                <span className="icon-close" onClick={this.onHandleClose} />
                                            </div>
                                            : <button className="searchTab" tabIndex="0" aria-label="Search"
                                                onClick={this.onHandleOpen} >
                                                <span className="icon-search"></span>
                                            </button>
                                    }
                                </div>
                            </div>
                            <div className="nav-element">
                                <div className="account-menu-item">
                                    <div className="account-dropdown-button">
                                        <div className="exit-kids" onClick={this.props.userSignOut}>
                                            <span className="v-align-inherit">
                                                <span className="v-align-inherit">Sign Out</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Here is account setting dropdown nav element */}
                            <div className="nav-element">
                                <div className="active account-menu-item" ref={this.toggleContainer}>
                                    <div className="account-dropdown-button">
                                        <button role="button" tabIndex={0} aria-haspopup="true" aria-expanded="false"
                                            style={{
                                                outline: "none",
                                                background: "none",
                                                border: "none",
                                            }}
                                            aria-label="Ibo - Account and Settings" onClick={() => this.setState({ isDropdown: !this.state.isDropdown })}>
                                            <span className="profile-link" role="presentation">
                                                <img
                                                    className="profile-icon"
                                                    src="/assets/media/avartar/sm-avartar.png"
                                                    alt="" />
                                                <div className="callout-arrow" style={{ opacity: isDropdown ? 1 : 0, transitionDuration: '500ms' }}></div>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="account-drop-down sub-menu theme-lakira js-transition-node"
                                        style={{ opacity: isDropdown ? 1 : 0, transitionDuration: '500ms' }}>
                                        {
                                            isDropdown &&
                                            <div className="ptrack-content">
                                                <div className="topbar" />
                                                <ul className="sub-menu-list profiles" role="list" aria-label="profiles">
                                                    <li className="sub-menu-item profile" role="listitem">
                                                        <div>
                                                            <div className="" tabIndex={0} >
                                                                <div className="avatar-wrapper">
                                                                    <img className="profile-icon"
                                                                        src="/assets/media/avartar/sm-avartar.png"
                                                                        alt="" />
                                                                </div>
                                                                <span className="profile-name">
                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                        <font style={{ verticalAlign: 'inherit' }}>{authUser && authUser.name}</font>
                                                                    </font>
                                                                </span>
                                                            </div>
                                                            <div className="profile-children" />
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul className="account-links sub-menu-list" aria-label="Account">
                                                    <li className="sub-menu-item">
                                                        <Link className="sub-menu-link" to="/pr/my-account">
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Account</font>
                                                            </font>
                                                        </Link>
                                                    </li>
                                                    <li className="sub-menu-item">
                                                        <div className="sub-menu-link" style={{
                                                            textDecoration: "none",
                                                            cursor: "pointer"
                                                        }} onClick={this.props.userSignOut}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Sign out</font>
                                                            </font>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* sub header */}
                    {title === "" ? null : <SubHeader title={title} />}
                    {/* end sub header */}

                </div>
            </div >
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const { authUser } = auth;
    return { authUser }
};
const mapDispatchToProps = { searchByTitle, userSignOut };
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));