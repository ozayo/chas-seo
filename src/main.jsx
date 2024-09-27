import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ReactGA from 'react-ga4'; 
import TagManager from 'react-gtm-module';

// Google Analytics'i başlatıyoruz (GA4 Measurement ID'nizi buraya ekleyin)
ReactGA.initialize("G-M7HQ0KT3WR");

// GTM Kapsayıcısını başlat
const tagManagerArgs = {
  gtmId: 'GTM-M7HQ0KT3WR', // Google Tag Manager ID'nizi buraya ekleyin
};
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Sayfa yüklendiğinde pageview olayını gönderiyoruz
ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: document.title });
