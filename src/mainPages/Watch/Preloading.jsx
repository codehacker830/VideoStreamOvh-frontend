import React, { Component } from 'react';

export default class Preloading extends Component {
    render() {
        return (
            <div className="player-loading">
                <div className="player-loading-background-image player-loading-background-image-loaded" style={{ backgroundImage: 'url("https://via.placeholder.com/1920x1080")' }}>
                    {/* <div className="player-loading-background-image player-loading-background-image-loaded" style={{ backgroundImage: 'url("https://via.placeholder.com/1280x720")' }}> */}
                </div>
                <div className="gradient" />
                <div className="nfp-control-row top-left-controls">
                    <div className="PlayerControls--control-element player-title-evidence PlayerControls--control-element-hidden"
                        tabIndex={-1}>
                        <h3 className="title">Batman: Mask of the Phantasm</h3>
                    </div>
                </div>
                <div>
                    <div className="loading-children-container">
                        <div className="AkiraPlayerSpinner--container nfa-w-100 nfa-pos-abs nfa-d-flex nfa-h-100
                            nfa-top-0 nfa-bot-0 nfa-left-0 nfa-right-0
                            nfa-jc-center nfa-ac-center nfa-ai-center
                            nfa-flx-dir-col nfa-opacity-0 nfa-opacity-1">
                            <div className="nfa-pos-rel nfa-w-100 nfa-overflow-hidden nfa-h-12-em nfa-d-flex nfa-jc-center nfa-ai-center nfa-min-h-5-rem">
                                <div className="nf-loading-spinner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}