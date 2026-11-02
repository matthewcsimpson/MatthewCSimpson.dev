declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const loadGtagScript = (measurementId: string) => {
  if (typeof document === "undefined") {
    return;
  }

  if (document.querySelector(`script[src*="${measurementId}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
};

export const initAnalytics = () => {
  if (!import.meta.env.PROD) {
    return;
  }

  if (typeof window === "undefined") {
    return;
  }

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId || window.gtag) {
    return;
  }

  loadGtagScript(measurementId);

  window.dataLayer = window.dataLayer || [];
  // gtag.js only processes `arguments` objects pushed to dataLayer; plain
  // arrays (e.g. from rest params) are silently ignored.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);
};

export {};
