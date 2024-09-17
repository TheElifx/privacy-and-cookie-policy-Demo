import React, { useState } from 'react';
import './App.css';
import CookiePolicy from './CookiePolicy';
import CustomizeCookiesPopup from './CustomizeCookiesPopup';
import PrivacyPolicyPopup from './PrivacyPolicyPopup';

function App() {
  const [showCustomizePopup, setShowCustomizePopup] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);

  const handleSettings = () => {
    setShowCookieBanner(false);
    setShowCustomizePopup(true);
  };

  const handleClosePopup = () => {
    setShowCustomizePopup(false);
    setShowPrivacyPopup(false);
  };

  const handleAdjustCookies = () => {
    setShowPrivacyPopup(false);
    setShowCustomizePopup(true);
  };

  const openPrivacyPolicy = () => {
    setShowPrivacyPopup(true); // Show the privacy policy popup
  };

  const handleOpenPrivacyPolicy = () => {
    setShowCookieBanner(false); // Close the cookie banner
    setShowPrivacyPopup(true); // Open the privacy policy popup
  };

  return (
    <div className="App">
      <div className="background-container">
        {showCookieBanner && (
          <CookiePolicy
            handleSettings={handleSettings}
            handleOpenPrivacyPolicy={handleOpenPrivacyPolicy} // Updated here
          />
        )}
        {showPrivacyPopup && (
          <PrivacyPolicyPopup onClose={handleClosePopup} onAdjustCookies={handleAdjustCookies} />
        )}
        {showCustomizePopup && (
          <CustomizeCookiesPopup
            onClose={handleClosePopup}
            handleOpenPrivacyPolicy={handleOpenPrivacyPolicy} // Updated here
          />
        )}
        <div className="navbar">
          <button className="privacy-button" onClick={openPrivacyPolicy}>
            Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
