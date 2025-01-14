import {
  Box,
  Container,
  Typography,
  // Grid2 as Grid,
} from "@mui/material";
import "./About.css";
import collegeImg from "../../assets/about_img/college-Img.svg";
import collegeGirl from "../../assets/about_img/College-girl.svg";
import logo1 from "../../assets/about_img/logo-1.svg";
import logo2 from "../../assets/about_img/logo-2.svg";
import logo3 from "../../assets/about_img/logo-3.svg";
import logo4 from "../../assets/about_img/logo-4.svg";
import logo5 from "../../assets/about_img/logo-5.svg";
import logo6 from "../../assets/about_img/logo-6.svg";
import logo7 from "../../assets/about_img/logo-7.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import OurTeam from "./OurTeam/OurTeam";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const logos = [
  { img: logo1 },
  { img: logo2 },
  { img: logo3 },
  { img: logo4 },
  { img: logo5 },
  { img: logo6 },
  { img: logo7 },
];

const About = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px", // Ensure no padding to avoid misalignment
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px", // Keep centerPadding consistent
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mb: 10 }}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <img
              src={collegeImg}
              alt="College Building"
              style={{ width: "100%", height: "auto", borderRadius: 1 }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" mb={3} mt={5} className="about-txt">
              ABOUT US
            </Typography>
            <Typography variant="h5" mb={3} className="college-txt">
              SECURE COLLEGE ADMISSION
            </Typography>
            <Typography variant="body2" mb={3} className="college-para">
              We work with students and parents through the college admission
              process. Our primary goal is to provide in-depth and customized
              information required for the whole process.
            </Typography>
            <Typography variant="body2" mb={3} className="college-para">
              We highlight student's strengths while addressing their weaknesses
              to achieve academic excellence and guide them on how to handle
              high school stress.
            </Typography>
            <Typography variant="body2" mb={3} className="college-para">
              The College Admission Process is a Four Year Marathon and We Help
              Students Reach the Finish Line by Providing Knowledge, Guidance
              and Support.
            </Typography>
            <Typography variant="body2" className="college-para">
              Our mission is to simplify the college admissions process for
              students and parents in the U.S. We provide easy access to
              top-quality admissions experts and resources.
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box
        component="div"
        className="about-cont"
        sx={{ minHeight: { xs: 450, md: "400" }, overflow: "hidden" }}
      >
        <Box
          component="img"
          src={collegeGirl}
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            display: { xs: "none", md: "block" },
          }}
        />
        <Box
          component="div"
          className="top-about"
          mb={2}
          sx={{ overflow: "hidden" }}
        >
          <Container maxWidth="lg">
            <Typography variant="h4" gutterBottom className="choose-txt">
              Why Choose Us
            </Typography>
            <Typography variant="body2" gutterBottom className="choose-para">
              We’ve helped students get into their dream school. Be the next.
            </Typography>
          </Container>
        </Box>
        <Box component="div" className="bottom-about">
          <Container sx={{ width: "100%", height: "100%" }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                pl: { xs: 0, md: 5 },
              }}
            >
              <Box sx={{ maxWidth: "530px" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  className="chooseUs-heading"
                >
                  Improve Your Chance of Admission Success
                </Typography>
                <Typography variant="body2" className="chooseUs-txt">
                  Students who use SCA have a 95% acceptance rate.
                </Typography>
              </Box>

              <Box sx={{ maxWidth: "530px" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  className="chooseUs-heading"
                >
                  More Opportunity at Less Cost
                </Typography>
                <Typography variant="body2" className="chooseUs-txt">
                  You’ll spend half the time and money to get an offer.
                </Typography>
              </Box>

              <Box sx={{ maxWidth: "530px" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  className="chooseUs-heading"
                >
                  Hourly Consultation
                </Typography>
                <Typography variant="body2" className="chooseUs-txt">
                  If you do not want to sign up for packages but would like to
                  get the periodic guidance from the expert then schedule hourly
                  consultation or buy block hours.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

     <Box component="div" className="Top-college-section" mt={10} mb={15}>
        <Container sx={{ mb:6 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" gutterBottom className="top-college">
              Placements in Top Colleges of U.S.
            </Typography>
            <Typography variant="body1" className="top-college-para">
              Our Students got placed in top colleges in U.S.
            </Typography>
          </Box>
        </Container>

{/* College Slider */}
        <Box
          sx={{ 
            width: "95%",
            margin: "0 auto",
            overflow: "hidden",
            pl: { xs: 2, md: 6 },
          }}
        >
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  marginLeft: { xs: "10px", sm: "15px", md: "8px" },
                  marginRight: 0,
                }}
              >
                <Box
                  component="img"
                  src={logo.img}
                  alt="#"
                  width={{ xs: 60, sm: 80, md: "auto" }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box> 

      <Box sx={{ mb: 6, mt:6 }}>
        <OurTeam />
      </Box>

      <Footer/>
    </>
  );
};

export default About;
