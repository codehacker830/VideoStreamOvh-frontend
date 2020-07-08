import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart, removeFromCart, openJawBone, removeVote, upVote, downVote } from '../actions';
import Video from '../reducers/Video';
import { textCapitalized, isInvoledAtCart } from '../util';
import axios from '../util/Api';
import debounce from 'debounce';

class VideoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
            vote: null,
        };
    }
    delayedRequest = debounce((id) => {
        if(this.state.isHover) {
            axios.get(`/video/${id}`).then(({data}) => {
                const { video } = data;
                this.setState({ vote: video.vote });
            });
        }
    }, 600);
    render() {
        const { isHover, vote } = this.state;
        const { r_id, v_id, data, isJawOpen, rowId, videoId, cartList } = this.props;
        const { id, title, boxart_image, bob_background, duration, category, watched_time } = data;
        // const { vote, title_logo, jawbone_title_logo, description, price, ptrack_content_image, rating, views, source } = data;
        const progress_completed = watched_time / duration * 100;

        console.log("*** VideoItem props ***", this.props);

        const isMyJawOpen = isJawOpen && r_id === rowId && v_id === videoId;
        const isDimmed = (isJawOpen && v_id !== videoId) || r_id !== rowId;
        const isCarted = isInvoledAtCart(cartList, id);
        const isUpVoted = vote === "up" ? true : false;
        const isDownVoted = vote === "down" ? true : false;
        const isVoted = isUpVoted || isDownVoted;
        return (
            <div className={`slider-item slider-item-${v_id}${isHover ? " hovered" : ""}`}
                onMouseEnter={() => {
                    this.setState({ isHover: true });
                    this.delayedRequest(id);
                }} >
                <div className="title-card-container">
                    <div className={`slider-refocus title-card${isMyJawOpen ? " is-jaw-open" : ""}${isDimmed ? " is-dimmed" : ""}`}>
                        <div className="ptrack-content" data-tracking-uuid="231ff267-f389-4563-bca0-7ac9ed6c5b36">
                            <div className="slider-refocus" >
                                <div className="boxart-size-16x9 boxart-container" >
                                    <img className="boxart-image boxart-image-in-padded-container"
                                        src={boxart_image}
                                        // src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVTcxT_w_vntQYza42sfArnI446G7VRoSlAdDGbDJf3MQc58zP__VV7vRLHK2axwYb4iHd2tgHEZD1SWqz8GcMfLTXDWQWRUIBdQ6F3OB7eMKRxHN3r0NuJ_x7PD.jpg?r=e46" 
                                        alt="" />
                                    <div className="fallback-text-container">
                                        <p className="fallback-text">
                                            <span className="v-align-inherit">
                                                <span className="v-align-inherit">{title}</span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="click-to-change-JAW-indicator">
                                    <div className="bob-jawbone-chevron">
                                        <svg className="svg-icon svg-icon-chevron-down" focusable="true">
                                            <use filter="" xlinkHref="#chevron-down"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {
                                isMyJawOpen ?
                                    <div className="title-card-jawbone-focus" style={{ opacity: "1", transitionDuration: "300ms" }}>
                                        <div className="title-card-focus-ring"></div>
                                    </div>
                                    : null
                            }
                        </div>

                        {/* bob container begin */}
                        <div className="bob-container">
                            <span>
                                {/* hovered bob card */}
                                <div className={`bob-card bob-card-adult-video-merch${isHover ? " hovered" : ""}`}
                                    onMouseLeave={() => this.setState({ isHover: false, vote: null })} >
                                    <div>
                                        <div className="bob-background image-rotator">
                                            <span>
                                                <div className="ptrack-content"
                                                    data-tracking-uuid="39d5e7fc-1a70-4e3d-a051-4435aa90566b">
                                                    <div className="image-rotator-image "
                                                        style={{
                                                            backgroundImage: `url(${bob_background})`,
                                                            // backgroundImage: 'url("https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQJ7jCZRl3JMnxahry1kUWbt50xWcfA9-qcL2vdt66SfVmsZx3TbLya9QgtQVnLBgjTovSI6Jz88s9pfWxUNMRLM6HpF.webp?r=c22")',
                                                            zIndex: "2",
                                                            opacity: "1",
                                                            transitionDuration: "750ms"
                                                        }}>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                        <div className="bob-overlay">
                                            <div className="bob-play-hitzone"></div>
                                            <button
                                                className="bob-jaw-hitzone"
                                                style={{
                                                    width: "100%",
                                                    border: "none",
                                                    background: "transparent",
                                                    outline: "none"
                                                }}
                                                onClick={() => { console.log("~~ v_id ~~", v_id); this.props.openJawBone(v_id, r_id); }} >
                                                <img src="/assets/media/icons/chevron-down.svg"
                                                    style={{ height: "75%" }}
                                                    alt=""
                                                />
                                            </button>
                                            <div className="bob-overview-wrapper">
                                                <div className="bob-overview">
                                                    <div className="bob-buttons-wrapper" data-uia="mini-modal-controls">
                                                        <div>
                                                            <Link tabIndex="0"
                                                                data-uia="play-button"
                                                                role="link"
                                                                aria-label="Oynat"
                                                                className=" playLink"
                                                                to="/watch/81002747?trackId=14170132&amp;tctx=1%2C0%2Cb1a1da53-722e-4ed0-82ce-16885ec032c1-807384801%2C9351f9bd-b83c-4459-9d9f-facfacd29308_9258365X6XX1592971556077%2C9351f9bd-b83c-4459-9d9f-facfacd29308_ROOT%2C"><button
                                                                    className="button-primary medium iconOnly ltr-ublg01"
                                                                    type="button">
                                                                    <div className="icon ltr-1e4713l">
                                                                        <div className="medium ltr-sar853" role="presentation">
                                                                            <svg viewBox="0 0 24 24">
                                                                                <path d="M6 4l15 8-15 8z" fill="currentColor">
                                                                                </path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="bob-title">
                                                        {title}
                                                    </div>
                                                    <div className="bob-overview-resume-title-wrapper"></div>
                                                    <div className="bob-metadata-wrapper">
                                                        <div className="meta video-meta video-meta--bob-overview">
                                                            <span className="maturity-rating ">
                                                                <span className="maturity-number">PG</span>
                                                            </span>
                                                            <span className="duration">{duration}</span>
                                                        </div>
                                                    </div>
                                                    <div className="bob-overview-evidence-wrapper">
                                                        <div className="evidence-tags">
                                                            <div className="evidence-list">
                                                                <div className="evidence-item">
                                                                    {/* <span className="evidence-separator"></span> */}
                                                                    <span className="evidence-text">
                                                                        {`${textCapitalized(category && category.name)}`}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="bob-synopsis"></div>
                                                    <div className="bob-content-warning-wrapper"></div>
                                                </div>
                                            </div>
                                            <div className="bob-actions-wrapper">
                                                <span className="ActionButtons">
                                                    {/* <!-- use this for hidden thumb --> */}
                                                    {/* <div className="thumbs-component thumbs thumbs-vertical animated rated rated-up" data-uia="thumbs-container"> */}
                                                    {/* <div className="thumbs-component thumbs thumbs-vertical animated rated rated-down" data-uia="thumbs-container"> */}
                                                    <div className={`thumbs-component thumbs thumbs-vertical animated${isVoted ? " rated" + (isUpVoted ? " rated-up" : " rated-down") : ""}`} data-uia="thumbs-container">
                                                        <div className="nf-svg-button-wrapper thumb-container thumb-up-container" data-uia="">
                                                            <div role="button" 
                                                                tabIndex="0" 
                                                                className="nf-svg-button simpleround"
                                                                onClick={() => {
                                                                    if(isVoted) {
                                                                        // this.props.removeVote(id);
                                                                        axios.get(`/removevote/${id}`).then(res => {
                                                                            this.setState({ vote: null });
                                                                        });
                                                                    } else {
                                                                        // this.props.upVote(id);
                                                                        axios.get(`/upvote/${id}`).then(res => {
                                                                            this.setState({ vote: "up" });
                                                                        });
                                                                    }
                                                                }}
                                                                >
                                                                <img
                                                                    // src="/assets/media/icons/like.svg"
                                                                    // src="/assets/media/icons/like-filled.svg"
                                                                    src={`/assets/media/icons/${isUpVoted ? "like-filled.svg" : "like.svg"}`}
                                                                    className="action-icon-style"
                                                                    alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="nf-svg-button-wrapper thumb-container thumb-down-container" data-uia="">
                                                            <div role="button" 
                                                                tabIndex="0" 
                                                                className="nf-svg-button simpleround"
                                                                onClick={() => {
                                                                    if(isVoted) {
                                                                        // this.props.removeVote(id);
                                                                        axios.get(`/removevote/${id}`).then(res => {
                                                                            this.setState({ vote: null });
                                                                        });
                                                                        
                                                                    } else {
                                                                        // this.props.downVote(id);
                                                                        axios.get(`/downvote/${id}`).then(res => {
                                                                            this.setState({ vote: "down" });
                                                                        });
                                                                    }
                                                                }}
                                                                >
                                                                <img
                                                                    // src="/assets/media/icons/dislike.svg"
                                                                    // src="/assets/media/icons/dislike-filled.svg"
                                                                    src={`/assets/media/icons/${isDownVoted ? "dislike-filled.svg" : "dislike.svg"}`}
                                                                    className="action-icon-style"
                                                                    alt="" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="ptrack-content" data-tracking-uuid="b84c2b3d-ec46-4881-a56d-d4de4798405a">
                                                        <div className="nf-svg-button-wrapper mylist-button" data-uia="myListButton">
                                                            <div role="button" tabIndex="0" className="nf-svg-button simpleround"
                                                                onClick={
                                                                    isCarted ?
                                                                        () => this.props.removeFromCart(id)
                                                                        : () => this.props.addToCart(id)
                                                                }>
                                                                <img
                                                                    // src="/assets/media/icons/check.svg"
                                                                    // src="/assets/media/icons/plus.svg"
                                                                    src={`/assets/media/icons/${isCarted ? "check.svg" : "plus.svg"}`}
                                                                    className="action-icon-style"
                                                                    alt="" />

                                                            </div>
                                                            <span className="nf-svg-button-tooltip" role="status"
                                                                aria-live="assertive">Remove from My List
                                                            </span>
                                                        </div>
                                                    </div>
                                                </span>
                                            </div>
                                            <div className="bob-chevron-wrapper">
                                                <div className="bob-jawbone-chevron">
                                                    <svg className="svg-icon svg-icon-chevron-down" focusable="true">
                                                        <use filter="" xlinkHref="#chevron-down">
                                                        </use>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* hovered bob card */}
                            </span>
                        </div>
                        {/* bob container end */}
                    </div>
                    {
                        progress_completed ?
                            <div className="progress ">
                                <span className="progress-bar">
                                    <span role="presentation" className="progress-completed" style={{ width: `${progress_completed}%` }}></span>
                                </span>
                            </div>
                            : null
                    }
                </div>
            </div>
        );
    }
}

VideoItem.propTypes = {
    r_id: PropTypes.number,
    v_id: PropTypes.number,
    data: PropTypes.object
};

const mapStateToProps = ({ video }) => {
    const { cartList, isJawOpen, rowId, videoId } = video;
    return { cartList, isJawOpen, rowId, videoId }
};
const mapDispatchToProps = { addToCart, removeFromCart, openJawBone, removeVote, upVote, downVote };
export default connect(mapStateToProps, mapDispatchToProps)(VideoItem);