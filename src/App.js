import React, { useState } from 'react';
import './App.css';
import CookiePolicy from './CookiePolicy';
import CustomizeCookiesPopup from './CustomizeCookiesPopup';
import PrivacyPolicyPopup from './PrivacyPolicyPopup';
import PrivacyPolicyPDF from './PrivacyPolicyPDF';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [showCustomizePopup, setShowCustomizePopup] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showPDFPopup, setShowPDFPopup] = useState(false); // State for PDF popup

  const handleSettings = () => {
    setShowCookieBanner(false);
    setShowCustomizePopup(true);
  };

  const handleClosePopup = () => {
    setShowCustomizePopup(false);
    setShowPrivacyPopup(false);
    setShowPDFPopup(false); // Close PDF popup
  };

  const handleAdjustCookies = () => {
    setShowPrivacyPopup(false);
    setShowCustomizePopup(true);
  };

  const openPrivacyPolicyPDF = () => {
    setShowCookieBanner(false); // Close the cookie banner
    setShowPDFPopup(true); // Open the PDF popup
  };

  return (
    <div className="App">
      <div className="background-container">
        {showCookieBanner && (
          <CookiePolicy
            handleSettings={handleSettings}
            handleOpenPrivacyPolicy={openPrivacyPolicyPDF} // Updated here
          />
        )}
        {showPrivacyPopup && (
          <PrivacyPolicyPopup onClose={handleClosePopup} onAdjustCookies={handleAdjustCookies} />
        )}
        {showCustomizePopup && (
          <CustomizeCookiesPopup
            onClose={handleClosePopup}
            handleOpenPrivacyPolicy={openPrivacyPolicyPDF} // Updated here
          />
        )}
        {showPDFPopup && (
          <PrivacyPolicyPDF onClose={handleClosePopup} />
        )}
        <div className="navbar">
          <button className="privacy-button" onClick={openPrivacyPolicyPDF}>
            Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
