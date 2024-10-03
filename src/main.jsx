import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ReactGA from 'react-ga4'; 
import TagManager from 'react-gtm-module';
import { Provider } from 'react-redux';
import { store } from './store';

// Google Analytics'i başlatıyoruz (GA4 Measurement ID'nizi buraya ekleyin)
ReactGA.initialize("G-M7HQ0KT3WR");

// // GTM Kapsayıcısını başlat
const tagManagerArgs = {
  gtmId: 'GTM-W2Q5J8PL', // Google Tag Manager ID'nizi buraya ekleyin
};
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);


