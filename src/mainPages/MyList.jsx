import React, { Component } from 'react';
import VideoItem from '../components/VideoItem';
import { getCartList, getCategoryList, searchByTitle, closeJawBone } from "../actions";
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from '../util/Api';
import LoadingRow from '../components/LoadingRow';
import JawBoneContent from '../components/JawBoneContent';

class MyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            totalInViewport: 0,
            cartList: []
        }
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
        if (this._isMounted) {
            this.setState({ isLoading: true });
            axios.get('/cart').then(({ data }) => {
                console.error("response -- ", data);
                this.setState({
                    isLoading: false,
                    cartList: data.list
                });
            })
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeScreen);
    }
    render() {
        const { closeJawBone, isJawOpen, rowId, videoId } = this.props;
        const { isLoading, totalInViewport, cartList } = this.state;
        const totalInList = cartList.length;

        let totalRows = 1;
        if (totalInList && totalInViewport) {
            totalRows = Math.ceil(totalInList / totalInViewport);
        }

        console.log("--- totalInList ---", totalInList);
        console.log("--- totalInViewport ---", totalInViewport);
        console.log("--- totalRows ---", totalRows);

        return (
            <React.Fragment>
                <div className="mainView" role="main">
                    <div className="gallery row-with-x-columns">
                        {
                            isLoading ?
                                <LoadingRow />
                                :
                                <div className="galleryContent">
                                    <div>
                                        {
                                            cartList && cartList.length ?
                                                <div className="galleryLockups">
                                                    {
                                                        new Array(totalRows).fill("").map((dt, r_id) => {
                                                            return (
                                                                <div className={`rowContainer rowContainer_title_card${isJawOpen ? " jawBoneOpen" : ""}`} id={`row-${r_id}`} key={r_id}>
                                                                    <div className="ptrack-container">

                                                                        <div className="rowContent slider-hover-trigger-layer">
                                                                            <div className="slider">
                                                                                <div className="sliderMask showPeek">
                                                                                    <div className="sliderContent row-with-x-columns" style={{ WebkitTransform: '', msTransform: '', transform: '' }}>
                                                                                        {
                                                                                            new Array(Math.min(totalInViewport, totalInList - totalInViewport * r_id)).fill("").map((em, c_id) => {
                                                                                                console.log(" r_id ==", r_id);
                                                                                                console.log(" c_id ==", c_id);
                                                                                                console.log(" -------------- cart item --------------", cartList[totalInViewport * r_id + c_id]);
                                                                                                return <VideoItem key={c_id} r_id={r_id} c_id={c_id} data={cartList[totalInViewport * r_id + c_id]} />
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
                                                        <font style={{ verticalAlign: 'inherit' }}>You haven't added any content to your list yet.</font>
                                                    </font>
                                                </div>
                                        }
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ video }) => {

    const { cartList, categoryList, isJawOpen, rowId, videoId } = video;
    return { cartList, categoryList, isJawOpen, rowId, videoId };
}
const mapDispatchToProps = {
    getCartList,
    getCategoryList,
    searchByTitle,
    closeJawBone
};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);