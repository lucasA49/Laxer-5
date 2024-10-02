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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/accueil",
    element: <Home />,
  },
  {
    path: "/entreprise",
    element: <Company />,
  },
  {
    path: "/mentions-legales",
    element: <MentionsLégales />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/nosmachines",
    element: <NosMachines />,
  },
  {
    path: "/admin",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
