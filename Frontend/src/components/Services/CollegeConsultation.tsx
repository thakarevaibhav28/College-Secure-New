import {useState,useEffect} from "react"
import {
    Box,
    Container,
    Typography,
    Grid2 as Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Button,
  } from "@mui/material";
  import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";

import aboutimg from "../../assets/Images/aboutimage.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Category from "../Home/servicePackage/servicePackage"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import CollegeSlider from "../Common/CollegeSlider"
import Testimonials from "../Home/Testimonial/Testimonial"
import FAQ from "../FAQ/Faq"
import "./Service.css";


export default function CollegeConsultation(){
    return(

        <>
        <Header />
        <Category />

        <Box className="about-section">
      <Grid container spacing={6} alignItems="center">
        <Grid size={{xs:12,md:6}}>
          <Box
            component="img"
            src={aboutimg}
            alt="Graduation celebration"
            className="about-image"
          />
        </Grid>
        <Grid size={{xs:12,md:6}}>
          <Box className="about-content">
            <Typography variant="h5" component="h2">
              Customize Package
            </Typography>
            <Typography variant="body1">
              We Are No Longer Just A Service Provider, We Have Become A Mentor.
            </Typography>
            <Typography variant="body1">
              We Will Help You Navigate The Ever-Changing Landscape Of College Application Process And Ensure That You Join Your Dream College.
            </Typography>
            <Button
              variant="text"
              startIcon={<span>→</span>}
              className="know-more-button"
            >
              Know More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
        <CollegeSlider />
        <Testimonials />
        <FAQ />
        
    

      <Box className="service-section">
        <Container maxWidth="lg" className="container">
          <Typography variant="h4" className="service-heading" sx={{fontFamily:"Playfair Display",textAlign:"left"}}>
            Explore Services
          </Typography>
          <Box component="div" className="#" sx={{ borderRadius:1}} mt={5}>
            <Grid container spacing={3} sx={{justifyContent:"center"}}>
              <Grid size={{xs:12, sm:6, md:4}}>
                <Card sx={{ maxWidth:{xs:360, md:335},margin:'0 auto' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image={card1}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" className="card-heading">
                         Lorem Ipsum
                      </Typography>
                      <Typography
                        variant="body2"
                        className="card-txt"
                        sx={{ color: "#101828" }}
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <Box className="readmoreBtn">
                      <Button variant="text" className="readmore"  endIcon={<ArrowRightAltIcon />}>
                      Know More
                      </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{xs:12, sm:6, md:4}}>
              <Card sx={{ maxWidth:{xs:360, md:335},margin:'0 auto' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image={card2}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" className="card-heading">
                         Lorem Ipsum
                      </Typography>
                      <Typography
                        variant="body2"
                        className="card-txt"
                        sx={{ color: "#101828" }}
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <Box className="readmoreBtn">
                      <Button variant="text" className="readmore"  endIcon={<ArrowRightAltIcon />}>
                      Know More
                      </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{xs:12, sm:6, md:4}}>
              <Card sx={{ maxWidth:{xs:360, md:335},margin:'0 auto' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image={card3}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" className="card-heading">
                         Lorem Ipsum
                      </Typography>
                      <Typography
                        variant="body2"
                        className="card-txt"
                        sx={{ color: "#101828" }}
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <Box className="readmoreBtn">
                      <Button variant="text" className="readmore"  endIcon={<ArrowRightAltIcon />}>
                      Know More
                      </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            
        
            </Grid>
          </Box>
        </Container>
      </Box>
        <Footer />
        </>
    )
}