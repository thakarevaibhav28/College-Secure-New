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
import "./Service.css";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import doubleComma from "../../assets/double-inverted.svg"
import doubleComma1 from "../../assets/double-inverted1.svg"

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const service = () => {
  return (
    <>
    <Header/>
      <Box className="service-bg" mb={8}>
        <Container maxWidth="lg" className="container service-container">
          <Box component="div" className="service-box" sx={{ borderRadius: 1 }}>
            <Box component="img" src={doubleComma1} sx={{position:"absolute", top:10, left:10}}/>
            <Box component="img" src={doubleComma} sx={{position:"absolute", bottom:10, right:10}}/>

            <Typography variant="body2" className="service-txt">
              {" "}
              Our services act as your personalized roadmap to college
              acceptance,certified counselor, and holistic application building.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box className="service-section">
        <Container maxWidth="lg" className="container">
          <Typography variant="h4" className="service-heading">
            Services
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
              <Card sx={{ maxWidth:{xs:370, md:335},margin:'0 auto' }}>
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
        
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer/>
    </>
  );
};

export default service;
