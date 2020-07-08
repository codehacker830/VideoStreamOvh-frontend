import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';
import { connect } from 'react-redux';
import LoadingRow from './LoadingRow';
import { closeJawBone } from '../actions';
import { v4 as uuidv4 } from 'uuid';
import JawBoneContent from './JawBoneContent';

class SlideRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            distance: 0,
            viewed: 0,
            totalInViewport: 0,
            containerWidth: 0
        }
        this.sliderWrapperRef = React.createRef();
    }
    resizeScreen = event => {
        this.setState({ containerWidth: this.sliderWrapperRef.current.clientWidth });
        const screenWidth = window.innerWidth;
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
    onClickPrev = () => {
        this.setState({ viewed: (this.state.viewed - this.state.totalInViewport) });
        this.setState({ distance: (this.state.distance + this.state.containerWidth) });
    }
    onClickNext = () => {
        this.setState({ viewed: (this.state.viewed + this.state.totalInViewport) });
        this.setState({ distance: (this.state.distance - this.state.containerWidth) });
    }
    componentDidMount() {
        window.addEventListener('resize', this.resizeScreen);
        if (this.sliderWrapperRef && this.sliderWrapperRef.current) {
            this.resizeScreen(null);
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeScreen);
    }
    render() {
        const slideProps = {
            style: { transform: `translate3d(${this.state.distance}px, 0, 0)` }
        };
        const { r_id, title, data, isJawOpen, rowId, videoId } = this.props;
        const { viewed, totalInViewport, distance, isLoading } = this.state;
        const totalInList = data.length;
        const isMyJawOpen = isJawOpen && (r_id === rowId);
        const hasPrev = distance < 0;
        const hasNext = (viewed + totalInViewport) < totalInList;
        if (!isLoading) {
            const totalPages = totalInViewport !== 0 ? Math.ceil(totalInList / totalInViewport) : 1;
            const eArr = new Array(totalPages).fill("");
            const currentPage = totalInViewport !== 0 ? Math.ceil(viewed / totalInViewport) : 1;
            return (
                <div className={`lolomoRow lolomoRow_title_card${isMyJawOpen ? " jawBoneOpen" : ""}`}>
                    <h2 className="rowTitle">
                        <span className="v-align-inherit">
                            <span className="v-align-inherit">{title}</span>
                        </span>
                    </h2>
                    <div className="rowContainer rowContainer_title_card" id="row-1">
                        <div className="ptrack-container">
                            <div className="rowContent slider-hover-trigger-layer">
                                <div className="slider">
                                    {
                                        hasPrev &&
                                        <span className="handle handlePrev active" tabIndex="0" role="button" aria-label="Show previous content"
                                            onClick={this.onClickPrev}>
                                            <b className="indicator-icon icon-leftCaret"></b>
                                        </span>
                                    }

                                    <ul className="pagination-indicator">
                                        {
                                            eArr.map((it, index) => {
                                                return <li key={index} className={`${index === currentPage ? "active" : ""}`}></li>;
                                            })
                                        }
                                    </ul>
                                    <div className="sliderMask showPeek">
                                        <div className="sliderContent row-with-x-columns" {...slideProps} ref={this.sliderWrapperRef}>
                                            {
                                                data.map((dt, index) => {
                                                    return <VideoItem key={index} r_id={r_id} c_id={index} data={dt} />
                                                })
                                            }
                                        </div>
                                    </div>
                                    {
                                        hasNext &&
                                        <span className="handle handleNext active" tabIndex="0" role="button" aria-label="Show more content"
                                            onClick={this.onClickNext}>
                                            <b className="indicator-icon icon-rightCaret"></b>
                                        </span>
                                    }
                                </div>
                            </div>

                            {/* jawBoneContent begin */}
                            {
                                isMyJawOpen ?
                                    <JawBoneContent v_id={videoId}/>
                                    : null
                            }
                            {/* jawBoneContent end */}

                        </div>
                    </div>
                </div>
            );
        }
        else {
            return <LoadingRow />
        }
    }
}
SlideRow.propTypes = {
    r_id: PropTypes.number,
    title: PropTypes.string,
    data: PropTypes.array
};
const mapStateToProps = ({ video }) => {
    const { isJawOpen, rowId, videoId } = video;
    return { isJawOpen, rowId, videoId };
};
const mapDispatchToProps = {  };
export default connect(mapStateToProps, mapDispatchToProps)(SlideRow);