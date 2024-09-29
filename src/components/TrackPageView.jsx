import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    // Sayfa yüklendiğinde pageview olayını gönderiyoruz
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: document.title
    });
  }, [location]);

  return null;
};

export default TrackPageView;
