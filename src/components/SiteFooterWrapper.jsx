import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SiteFooterWrapper extends Component {
    render() {
        return (
            <div className="site-footer-wrapper centered" style={{ transitionDuration: '250ms', opacity: 1 }}>
                <div className="footer-divider" />
                <div className="site-footer">
                    <p className="footer-top" style={{ fontSize: "14px" }}>Questions? Call
                            <a className="footer-top-a" href="tel:x-xxx-xxx-xxxx">x-xxx-xxx-xxxx</a>
                    </p>
                    <ul className="footer-links structural">
                        <li className="footer-link-item" placeholder="footer_responsive_link_faq_item">
                            <Link className="footer-link"
                                to="/faq"
                                placeholder="footer_responsive_link_faq">
                                <span>FAQ</span>
                            </Link>
                        </li>
                        <li className="footer-link-item" placeholder="footer_responsive_link_terms_item">
                            <Link className="footer-link"
                                to="/term-of-use"
                                placeholder="footer_responsive_link_terms">
                                <span>Terms of Use</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}