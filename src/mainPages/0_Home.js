import React, { Component } from 'react';
import VideoTile from '../components/VideoTile';
import './Home/node_modules/@brainhubeu/react-carousel/lib/style.css';
import { connect } from 'react-redux';
import axios from '../util/Api';
import { searchByTitle } from "../actions";
import { Link } from 'react-router-dom';

class Home extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            trendingVideos: [],
            searchKey: ""
        };
    }
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            axios.get('/state/trending')
                .then(({ data }) => {
                    if (data.videos && data.videos.length) this.setState({ trendingVideos: data.videos })
                })
                .catch(error => {
                    console.error("_ get trending video api response error", error);
                });
        }
    }
    render() {
        const result = this.props.searchTitleResult || [];
        return (
            <React.Fragment>
                {/* <!-- Hero --> */}
                <div className="bg-image" style={{ height: "70vh", backgroundImage: "url('/assets/media/photos/background.jpg')" }}>
                    <div className="hero bg-black-50 inner-hero" style={{ height: "100%", background: "linear-gradient(0deg, #000000 0, rgba(1, 1, 1, 0))" }}>
                        <div className="row w-100">
                            <div className="hero-inner col-lg-6">
                                <div className="content content-full text-center">
                                    <h1 className="display-4 font-w700 text-white mb-3">
                                        See what's next...
                                </h1>
                                    <h2 className="text-white-75 mb-5">WATCH ANYWHERE</h2>
                                    {/* <button type="button" className="btn btn-lg btn-rounded btn-primary mr-3 mb-3"><span
                                        className="text-white mx-3">Watch Now</span></button> */}
                                    <div className="row justify-content-center mx-4">
                                        <Link 
                                        type="button" 
                                        className="btn btn-lg btn-rounded btn-outline-primary mr-4 mb-3"
                                        to="/home/list"
                                        >
                                            <span className="text-white mx-2">
                                                {/* <i className="fa fa-fw fa-plus mr-3"></i> */}
                                                <i className="fa fa-shopping-cart mr-3"></i>My List
                                        </span>
                                        </Link>
                                        <div id="search" className="Search mb-3">
                                            <input
                                                type="search"
                                                className="w-700"
                                                placeholder="Search for a title..."
                                                value={this.state.searchKey}
                                                onChange={(event) => { this.setState({ searchKey: event.target.value }); this.props.searchByTitle({ title: event.target.value }); }}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END Hero --> */}
                <div className="bg-black min-vh-40">
                    <div className="content">
                        {/* <!-- Search result --> */}
                        {
                            result.length ?
                                <React.Fragment>
                                    <h1 className="text-white mb-2">Search result</h1>
                                    <div className="row row-deck">
                                        {
                                            result.map((item, index) => <VideoTile key={index} data={item} />)
                                        }
                                    </div>
                                </React.Fragment> : null
                        }

                        {/* <!-- By category --> */}
                        <h2 className="text-white mb-2">Trending</h2>
                        <div className="row row-deck">
                            {
                                this.state.trendingVideos.map((item, index) => <VideoTile key={index} data={item} />)
                            }
                        </div>

                        {/* <!-- End By category --> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = ({ video }) => {
    const { searchTitleResult } = video;
    return { searchTitleResult };
}
const mapDispatchToProps = { searchByTitle };
export default connect(mapStateToProps, mapDispatchToProps)(Home);