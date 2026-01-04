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
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);
};

export {};
