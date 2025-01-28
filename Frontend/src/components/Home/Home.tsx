import { useState } from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Banner from "./Banner/Banner"
import AboutSection from "./AboutUs/AboutUs"
import ServicesSection from "./HServices/Hservices"
import Testimonials from "./Testimonial/Testimonial"
import WhyChooseUs from "./components/why"
import ServiceSlider from "./servicePackage/servicePackage"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Banner />
     <ServicesSection />

     <AboutSection />
     <ServiceSlider />
     <Testimonials/>
     <Footer />

    </>
  )
}

export default HomePage
