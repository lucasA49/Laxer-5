import "./App.css";
import Header from "./components/Header";
import Bodyhome from "./components/Bodyhome";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <>
      <CookieBanner />
      <Header />
      <Bodyhome />
      <Footer />
    </>
  );
}

export default App;
