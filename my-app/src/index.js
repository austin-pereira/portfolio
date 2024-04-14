import React from 'react';
import ReactDOM from 'react-dom/client';
import './Cfiles/index.css';
import App from './Jfiles/App';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

