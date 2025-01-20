import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Unregister the service worker
serviceWorker.unregister();
