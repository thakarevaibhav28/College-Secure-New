import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Home/Banner/Banner";
import AboutSection from "./components/Home/AboutUs/AboutUs";
import ServicesSection from "./components/Home/HServices/Hservices";
import Testimonials from "./components/Home/Testimonial/Testimonial";
import WhyChooseUs from "./components/why";
import ServiceSlider from "./components/servicePackage/servicePackage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Packages from "./components/Package/Packages";
import Services from "./components/Service/Service";


function App() {
  return (
    <>
      {/* <Header />
     <Banner />
     <ServicesSection />

     <AboutSection />
     <ServiceSlider />
     <Testimonials/>
     <Footer /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
