import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Meta Pixel Page View
    if (window.fbq) {
      window.fbq("track", "PageView");
    }

    // GA4 Page View
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return null;
};

export default AnalyticsTracker;
