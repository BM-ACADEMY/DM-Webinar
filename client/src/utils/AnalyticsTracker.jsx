import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // META PIXEL PAGE VIEW
    if (window.fbq) {
      window.fbq("track", "PageView");
    }

    // GA4 PAGE VIEW
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return null;
};

export default AnalyticsTracker;
