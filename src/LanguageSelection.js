import React from 'react';
import './LanguageSelection.css'; // Create a separate CSS file for styling

const languages = [
    'English',
    'Hindi',
    'Assamese',
    'Bengali',
    'Gujarati',
    'Kannada',
    'Kashmiri',
    'Konkani',
    'Malayalam',
    'Manipuri',
    'Marathi',
    'Nepali',
    'Oriya',
    'Punjabi',
    'Sanskrit',
    'Sindhi',
    'Tamil',
    'Telugu',
    'Urdu',
    'Bodo',
    'Santhali',
    'Maithili',
    'Dogri'
];

function LanguageSelection({ onClose, openPrivacyPolicyPDF, openPrivacyPolicyPDFHindi }) {
    const handleLanguageClick = (language) => {
        console.log(`Language clicked: ${language}`);
        if (language === 'English') {
            console.log('English selected, opening Privacy Policy PDF for English');
            openPrivacyPolicyPDF(); // Open PDF if English is clicked
        } else if (language === 'Hindi') {
            console.log('Hindi selected, opening Privacy Policy PDF for Hindi');
            openPrivacyPolicyPDFHindi(); // Open PDF if Hindi is clicked
        } else {
            console.log(`${language} selected, just closing the popup`);
            onClose(); // Close popup for other languages
        }
    };

    return (
        <div className="pdf-overlay">
            <div className="pdf-container">
                <h2 className="pdf-heading">Select a Language</h2>
                <button className="close-button" onClick={onClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <div className="language-grid">
                    {languages.map((language, index) => (
                        <button
                            key={index}
                            className="language-button"
                            onClick={() => handleLanguageClick(language)} // Handle click on each language
                        >
                            {language}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LanguageSelection;
