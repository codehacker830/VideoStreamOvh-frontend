import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeJawBone, addToCart, removeFromCart } from '../actions';
import PropTypes from 'prop-types';
import axios from '../util/Api';
import { isInvoledAtCart } from '../util';
import AddListIcon from './icons/AddListIcon';
import CheckedIcon from './icons/CheckedIcon';
import PlayIcon from './icons/PlayIcon';
import { Link } from 'react-router-dom';

class JawBoneContent extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            id: null,
            title: "",
            jawbone_title_logo: "",
            views: null,
            rating: null,
            watched_time: 1,
            duration: 0,
            description: "",
            vote: null,
            ptrack_content_image: "",
            source: "",
            price: null,

        };
    }
    componentDidMount() {
        this._isMounted = true;
        this.setState({ isLoading: true });
        if (this._isMounted) {
            const id = this.props.v_id;
            console.log(" this.props.v_id :", id);
            axios.get(`/video/${id}`).then(({ data }) => {
                console.log(" data tt :", data.video);
                const { id, title, jawbone_title_logo, views, rating, watched_time, duration, description, vote, ptrack_content_image, source, price } = data.video;
                this.setState({
                    isLoading: false,
                    data: data.video,
                    id, title, jawbone_title_logo, views, rating, watched_time, duration, description, vote, ptrack_content_image, source, price
                });
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ isLoading: true });
        const id = nextProps.v_id;
        axios.get(`/video/${id}`).then(({ data }) => {
            console.log(" data tt :", data.video);
            const { id, title, jawbone_title_logo, views, rating, watched_time, duration, description, vote, ptrack_content_image, source, price } = data.video;
            this.setState({
                isLoading: false,
                data: data.video,
                id, title, jawbone_title_logo, views, rating, watched_time, duration, description, vote, ptrack_content_image, source, price
            });
        });
    }
    render() {
        const { data, id, isLoading, title, jawbone_title_logo, views, rating, watched_time, duration, description, vote, ptrack_content_image, source, price } = this.state;
        const { cartList } = this.props;
        const progress_completed = (watched_time || 0) / duration * 100;

        console.log(" duration ---", duration);
        console.log(" watched_time ---", watched_time);

        const isUpVoted = vote === "up" ? true : false;
        const isDownVoted = vote === "down" ? true : false;
        const isVoted = isUpVoted || isDownVoted;
        const isCarted = isInvoledAtCart(cartList, id);
        return (
            <span className={`jawBoneContent${isLoading ? "" : " open"}`}>
                <span className="jawBoneOpenContainer">
                    <div className="jawBoneFadeInPlaceContainer" style={{ zIndex: "-1" }}>
                        <div id="80221639" className="jawBoneContainer slider-hover-trigger-layer">
                            <div className="background">
                                <div className="jawBoneBackground image-rotator">
                                    <span>
                                        <div className="ptrack-content" data-tracking-uuid="">
                                            <div className="image-rotator-image"
                                                style={{
                                                    backgroundImage: `url(${ptrack_content_image})`,
                                                    // backgroundImage: 'url("https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUBoG58JRFOyWZfw3959g9CrQHS53_p0nC-pCFTx1HrtKYuzhh2cG1gefo3ckVyYVRY69emm0xVO5Hna_FUytHTJRqN9.webp?r=853")',
                                                    zIndex: "2",
                                                    opacity: "1",
                                                    transitionDuration: "750ms"
                                                }}>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                                <div className="vignette"></div>
                                <div className="nav-shadow"></div>
                            </div>
                            <div className="jawBone">
                                <h3>
                                    <div className="jawbone-title-link">
                                        <div className="title has-jawbone-nav-transition">
                                            <img className="logo"
                                                alt={title}
                                                src={`${jawbone_title_logo}`}
                                            // src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/H8D6qtacWfxpwORI6dw3sYdASQc/AAAABSAphU7cp2yB81DojsaEGL_rQYBvdNCke_bLbCXxI4205H64rx3csCP9DQxujNuoF0yu97x2Qyq-BNbwdCFcsggzyxhxhbJvwg.webp?r=2ad"
                                            />
                                        </div>
                                    </div>
                                </h3>
                                <div className="jawBoneCommon">
                                    <div className="jawBonePanes">
                                        <div className="jawBonePane" id="pane-Overview" tabIndex="-1"
                                            style={{ opacity: "1", transitionDuration: "300ms" }}>
                                            <div className="ptrack-container">
                                                <div>
                                                    <div className="overview">
                                                        <div className="ptrack-content"
                                                            data-tracking-uuid="d9fe7918-44b5-49dc-b78c-ae716e5d6686">
                                                            <div className="jawbone-overview-info has-jawbone-nav-transition">
                                                                <div className="meta video-meta ">
                                                                    <span className="match-score-wrapper">
                                                                        <div className="show-thumb-up rating-inner">
                                                                            <div className="meta-thumb-container thumb-down">
                                                                                <svg className="svg-icon svg-icon-thumb-down-filled thumb thumb-down-filled"
                                                                                    focusable="true">
                                                                                    <use filter="" xlinkHref="#thumb-down-filled">
                                                                                    </use>
                                                                                </svg>
                                                                            </div>
                                                                            <div className="meta-thumb-container thumb-up">
                                                                                <svg className="svg-icon svg-icon-thumb-up-filled thumb thumb-up-filled"
                                                                                    focusable="true">
                                                                                    <use filter="" xlinkHref="#thumb-up-filled">
                                                                                    </use>
                                                                                </svg>
                                                                            </div>
                                                                            <span className="match-score">
                                                                                <font className="v-align-inherit">
                                                                                    <font className="v-align-inherit">98% Match</font>
                                                                                </font>
                                                                            </span>
                                                                        </div>
                                                                    </span>
                                                                    <span className="year">
                                                                        <font className="v-align-inherit">
                                                                            <font className="v-align-inherit">{views} Views</font>
                                                                        </font>
                                                                    </span>
                                                                    <span className="maturity-rating "><span
                                                                        className="maturity-number">
                                                                        <font className="v-align-inherit">
                                                                            <font className="v-align-inherit">{rating} Rating</font>
                                                                        </font>
                                                                    </span>
                                                                    </span>
                                                                    <span className="duration">
                                                                        <font className="v-align-inherit">
                                                                            <font className="v-align-inherit">{Math.floor(duration / 3600)} hr </font>
                                                                            <font className="v-align-inherit">{Math.floor(duration / 60)} min.</font>
                                                                        </font>
                                                                    </span>
                                                                </div>
                                                                <div className="video-title">
                                                                </div>
                                                                <div className="watched">
                                                                    <div className="progress ">
                                                                        <span className="progress-bar">
                                                                            <span role="presentation"
                                                                                className="progress-completed"
                                                                                style={{ width: `${progress_completed}%` }}></span>
                                                                        </span>
                                                                        <span className="summary">
                                                                            <font className="v-align-inherit">
                                                                                <font className="v-align-inherit">{watched_time || 0}/{duration} min.</font>
                                                                            </font>
                                                                        </span></div>
                                                                </div>
                                                                <div className="synopsis">
                                                                    <font className="v-align-inherit">
                                                                        <font className="v-align-inherit">{description}</font>
                                                                    </font>
                                                                </div>
                                                                <div className="jawbone-actions">
                                                                    <Link trackid="14170209" data-uia="play-button"
                                                                        aria-label="Go on" className=" playLink"
                                                                        to={{
                                                                            pathname: `/pr/watch/${id}`,
                                                                            state: data
                                                                        }}>
                                                                        <button
                                                                            className="button-primary medium hasLabel ltr-ublg01"
                                                                            type="button">
                                                                            <div className="icon ltr-1e4713l">
                                                                                <div className="medium ltr-sar853"
                                                                                    role="presentation">
                                                                                    <PlayIcon />
                                                                                </div>
                                                                            </div>
                                                                            <div className="ltr-1i33xgl"
                                                                                style={{ width: "calc(0.72rem)" }}>
                                                                            </div>
                                                                            <span className="ltr-18i00qw">
                                                                                <font className="v-align-inherit">
                                                                                    <font className="v-align-inherit">
                                                                                        PLAY ON
                                                                                    </font>
                                                                                </font>
                                                                            </span>
                                                                        </button>
                                                                    </Link>
                                                                    <div className="ptrack-content"
                                                                        data-tracking-uuid="16208b20-1a3d-4251-870e-213f36db0a5c">
                                                                        <button className="button-secondary opacity-60 medium hasLabel ltr-17tayzw"
                                                                            data-uia="add-to-my-list-added" type="button"
                                                                            onClick={
                                                                                isCarted ?
                                                                                    () => this.props.removeFromCart(id)
                                                                                    : () => this.props.addToCart(id)
                                                                            }>
                                                                            <div className="icon ltr-1e4713l">
                                                                                <div className="medium ltr-sar853"
                                                                                    role="presentation">
                                                                                    {
                                                                                        isCarted ? <CheckedIcon />
                                                                                            : <AddListIcon />
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                            <div className="ltr-1i33xgl"
                                                                                style={{ width: "calc(0.72rem)" }}>
                                                                            </div>
                                                                            <span className="ltr-18i00qw">
                                                                                <font className="v-align-inherit">
                                                                                    <font className="v-align-inherit">List</font>
                                                                                </font>
                                                                            </span>
                                                                        </button>
                                                                    </div>
                                                                    <span className="thumbs-container">
                                                                        {/* <div className="thumbs-component thumbs thumbs-horizontal animated unrated updated" */}
                                                                        <div className={`thumbs-component thumbs thumbs-horizontal animated${isVoted ? " rated" + (isUpVoted ? " rated-up" : " rated-down") : " unrated"}`}
                                                                            data-uia="thumbs-container">
                                                                            <div className="nf-svg-button-wrapper thumb-container thumb-up-container "
                                                                                data-uia="">
                                                                                <div role="button"
                                                                                    tabIndex="0"
                                                                                    className="nf-svg-button simpleround"
                                                                                    onClick={() => {
                                                                                        if (isVoted) {
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
                                                                                        src={`/assets/media/icons/${isUpVoted ? "like-filled.svg" : "like.svg"}`}
                                                                                        className="action-icon-style"
                                                                                        alt="" />
                                                                                </div>

                                                                            </div>
                                                                            <div className="nf-svg-button-wrapper thumb-container thumb-down-container "
                                                                                data-uia="">
                                                                                <div role="button"
                                                                                    tabIndex="0"
                                                                                    className="nf-svg-button simpleround"
                                                                                    onClick={() => {
                                                                                        if (isVoted) {
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
                                                                                        src={`/assets/media/icons/${isDownVoted ? "dislike-filled.svg" : "dislike.svg"}`}
                                                                                        className="action-icon-style"
                                                                                        alt="" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </span>
                                                                </div>
                                                                <div className="meta-lists">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jaw-play-hitzone" role="presentation"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="close-button icon-close" tabIndex="0" aria-label="Close" onClick={this.props.closeJawBone}>
                            </button>
                        </div>
                    </div>
                </span>
            </span>
        );
    }
}
JawBoneContent.propTypes = {
    v_id: PropTypes.number
};
const mapStateToProps = ({ video }) => {
    const { cartList } = video;
    return { cartList };
};
const mapDispatchToProps = { closeJawBone, addToCart, removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(JawBoneContent);