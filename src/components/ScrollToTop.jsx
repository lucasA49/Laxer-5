import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Remet la page en haut à chaque changement de route
  }, [pathname]);

  return null; // Ce composant n'affiche rien
}