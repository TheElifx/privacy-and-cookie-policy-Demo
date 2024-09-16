import React, { useState } from 'react';
import './CookiePolicy.css';

function CookiePolicy({ handleSettings }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <div className={`cookie-policy ${isVisible ? 'slide-up' : ''}`}>
            <button className="close-button" onClick={handleClose}>X</button>
            <div className="cookie-text">
                <p>
                    We use cookies to analyze traffic and deliver personalized content. Click “Accept and Continue” to allow all <br />
                    cookies. Click "Customize cookies" to allow certain categories of cookies. Click the “X” to only allow cookies <br />
                    vital to the website running. Update your cookie settings from our  <a href="#">Cookie Policy</a>.
                </p>
                <div className="cookie-buttons">
                    <button onClick={handleAccept} className="accept-button">Accept and continue</button>
                    <button onClick={handleSettings} className="settings-button">Customize cookies</button> {/* This triggers handleSettings */}
                </div>
            </div>
        </div>
    );
}

export default CookiePolicy;
