export const loadGA = () => {
  if (window.gtag) return; // prevent duplicate load

  // Load GA script
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-102MXGE3GQ";
  document.head.appendChild(script);

  // Init GA
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", "G-102MXGE3GQ", {
    page_path: window.location.pathname,
  });
};
