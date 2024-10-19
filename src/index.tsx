import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './reset.css'; // Import the reset CSS

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter basename="/my-portfolio">
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
