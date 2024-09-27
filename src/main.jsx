import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initialize as initializeGA, sendPageview } from 'react-ga4';
import TagManager from 'react-gtm-module';

// GA4 Measurement ID ile Google Analytics'i başlat
initializeGA('G-M7HQ0KT3WR'); // Google Analytics Measurement ID'nizi buraya ekleyin

// GTM Kapsayıcısını başlat
const tagManagerArgs = {
  gtmId: 'GTM-M7HQ0KT3WR' // Google Tag Manager ID'nizi buraya ekleyin
};
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Sayfa yüklendiğinde pageview olayını gönder
sendPageview();
