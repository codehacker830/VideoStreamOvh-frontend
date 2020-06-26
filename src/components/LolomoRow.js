import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SliderItem from './SliderItem';
import { closeJawBone } from '../actions';
import { connect } from 'react-redux';

class LolomoRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMoving: false,
        }
    }
    render() {
        const { isJawOpen } = this.props;
        return (
            <div className={`lolomoRow lolomoRow_title_card${ isJawOpen ? " jawBoneOpen" : ""}`} datalistcontext="queue">
                <h2 className="rowTitle">
                    <span className="v-align-inherit">
                        <span className="v-align-inherit">List</span>
                    </span>
                </h2>
                <div className="rowContainer rowContainer_title_card" id="row-1">
                    <div className="ptrack-container">
                        <div className="rowContent slider-hover-trigger-layer">
                            <div className="slider">
                                <span className="handle handlePrev active" tabIndex="0" role="button" aria-label="Show previous content">
                                    <b className="indicator-icon icon-leftCaret"></b>
                                </span>
                                <ul className="pagination-indicator">
                                    <li className="active"></li>
                                    <li className=""></li>
                                </ul>
                                <div className="sliderMask showPeek">
                                    <div className={`sliderContent row-with-x-columns${this.state.isMoving? " animating" : ""}`}>
                                    <SliderItem index={1} />
                                    <SliderItem index={2} />
                                    <SliderItem index={3} />
                                    <SliderItem index={4} />
                                    </div>
                                </div>
                                <span className="handle handleNext active" tabIndex="0" role="button" aria-label="Show more content">
                                    <b className="indicator-icon icon-rightCaret"></b>
                                </span>
                            </div>
                        </div>
                        
                        {/* jawBoneContent begin */}
                        <span className={`jawBoneContent${isJawOpen ? " open" : ""}`}>
                            <span className="jawBoneOpenContainer">
                                <div className="jawBoneFadeInPlaceContainer" style={{ zIndex: "-1"}}>
                                    <div id="80221639" className="jawBoneContainer slider-hover-trigger-layer">
                                        <div className="background">
                                            <div className="jawBoneBackground image-rotator">
                                                <span>
                                                    <div className="ptrack-content"
                                                        data-tracking-uuid="c0575717-7146-4114-8126-eea61ec41d10">
                                                        <div className="image-rotator-image "
                                                            style={{ 
                                                                backgroundImage: 'url("https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUBoG58JRFOyWZfw3959g9CrQHS53_p0nC-pCFTx1HrtKYuzhh2cG1gefo3ckVyYVRY69emm0xVO5Hna_FUytHTJRqN9.webp?r=853")',
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
                                                <a className="jawbone-title-link" href="/Kids/title/80221639">
                                                    <div className="title has-jawbone-nav-transition">
                                                        <img alt="The Incredibles 2" className="logo"
                                                            src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/H8D6qtacWfxpwORI6dw3sYdASQc/AAAABSAphU7cp2yB81DojsaEGL_rQYBvdNCke_bLbCXxI4205H64rx3csCP9DQxujNuoF0yu97x2Qyq-BNbwdCFcsggzyxhxhbJvwg.webp?r=2ad" />
                                                    </div>
                                                </a>
                                            </h3>
                                            <div className="jawBoneCommon">
                                                <div className="jawBonePanes">
                                                    <div className="jawBonePane" id="pane-Overview" tabIndex="-1"
                                                        style={{opacity: "1", transitionDuration: "300ms"}}>
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
                                                                                        </div><span className="match-score">
                                                                                            <font className="v-align-inherit">
                                                                                                <font className="v-align-inherit">
                                                                                                    98%
                                                                                                    Match
                                                                                                </font>
                                                                                            </font>
                                                                                        </span>
                                                                                    </div>
                                                                                </span>
                                                                                <span className="year">
                                                                                    <font className="v-align-inherit">
                                                                                        <font className="v-align-inherit">
                                                                                            2018
                                                                                        </font>
                                                                                    </font>
                                                                                </span>
                                                                                <span className="maturity-rating "><span
                                                                                        className="maturity-number">
                                                                                        <font className="v-align-inherit">
                                                                                            <font className="v-align-inherit">
                                                                                                PG
                                                                                            </font>
                                                                                        </font>
                                                                                    </span>
                                                                                </span>
                                                                                <span className="duration">
                                                                                    <font className="v-align-inherit">
                                                                                        <font className="v-align-inherit">
                                                                                            1 hr
                                                                                        </font>
                                                                                        <font className="v-align-inherit">
                                                                                            57 min.
                                                                                        </font>
                                                                                    </font>
                                                                                </span>
                                                                            </div>
                                                                            <div className="video-title">
                                                                            </div>
                                                                            <div className="watched">
                                                                                <div className="progress ">
                                                                                    <span className="progress-bar"><span role="presentation"
                                                                                            className="progress-completed"
                                                                                            style={{width: "9%"}}></span></span><span
                                                                                        className="summary">
                                                                                        <font className="v-align-inherit">
                                                                                            <font className="v-align-inherit">
                                                                                                10/117
                                                                                                min.
                                                                                            </font>
                                                                                        </font>
                                                                                    </span></div>
                                                                            </div>
                                                                            <div className="synopsis">
                                                                                <font className="v-align-inherit">
                                                                                    <font className="v-align-inherit">
                                                                                        She's
                                                                                        fighting
                                                                                        crime.
                                                                                    </font>
                                                                                    <font className="v-align-inherit">
                                                                                        He's
                                                                                        battling
                                                                                        dirty
                                                                                        diapers.
                                                                                    </font>
                                                                                    <font className="v-align-inherit">
                                                                                        For the
                                                                                        Incredibles,
                                                                                        a successful
                                                                                        marriage
                                                                                        requires a
                                                                                        certain
                                                                                        amount of
                                                                                        flexibility.
                                                                                    </font>
                                                                                </font>
                                                                            </div>
                                                                            <div className="jawbone-actions">

                                                                                <a trackid="14170209" data-uia="play-button" role="link"
                                                                                    aria-label="Go on" className=" playLink"
                                                                                    href="/watch/80221639?trackId=14170209&amp;tctx=0%2C0%2C72e921ec-757c-4f56-ae52-54d5292973c7-750046517%2C1c3e45e9-b6ec-492f-a729-50bcfed971d9_68896064X6XX1592938183794%2C1c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%2C"><button
                                                                                        className="button-primary medium hasLabel ltr-ublg01"
                                                                                        type="button">
                                                                                        <div className="icon ltr-1e4713l">
                                                                                            <div className="medium ltr-sar853"
                                                                                                role="presentation">
                                                                                                <svg viewBox="0 0 24 24">
                                                                                                    <path d="M6 4l15 8-15 8z"
                                                                                                        fill="currentColor">
                                                                                                    </path>
                                                                                                </svg>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="ltr-1i33xgl"
                                                                                            style={{width: "calc(0.72rem)"}}>
                                                                                        </div><span className="ltr-18i00qw">
                                                                                            <font className="v-align-inherit">
                                                                                                <font className="v-align-inherit">
                                                                                                    GO
                                                                                                    ON
                                                                                                </font>
                                                                                            </font>
                                                                                        </span>
                                                                                    </button></a>
                                                                                <div className="ptrack-content"
                                                                                    data-tracking-uuid="16208b20-1a3d-4251-870e-213f36db0a5c">
                                                                                    <button aria-label="Remove from My List"
                                                                                        className="button-secondary opacity-60 medium hasLabel ltr-17tayzw"
                                                                                        data-uia="add-to-my-list-added" type="button">
                                                                                        <div className="icon ltr-1e4713l">
                                                                                            <div className="medium ltr-sar853"
                                                                                                role="presentation">
                                                                                                <svg viewBox="0 0 24 24">
                                                                                                    <path fill="currentColor"
                                                                                                        d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z">
                                                                                                    </path>
                                                                                                </svg>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="ltr-1i33xgl"
                                                                                            style={{width: "calc(0.72rem)"}}>
                                                                                        </div><span className="ltr-18i00qw">
                                                                                            <font className="v-align-inherit">
                                                                                                <font className="v-align-inherit">
                                                                                                    list
                                                                                                </font>
                                                                                            </font>
                                                                                        </span>
                                                                                    </button>
                                                                                </div>
                                                                                <span className="thumbs-container">
                                                                                    <div className="thumbs-component thumbs thumbs-horizontal animated unrated updated"
                                                                                        data-uia="thumbs-container">
                                                                                        <div className="nf-svg-button-wrapper thumb-container thumb-up-container "
                                                                                            data-uia="">
                                                                                            <a role="link" data-rating="2" tabIndex="0"
                                                                                                className="nf-svg-button clicked simpleround"
                                                                                                aria-label="Artı puan ver">
                                                                                                <svg data-rating="2"
                                                                                                    className="svg-icon svg-icon-thumb-up"
                                                                                                    focusable="true">
                                                                                                    <use filter="" xlinkHref="#thumb-up"></use>
                                                                                                </svg>
                                                                                            </a>
                                                                                        </div>
                                                                                        <div className="nf-svg-button-wrapper thumb-container thumb-down-container "
                                                                                            data-uia="">
                                                                                            <a role="link" data-rating="1" tabIndex="0"
                                                                                                className="nf-svg-button simpleround"
                                                                                                aria-label="Give a negative score">
                                                                                                <svg data-rating="1"
                                                                                                    className="svg-icon svg-icon-thumb-down"
                                                                                                    focusable="true">
                                                                                                    <use filter="" xlinkHref="#thumb-down">
                                                                                                    </use>
                                                                                                </svg>
                                                                                            </a>
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
                        {/* jawBoneContent end */}
                    </div>
                </div>
            </div>
        );
        
    }
}

const mapStateToProps = ({ lolomo }) => {
    const { isJawOpen } = lolomo;
    return { isJawOpen };
};
const mapDispatchToProps = { closeJawBone };
export default connect(mapStateToProps, mapDispatchToProps)(LolomoRow);