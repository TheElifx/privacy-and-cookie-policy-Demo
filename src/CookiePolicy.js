import React, { useState } from 'react';
import './CookiePolicy.css';

function CookiePolicy({ handleSettings, handleOpenPrivacyPolicy }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleAccept = () => {
        setIsVisible(false); // Hide the cookie banner when "Accept and Continue" is clicked
    };

    const handleClose = () => {
        setIsVisible(false); // Hide the cookie banner when "X" is clicked
    };

    const handleCustomizeCookies = () => {
        setIsVisible(false); // Hide the cookie banner
        handleSettings(); // Trigger handleSettings to show Customize Cookies popup
    };

    const handleOpenPolicy = () => {
        setIsVisible(false); // Hide the cookie banner
        handleOpenPrivacyPolicy(); // Open the privacy policy popup
    };

    return (
        isVisible && (
            <div className="cookie-policy">
                <button className="close-button" onClick={handleClose}>X</button>
                <div className="cookie-text">
                    <p>
                        We use cookies to analyze traffic and deliver personalized content. Click “Accept and Continue” to allow all cookies.
                        Click "Customize cookies" to allow certain categories of cookies. Click the “X” to only allow cookies vital to the website running.
                        Update your cookie settings from our <a href="#" onClick={handleOpenPolicy}>Cookie Policy</a>.
                    </p>
                    <div className="cookie-buttons">
                        <button onClick={handleAccept} className="accept-button">Accept and continue</button>
                        <button onClick={handleCustomizeCookies} className="settings-button">Customize cookies</button> {/* This triggers handleCustomizeCookies */}
                    </div>
                </div>
            </div>
        )
    );
}

export default CookiePolicy;
