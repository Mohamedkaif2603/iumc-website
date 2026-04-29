import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutSection from "./components/AboutSection";
import Trademark from "./pages/Trademark";
import ServicePage from "./pages/ServicePage";
import WhatsApp from "./components/WhatsApp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/trademark" element={<Trademark />} />
        <Route path="/service/:service" element={<ServicePage />} />
      </Routes>

      {/* 🔥 WhatsApp button */}
      <WhatsApp />
    </>
  );
}

export default App;