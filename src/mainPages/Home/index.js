import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../util/Api';
import { searchByTitle } from "../../actions";
import { Link } from 'react-router-dom';
import LoadingRow from '../../components/LoadingRow';
import SlideRow from '../../components/SlideRow';
import Header from '../../components/Header';
import AddListIcon from '../../components/icons/AddListIcon';
import CheckedIcon from '../../components/icons/CheckedIcon';

class Home extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            trendingVideos: [],
            searchKey: "",
            isLoading: true,
            isJawOpen: true
        };
    }
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            //     axios.get('/state/trending')
            //         .then(({ data }) => {
            //             if (data.videos && data.videos.length) this.setState({ trendingVideos: data.videos })
            //         })
            //         .catch(error => {
            //             console.error("_ get trending video api response error", error);
            //         });

        }

    }
    onJawHandle = (isOpen) => {
        this.setState({ isJawOpen: isOpen });
    }
    render() {
        const { isJawOpen } = this.props;
        const result = this.props.searchTitleResult || [];
        return (
            <>
                <div className="mainView" role="main">
                    <div className={`lolomo is-fullbleed${isJawOpen ? " has-open-jaw" : ""}`}>
                        <h1 className="visually-hidden">
                            <span className="v-align-inherit">
                                <span className="v-align-inherit">Netflix Homepage</span>
                            </span>
                        </h1>
                        <span className="volatile-billboard-animations-container">
                            <div className="billboard-row" role="region" aria-label="Content">
                                <div className="ptrack-container billboard-presentation-tracking">
                                    <div className="billboard-presentation-tracking ptrack-content"
                                        data-ui-tracking-context=""
                                        data-tracking-uuid="aade0bc5-06d6-4dae-b9be-f5ec38e39268">
                                        <div className="billboard-presentation-tracking ptrack-content"
                                            data-ui-tracking-context="%7B%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896063X20XX1592938183794%22,%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:0,%22track_id%22:251884370,%22video_id%22:80095193,%22image_key%22:%22BILLBOARD%7C792c8180-e366-11e9-abfb-12bb0ab1475a%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                            data-tracking-uuid="f707f56b-8c48-43ad-ae8e-4c4249bc0edf">
                                            <div className="billboard billboard-pane billboard-pane-main billboard-originals full-bleed-billboard trailer-billboard">
                                                <div className="hero-image-wrapper">
                                                    <img
                                                        className="hero static-image image-layer"
                                                        src="https://via.placeholder.com/1280x720?text=1280x720"
                                                        alt="" />
                                                    <div className="trailer-vignette vignette-layer"></div>
                                                    <div className="hero-vignette vignette-layer"></div>
                                                </div>
                                                <div className="fill-container">
                                                    <div className="info meta-layer">
                                                        <div className="logo-and-text meta-layer">
                                                            <div className="titleWrapper">
                                                                <div className="billboard-title">
                                                                    <img
                                                                        className="title-logo"
                                                                        src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABQcq4jUPE3r7UJwhUAf4r1QUjT2KYSVdSjfuYKvbzfMqjvqKopzK_pIG48Ye-3YR0rSGX60nCHfx2MjXPebAIeOHq_Snc0Bc_j8W.webp?r=455"
                                                                        title="Barbie: Spy Squad"
                                                                        alt="Barbie: Spy Squad" />
                                                                </div>
                                                            </div>
                                                            <div className="info-wrapper">
                                                                <div className="info-wrapper-fade">
                                                                    <div className="episode-title-container"></div>
                                                                    <div className="synopsis-fade-container">
                                                                        <div className="synopsis no-supplemental">
                                                                            <span className="v-align-inherit">
                                                                                <span className="v-align-inherit">
                                                                                    They're gifted gymnasts
                                                                                    turned gadget-wielding spies
                                                                                    with the skills - and the
                                                                                    smarts - to outwit a nimble thief.
                                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="billboard-links button-layer forward-leaning">
                                                                <a data-uia="play-button"
                                                                    aria-label="play" className=" playLink"
                                                                    href="/watch/80095193?trackId=251884370&amp;tctx=0%2C0%2C65826837-a7f4-406f-a17f-74beaf684a2e-327516955%2C1c3e45e9-b6ec-492f-a729-50bcfed971d9_68896063X20XX1592938183794%2C1c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%2C">
                                                                    <button className="button-primary medium hasLabel ltr-ublg01" type="button">
                                                                        <div className="icon ltr-1e4713l">
                                                                            <div className="medium ltr-sar853"
                                                                                role="presentation">
                                                                                <svg
                                                                                    viewBox="0 0 24 24">
                                                                                    <path d="M6 4l15 8-15 8z"
                                                                                        fill="currentColor">
                                                                                    </path>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ltr-1i33xgl" style={{ width: "calc(0.72rem)" }}></div>
                                                                        <span className="ltr-18i00qw">
                                                                            <span className="v-align-inherit">
                                                                                <span className="v-align-inherit">Play</span>
                                                                            </span>
                                                                        </span>
                                                                    </button>
                                                                </a>
                                                                <button
                                                                    className="button-secondary opacity-60 medium hasLabel ltr-17tayzw"
                                                                    data-uia="billboard-more-info"
                                                                    type="button">
                                                                    <div className="icon ltr-1e4713l">
                                                                        <div className="medium ltr-sar853"
                                                                            role="presentation">
                                                                            <AddListIcon />
                                                                            {/* <CheckedIcon /> */}
                                                                        </div>
                                                                    </div>
                                                                    <div className="ltr-1i33xgl"
                                                                        style={{ width: "calc(0.72rem)" }}></div>
                                                                    <span className="ltr-18i00qw">
                                                                        <span className="v-align-inherit">
                                                                            <span className="v-align-inherit">
                                                                                List
                                                                                        </span>
                                                                        </span>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <SlideRow />
                        <SlideRow />
                        {this.state.isLoading ? <LoadingRow /> : null}
                    </div >
                </div >
                <div aria-labelledby="modalTitle" role="dialog" tabIndex="-1">
                    <div className="nf-overlay-content"></div>
                </div>
                <div role="contentinfo" className="member-footer">
                    <ul className="member-footer-links">
                        <li className="member-footer-link-wrapper">

                            <a className="member-footer-link" href="https://help.netflix.com/legal/termsofuse"><span
                                className="member-footer-link-content">
                                <span className="v-align-inherit">
                                    <span className="v-align-inherit">Terms of Use</span>
                                </span>
                            </span></a></li>
                        <li className="member-footer-link-wrapper">
                            <a className="member-footer-link" href="https://help.netflix.com/contactus"><span
                                className="member-footer-link-content">
                                <span className="v-align-inherit">
                                    <span className="v-align-inherit">Contact us</span>
                                </span>
                            </span></a></li>
                    </ul>
                    <div className="member-footer-copyright"><span>
                        <span className="v-align-inherit">
                            <span className="v-align-inherit">© 1997-2020 VideoStream, Inc. </span>
                        </span>
                        <span className="v-align-inherit"></span>
                    </span><span className="member-footer-copyright-instance">
                            <span className="v-align-inherit">
                                <span className="v-align-inherit">0cd50e6e9b44b2t50</span>
                            </span>
                        </span></div>
                </div>
            </>
        );
    }
}
const mapStateToProps = ({ video }) => {
    const { searchTitleResult, isJawOpen } = video;
    return { searchTitleResult, isJawOpen };
}
const mapDispatchToProps = { searchByTitle };
export default connect(mapStateToProps, mapDispatchToProps)(Home);