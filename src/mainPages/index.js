import React from 'react';
import Header from '../components/Header';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Home from './Home';
import MyList from './MyList';
// import PlayMovie from './PlayMovie';
import { getCartList, } from "../actions";
import Error404 from '../pages/Error404';
import { history } from '../store';
import './style.css';

class MainPages extends React.Component {
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.props.getCartList();
        }
    }
    componentWillReceiveProps(nextProps) {
        console.error("________  nextProps ", nextProps);
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
                                    <Route path={`${match.url}/my-list`} component={MyList} />
                                    {/* <Route exact path={`${match.url}/playmovie/:videoId`} component={PlayMovie} /> */}
                                    <Route component={Error404} />
                                </Switch>
                            </div >
                        </div >
                    </div >
                </div >
            </React.Fragment>

        );
    }
}
const mapStateToProps = ({ auth }) => {
    return { authUser: auth.authUser };
};
const mapDispatchToProps = { getCartList };
export default connect(mapStateToProps, mapDispatchToProps)(MainPages);