import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Suspense } from "react";
import Spinner from "./components/Spinner";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <main className="app-page">
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

