import React, { Component } from 'react';
import { Redirect } from 'react-router';
import LoadingRow from '../../components/LoadingRow';
import { Link } from 'react-router-dom';
import VideoItem from '../../components/VideoItem';
import JawBoneContent from '../../components/JawBoneContent';
import { getCategoryList, searchByTitle } from "../../actions";
import { connect } from 'react-redux';
import axios from '../../util/Api';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            searchResult: [],
            totalInViewport: 0,
        };
    }
    resizeScreen = () => {
        const screenWidth = window.innerWidth;
        console.log(" ^^^ screen width ^^^^ ", screenWidth);
        if (screenWidth >= 1400) {
            this.setState({ totalInViewport: 6 });
        } else if (screenWidth >= 1100) {
            this.setState({ totalInViewport: 5 });
        } else if (screenWidth >= 800) {
            this.setState({ totalInViewport: 4 });
        } else if (screenWidth >= 500) {
            this.setState({ totalInViewport: 3 });
        } else {
            this.setState({ totalInViewport: 2 });
        }
    }
    componentDidMount() {
        this._isMounted = true;
        window.addEventListener('resize', this.resizeScreen);
        this.resizeScreen();
        if (this._isMounted && this.props.location.state) {
            const title = this.props.location.state.q;
            if (title && title !== "") {
                this.setState({ isLoading: true });
                axios.get(`/videos/title/${title}`,
                ).then(({ data }) => {
                    this.setState({
                        isLoading: false,
                        searchResult: data.videos
                    });
                });
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.state) {
            const title = this.props.location.state.q;
            if (title && title !== "") {
                this.setState({ isLoading: true });
                axios.get(`/videos/title/${title}`,
                ).then(({ data }) => {
                    this.setState({
                        isLoading: false,
                        searchResult: data.videos
                    });
                });
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeScreen);
    }
    render() {
        console.log("____________________ this.props.location _______________", this.props.location);

        const { isJawOpen, rowId, videoId } = this.props;
        const { isLoading, totalInViewport, searchResult } = this.state;
        const totalInList = searchResult.length;

        let totalRows = 1;
        if (totalInList && totalInViewport) {
            totalRows = Math.ceil(totalInList / totalInViewport);
        }

        if (this.props.location.state && this.props.location.state.q !== "") {
            if (!isLoading) {
                return (
                    <div className="mainView" role="main">
                        <div className="search">
                            <div className="gallery row-with-x-columns search">
                                <div className="search-title-header">
                                    <div className="rail">
                                        <div className="suggestions">
                                            <div className="ptrack-container">
                                                <div className="ptrack-content">
                                                    <div className="suggestionRailContainer">
                                                        <span className="suggestionsLabel">
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Check out the related key:
                                                        </font>
                                                            </font>
                                                        </span>
                                                        <ul>
                                                            <li>
                                                                <div className="ptrack-content">
                                                                    <Link to={{
                                                                        pathname: "/pr/search",
                                                                        state: {
                                                                            q: `${this.props.location.state.q}`
                                                                        }
                                                                    }}>
                                                                        <font style={{ verticalAlign: 'inherit' }}>
                                                                            <font style={{ verticalAlign: 'inherit' }}>{this.props.location.state.q}</font>
                                                                        </font>
                                                                    </Link>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="galleryContent">
                                    <div>
                                        {
                                            searchResult && searchResult.length ?
                                                <div className="galleryLockups">
                                                    {
                                                        new Array(totalRows).fill("").map((dt, r_id) => {
                                                            return (
                                                                <div className={`rowContainer rowContainer_title_card${isJawOpen && (r_id === rowId) ? " jawBoneOpen" : ""}`} id={`row-${r_id}`} key={r_id}>
                                                                    <div className="ptrack-container">

                                                                        <div className="rowContent slider-hover-trigger-layer">
                                                                            <div className="slider">
                                                                                <div className="sliderMask showPeek">
                                                                                    <div className="sliderContent row-with-x-columns" style={{ WebkitTransform: '', msTransform: '', transform: '' }}>
                                                                                        {
                                                                                            new Array(Math.min(totalInViewport, totalInList - totalInViewport * r_id)).fill("").map((em, c_id) => {
                                                                                                console.log(" r_id ==", r_id);
                                                                                                console.log(" c_id ==", c_id);
                                                                                                console.log(" -------------- cart item --------------", searchResult[totalInViewport * r_id + c_id]);
                                                                                                return <VideoItem key={c_id} r_id={r_id} c_id={c_id} data={searchResult[totalInViewport * r_id + c_id]} />
                                                                                            })
                                                                                        }
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        {/* jawBoneContent begin */}
                                                                        {
                                                                            isJawOpen && (r_id === rowId) ?
                                                                                <JawBoneContent v_id={videoId} />
                                                                                : null
                                                                        }
                                                                        {/* jawBoneContent end */}
                                                                    </div>
                                                                </div>

                                                            );
                                                        })
                                                    }
                                                </div>
                                                :
                                                <div className="galleryMessage">
                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                        <font style={{ verticalAlign: 'inherit' }}>There is no matched search result ...</font>
                                                    </font>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else return (
                <div className="mainView" role="main">
                    <div>
                        <div className="search">
                            <div />
                            <div className="gallery row-with-x-columns search">
                                <div className="galleryContent">
                                    <LoadingRow />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.location.state && this.props.location.state.q === "") {
            return (
                <div className="mainView" role="main">
                    <div className="search">
                        <div className="gallery row-with-x-columns search">
                            <div className="galleryContent">
                                <div className="galleryMessage">
                                    <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>No keyword ...</font>
                                    </font>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <Redirect to="/pr" />
        }
    }
}

const mapStateToProps = ({ video }) => {
    const { isJawOpen, rowId, videoId } = video;
    return { isJawOpen, rowId, videoId };
};
const mapDispatchToProps = {
    getCategoryList,
    searchByTitle
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);