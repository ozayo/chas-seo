import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module';

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    // GA4 için pageview gönderiyoruz
    ReactGA.send({ hitType: "pageview", page: location.pathname, title: document.title });

    // GTM için pageview event'i gönderiyoruz
    TagManager.dataLayer({
      dataLayer: {
        event: 'pageview',
        page: location.pathname,
        title: document.title,
      },
    });
  }, [location]);

  return null;
};

export default TrackPageView;
