/**
 * Application entry point for the SSI Vite + React website.
 * Process: mount the React tree, enable client-side routing, and load global styles.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';

// Mount the application into the root DOM node
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
