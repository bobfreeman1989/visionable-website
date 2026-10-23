// Client-side helpers for GA4 events and first-touch attribution. Everything
// here is best-effort: analytics must never break the page or the form.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, string> = {}) {
  try {
    window.gtag?.("event", name, params);
  } catch {
    // Analytics failures are not the visitor's problem.
  }
}

export type FirstTouch = {
  landingPage: string;
  referrer: string;
  utm: string;
};

const FIRST_TOUCH_KEY = "vl-first-touch";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

function currentTouch(): FirstTouch {
  const params = new URLSearchParams(window.location.search);
  const utm = UTM_KEYS.filter((key) => params.get(key))
    .map((key) => `${key}=${params.get(key)}`)
    .join("&");
  return {
    landingPage: window.location.pathname,
    referrer: document.referrer,
    utm,
  };
}

/** Records the first page of the session. Later calls leave it untouched. */
export function captureFirstTouch() {
  try {
    if (!sessionStorage.getItem(FIRST_TOUCH_KEY)) {
      sessionStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(currentTouch()));
    }
  } catch {
    // Storage can be blocked (private mode, disabled site data).
  }
}

/** The stored first touch, or the current page when nothing was stored. */
export function getFirstTouch(): FirstTouch {
  try {
    const stored = sessionStorage.getItem(FIRST_TOUCH_KEY);
    if (stored) return JSON.parse(stored) as FirstTouch;
  } catch {
    // Fall through to the current page.
  }
  try {
    return currentTouch();
  } catch {
    return { landingPage: "", referrer: "", utm: "" };
  }
}
