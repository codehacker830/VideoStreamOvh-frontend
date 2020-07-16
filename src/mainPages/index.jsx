import React from 'react';
import Header from '../components/Header';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { getCartList, } from "../actions";
import Home from './Home';
import MyList from './MyList';
import Watch from './Watch';
import MainPage404 from './ManPage404';
import MemberFooter from '../components/MemberFooter';
import './style.css';
import Latest from './Latest';

class MainPages extends React.Component {
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.props.getCartList();
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.authUser) {
            const { email_verified_at } = nextProps.authUser;
            if (email_verified_at === null) this.props.history.push('/verification');
        }
    }
    render() {
        const { match, location } = this.props;
        console.log("___ match ___", match);
        console.log("___ location ___", location);
        return (
            <React.Fragment>
                <div className="netflix-sans-font-loaded">
                    <div dir="ltr" className="">
                        <div>
                            <div className="bd kidsPage" lang="en-EN" data-uia="container-kids">
                                <Header />
                                <Switch>
                                    <Route exact path={`${match.url}`} component={Home} />
                                    <Route path={`${match.url}/latest`} component={Latest} />
                                    <Route path={`${match.url}/my-list`} component={MyList} />
                                    <Route path={`${match.url}/watch/:videoId`} component={Watch} />
                                    <Route component={MainPage404} />
                                </Switch>
                                <MemberFooter />
                            </div >
                        </div >
                    </div >
                </div >
            </React.Fragment>

        );
    }
}
const mapStateToProps = ({ auth }) => {
    const { authUser } = auth;
    return { authUser };
};
const mapDispatchToProps = { getCartList };
export default connect(mapStateToProps, mapDispatchToProps)(MainPages);