import React, { useState } from 'react';
import './App.css';
import CookiePolicy from './CookiePolicy';
import CustomizeCookiesPopup from './CustomizeCookiesPopup';
import PrivacyPolicyPopup from './PrivacyPolicyPopup';
import PrivacyPolicyPDF from './PrivacyPolicyPDF'; // English PDF
import PrivacyPolicyPDFHindi from './PrivacyPolicyPDFHindi'; // Hindi PDF
import LanguageSelection from './LanguageSelection'; // Language Selection Component
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [showCustomizePopup, setShowCustomizePopup] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);
  const [showPDFPopup, setShowPDFPopup] = useState(false); // English PDF popup
  const [showPDFPopupHindi, setShowPDFPopupHindi] = useState(false); // Hindi PDF popup
  const [showLanguagePopup, setShowLanguagePopup] = useState(false); // Language Selection popup

  // Open Customize Cookie Popup
  const handleSettings = () => {
    setShowCookieBanner(false);
    setShowCustomizePopup(true);
  };

  // Close all popups
  const handleClosePopup = () => {
    setShowCustomizePopup(false);
    setShowPrivacyPopup(false);
    setShowPDFPopup(false);
    setShowPDFPopupHindi(false);
    setShowLanguagePopup(false);
  };

  // Open the Privacy Policy popup instead of the Cookie Policy
  const openPrivacyPolicyPopup = () => {
    setShowCookieBanner(false);
    setShowPrivacyPopup(true);
  };

  // Open the Language Selection Popup (which will let the user open the PDF)
  const openLanguagePopup = () => {
    setShowLanguagePopup(true);
  };

  // Open the English PDF popup
  const openPrivacyPolicyPDF = () => {
    setShowLanguagePopup(false);
    setShowPDFPopup(true);
  };

  // Open the Hindi PDF popup
  const openPrivacyPolicyPDFHindi = () => {
    setShowLanguagePopup(false);
    setShowPDFPopupHindi(true);
  };

  return (
    <div className="App">
      {/* Navbar Section */}
      <header className="custom-top-head">
        <div className="container py-2 mh-40">
          <div id="tablet-top-navbar" className="top-navbar_tablet px-0 d-md-block d-lg-block f-14">
            <div className="row">
              <div className="col-md-12 text-right pl-0">
                <ul className="list-inline customnew-top-nav">
                  <li className="list-inline-item tab-hide hidenformobile d-none d-xl-inline">
                    <a href="#main-content">Skip to Main Content</a>
                  </li>
                  <li className="list-inline-item tab-hide hidenformobile">
                    <a href="/about-us" role="button">About Us</a>
                  </li>
                  <li className="list-inline-item tab-hide hidenformobile">
                    <a href="https://boiweb.bankofindia.co.in/" target="_blank" role="button">BOI Online</a>
                  </li>
                  <li className="list-inline-item tab-hide hidenformobile">
                    <a href="/investor-corner" role="button">Investor Corner</a>
                  </li>
                  <li className="list-inline-item tab-hide hidenformobile">
                    <a href="/forexcard-rate" role="button">Forex Card Rate</a>
                  </li>
                  <li className="list-inline-item tab-hide hidenformobile">
                    <a
                      href="tel:+18001031906"
                      className="contactUs-lg updatecount"
                      data-event="Top-Bar-Contact-Us"
                      data-value="tel:+18001031906"
                    >
                      1800 103 1906
                    </a>
                  </li>
                  {/* Privacy Policy Button */}
                  <li className="list-inline-item tab-hide hidenformobile">
                    <a
                      href="#"
                      role="button"
                      className="privacy-button"
                      onClick={openLanguagePopup}
                    >
                      Privacy Policy
                    </a>
                  </li>
                  {/* Additional navbar items can follow */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Background Container starts below the header */}
      <div className="background-container">
        {showCookieBanner && (
          <CookiePolicy
            handleSettings={handleSettings}
            handleOpenPrivacyPolicy={openPrivacyPolicyPopup}
          />
        )}
        {showPrivacyPopup && (
          <PrivacyPolicyPopup onClose={handleClosePopup} onAdjustCookies={handleSettings} />
        )}
        {showCustomizePopup && (
          <CustomizeCookiesPopup onClose={handleClosePopup} handleOpenPrivacyPolicy={openPrivacyPolicyPopup} />
        )}
        {showPDFPopup && <PrivacyPolicyPDF onClose={handleClosePopup} />}
        {showPDFPopupHindi && <PrivacyPolicyPDFHindi onClose={handleClosePopup} />}
        {showLanguagePopup && (
          <LanguageSelection
            onClose={handleClosePopup}
            openPrivacyPolicyPDF={openPrivacyPolicyPDF}
            openPrivacyPolicyPDFHindi={openPrivacyPolicyPDFHindi}
          />
        )}
      </div>
    </div>
  );
}

export default App;
