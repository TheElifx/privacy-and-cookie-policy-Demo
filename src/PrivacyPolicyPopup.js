import React, { useState } from 'react';
import './PrivacyPolicyPopup.css';
import ArrowUp from './assets/Arrow_Up.svg';  // Import the up arrow SVG

function PrivacyPolicyPopup({ onClose, onAdjustCookies }) {
    const [expandedSection, setExpandedSection] = useState(null); // Manage which section is expanded

    // Function to toggle the section
    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section); // If it's already expanded, collapse it
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={onClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <h2>Cookie Policy</h2>
                <p>
                    The website <strong>www.unionbankofindia.co.in</strong> (the “Website”) uses cookies, including third-party cookies. This policy will
                    inform you how the cookies are placed, used on this website and how you can manage them.
                </p>
                <button className="adjust-cookies-button" onClick={onAdjustCookies}>
                    Adjust Cookies
                </button>

                {/* Expandable Section */}
                <div className="expandable-section">
                    {/* FAQ #1 */}
                    <div className="header-container" onClick={() => toggleSection('cookie')}>
                        What is a "cookie"?
                        <img
                            src={ArrowUp}
                            alt={expandedSection === 'cookie' ? 'Collapse' : 'Expand'}
                            className={`arrow-icon ${expandedSection === 'cookie' ? 'rotate' : ''}`}  // Apply rotation class
                        />
                    </div>
                    {expandedSection === 'cookie' && (
                        <div className="expandable-content">
                            <p>Cookies are small text files stored on the hard drive by your web browser when you use websites.</p>
                            <p>The cookie is installed after a request is issued by a web server to a browser (e.g., Internet Explorer, Firefox, Chrome) and is completely "passive" (does not contain software, viruses, or spyware, and cannot access information stored on the user’s hard drive). The cookies enable a website to recognize a browser.</p>
                            <p>A cookie consists of two components: the name and the content or the value of the cookie.</p>
                            <p>The cookie itself does not in most cases identify you.</p>
                        </div>
                    )}

                    {/* FAQ #2 */}
                    <div className="header-container" onClick={() => toggleSection('lifecycle')}>
                        What is the lifecycle of a cookie?
                        <img
                            src={ArrowUp}
                            alt={expandedSection === 'lifecycle' ? 'Collapse' : 'Expand'}
                            className={`arrow-icon ${expandedSection === 'lifecycle' ? 'rotate' : ''}`}  // Apply rotation class
                        />
                    </div>
                    {expandedSection === 'lifecycle' && (
                        <div className="expandable-content">
                            <p>Cookies are administered by web servers. The lifecycle of a cookie is limited. It can be removed manually when you delete it or it expires. From a technical perspective, only the web server sending the cookie may access it again when you return to the website associated with the web server.</p>
                            <p>The lifecycle of a cookie may vary significantly, depending on the purpose for which it was placed. As mentioned above, certain cookies are exclusively used during a single session (“session cookies”) and are not remembered after you leave the website. They are temporarily stored in the cookie folder of the web browser which remembers you until you exit the respective website or you close the browser window. Other cookies are remembered and reused each time you return to the respective website (“persistent cookies”).</p>
                            <p>Nevertheless, cookies may be deleted by you at any moment by accessing the browser settings.</p>
                        </div>
                    )}

                    {/* FAQ #3 */}
                    <div className="header-container" onClick={() => toggleSection('use')}>
                        What cookies do we use?
                        <img
                            src={ArrowUp}
                            alt={expandedSection === 'use' ? 'Collapse' : 'Expand'}
                            className={`arrow-icon ${expandedSection === 'use' ? 'rotate' : ''}`}  // Apply rotation class
                        />
                    </div>
                    {expandedSection === 'use' && (
                        <div className="expandable-content">
                            <p><strong>We use session cookies and persistent cookies. Depending on the purposes for which they are used, cookies can be:</strong></p>
                            <p><strong>Essential</strong> – used to efficiently and quickly load the pages and offer features by distributing the workload across several computers, to authenticate you and to ensure your secure connection and prevent fraudulent use of your account or detect other malicious activity on the website.</p>
                            <p><strong>Functionality cookies</strong> – these cookies are used in order to enhance your user experience and to remember your preferences such as your language preference and cookies which are necessary for the playback of media content or which can autofill a form for you.</p>
                            <p><strong>Analytical/Performance</strong> – used by us to count the number of users on our website, to recognize you when you visit the website again and to help us improve your experience on our website depending on how it is used. These cookies also help us understand how our services are doing and improve them by developing new features.</p>
                            <p><strong>Targeting and advertising</strong> – these cookies are used to record your behavior online and can be used to provide you with offers and services you might be interested in.</p>
                        </div>
                    )}

                    {/* FAQ #4 */}
                    <div className="header-container" onClick={() => toggleSection('thirdParty')}>
                        What are third party cookies?
                        <img
                            src={ArrowUp}
                            alt={expandedSection === 'thirdParty' ? 'Collapse' : 'Expand'}
                            className={`arrow-icon ${expandedSection === 'thirdParty' ? 'rotate' : ''}`}  // Apply rotation class
                        />
                    </div>
                    {expandedSection === 'thirdParty' && (
                        <div className="expandable-content">
                            <p>Depending on the website or domain placing the cookie, a cookie is ‘first’ or ‘third’ party. A first-party cookie is set by a website visited by you directly. Third-party cookies are set by third parties' domains or websites which can place cookies through the website you visit, hence their name “third-party cookies”.</p>
                            <p>We use Youtube and Google maps to display videos and directions to our locations.</p>
                        </div>
                    )}

                    {/* FAQ #5 */}
                    <div className="header-container" onClick={() => toggleSection('thirdPartyUse')}>
                        What third party cookies do we use?
                        <img
                            src={ArrowUp}
                            alt={expandedSection === 'thirdPartyUse' ? 'Collapse' : 'Expand'}
                            className={`arrow-icon ${expandedSection === 'thirdPartyUse' ? 'rotate' : ''}`}  // Apply rotation class
                        />
                    </div>
                    {expandedSection === 'thirdPartyUse' && (
                        <div className="expandable-content">
                            <p>The Website uses social media plug-ins such as Facebook, LinkedIn, or Twitter to allow you to register and login to your account or otherwise link content to your social media account and to personalize your advertising.</p>
                        </div>
                    )}

                    {/* FAQ #6 */}
                    <div className="header-container" onClick={() => toggleSection('logFiles')}>
                        The use of log files and web beacons
                        <img
                            src={ArrowUp}
                            alt={expandedSection === 'logFiles' ? 'Collapse' : 'Expand'}
                            className={`arrow-icon ${expandedSection === 'logFiles' ? 'rotate' : ''}`}  // Apply rotation class
                        />
                    </div>
                    {expandedSection === 'logFiles' && (
                        <div className="expandable-content">
                            <p><strong>Web beacon</strong> is a technique used on web pages or emails to show that a user has accessed content, such as opened an e-mail or accessed a link. We gather some information automatically and store it in log files. This is mostly anonymous usage data such as browser, internet service provider, clickstream data, operating system, or timestamp.</p>
                        </div>
                    )}

                    {/* FAQ #7 */}
                    <div className="header-container" onClick={() => toggleSection('personalize')}>
                        Personalize browser settings for cookies
                        <img
                            src={ArrowUp}
                            alt={expandedSection === 'personalize' ? 'Collapse' : 'Expand'}
                            className={`arrow-icon ${expandedSection === 'personalize' ? 'rotate' : ''}`}  // Apply rotation class
                        />
                    </div>
                    {expandedSection === 'personalize' && (
                        <div className="expandable-content">
                            <p>If you are not bothered by the use of cookies and you are the only person using the computer, you may set longer expiration periods for the storage of the browsing history.</p>
                        </div>
                    )}

                    {/* FAQ #8 */}
                    <div className="header-container" onClick={() => toggleSection('stopCookies')}>
                        How can I stop cookies?
                        <img
                            src={ArrowUp}
                            alt={expandedSection === 'stopCookies' ? 'Collapse' : 'Expand'}
                            className={`arrow-icon ${expandedSection === 'stopCookies' ? 'rotate' : ''}`}  // Apply rotation class
                        />
                    </div>
                    {expandedSection === 'stopCookies' && (
                        <div className="expandable-content">
                            <p>You may withdraw your consent for the use of cookies or change the cookie settings for this website at any time by clicking on the "View cookie settings" button or by configuring your browser settings.</p>
                            <ul>
                                <li>Cookie settings in <a href="https://www.allaboutcookies.org/manage-cookies/internet-explorer3.html" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                                <li>Cookie settings in <a href="https://www.allaboutcookies.org/manage-cookies/firefox2-plus.html" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                                <li>Cookie settings in <a href="https://www.allaboutcookies.org/manage-cookies/google-chrome.html" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                                <li>Cookie settings in <a href="https://www.allaboutcookies.org/manage-cookies/safari.html" target="_blank" rel="noopener noreferrer">Safari</a></li>
                            </ul>
                            <p>This policy may change from time to time, so if we make any material changes, we will post a notice on our website. You can find more information on cookies by accessing www.allaboutcookies.org.</p>
                        </div>
                    )}
                </div>

                <button className="close-button-bottom" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default PrivacyPolicyPopup;
