import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Company from "./pages/Company";
import MentionsLégales from "./pages/MentionsLégales";
import App from "./App";
import Services from "./pages/Services";
import NosMachines from "./pages/NosMachines";
import Spinner from "./components/Spinner";
import ScrollToTop from "./components/ScrollToTop"; // Import du composant

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop /> {/* Ajout ici */}
        <App />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <ScrollToTop />
        <Contact />
      </>
    ),
  },
  {
    path: "/accueil",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/entreprise",
    element: (
      <>
        <ScrollToTop />
        <Company />
      </>
    ),
  },
  {
    path: "/mentions-legales",
    element: (
      <>
        <ScrollToTop />
        <MentionsLégales />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <ScrollToTop />
        <Services />
      </>
    ),
  },
  {
    path: "/nosmachines",
    element: (
      <>
        <ScrollToTop />
        <NosMachines />
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
  },
  {
    path: "/Chargement",
    element: (
      <>
        <ScrollToTop />
        <Spinner />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
