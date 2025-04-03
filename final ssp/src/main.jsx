import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * Initialize the React application
 */
const initializeApp = () => {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Root element not found!");
    return;
  }
  
  const root = createRoot(rootElement);
  
  root.render(<App />);
};

// Start the application
initializeApp();
