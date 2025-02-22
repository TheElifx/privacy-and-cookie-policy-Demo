import React from 'react';
import './LanguageSelection.css';

const languages = [
    'English', 'Hindi', 'Assamese', 'Bengali',
    'Gujarati', 'Kannada', 'Kashmiri', 'Konkani',
    'Malayalam', 'Manipuri', 'Marathi', 'Nepali',
    'Oriya', 'Punjabi', 'Sanskrit', 'Sindhi',
    'Tamil', 'Telugu', 'Urdu', 'Bodo'
];

const lastLanguages = ['Santhali', 'Maithili', 'Dogri'];

function LanguageSelection({ onClose, openPrivacyPolicyPDF, openPrivacyPolicyPDFHindi }) {
    const handleLanguageClick = (language) => {
        if (language === 'English') {
            openPrivacyPolicyPDF();
        } else if (language === 'Hindi') {
            openPrivacyPolicyPDFHindi();
        } else {
            onClose();
        }
    };

    return (
        <div className="language-selection-overlay">
            <div className="language-selection-container">
                <h2 className="language-selection-heading">Select a Language</h2>
                <button className="close-button" onClick={onClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                
                {/* Main Grid (First 20 languages) */}
                <div className="language-grid">
                    {languages.map((language, index) => (
                        <button
                            key={index}
                            className="language-button"
                            onClick={() => handleLanguageClick(language)}
                        >
                            {index + 1}. {language}
                        </button>
                    ))}
                </div>

                {/* Separate Centered Last Row (Last 3 languages) */}
                <div className="language-last-row">
                    {lastLanguages.map((language, index) => (
                        <button
                            key={index + 20}
                            className="language-button"
                            onClick={() => handleLanguageClick(language)}
                        >
                            {index + 21}. {language}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LanguageSelection;
