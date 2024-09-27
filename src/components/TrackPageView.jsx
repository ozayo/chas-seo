import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sendPageview } from 'react-ga4';

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    sendPageview(location.pathname); // Sayfa görüntülenme olayını gönder
  }, [location]);

  return null;
};

export default TrackPageView;
