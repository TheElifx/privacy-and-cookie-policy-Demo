import React, { useEffect } from 'react';
import pdfFile from './assets/Privacy Notice_UBI.pdf'; // Adjust the path as necessary
import './PrivacyPolicyPDF.css'; // CSS for styling

const PrivacyPolicyPDF = ({ onClose }) => {

    // Apply and remove the body class to prevent background scrolling
    useEffect(() => {
        // Add the class when the component is mounted (popup open)
        document.body.classList.add('pdf-open');

        // Remove the class when the component is unmounted (popup close)
        return () => {
            document.body.classList.remove('pdf-open');
        };
    }, []);

    return (
        <div className="pdf-overlay">
            <div className="pdf-container">
                {/* Top-left heading */}
                <h2 className="pdf-heading">Privacy Policy</h2>

                {/* Font Awesome Close button */}
                <button className="close-button" onClick={onClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>

                {/* PDF Embed */}
                <embed
                    src={pdfFile}
                    type="application/pdf"
                    width="100%"
                    height="500px"
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
