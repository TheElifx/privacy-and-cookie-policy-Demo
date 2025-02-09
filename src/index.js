import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the favicon from the src folder
import sbiLogo from './assets/UNIONBANK.NS.png'; // Adjust path if needed

// Change the page title
document.title = "UNION";

// Function to change the favicon dynamically
const setFavicon = (iconUrl) => {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = iconUrl;

  // Remove existing favicons if they exist
  const oldLink = document.querySelector("link[rel*='icon']");
  if (oldLink) {
    document.head.removeChild(oldLink);
  }

  // Append the new favicon
  document.head.appendChild(link);
};

// Set the favicon using the imported image
setFavicon(sbiLogo);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
