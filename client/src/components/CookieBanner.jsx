import { useEffect, useState, useCallback } from "react";
import "../style/CookieBanner.css";

function CookieBanner() {
  const [showPopup, setShowPopup] = useState(false);

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((c) => c.startsWith(`${name}=`));
    return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
  };

  const collectUserData = useCallback(() => {
    const startTime = Date.now();

    setCookie("trafficSource", document.referrer || "Direct", 365);
    setCookie(
      "deviceType",
      window.innerWidth <= 768 ? "Mobile" : "Desktop",
      365
    );
    setCookie("browserType", navigator.userAgent, 365);
    setCookie(
      "screenResolution",
      `${window.screen.width}x${window.screen.height}`,
      365
    );

    const visitedPages = JSON.parse(getCookie("visitedPages") || "[]");
    visitedPages.push(window.location.pathname);
    setCookie("visitedPages", JSON.stringify(visitedPages), 365);

    window.addEventListener("beforeunload", () => {
      const duration = Math.round((Date.now() - startTime) / 1000);
      const visitDurations = JSON.parse(getCookie("visitDurations") || "[]");
      visitDurations.push(duration);
      setCookie("visitDurations", JSON.stringify(visitDurations), 365);
    });
  }, []);

  const handleAccept = () => {
    setCookie("cookiesAccepted", "true", 365);
    setCookie("firstVisit", new Date().toISOString(), 365);
    collectUserData();
    setShowPopup(false);
  };

  const handleDecline = () => {
    setCookie("cookiesAccepted", "false", 365);
    setShowPopup(false);
  };

  useEffect(() => {
    const cookiesAccepted = getCookie("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowPopup(true);
    } else {
      collectUserData();
    }
  }, [collectUserData]);

  return (
    showPopup && (
      <div className="cookie-banner">
        <h1>Nous utilisons des cookies</h1>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience sur notre
          site. En acceptant, vous consentez à l'utilisation de cookies.
        </p>
        <button type="button" onClick={handleAccept}>
          Accepter
        </button>
        <button type="button" onClick={handleDecline}>
          Refuser
        </button>
      </div>
    )
  );
}

export default CookieBanner;
