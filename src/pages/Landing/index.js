import React, { Component } from 'react';
import './style.scoped.css';
import { Link } from 'react-router-dom';

function CloseSvg() {
    return (
        <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-open" focusable="true">
            <path 
                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">
            </path>
        </svg>
    );
}
function OpenSvg() {
    return (
        <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
            <path
                d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z">
            </path>
        </svg>
    );
}
class Landing extends Component {
    state = {
        isOpenQ1: false,
        isOpenQ2: false,
        isOpenQ3: false,
        isOpenQ4: false,
        isOpenQ5: false        
    }
    render() {
        return (
            <div className="basicLayout">
                <div className="netflix-sans-font-loaded">
                    <div className="our-story-desktop-framework">
                        <div>
                            <div className="our-story-container" dir="ltr">
                                <div className="our-story-header-wrapper">
                                    <div className="our-story-header" data-uia-our-story="our-story-header">
                                        <span className="svg-nfLogo our-story-logo nfLogo"
                                            data-uia="netflix-header-svg-logo-noclick">
                                            <img src="./assets/media/logo.svg" alt="videostream"
                                                className="svg-icon svg-icon-netflix-logo" focusable="false" />
                                            <span className="screen-reader-text">VideoStream</span>
                                        </span>
                                        <Link to="/sign-in" className="authLinks redButton" data-uia="header-login-link">Sign In</Link>
                                    </div>
                                </div>
                                <div className="our-story-cards" data-uia-our-story="our-story-cards">
                                    <div className="our-story-card hero-card vlv" data-uia-our-story="hero_fuji"
                                        data-uia="our-story-card">
                                        <div className="our-story-card-background">
                                            <div className="concord-img-wrapper" data-uia="concord-img-wrapper"
                                                style={{height: "710px"}}>
                                                <img className="concord-img vlv-creative"
                                                    src="./assets/media/photos/background.jpg"
                                                    srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/dead63cd-f004-43ff-9ecb-d6381f56b76e/0a8f62ef-224d-46e3-be2c-e7b1227c51b8/US-en-20200617-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/dead63cd-f004-43ff-9ecb-d6381f56b76e/0a8f62ef-224d-46e3-be2c-e7b1227c51b8/US-en-20200617-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/dead63cd-f004-43ff-9ecb-d6381f56b76e/0a8f62ef-224d-46e3-be2c-e7b1227c51b8/US-en-20200617-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
                                                    alt="" />
                                                <div className="concord-img-gradient"></div>
                                            </div>
                                        </div>
                                        <div className="our-story-card-text">
                                            <h1 id="" className="our-story-card-title" data-uia="hero-title">Unlimited movies,
                                            TV shows, and more.</h1>
                                            <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">
                                                Watch anywhere. Cancel anytime.</h2>
                                            <div className="cta-form email-form" data-uia="email-form">
                                                <h3 className="email-form-title">Ready to watch? Register now.</h3>
                                                <div className="email-form-lockup">
                                                    <div className="our-story-cta-container cta-link-wrapper">
                                                        <button
                                                        className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom outline-none"
                                                        type="submit" autoComplete="off" tabIndex="0" role="link"
                                                        data-uia="our-story-cta-hero_fuji">
                                                            <span id=""
                                                            className="cta-btn-txt" data-uia="">REGISTER NOW</span>
                                                        <span id="" className="chevron-right-arrow" data-uia="">
                                                            <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                                                                <desc>chevron</desc>
                                                                <path
                                                                    d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                                                                    fill="none" fillRule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="our-story-card animation-card watchOnTv" data-uia-our-story="watchOnTv"
                                        data-uia="our-story-card">
                                        <div className="animation-card-container">
                                            <div className="our-story-card-text">
                                                <h1 id="" className="our-story-card-title" data-uia="animation-card-title">Enjoy
                                                on your TV.</h1>
                                                <h2 id="" className="our-story-card-subtitle"
                                                    data-uia="our-story-card-subtitle">Watch on Smart TVs, Playstation,
                                                Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                                            </div>
                                            <div className="our-story-card-img-container">
                                                <div className="our-story-card-animation-container">
                                                    <img alt="" className="our-story-card-img"
                                                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                                                        data-uia="our-story-card-img" />
                                                    <div className="our-story-card-animation">
                                                        <video className="our-story-card-video" autoPlay="" playsInline=""
                                                            muted="" loop="">
                                                            <source
                                                                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                                                type="video/mp4" />
                                                        </video>
                                                            <div className="our-story-card-animation-text"></div>
                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="our-story-card animation-card downloadAndWatch flipped"
                                            data-uia-our-story="downloadAndWatch" data-uia="our-story-card">
                                            <div className="animation-card-container">
                                                <div className="our-story-card-text">
                                                    <h1 id="" className="our-story-card-title" data-uia="animation-card-title">
                                                        Download your shows to watch offline.</h1>
                                                    <h2 id="" className="our-story-card-subtitle"
                                                        data-uia="our-story-card-subtitle">Save your favorites easily and always
                                                have something to watch.</h2>
                                                </div>
                                                <div className="our-story-card-img-container">
                                                    <div className="our-story-card-animation-container">
                                                        <img alt=""
                                                            className="our-story-card-img"
                                                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                                                            data-uia="our-story-card-img" />
                                                        <div className="our-story-card-animation">
                                                            <div className="our-story-card-animation-image">
                                                                <img alt=""
                                                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                                                            </div>
                                                            <div className="our-story-card-animation-text">
                                                                <div id="" className="text-0" data-uia="">Stranger Things</div>
                                                                <div id="" className="text-1" data-uia="">Downloading...</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="our-story-card animation-card watchOnDevice"
                                            data-uia-our-story="watchOnDevice" data-uia="our-story-card">
                                            <div className="animation-card-container">
                                                <div className="our-story-card-text">
                                                    <h1 id="" className="our-story-card-title" data-uia="animation-card-title">Watch
                                                everywhere.</h1>
                                                    <h2 id="" className="our-story-card-subtitle"
                                                        data-uia="our-story-card-subtitle">Stream unlimited movies and TV shows
                                                on your phone, tablet, laptop, and TV without paying more.</h2>
                                                </div>
                                                <div className="our-story-card-img-container">
                                                    <div className="our-story-card-animation-container">
                                                        <img alt=""
                                                        className="our-story-card-img"
                                                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                                                        data-uia="our-story-card-img" />
                                                        <div className="our-story-card-animation">
                                                            <video
                                                                className="our-story-card-video" autoPlay="" playsInline="" muted=""
                                                                loop="">
                                                                <source
                                                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                                                                    type="video/mp4" />

                                                            </video>
                                                            <div className="our-story-card-animation-text"></div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="our-story-card faq-card" data-uia-our-story="faq" data-uia="our-story-card" id="faq">
                                                <div className="our-story-card-text">
                                                    <h1 id="" className="our-story-card-title" data-uia="faq-title">Frequently Asked Questions</h1>
                                                    <ul className="faq-list">
                                                        <li className="faq-list-item" data-uia-our-story="faq-list-item">
                                                            <button className="faq-question" onClick={() => this.setState({isOpenQ1: !this.state.isOpenQ1})}>What is VideoStream?
                                                                {this.state.isOpenQ1 ? 
                                                                <CloseSvg />
                                                                : <OpenSvg />
                                                                }
                                                            </button>
                                                            <div className={`faq-answer ${this.state.isOpenQ1 ? "open": "closed"}`}>
                                                                <span id="" data-uia="">
                                                                    VideoStream is a streaming service that offers a wide variety of award-winning TV
                                                                    shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                                                                    <br /><br />
                                                                    You can watch as much as you
                                                                    want, whenever you want without a single commercial – all for
                                                                    one low monthly price. There's always something new to discover
                                                                    and new TV shows and movies are added every week!
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li className="faq-list-item" data-uia-our-story="faq-list-item">
                                                            <button className="faq-question" onClick={() => this.setState({isOpenQ2: !this.state.isOpenQ2})}>How much does VideoStream cost?
                                                                {this.state.isOpenQ2 ? 
                                                                    <CloseSvg />
                                                                    : <OpenSvg />
                                                                }
                                                            </button>
                                                            <div className={`faq-answer ${this.state.isOpenQ2 ? "open": "closed"}`}><span id="" data-uia="">
                                                                Watch VideoStream on
                                                                your smartphone, tablet, Smart TV, laptop, or streaming device,
                                                                all for one fixed monthly fee. Plans range from $8.99 to $15.99
                                                                a month. No extra costs, no contracts.
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li className="faq-list-item" data-uia-our-story="faq-list-item">
                                                        <button className="faq-question"  onClick={() => this.setState({isOpenQ3: !this.state.isOpenQ3})}>Where can I watch?
                                                            {this.state.isOpenQ3 ? 
                                                                    <CloseSvg />
                                                                    : <OpenSvg />
                                                                }   
                                                        </button>
                                                            <div className={`faq-answer ${this.state.isOpenQ3 ? "open": "closed"}`}>
                                                                <span id="" data-uia="">
                                                                    Watch anywhere, anytime, on an unlimited number of devices. Sign in with your
                                                                    VideoStream account to watch instantly on the web at
                                                                    videostream.ovh from your personal computer or on any internet-connected device
                                                                    that offers the VideoStream app, including smart TVs,
                                                                    smartphones, tablets, streaming media players and game consoles.
                                                                    <br /><br />
                                                                    You can also download your favorite shows with the iOS, Android, or
                                                                    Windows 10 app. Use downloads to watch while you're on the go
                                                                    and without an internet connection. Take VideoStream with you anywhere.
                                                                </span>
                                                            </div>
                                                        </li>
                                                                <li className="faq-list-item" data-uia-our-story="faq-list-item">
                                                                <button
                                                                    className="faq-question" onClick={() => this.setState({isOpenQ4: !this.state.isOpenQ4})}>How do I cancel?
                                                                    {this.state.isOpenQ4 ? 
                                                                    <CloseSvg />
                                                                    : <OpenSvg />
                                                                    }   
                                                                </button>
                                                                    <div className={`faq-answer ${this.state.isOpenQ4 ? "open": "closed"}`}>
                                                                        <span id="" data-uia="">VideoStream is
                                                                        flexible. There are no pesky contracts and no commitments. You
                                                                        can easily cancel your account online in two clicks. There are
                                                                        no cancellation fees – start or stop your account
                                                                        anytime.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                                <li className="faq-list-item" data-uia-our-story="faq-list-item">
                                                                    <button
                                                                    className="faq-question" onClick={() => this.setState({isOpenQ5: !this.state.isOpenQ5})}>What can I watch on VideoStream?
                                                                    {this.state.isOpenQ5 ? 
                                                                    <CloseSvg />
                                                                    : <OpenSvg />
                                                                    }   
                                                                </button>
                                                                    <div className={`faq-answer ${this.state.isOpenQ5 ? "open": "closed"}`}>
                                                                        <span id="" data-uia="">
                                                                            VideoStream has an extensive library of feature films, documentaries, TV shows,
                                                                            anime, award-winning VideoStream originals, and more. Watch as much
                                                                            as you want, anytime you want. Join free for 30 days to see everything VideoStream has to offer.
                                                                        </span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <div className="cta-form email-form" data-uia="email-form">
                                                                <h3 className="email-form-title">Ready to watch? Register now.</h3>
                                                                <div className="email-form-lockup">
                                                                    <div className="our-story-cta-container cta-link-wrapper">
                                                                        <button
                                                                        className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom outline-none"
                                                                        type="submit" autoComplete="off" tabIndex="0" role="link"
                                                                        data-uia="our-story-cta-faq">
                                                                        <span id="" className="cta-btn-txt" data-uia="">REGISTER NOW</span>
                                                                        <span id="" className="chevron-right-arrow" data-uia="">
                                                                            <svg
                                                                                viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                                                                                <desc>chevron</desc>
                                                                                <path
                                                                                    d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                                                                                    fill="none" fillRule="evenodd">

                                                                                </path>
                                                                            </svg>
                                                                        </span>
                                                                    </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                            </div>

                                                    <div className="our-story-card card-contents footer-card our-story-card-no-border"
                                                        style={{ position: "relative" }} data-uia-our-story="footer" data-uia="our-story-card">
                                                        <div className="site-footer-wrapper centered dark">
                                                            <div className="footer-divider"></div>
                                                            <div className="site-footer">
                                                                <p className="footer-top">Questions? Call
                                                <a className="footer-top-a" href="tel:x-xxx-xxx-xxxx">x-xxx-xxx-xxxx</a></p>
                                                                <ul className="footer-links structural">
                                                                    <li className="footer-link-item"
                                                                        placeholder="footer_responsive_link_faq_item"><a className="footer-link"
                                                                            data-uia="footer-link" href=""
                                                                            placeholder="footer_responsive_link_faq">
                                                                            <span id="" data-uia="data-uia-footer-label">FAQ</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="footer-link-item"
                                                                        placeholder="footer_responsive_link_terms_item">
                                                                        <a className="footer-link" data-uia="footer-link" href=""
                                                                            placeholder="footer_responsive_link_terms">
                                                                            <span id="" data-uia="data-uia-footer-label">Terms of Use</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="footer-link-item"
                                                                        placeholder="footer_responsive_link_contact_us_item">
                                                                        <a className="footer-link" data-uia="footer-link" href=""
                                                                            placeholder="footer_responsive_link_contact_us">
                                                                            <span id="" data-uia="data-uia-footer-label">Contact Us</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        );
    }
}
export default Landing;