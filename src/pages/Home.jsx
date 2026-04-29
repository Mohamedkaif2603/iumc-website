import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="main-bg">

      <Header />
      <Navbar />
      <Hero />

      <AboutSection />
      <Services />
      <Clients />

      <Footer />

    </div>
  );
}

export default Home;