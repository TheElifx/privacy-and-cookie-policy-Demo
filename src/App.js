import React, { useState } from 'react';
import './App.css';
import CookiePolicy from './CookiePolicy';
import CustomizeCookiesPopup from './CustomizeCookiesPopup';

function App() {
  const [showCustomizePopup, setShowCustomizePopup] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true); // to control cookie banner visibility

  const handleSettings = () => {
    setShowCookieBanner(false); // Hide the banner
    setShowCustomizePopup(true); // Show the customize popup
  };

  const handleClosePopup = () => {
    setShowCustomizePopup(false); // Close the customize popup
  };

  return (
    <div className="App">
      <div className="background-container">
        {showCookieBanner && <CookiePolicy handleSettings={handleSettings} />} {/* Pass handleSettings to CookiePolicy */}
        {showCustomizePopup && <CustomizeCookiesPopup onClose={handleClosePopup} />} {/* Show the customize popup */}
      </div>
    </div>
  );
}

export default App;
