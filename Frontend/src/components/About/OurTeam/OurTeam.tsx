import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Evan from "../../../assets/about_img/Evan.svg";
import venkat from "../../../assets/about_img/Venkat.svg";
import Manisha from "../../../assets/about_img/Manisha_Kand.jpg";
import "./OurTeam.css";
const teamMembers = [
  {
    id: 1,
    name: "Venkat",
    role: "Bachelors + MD/MO Coach",
    description:
      "Venkat works with students and parents through the BSMD/BSDO college admission process, for those who commit to medicine in high school. ",
    image: venkat,
  },
  {
    id: 2,
    name: "Evan Harris",
    role: "Partner & Certified College Planning Specialist",
    description:
      "As a partner in the Emerging Wealth Division, Evan works with clients who are motivated to maximize their experiences while maintaining financial success.",
    image: Evan,
  },
  {
    id: 3,
    name: "Manisha Kand",
    role: "Founder & Certified College Counselor",
    description:
      "Manisha Kand is a certified College Admission Consultant working in the bay area for more than 9 years.",
    image: Manisha,
  },
];

const OurTeam = () => {
  // Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow:2.3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "20px",

  responsive: [
    {
      breakpoint: 1366, // Larger devices (iPad Pro in landscape)
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "50px", // Adjust padding for better centering
      },
    },
    {
      breakpoint: 1024, // iPad Pro (portrait)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        // centerPadding: "30px", // Adjust padding for centering
      },
    },
    {
      breakpoint: 600, // Smaller devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      },
    },
  ],
};

  return (
    <Box className="our-team">
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h5" className="top-college" gutterBottom>
          Our Team
        </Typography>
      </Box>

      <Box sx={{ width: "100%", position: "relative", overflow: "hiddden" }}>
        {/* Slider */}
        <Slider {...settings}>
          {teamMembers.map((member) => (
            <Box key={member.id} sx={{ px:2 }}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column",sm:"row", md: "row", xl:"row" },
                  maxWidth: { xs: "100%", sm: "990px" },
                  maxHeight: { xs: "auto" },
                  margin:{xs:"0 auto", md:"10px"},
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img" 
                  image={member.image}
                  alt={member.name}
                  sx={{
                    width: { xs: 200, sm: 200, md: 200 },
                    height: "auto",
                    margin: "0 auto",
                    backgroundPosition:"center",
                    objectFit: "cover",
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      fontFamily: "var(--playfair) ",
                      color: "#000",
                      mb: 2,
                      pb: 1,
                      textAlign:{xs:'center', sm:'left'}

                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{
                      fontSize: "1rem",
                      fontFamily: "var(--main-font) ",
                      color: "#000",
                      mb: 2,
                      textAlign:{xs:'center', sm:'left'}
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      fontFamily: "var(--main-font) ",
                      color: "#000",
                      mb: 2,
                      textAlign:{xs:'center', sm:'left'}
                    }}
                  >
                    {member.description}
                  </Typography>
                  <Typography
                    component="a"
                    href="#"
                    sx={{
                      color: "#EF6907",
                      textAlign:{xs:'center', sm:'left', md:"end"},

                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Read More
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default OurTeam;
