// import { useState } from 'react'

// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Banner from "./components/Home/Banner/Banner";
// import AboutSection from "./components/Home/AboutUs/AboutUs";
// import ServicesSection from "./components/Home/HServices/Hservices";
// import Testimonials from "./components/Home/Testimonial/Testimonial";
// import WhyChooseUs from "./components/why";
// import ServiceSlider from "./components/servicePackage/servicePackage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Packages from "./components/Package/Packages";
import Services from "./components/Services/Service";
import HomePage from './components/Home/Home';
import AdmissionPartner from "./components/partners/Partner"
import CollegeConsultation from "./components/Services/CollegeConsultation"
function App() {
  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<AdmissionPartner/>} />
          <Route path="/service" element={<CollegeConsultation/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
