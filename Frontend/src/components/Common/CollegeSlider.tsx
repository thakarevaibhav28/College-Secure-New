import {
    Box,
   
  } from "@mui/material";
  
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
  

  const logos = [
    { img: logo1 },
    { img: logo2 },
    { img: logo3 },
    { img: logo4 },
    { img: logo5 },
    { img: logo6 },
    { img: logo7 },
  ];
  
  const CollegeSlider = () => {
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
          
  
      
      </>
    );
  };
  
  export default CollegeSlider;
  