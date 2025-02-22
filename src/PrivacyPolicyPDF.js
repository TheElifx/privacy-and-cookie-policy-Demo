import React, { useEffect } from 'react';
import pdfFile from './assets/Privacy Notice_BOI.pdf'; // Adjust path as needed
import './PrivacyPolicyPDF.css';

const PrivacyPolicyPDF = ({ onClose }) => {
    
    // Prevent scrolling when popup is open
    useEffect(() => {
        document.body.classList.add('pdf-open');
        return () => {
            document.body.classList.remove('pdf-open');
        };
    }, []);

    // Function to open PDF in a new tab
    const openFullScreen = () => {
        window.open(pdfFile, '_blank');
    };

    return (
        <div className="pdf-overlay">
            <div className="pdf-container">
                
                {/* Top bar for controls */}
                <div className="pdf-top-bar">
                    
                    {/* Full-screen button on the left */}
                    <button className="fullscreen-button" onClick={openFullScreen}>
                        <i className="fa fa-expand" aria-hidden="true"></i> Full Screen
                    </button>

                    {/* Centered title */}
                    <h2 className="pdf-heading">Privacy Policy</h2>

                    {/* Close button on the right */}
                    <button className="close-button" onClick={onClose}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>

                {/* PDF Embed Viewer */}
                <embed
                    src={pdfFile}
                    type="application/pdf"
                    className="pdf-viewer"
                />

                {/* Bottom close button */}
                <button className="bottom-close-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default PrivacyPolicyPDF;
