import React, { useState } from 'react';
import './CookiePolicy.css';

function CookiePolicy() {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        setIsVisible(false);
    };

    const handleSettings = () => {
        // Logic for opening cookie settings
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
                    cookies. Click "View cookie settings" to allow certain categories of cookies. Click the “X” to only allow cookies <br />
                    vital to the website running. Update your cookie settings from our  <a href="#">Cookie Policy</a>.
                </p>
                <div className="cookie-buttons">
                    <button onClick={handleAccept} className="accept-button">Accept and continue</button>
                    <button onClick={handleSettings} className="settings-button">View cookie settings</button>
                </div>
            </div>

        </div>
    );
}

export default CookiePolicy;
