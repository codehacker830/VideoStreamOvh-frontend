import React from 'react'
import { Link } from 'react-router-dom'

export const MemberFooter = (props) => {
    return (
        <div role="contentinfo" className="member-footer">
            <ul className="member-footer-links">
                <li className="member-footer-link-wrapper">

                    <Link className="member-footer-link" to="/term-of-use"><span
                        className="member-footer-link-content">
                        <span className="v-align-inherit">
                            <span className="v-align-inherit">Terms of Use</span>
                        </span>
                    </span></Link></li>
                <li className="member-footer-link-wrapper">
                    <Link className="member-footer-link" to="/contact-us"><span
                        className="member-footer-link-content">
                        <span className="v-align-inherit">
                            <span className="v-align-inherit">Contact us</span>
                        </span>
                    </span></Link></li>
            </ul>
            <div className="member-footer-copyright"><span>
                <span className="v-align-inherit">
                    <span className="v-align-inherit">© 1997-2020 VideoStream, Inc. </span>
                </span>
                <span className="v-align-inherit"></span>
            </span>
                <span className="member-footer-copyright-instance">
                    <span className="v-align-inherit">
                        <span className="v-align-inherit">CC</span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default MemberFooter