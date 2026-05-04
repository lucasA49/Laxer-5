import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import Services from "./pages/Services";
import NosMachines from "./pages/NosMachines";
import DecoupeLaserMetal from "./pages/DecoupeLaserMetal";
import DecoupeLaser2D from "./pages/DecoupeLaser2D";
import DecoupeLaser3D from "./pages/DecoupeLaser3D";
import PliageTole from "./pages/PliageTole";
import MentionsLégales from "./pages/MentionsLégales";

import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      { index: true, element: <Home /> },               // "/"
      { path: "accueil", element: <Home /> },           // "/accueil"
      { path: "contact", element: <Contact /> },        // "/contact"
      { path: "entreprise", element: <Company /> },     // "/entreprise"
      { path: "services", element: <Services /> },      // "/services"
      { path: "nosmachines", element: <NosMachines /> },// "/nosmachines"
      { path: "decoupe-laser-metal", element: <DecoupeLaserMetal /> }, // "/decoupe-laser-metal"
      { path: "decoupe-laser-2d", element: <DecoupeLaser2D /> },// "/DecoupeLaser2D"
      { path: "decoupe-laser-3d", element: <DecoupeLaser3D /> },// "/DecoupeLaser3D"
      { path: "pliage-tole", element: <PliageTole /> },// "/PliageTole"
      { path: "mentions-legales", element: <MentionsLégales /> }, // "/mentions-legales"
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
