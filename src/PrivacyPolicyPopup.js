import React from 'react';
import './PrivacyPolicyPopup.css';

function PrivacyPolicyPopup({ onClose, onAdjustCookies }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Cookie Policy</h2>
        <p>
          The website <strong>www.sbibank.com</strong> (the “Website”) uses cookies, including third-party cookies. This policy will
          inform you how the cookies are placed, used on this website and how you can manage them.
        </p>
        <p>
          We use cookies in order to provide you with an enhanced browsing experience and services better adapted to your particular
          needs and interests. Some of the cookies are necessary in order for you to log in, store your preferences and for the proper
          display of our web pages.
        </p>
        <p>
          Other cookies offer valuable feedback on how the Website is used, enabling us to increase its efficiency and accessibility.
        </p>
        <button className="adjust-cookies-button" onClick={onAdjustCookies}>
          Adjust Cookies
        </button>
      </div>
    </div>
  );
}

export default PrivacyPolicyPopup;
