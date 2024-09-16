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
    setShowCustomizePopup(true); // Open the customize cookies popup when clicking "Adjust Cookies"
  };

  const openPrivacyPolicy = () => {
    setShowPrivacyPopup(true); // Show the privacy policy popup
  };

  return (
    <div className="App">
      <div className="background-container">
        {showCookieBanner && <CookiePolicy handleSettings={handleSettings} />}
        {showPrivacyPopup && (
          <PrivacyPolicyPopup onClose={handleClosePopup} onAdjustCookies={handleAdjustCookies} />
        )}
        {showCustomizePopup && <CustomizeCookiesPopup onClose={handleClosePopup} />}
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
