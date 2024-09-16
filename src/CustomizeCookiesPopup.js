import React from 'react';
import './CustomizeCookiesPopup.css';

function CustomizeCookiesPopup({ onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Privacy Preference Center</h2>
                <p style={{ fontSize: '16px' }}>
                    When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This
                    information might be about you, your preferences, or your device and is mostly used to make the site work as you expect
                    it to. The information does not usually directly identify you, but it can give you a more personalized web experience.
                    Because we respect your right to privacy, you can choose not to allow some types of cookies. However, blocking some types
                    of cookies may impact your experience of the site and the services we are able to offer.
                </p>
                <button className="accept-all-button" onClick={onClose}>Accept All</button>

                <div className="toggle-options">
                    <div className="cookie-option">
                        <div className="cookie-title">
                            <strong>Strictly Necessary Cookies</strong>
                            <span className="toggle always-on">Always Active</span>
                        </div>
                        <p className="cookie-description">
                            These cookies are necessary for the website to function and cannot be switched off in our systems. They are
                            usually only set in response to actions made by you which amount to a request for services, such as setting
                            your privacy preferences, logging in, or filling in forms.
                        </p>
                    </div>

                    <div className="cookie-option">
                        <div className="cookie-title">
                            <strong>Performance Cookies</strong>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <p className="cookie-description">
                            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of
                            our site. They help us to know which pages are the most and least popular and see how visitors move around
                            the site.
                        </p>
                    </div>

                    <div className="cookie-option">
                        <div className="cookie-title">
                            <strong>Functional Cookies</strong>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <p className="cookie-description">
                            These cookies enable the website to provide enhanced functionality and personalization. They may be set by us
                            or by third-party providers whose services we have added to our pages.
                        </p>
                    </div>

                    <div className="cookie-option">
                        <div className="cookie-title">
                            <strong>Social Media Cookies</strong>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <p className="cookie-description">
                            These cookies are set by a range of social media services that we have added to the site to enable you to
                            share our content with your friends and networks.
                        </p>
                    </div>

                    <div className="cookie-option">
                        <div className="cookie-title">
                            <strong>Targeting Cookies</strong>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                        <p className="cookie-description">
                            These cookies may be set through our site by our advertising partners. They may be used by those companies to
                            build a profile of your interests and show you relevant adverts on other sites.
                        </p>
                    </div>
                </div>

                <div className="popup-buttons">
                    <button className="reject-all" onClick={onClose}>Reject all</button>
                    <button className="save-preferences" onClick={onClose}>Save my preferences</button>
                </div>
            </div>
        </div>
    );
}

export default CustomizeCookiesPopup;
