import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../util/Api';
import { searchByTitle } from "../../actions";
import { Link } from 'react-router-dom';
import LolomoLoading from '../../components/LolomoLoading';
import './style.css';
import LolomoRow from '../../components/LolomoRow';
import Header from '../../components/Header';

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
        // if (this._isMounted) {
        //     axios.get('/state/trending')
        //         .then(({ data }) => {
        //             if (data.videos && data.videos.length) this.setState({ trendingVideos: data.videos })
        //         })
        //         .catch(error => {
        //             console.error("_ get trending video api response error", error);
        //         });
        // }
    }
    onJawHandle = (isOpen) => {
        this.setState({isJawOpen: isOpen});
    }
    render() {
        const { isJawOpen } = this.props;
        const result = this.props.searchTitleResult || [];
        return (
            <div className="netflix-sans-font-loaded">
                <div dir="ltr" className="">
                    <div>
                        <div className="bd kidsPage" lang="en-EN" data-uia="container-kids">
                            <Header />
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
                                                    data-ui-tracking-context="%7B%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:0,%22track_id%22:251884370,%22video_id%22:80095193,%22image_key%22:%22BILLBOARD%7C792c8180-e366-11e9-abfb-12bb0ab1475a%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896063X20XX1592938183794%22,%22appView%22:%22billboard%22%7D"
                                                    data-tracking-uuid="aade0bc5-06d6-4dae-b9be-f5ec38e39268">
                                                    <div className="billboard-presentation-tracking ptrack-content"
                                                        data-ui-tracking-context="%7B%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896063X20XX1592938183794%22,%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:0,%22track_id%22:251884370,%22video_id%22:80095193,%22image_key%22:%22BILLBOARD%7C792c8180-e366-11e9-abfb-12bb0ab1475a%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                        data-tracking-uuid="f707f56b-8c48-43ad-ae8e-4c4249bc0edf">
                                                        <div
                                                            className="billboard billboard-pane billboard-pane-main billboard-originals full-bleed-billboard trailer-billboard">
                                                            <div className="hero-image-wrapper">
                                                                <img
                                                                    className="hero static-image image-layer"
                                                                    src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdXoio1cl4MoUfhs6hJ85gS9iHOrXJ_EQXe63Gu5gcC4C0jghbpniVc0SirxKvWggAgs8wgx0fsRwRms1NOuRJ9-NAF8.webp?r=c64"
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
                                                                                                smarts - to outwit a nimble
                                                                                            thief.</span>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="billboard-links button-layer forward-leaning">
                                                                            <a data-uia="play-button" role="link"
                                                                                aria-label="play" className=" playLink"
                                                                                href="/watch/80095193?trackId=251884370&amp;tctx=0%2C0%2C65826837-a7f4-406f-a17f-74beaf684a2e-327516955%2C1c3e45e9-b6ec-492f-a729-50bcfed971d9_68896063X20XX1592938183794%2C1c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%2C"><button
                                                                                    className="button-primary medium hasLabel ltr-ublg01"
                                                                                    type="button">
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
                                                                                    <div className="ltr-1i33xgl"
                                                                                        style={{ width: "calc(0.72rem)" }}></div>
                                                                                    <span className="ltr-18i00qw">
                                                                                        <span className="v-align-inherit">
                                                                                            <span className="v-align-inherit">
                                                                                                play</span>
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
                                                                                        role="presentation"><svg
                                                                                            viewBox="0 0 24 24">
                                                                                            <path
                                                                                                d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8zm-9 6v-7h2v7h-2zm1-8.75a1.21 1.21 0 0 1-.877-.364A1.188 1.188 0 0 1 10.75 8c0-.348.123-.644.372-.886.247-.242.54-.364.878-.364.337 0 .63.122.877.364.248.242.373.538.373.886s-.124.644-.373.886A1.21 1.21 0 0 1 12 9.25z"
                                                                                                fill="currentColor"></path>
                                                                                        </svg></div>
                                                                                </div>
                                                                                <div className="ltr-1i33xgl"
                                                                                    style={{ width: "calc(0.72rem)" }}></div>
                                                                                <span className="ltr-18i00qw">
                                                                                    <span className="v-align-inherit">
                                                                                        <span className="v-align-inherit">
                                                                                            More information</span>
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
                                    <LolomoRow onShowHandle={(isOpen) => this.onJawHandle(isOpen)}/>
                                    {/* <div className="lolomoRow lolomoRow_title_card" datalistcontext="trendingNow">
                                        <h2 className="rowTitle">
                                            <span className="v-align-inherit">
                                                <span className="v-align-inherit">Everyone Is Watching These</span>
                                            </span>
                                        </h2>
                                        <div className="rowContainer rowContainer_title_card" id="row-3">
                                            <div className="ptrack-container">
                                                <div className="rowContent slider-hover-trigger-layer">
                                                    <div className="slider">
                                                        <ul className="pagination-indicator">
                                                            <li className="active"></li>
                                                            <li className=""></li>
                                                            <li className=""></li>
                                                            <li className=""></li>
                                                            <li className=""></li>
                                                            <li className=""></li>
                                                            <li className=""></li>
                                                            <li className=""></li>
                                                            <li className=""></li>
                                                            <li className=""></li>
                                                        </ul>
                                                        <div className="sliderMask showPeek">
                                                            <div className="sliderContent row-with-x-columns">
                                                                <div className="slider-item slider-item-0">
                                                                    <div className="title-card-container">
                                                                        <div id="title-card-3-0"
                                                                            className="slider-refocus title-card">
                                                                            <div className="ptrack-content"
                                                                                data-ui-tracking-context="%7B%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896066X54XX1592938183794%22,%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:3,%22track_id%22:15036107,%22video_id%22:80164216,%22image_key%22:%22sdp%7Cff9a6d90-ea76-11e6-a287-0ace5de2dce6%7Cen%7CoWX%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                                                data-tracking-uuid="b92c61a3-5b61-4822-9650-3cb92f2b827a">

                                                                                <a href="/watch/80164216?tctx=3%2C0%2C%2C%2C%2C"
                                                                                    role="link"
                                                                                    aria-label="Miracle: Black Cat with Ladybug"
                                                                                    tabIndex="0" aria-hidden="false"
                                                                                    className="slider-refocus">
                                                                                    <div
                                                                                        className="boxart-size-16x9 boxart-container">
                                                                                        <img className="boxart-image boxart-image-in-padded-container"
                                                                                            src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQpBwRCwSZ5EGq-qKcI8Wdc9yQNJhf2vqMI9AXLcVOO_IDQwvGx-gkMaqxThNetG8w1_bv-XPYLLyLb7FuW407GTMiQ.webp?r=718"
                                                                                            alt="" />
                                                                                        <div className="fallback-text-container"
                                                                                            aria-hidden="true">
                                                                                            <p className="fallback-text">
                                                                                                <span
                                                                                                    className="v-align-inherit">
                                                                                                    <span
                                                                                                        className="v-align-inherit">
                                                                                                        Miracle: Black Cat
                                                                                                    with Ladybug</span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="click-to-change-JAW-indicator">
                                                                                        <div className="bob-jawbone-chevron">
                                                                                            <svg className="svg-icon svg-icon-chevron-down"
                                                                                                focusable="true">
                                                                                                <use filter=""
                                                                                                    xlinkHref="#chevron-down">
                                                                                                </use>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </a></div>
                                                                            <div className="bob-container"><span></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="slider-item slider-item-1">
                                                                    <div className="title-card-container">
                                                                        <div id="title-card-3-1"
                                                                            className="slider-refocus title-card">
                                                                            <div className="ptrack-content"
                                                                                data-ui-tracking-context="%7B%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896066X54XX1592938183794%22,%22location%22:%22homeScreen%22,%22rank%22:1,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:3,%22track_id%22:15036107,%22video_id%22:70142405,%22image_key%22:%22sdp%7C6f9b2061-9485-11ea-a747-0a86c376f437%7Cen%7CoWX%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                                                data-tracking-uuid="cade43ae-2055-41be-b2a0-6b7313e24ce8">

                                                                                <a href="/watch/70142405?tctx=3%2C1%2C%2C%2C%2C"
                                                                                    role="link"
                                                                                    aria-label="Avatar: The Last Airbender"
                                                                                    tabIndex="0" aria-hidden="false"
                                                                                    className="slider-refocus">
                                                                                    <div
                                                                                        className="boxart-size-16x9 boxart-container">
                                                                                        <img className="boxart-image boxart-image-in-padded-container"
                                                                                            src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABegSIx37Ev5nqShmZGuwwllpCxkM4bQjgA0YV6dtv9OFhAShmUSQLKIlzxQGl7Cvsaxzi_MABM_Eknh2XvgnJoHG-Es.webp?r=9ee"
                                                                                            alt="" />
                                                                                        <div className="fallback-text-container"
                                                                                            aria-hidden="true">
                                                                                            <p className="fallback-text">
                                                                                                <span
                                                                                                    className="v-align-inherit">
                                                                                                    <span
                                                                                                        className="v-align-inherit">
                                                                                                        Avatar: The Last
                                                                                                    Airbender</span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="click-to-change-JAW-indicator">
                                                                                        <div className="bob-jawbone-chevron">
                                                                                            <svg className="svg-icon svg-icon-chevron-down"
                                                                                                focusable="true">
                                                                                                <use filter=""
                                                                                                    xlinkHref="#chevron-down">
                                                                                                </use>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </a></div>
                                                                            <div className="bob-container"><span></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="slider-item slider-item-2">
                                                                    <div className="title-card-container">
                                                                        <div id="title-card-3-2"
                                                                            className="slider-refocus title-card">
                                                                            <div className="ptrack-content"
                                                                                data-ui-tracking-context="%7B%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896066X54XX1592938183794%22,%22location%22:%22homeScreen%22,%22rank%22:2,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:3,%22track_id%22:15036107,%22video_id%22:81273085,%22image_key%22:%22sdp%7C91f5c341-9f89-11ea-a7e7-0ae6473b79e9%7Cen%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                                                data-tracking-uuid="08c27418-3d93-4ed5-b26e-12de002c8985">

                                                                                <a href="/watch/81273085?tctx=3%2C2%2C%2C%2C%2C"
                                                                                    role="link" aria-label="the Cocomelo"
                                                                                    tabIndex="0" aria-hidden="false"
                                                                                    className="slider-refocus">
                                                                                    <div
                                                                                        className="boxart-size-16x9 boxart-container">
                                                                                        <img className="boxart-image boxart-image-in-padded-container"
                                                                                            src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRCyTXnTfJIEcnHw-33QRycl6Jizqm0Ozgsellq-a_RNBP-Gvehp-GbN1v-y5Er0yG7rbfb7wOYH1_5YrNwQoKjBaMc.webp?r=ec9"
                                                                                            alt="" />
                                                                                        <div className="fallback-text-container"
                                                                                            aria-hidden="true">
                                                                                            <p className="fallback-text">
                                                                                                <span
                                                                                                    className="v-align-inherit">
                                                                                                    <span
                                                                                                        className="v-align-inherit">
                                                                                                        the Cocomelo</span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="click-to-change-JAW-indicator">
                                                                                        <div className="bob-jawbone-chevron">
                                                                                            <svg className="svg-icon svg-icon-chevron-down"
                                                                                                focusable="true">
                                                                                                <use filter=""
                                                                                                    xlinkHref="#chevron-down">
                                                                                                </use>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </a></div>
                                                                            <div className="bob-container"><span></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="slider-item slider-item-3">
                                                                    <div className="title-card-container">
                                                                        <div id="title-card-3-3"
                                                                            className="slider-refocus title-card">
                                                                            <div className="ptrack-content"
                                                                                data-ui-tracking-context="%7B%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896066X54XX1592938183794%22,%22location%22:%22homeScreen%22,%22rank%22:3,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:3,%22track_id%22:15036107,%22video_id%22:81006858,%22image_key%22:%22sdp%7C7fc2d0f0-5fd8-11ea-9674-0af72db1ad35%7Ctr%7CoWX%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                                                data-tracking-uuid="f7ad16a8-a83b-4d89-a4b1-41b27af068a6">

                                                                                <a href="/watch/81006858?tctx=3%2C3%2C%2C%2C%2C"
                                                                                    role="link" aria-label="Floor Is Lava"
                                                                                    tabIndex="0" aria-hidden="false"
                                                                                    className="slider-refocus">
                                                                                    <div
                                                                                        className="boxart-size-16x9 boxart-container">
                                                                                        <img className="boxart-image boxart-image-in-padded-container"
                                                                                            src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbr6sVu5vv1Y34Xq1C88WfVYp2pMEI71k2Ro2tub9_YFX-Oiq158xQqfkYRMEP7HQG8SvzA5HNrXE4zmn-XZGhzrNfW3xQVo6YUv75Ydq7mQtvsgWEJQvUmCEX-i.jpg?r=6c2"
                                                                                            alt="" />
                                                                                        <div className="fallback-text-container"
                                                                                            aria-hidden="true">
                                                                                            <p className="fallback-text">
                                                                                                <span
                                                                                                    className="v-align-inherit">
                                                                                                    <span
                                                                                                        className="v-align-inherit">
                                                                                                        Floor Is Lava</span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="click-to-change-JAW-indicator">
                                                                                        <div className="bob-jawbone-chevron">
                                                                                            <svg className="svg-icon svg-icon-chevron-down"
                                                                                                focusable="true">
                                                                                                <use filter=""
                                                                                                    xlinkHref="#chevron-down">
                                                                                                </use>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </a></div>
                                                                            <div className="bob-container"><span></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="slider-item slider-item-4">
                                                                    <div className="title-card-container">
                                                                        <div id="title-card-3-4"
                                                                            className="slider-refocus title-card">
                                                                            <div className="ptrack-content"
                                                                                data-ui-tracking-context="%7B%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896066X54XX1592938183794%22,%22location%22:%22homeScreen%22,%22rank%22:4,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:3,%22track_id%22:15036107,%22video_id%22:80027564,%22image_key%22:%22sdp%7C1b62b370-070e-11e8-8048-0e741624d3de%7Cen%7CoWX%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                                                data-tracking-uuid="01a26cc1-843e-4099-a9cc-fe202cfcadb4">

                                                                                <a href="/watch/80027564?tctx=3%2C4%2C%2C%2C%2C"
                                                                                    aria-label="Sam &amp; Cat" tabIndex="-1"
                                                                                    aria-hidden="true"
                                                                                    className="slider-refocus">
                                                                                    <div
                                                                                        className="boxart-size-16x9 boxart-container">
                                                                                        <img className="boxart-image boxart-image-in-padded-container"
                                                                                            src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa6q5X1Nnz2EUG-_xiJC5DcGHeq0QrIZ3oDlGtZcby1aCnxJsfJiLkEnGq3C2h5fCfy5Rjq6o873Gxd00ImKDQZPc5U.webp?r=4b1"
                                                                                            alt="" />
                                                                                        <div className="fallback-text-container"
                                                                                            aria-hidden="true">
                                                                                            <p className="fallback-text">
                                                                                                <span
                                                                                                    className="v-align-inherit">
                                                                                                    <span
                                                                                                        className="v-align-inherit">
                                                                                                        Sam &amp; Cat</span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="click-to-change-JAW-indicator">
                                                                                        <div className="bob-jawbone-chevron">
                                                                                            <svg className="svg-icon svg-icon-chevron-down"
                                                                                                focusable="true">
                                                                                                <use filter=""
                                                                                                    xlinkHref="#chevron-down">
                                                                                                </use>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </a></div>
                                                                            <div className="bob-container"><span></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="slider-item slider-item-">
                                                                    <div className="title-card-container">
                                                                        <div id="title-card-3-5"
                                                                            className="slider-refocus title-card">
                                                                            <div className="ptrack-content"
                                                                                data-ui-tracking-context="%7B%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896066X54XX1592938183794%22,%22location%22:%22homeScreen%22,%22rank%22:5,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:3,%22track_id%22:15036107,%22video_id%22:70293622,%22image_key%22:%22sdp%7C228a63e0-ccb2-11e8-a863-1204ac6e63e2%7Cen%7CoWX%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                                                data-tracking-uuid="e5b79df0-0d4a-475b-8c86-1ae1f3f6a42b">

                                                                                <a href="/watch/70293622?tctx=3%2C5%2C%2C%2C%2C"
                                                                                    aria-label="Sofia the First"
                                                                                    tabIndex="-1" aria-hidden="true"
                                                                                    className="slider-refocus">
                                                                                    <div
                                                                                        className="boxart-size-16x9 boxart-container">
                                                                                        <img className="boxart-image boxart-image-in-padded-container"
                                                                                            src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYDy3wasIfu9dwS8D5wp3ZDNeZcD8Allk-srE78M40HdAv6VcmVcLsOso7EQ4W-lKLp4ut8hGOirOhMJz9-rKuuOr-0.webp?r=6b4"
                                                                                            alt="" />
                                                                                        <div className="fallback-text-container"
                                                                                            aria-hidden="true">
                                                                                            <p className="fallback-text">
                                                                                                <span
                                                                                                    className="v-align-inherit">
                                                                                                    <span
                                                                                                        className="v-align-inherit">
                                                                                                        Sofia the First
                                                                                                </span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="click-to-change-JAW-indicator">
                                                                                        <div className="bob-jawbone-chevron">
                                                                                            <svg className="svg-icon svg-icon-chevron-down"
                                                                                                focusable="true">
                                                                                                <use filter=""
                                                                                                    xlinkHref="#chevron-down">
                                                                                                </use>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </a></div>
                                                                            <div className="bob-container"><span></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="slider-item slider-item-">
                                                                    <div className="title-card-container">
                                                                        <div id="title-card-3-6"
                                                                            className="slider-refocus title-card">
                                                                            <div className="ptrack-content"
                                                                                data-ui-tracking-context="%7B%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896066X54XX1592938183794%22,%22location%22:%22homeScreen%22,%22rank%22:6,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:3,%22track_id%22:15036107,%22video_id%22:80051137,%22image_key%22:%22sdp%7Cf29eaf50-5ffa-11ea-9d11-0e9ef46c77da%7Ctr%7CoWX%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                                                data-tracking-uuid="ebde6c15-7924-4d7a-99d5-aa11a911aa1d">

                                                                                <a href="/watch/80051137?tctx=3%2C6%2C%2C%2C%2C"
                                                                                    aria-label="Fuller house" tabIndex="-1"
                                                                                    aria-hidden="true"
                                                                                    className="slider-refocus">
                                                                                    <div
                                                                                        className="boxart-size-16x9 boxart-container">
                                                                                        <img className="boxart-image boxart-image-in-padded-container"
                                                                                            src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWEu7MIi4GdEeBceyKy_u-PH7hhB-jkHU8hwYdizy1dv3V-8bmW-zeDqUUdANzgNh6nt1x-yIFIh2EGKAD9M1N4UqimRSYIIZ04FAbUNVprqJe6G5QgE2wSgeXOsFsx0QnDY5tcScfy6aKse0dFzWtiO44MgDQ.jpg?r=220"
                                                                                            alt="" />
                                                                                        <div className="fallback-text-container"
                                                                                            aria-hidden="true">
                                                                                            <p className="fallback-text">
                                                                                                <span
                                                                                                    className="v-align-inherit">
                                                                                                    <span
                                                                                                        className="v-align-inherit">
                                                                                                        Fuller house</span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="click-to-change-JAW-indicator">
                                                                                        <div className="bob-jawbone-chevron">
                                                                                            <svg className="svg-icon svg-icon-chevron-down"
                                                                                                focusable="true">
                                                                                                <use filter=""
                                                                                                    xlinkHref="#chevron-down">
                                                                                                </use>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </a></div>
                                                                            <div className="bob-container"><span></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="slider-item slider-item-">
                                                                    <div className="title-card-container">
                                                                        <div id="title-card-3-7"
                                                                            className="slider-refocus title-card">
                                                                            <div className="ptrack-content"
                                                                                data-ui-tracking-context="%7B%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896066X54XX1592938183794%22,%22location%22:%22homeScreen%22,%22rank%22:7,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:3,%22track_id%22:15036107,%22video_id%22:70180088,%22image_key%22:%22sdp%7C0ca426b0-2431-11e5-8c59-0f5b9d2ab7ba%7Cen%7CoWX%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                                                data-tracking-uuid="c87a685b-472b-40f2-97cd-c229e93f5f33">

                                                                                <a href="/watch/70180088?tctx=3%2C7%2C%2C%2C%2C"
                                                                                    aria-label="The Garfield Show"
                                                                                    tabIndex="-1" aria-hidden="true"
                                                                                    className="slider-refocus">
                                                                                    <div
                                                                                        className="boxart-size-16x9 boxart-container">
                                                                                        <img className="boxart-image boxart-image-in-padded-container"
                                                                                            src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcLrZptE23E_0MD_X4rXRXzUEQuY02mPj-FUhatYPAVJ1mPLdpAZ0IYZbELJxSIOuAzNcXKz42OttCcWsXAfRhC5nbM.webp?r=25d"
                                                                                            alt="" />
                                                                                        <div className="fallback-text-container"
                                                                                            aria-hidden="true">
                                                                                            <p className="fallback-text">
                                                                                                <span
                                                                                                    className="v-align-inherit">
                                                                                                    <span
                                                                                                        className="v-align-inherit">
                                                                                                        The Garfield Show
                                                                                                </span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="click-to-change-JAW-indicator">
                                                                                        <div className="bob-jawbone-chevron">
                                                                                            <svg className="svg-icon svg-icon-chevron-down"
                                                                                                focusable="true">
                                                                                                <use filter=""
                                                                                                    xlinkHref="#chevron-down">
                                                                                                </use>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </a></div>
                                                                            <div className="bob-container"><span></span></div>
                                                                        </div>
                                                                    </div>
                                                                </div >
                                                                <div className="slider-item slider-item-">
                                                                    <div className="smallTitleCard loadingTitle fullWidth">
                                                                        <div className="ratio-16x9 no-pulsate"></div>
                                                                    </div>
                                                                </div>
                                                            </div >
                                                        </div > <span className="handle handleNext active" tabIndex="0"
                                                            role="button" aria-label="Show more content"><b
                                                                className="indicator-icon icon-rightCaret"></b></span>
                                                    </div >
                                                </div > <span className="jawBoneContent"></span>
                                            </div >
                                        </div >
                                    </div >
                                    <div className="lolomoRow lolomoRow_title_card" datalistcontext="continueWatching">
                                        <h2 className="rowTitle">
                                            <span className="v-align-inherit">
                                                <span className="v-align-inherit">Boy, Keep Watching</span>
                                            </span>
                                        </h2>
                                        <div className="rowContainer rowContainer_title_card" id="row-4">
                                            <div className="ptrack-container">
                                                <div className="rowContent slider-hover-trigger-layer">
                                                    <div className="slider">
                                                        <div className="sliderMask showPeek">
                                                            <div className="sliderContent row-with-x-columns">
                                                                <div className="slider-item slider-item-0">
                                                                    <div className="title-card-container">
                                                                        <div id="title-card-4-0"
                                                                            className="slider-refocus title-card">
                                                                            <div className="ptrack-content"
                                                                                data-ui-tracking-context="%7B%22list_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_68896067X3XX1592938183794%22,%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%2265826837-a7f4-406f-a17f-74beaf684a2e-327516955%22,%22row%22:4,%22track_id%22:14170076,%22video_id%22:80117803,%22image_key%22:%22sdp%7C8360a4b1-cf6b-11e9-9490-12a3dd50d350%7Ctr%7CoWX%22,%22supp_video_id%22:1,%22lolomo_id%22:%221c3e45e9-b6ec-492f-a729-50bcfed971d9_ROOT%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                                                data-tracking-uuid="107853fd-c91d-4f13-8112-2471adf766dd">

                                                                                <a href="/watch/80117803?tctx=4%2C0%2C%2C%2C%2C"
                                                                                    role="link" aria-label="Raising Dion"
                                                                                    tabIndex="0" aria-hidden="false"
                                                                                    className="slider-refocus">
                                                                                    <div
                                                                                        className="boxart-size-16x9 boxart-container">
                                                                                        <img className="boxart-image boxart-image-in-padded-container"
                                                                                            src="https://occ-0-1009-3934.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa6TWDaIF9Wa9LBszROf2_jCiovrKC50zUFG69BMWpkkX2_o8m9kT3cuKonMlobPP6CGZWDqdnAwMNHmGuPBr9HgOrXnNYGVQa8d0bGhs2T4Fo7r2w23iTXGTwFF.jpg?r=83f"
                                                                                            alt="" />
                                                                                        <div className="fallback-text-container"
                                                                                            aria-hidden="true">
                                                                                            <p className="fallback-text">
                                                                                                <span
                                                                                                    className="v-align-inherit">
                                                                                                    <span
                                                                                                        className="v-align-inherit">
                                                                                                        Raising Dion</span>
                                                                                                </span>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="click-to-change-JAW-indicator">
                                                                                        <div className="bob-jawbone-chevron">
                                                                                            <svg className="svg-icon svg-icon-chevron-down"
                                                                                                focusable="true">
                                                                                                <use filter=""
                                                                                                    xlinkHref="#chevron-down">
                                                                                                </use>
                                                                                            </svg></div>
                                                                                    </div>
                                                                                </a></div>
                                                                            <div className="bob-container"><span></span></div>
                                                                        </div>
                                                                        <div className="progress ">
                                                                            <span className="progress-bar">
                                                                                <span role="presentation"
                                                                                    className="progress-completed"
                                                                                    style={{ width: "31%" }}>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div><span className="jawBoneContent"></span>
                                            </div>
                                        </div>
                                    </div >                                            
                                    
                                    { this.state.isLoading ? <LolomoLoading /> : null }
                                     */}
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
                        </div >
                    </div >
                </div >
            </div >
        );
    }
}
const mapStateToProps = ({ video, lolomo }) => {
    const { searchTitleResult } = video;
    const { isJawOpen } = lolomo;
    return { searchTitleResult, isJawOpen };
}
const mapDispatchToProps = { searchByTitle };
export default connect(mapStateToProps, mapDispatchToProps)(Home);