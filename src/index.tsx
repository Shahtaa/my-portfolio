// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Use default import
import './index.css'; // Make sure to import your CSS for global styles

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
