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
import { styled } from "@mui/material/styles";

// Correct imports for your images
import servicepackage1 from "../../assets/Images/servicepackage1.png";
import servicepackage2 from "../../assets/Images/servicepackage2.png";
import servicepackage3 from "../../assets/Images/servicepackage3.png";

const Category = () => {
  const ArrowButton = styled(Box)(({ theme }) => ({
    width: "45px",
    height: "45px",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    cursor: "pointer",
  }));

  const CustomPrevArrow = (props) => (
    <ArrowButton {...props} sx={{ top: 400, left: 500 }}>
      <ArrowBackIcon />
    </ArrowButton>
  );

  const CustomNextArrow = (props) => (
    <ArrowButton {...props} sx={{ top: 400, right: 500 }}>
      <ArrowForwardRoundedIcon />
    </ArrowButton>
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
  };

  const renderCard = (image) => (
    <Card
      sx={{
        maxWidth: 500,
        height: 330,
        backgroundColor: "#fff",
        boxShadow: "0 4px 4px rgba(0,0,0,0.2)",
        borderRadius: 5,
        margin: "0 10px",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <CardMedia
          component="img"
          image={image}
          alt="Service Package"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "180px",
            borderRadius: "5px 5px 0 0",
          }}
        />
        <Box sx={{ pt: "16px", pl: "10px", fontWeight: "bold" }}>
          <Typography sx={{ fontWeight: "bold", fontFamily: "Playfair Display" }}>
            Preparation
          </Typography>
        </Box>
        <Box sx={{ padding: "10px" }}>
          <Typography
            variant="p"
            fontFamily="Source sans pro"
            sx={{ fontSize: "16px" }}
          >
            Ischaemia impacts TNT-mediated communication between cardiac cells
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "PlayfairDisplay",
              color: "var(--login-color)",
              textAlign: "right",
              pr: 5,
            }}
          >
            Know More...
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );

  const images = [servicepackage1, servicepackage2, servicepackage3];

  return (
    <Box
      sx={{
        ml: 7,
        mb: 20,
      }}
    >
      <Box sx={{ flexGrow: 1, mb: 5 }}>
        <Box mb="30px" mt="80px" ml="-80px" textAlign="center">
          <Typography
            variant="h5"
            fontWeight="bold"
            fontFamily="Playfair Dispaly"
            color="var(--content-bgcolor)"
          >
            POPULAR SERVICE PACKAGES
          </Typography>
        </Box>

        <Grid container spacing={2} display="flex" mt={5}>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={10} sx={{ mt: "-25px", px: 10 }}>
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
};

export default Category;
