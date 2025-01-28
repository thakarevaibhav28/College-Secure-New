
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicepackage1 from "../../../assets/Images/servicepackage1.png";
import servicepackage2 from "../../../assets/Images/servicepackage2.png";
import servicepackage3 from "../../../assets/Images/servicepackage3.png";
import './servicePackage.css';

const Category = () => {
  const CustomPrevArrow = (props:any) => (
    <Box {...props} className="arrow-button prev-arrow">
      <ArrowBackIcon />
    </Box>
  );

  const CustomNextArrow = (props:any) => (
    <Box {...props} className="arrow-button next-arrow">
      <ArrowForwardRoundedIcon />
    </Box>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on 768px
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576, // Below 768px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1
        }
      }
    ]
  };
  

  const renderCard = (image:any) => (
    <Card className="card">
      <CardContent sx={{ padding: 0 }}>
        <CardMedia
          component="img"
          image={image}
          alt="Service Package"
          className="card-media"
        />
        <Box className="card-title">
          <Typography>Preparation</Typography>
        </Box>
        <Box className="card-description">
          <Typography variant="body2">
            Ischaemia impacts TNT-mediated communication between cardiac cells
          </Typography>
        </Box>
        <Box className="card-link">
          <Typography>Know More...</Typography>
        </Box>
      </CardContent>
    </Card>
  );

  const images = [servicepackage1, servicepackage2, servicepackage3];

  return (
    <Box className="category-container">
      <Box sx={{ flexGrow: 1, mb: 5 }}>
        <Box className="category-title">
          <Typography variant="h5">
            POPULAR SERVICE PACKAGES
          </Typography>
        </Box>

        <Grid container spacing={2} display="flex" mt={5}>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={10} className="slider-container">
            <Box sx={{ position: "relative", width: "100%" }}>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 5,
                    }}
                  >
                    {renderCard(image)}
                  </Box>
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Category;

