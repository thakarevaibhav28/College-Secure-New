import { useState } from 'react'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Banner from "./components/Home/Banner/Banner"
import AboutSection from "./components/Home/AboutUs/AboutUs"
import ServicesSection from "./components/Home/HServices/Hservices"
import Testimonials from "./components/Home/Testimonial/Testimonial"
import WhyChooseUs from "./components/why"
import ServiceSlider from "./components/Home/servicePackage/servicePackage"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Header /> */}
     <Banner />
     <ServicesSection />

     <AboutSection />
     <ServiceSlider />
     <Testimonials/>
     {/* <Footer /> */}

    </>
  )
}

export default App
