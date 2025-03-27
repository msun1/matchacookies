import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';  // Optional, if you're using styles
import App from './App';  // Make sure the App component is correctly imported

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
