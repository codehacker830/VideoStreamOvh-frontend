import React, { Component } from 'react';

export default class SvgDefs extends Component {
    render() {
        return (
            <svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                style={{ height: 0, width: 0, position: 'absolute' }}>
                <defs>
                    <symbol id="nfplayerBack" viewBox="0 0 28 28">
                        <g transform="translate(0.000000, 2.000000)">
                            <polygon
                                points="8 11 23 11 23 13 8 13.0032349 13.4439 19.5297864 11.643033 21.0733867 3.86584444 12 11.643033 2.92661331 13.4439 4.47021357">
                            </polygon>
                        </g>
                    </symbol>
                    <symbol id="nfplayerExit" viewBox="0 0 18 18">
                        <path
                            d="M7.53821454,9 L0,1.46178546 L1.46178546,0 L9,7.53821454 L16.5382145,0 L18,1.46178546 L10.4617855,9 L18,16.5382145 L16.5382145,18 L9,10.4617855 L1.46178546,18 L0,16.5382145 L7.53821454,9 Z">
                        </path>
                    </symbol>
                    <symbol id="nfplayerBackTen" viewBox="0 0 28 28">
                        <g stroke="none" strokeWidth={1} fill="none">
                            <path
                                d="M21.9992616,8.99804242 C23.2555293,10.6696987 24,12.7479091 24,15 C24,20.5228475 19.5228475,25 14,25 C8.4771525,25 4,20.5228475 4,15 C4,9.4771525 8.4771525,5 14,5 L16,5"
                                stroke="white" strokeWidth={2}
                                transform="translate(14.000000, 15.000000) scale(-1, 1) translate(-14.000000, -15.000000) ">
                            </path>
                            <polyline stroke="white" strokeWidth={2} points="15.5 1.5 12 4.92749023 15.5 8.5">
                            </polyline>
                            <polyline stroke="white" strokeWidth={2} points="11 1.5 7.5 5 11 8.5" /><text
                                fontSize={10} fontWeight={400} letterSpacing="-0.3" fill="white">
                                <tspan x={7} y={19}>1</tspan>
                                <tspan x="12.82" y={19}>0</tspan>
                            </text>
                        </g>
                    </symbol>
                    <symbol id="nfplayerCheck" viewBox="0 0 28 28">
                        <polygon
                            points="8.06066017 14 7 15.0606602 11.2803301 19.3409903 21.5606602 9.06066017 20.5 8 11.2803301 17.2196699">
                        </polygon>
                    </symbol>
                    <symbol id="nfplayerChevronUp" viewBox="0 0 28 28">
                        <path
                            d="M10.4852814,13.4852814 L10.4852814,23.4852814 L8.48528137,23.4852814 L8.48528137,13.4852814 L8.48528137,11.4852814 L20.4852814,11.4852814 L20.4852814,13.4852814 L10.4852814,13.4852814 Z">
                        </path>
                    </symbol>
                    <symbol id="nfplayerFullscreen" viewBox="0 0 28 28">
                        <g transform="translate(2, 6)">
                            <polygon points="8 0 6 0 5.04614258 0 0 0 0 5 2 5 2 2 8 2" />
                            <polygon transform="translate(4, 13.5) scale(1, -1) translate(-4, -13.5) "
                                points="8 11 6 11 5.04614258 11 0 11 0 16 2 16 2 13 8 13" />
                            <polygon transform="translate(20, 2.5) scale(-1, 1) translate(-20, -2.5) "
                                points="24 0 22 0 21.0461426 0 16 0 16 5 18 5 18 2 24 2" />
                            <polygon transform="translate(20, 13.5) scale(-1, -1) translate(-20, -13.5) "
                                points="24 11 22 11 21.0461426 11 16 11 16 16 18 16 18 13 24 13" />
                        </g>
                    </symbol>
                    <symbol id="nfplayerEpisodes" viewBox="0 0 28 28">
                        <path
                            d="M27,7.25 L27,14 L24.7142857,14 L24.7142857,7.25 L11,7.25 L11,5 L27,5 L27,7.25 Z M23,11.2222222 L23,19 L20.7333333,19 L20.7333333,11.2222222 L6,11.2222222 L6,9 L23,9 L23,11.2222222 Z M1,13 L19,13 L19,24 L1,24 L1,13 Z">
                        </path>
                    </symbol>
                    <symbol id="nfplayerWindowed" viewBox="0 0 28 28">
                        <g transform="translate(3, 6)">
                            <polygon
                                transform="translate(19.000000, 3.000000) scale(-1, 1) translate(-19.000000, -3.000000) "
                                points="22 0 20 0 20 4 16 4 16 6 22 6" />
                            <polygon
                                transform="translate(19.000000, 13.000000) scale(-1, -1) translate(-19.000000, -13.000000) "
                                points="22 10 20 10 20 14 16 14 16 16 22 16" />
                            <polygon points="6 0 4 0 4 4 0 4 0 6 6 6" />
                            <polygon
                                transform="translate(3.000000, 13.000000) scale(1, -1) translate(-3.000000, -13.000000) "
                                points="6 10 4 10 4 14 0 14 0 16 6 16" />
                        </g>
                    </symbol>
                    <symbol id="nfplayerFastForward" viewBox="0 0 28 28">
                        <g stroke="none" strokeWidth={1} fill="none">
                            <g
                                transform="translate(14.000000, 13.000000) scale(-1, 1) translate(-14.000000, -13.000000) translate(4.000000, 1.000000)">
                                <path
                                    d="M17.9992616,7.99804242 C19.2555293,9.66969874 20,11.7479091 20,14 C20,19.5228475 15.5228475,24 10,24 C4.4771525,24 0,19.5228475 0,14 C0,8.4771525 4.4771525,4 10,4 L12,4"
                                    stroke="white" strokeWidth={2}
                                    transform="translate(10.000000, 14.000000) scale(-1, 1) translate(-10.000000, -14.000000) ">
                                </path>
                                <polyline stroke="white" strokeWidth={2} points="11.5 0.5 8 3.92749023 11.5 7.5">
                                </polyline>
                                <polyline stroke="white" strokeWidth={2} points="7 0.5 3.5 4 7 7.5" />
                            </g><text fontSize={10} fontWeight={400} letterSpacing="-0.3" fill="white">
                                <tspan x={7} y={19}>10</tspan>
                            </text>
                        </g>
                    </symbol>
                    <symbol id="nfplayerNextEpisode" viewBox="0 0 28 28">
                        <g transform="translate(6, 6)">
                            <path d="M0,16 L0,0 L14,8 L0,16 Z M14,16 L14,0 L16,0 L16,16 L14,16 Z" />
                        </g>
                    </symbol>
                    <symbol id="nfplayerPictureInPicture" viewBox="0 0 24 24">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <rect fill="#D8D8D8" opacity={0} x={0} y={0} width={24} height={24} />
                            <path
                                d="M21.0003,18 L21.0003,6 L3.0003,6 L3.0003,18 L21.0003,18 Z M21.9453,20 L2.0543,20 C1.46343187,20 1.0003,19.5190554 1.0003,18.944 L1.0003,5.056 C1.0003,4.48094463 1.46343187,4 2.0543,4 L21.9453,4 C22.5305389,4 23.0003,4.47563312 23.0003,5.056 L23.0003,18.944 C23.0003,19.5243669 22.5305389,20 21.9453,20 Z M10,16 L19,16 L19,11 L10,11 L10,16 Z"
                                fill="#FFFFFF" fillRule="nonzero" />
                        </g>
                    </symbol>
                    <symbol id="nfplayerPictureInPictureClose" viewBox="0 0 18 18">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g transform="translate(-3.000000, -3.000000)">
                                <rect stroke="#979797" strokeWidth={1} fill="#D8D8D8" fillRule="evenodd" opacity={0}
                                    x="0.5" y="0.5" width={23} height={23} />
                                <mask fill="white">
                                    <path
                                        d="M12,10.5857864 L19.2928932,3.29289322 L20.7071068,4.70710678 L13.4142136,12 L20.7071068,19.2928932 L19.2928932,20.7071068 L12,13.4142136 L4.70710678,20.7071068 L3.29289322,19.2928932 L10.5857864,12 L3.29289322,4.70710678 L4.70710678,3.29289322 L12,10.5857864 Z">
                                    </path>
                                </mask>
                                <path fill="#FFFFFF" fillRule="evenodd"
                                    d="M12,10.5857864 L19.2928932,3.29289322 L20.7071068,4.70710678 L13.4142136,12 L20.7071068,19.2928932 L19.2928932,20.7071068 L12,13.4142136 L4.70710678,20.7071068 L3.29289322,19.2928932 L10.5857864,12 L3.29289322,4.70710678 L4.70710678,3.29289322 L12,10.5857864 Z">
                                </path>
                            </g>
                        </g>
                    </symbol>
                    <symbol id="nfplayerPlay" viewBox="0 0 28 28">
                        <polygon points="8 22 8 6 22.0043763 14" />
                    </symbol>
                    <symbol id="nfplayerPause" viewBox="0 0 28 28">
                        <rect x={9} y={6} width={4} height={16} />
                        <rect x={15} y={6} width={4} height={16} />
                    </symbol>
                    <symbol id="nfplayerReportAProblem" viewBox="0 0 28 28">
                        <g transform="translate(3, 3)">
                            <g strokeWidth={2} fill="transparent">
                                <circle cx={11} cy={11} r={10} />
                            </g><text fontSize={14} fontWeight="bold">
                                <tspan x={7} y={16}>?</tspan>
                            </text>
                        </g>
                    </symbol>
                    <symbol id="nfplayerSubtitles" viewBox="0 0 28 28">
                        <g transform="translate(1, 6)">
                            <path
                                d="M24,14 L24,19 L19,14 L0,14 L0,0 L26,0 L26,14 L24,14 Z M2,6 L2,8 L7,8 L7,6 L2,6 Z M9,6 L9,8 L17,8 L17,6 L9,6 Z M19,6 L19,8 L24,8 L24,6 L19,6 Z M2,10 L2,12 L10,12 L10,10 L2,10 Z M12,10 L12,12 L17,12 L17,10 L12,10 Z">
                            </path>
                        </g>
                    </symbol>
                    <symbol id="volumeLow" viewBox="0 0 28 28">
                        <path
                            d="M13,22 L7,18 L3,18 L3,10 L7,10 L13,6 L13,22 Z M16.7437869,18.3889482 L15.3295734,16.9747347 C16.9546583,15.3496497 16.9546583,12.7148664 15.3295734,11.0897815 L16.7437869,9.6755679 C19.1499205,12.0817014 19.1499205,15.9828147 16.7437869,18.3889482 Z">
                        </path>
                    </symbol>
                    <symbol id="volumeMedium" viewBox="0 0 28 28">
                        <path
                            d="M13,22 L7,18 L3,18 L3,10 L7,10 L13,6 L13,22 Z M16.7437869,18.3889482 L15.3295734,16.9747347 C16.9546583,15.3496497 16.9546583,12.7148664 15.3295734,11.0897815 L16.7437869,9.6755679 C19.1499205,12.0817014 19.1499205,15.9828147 16.7437869,18.3889482 Z M19.2137399,20.2137399 L17.7995264,18.7995264 C20.4324159,16.1666368 20.4324159,11.8978793 17.7995264,9.26498977 L19.2137399,7.8507762 C22.6276781,11.2647144 22.6276781,16.7998018 19.2137399,20.2137399 Z">
                        </path>
                    </symbol>
                    <symbol id="volumeMax" viewBox="0 0 28 28">
                        <path
                            d="M13,22 L7,18 L3,18 L3,10 L7,10 L13,6 L13,22 Z M16.7437869,18.3889482 L15.3295734,16.9747347 C16.9546583,15.3496497 16.9546583,12.7148664 15.3295734,11.0897815 L16.7437869,9.6755679 C19.1499205,12.0817014 19.1499205,15.9828147 16.7437869,18.3889482 Z M19.2137399,20.2137399 L17.7995264,18.7995264 C20.4324159,16.1666368 20.4324159,11.8978793 17.7995264,9.26498977 L19.2137399,7.8507762 C22.6276781,11.2647144 22.6276781,16.7998018 19.2137399,20.2137399 Z M21.6836929,22.0385316 L20.2694793,20.6243181 C23.9101736,16.9836239 23.9101736,11.0808923 20.2694793,7.44019807 L21.6836929,6.02598451 C26.1054357,10.4477273 26.1054357,17.6167888 21.6836929,22.0385316 Z">
                        </path>
                    </symbol>
                    <symbol id="volumeMuted" viewBox="0 0 28 28">
                        <polygon points="13 22 7 18 3 18 3 10 7 10 13 6" />
                        <g transform="translate(19.500000, 14.000000) rotate(-315.000000) translate(-19.500000, -14.000000) translate(15.000000, 9.000000)"
                            strokeLinecap="square" strokeWidth={2}>
                            <path d="M0,5 L9,5" />
                            <path d="M4.5,0.5 L4.5,9.5" />
                        </g>
                    </symbol>
                    <symbol id="bvuiExit" viewBox="0 0 36 36">
                        <path
                            d="M312,392.74a0.34,0.34,0,0,0-.41-0.34h-6.79v-3.71c0-.3-0.34-0.41-0.45-0.26l-6.79,6.79a0.32,0.32,0,0,0-.11.22,0.29,0.29,0,0,0,.11.26l6.79,6.75a0.26,0.26,0,0,0,.19.11,0.23,0.23,0,0,0,.19,0,0.27,0.27,0,0,0,.19-0.3v-3.71h6.71a0.4,0.4,0,0,0,.38-0.3v-5.48Zm-6.15,17.85A15.13,15.13,0,1,1,321,395.44,15.11,15.11,0,0,1,305.89,410.59Zm0-33.15a18,18,0,1,0,18,18A18.09,18.09,0,0,0,305.89,377.44Z"
                            transform="translate(-287.85 -377.44)" />
                    </symbol>
                    <symbol id="nfplayerMdx" viewBox="0 0 22 18">
                        <path
                            d="M0,15 L0,18 L3,18 C3,16.34 1.66,15 0,15 L0,15 Z M0,11 L0,13 C2.76,13 5,15.24 5,18 L7,18 C7,14.13 3.87,11 0,11 L0,11 Z M0,7 L0,9 C4.97,9 9,13.03 9,18 L11,18 C11,11.92 6.07,7 0,7 L0,7 Z M20,0 L2,0 C0.9,0 0,0.9 0,2 L0,5 L2,5 L2,2 L20,2 L20,16 L13,16 L13,18 L20,18 C21.1,18 22,17.1 22,16 L22,2 C22,0.9 21.1,0 20,0 L20,0 Z">
                        </path>
                    </symbol>
                    <symbol id="nfplayerMdxFull" viewBox="0 0 22 18">
                        <path
                            d="M0,15 L0,18 L3,18 C3,16.34 1.66,15 0,15 L0,15 Z M0,11 L0,13 C2.76,13 5,15.24 5,18 L7,18 C7,14.13 3.87,11 0,11 L0,11 Z M18,4 L4,4 L4,5.63 C7.96,6.91 11.09,10.04 12.37,14 L18,14 L18,4 L18,4 Z M0,7 L0,9 C4.97,9 9,13.03 9,18 L11,18 C11,11.92 6.07,7 0,7 L0,7 Z M20,0 L2,0 C0.9,0 0,0.9 0,2 L0,5 L2,5 L2,2 L20,2 L20,16 L13,16 L13,18 L20,18 C21.1,18 22,17.1 22,16 L22,2 C22,0.9 21.1,0 20,0 L20,0 Z">
                        </path>
                    </symbol>
                    <symbol id="nfplayerStop" viewBox="0 0 32 32">
                        <path
                            d="M30.2190978,32 L1.78090217,32 C0.780785003,32 0,31.18737 0,30.2182127 L0,1.78178729 C0,0.781699423 0.780785003,0 1.78090217,0 L30.2190978,0 C31.219215,0 32,0.781699423 32,1.78178729 L32,30.2182127 C32,31.18737 31.219215,32 30.2190978,32 Z">
                        </path>
                    </symbol>
                    <symbol id="nfplayerOpticalCenterPlay" viewBox="0 0 26 22">
                        <polygon
                            transform="translate(16.000000, 11.000000) scale(-1, 1) rotate(-90.000000) translate(-16.000000, -11.000000) "
                            points="16 1 27 21 5 21" />
                    </symbol>
                    <symbol id="nfplayerOpticalCenterPause" viewBox="0 0 26 22">
                        <path d="M6,0 L10,0 L10,22 L6,22 L6,0 Z M16,0 L20,0 L20,22 L16,22 L16,0 Z" />
                    </symbol>
                    <filter id="dropShadow">
                        <feGaussianBlur in="SourceAlpha" stdDeviation={3} />
                        <feOffset dx={0} dy={0} result="offsetblur" />
                        <feFlood floodColor="rgba(0,0,0,0.5)" />
                        <feComposite in2="offsetblur" operator="in" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

        );
    }
}