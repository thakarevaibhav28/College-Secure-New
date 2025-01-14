import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import "./Packages.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import card1 from "../../assets/packages_img/card1.svg";
import card2 from "../../assets/packages_img/card2.svg";
import card3 from "../../assets/packages_img/card3.svg";
import card4 from "../../assets/packages_img/card4.svg";
import card5 from "../../assets/packages_img/5.svg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Packages = () => {
  return (
    <>
    <Header/>
      <Box sx={{ width: "100%", height: 200, bgcolor: "#08879F", mb: 5 }}></Box>
      <Box className="package-section" mb={5}>
        <Container maxWidth="lg" className="container">
          <Typography variant="h4" className="package-heading">
            Packages
          </Typography>

          <Box component="div" className="#" sx={{ borderRadius: 1 }} mt={5}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    maxWidth: { xs: 360, md: 335 },
                    borderRadius: 4,
                    margin: "0 auto",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image={card1}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="card-heading"
                      >
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
                        <Button
                          variant="text"
                          className="readmore"
                          endIcon={<ArrowRightAltIcon />}
                        >
                          Know More
                        </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    maxWidth: { xs: 360, md: 335 },
                    borderRadius: 4,
                    margin: "0 auto",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image={card2}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="card-heading"
                      >
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
                        <Button
                          variant="text"
                          className="readmore"
                          endIcon={<ArrowRightAltIcon />}
                        >
                          Know More
                        </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    maxWidth: { xs: 360, md: 335 },
                    borderRadius: 4,
                    margin: "0 auto",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image={card1}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="card-heading"
                      >
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
                        <Button
                          variant="text"
                          className="readmore"
                          endIcon={<ArrowRightAltIcon />}
                        >
                          Know More
                        </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    maxWidth: { xs: 360, md: 335 },
                    borderRadius: 4,
                    margin: "0 auto",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image={card2}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="card-heading"
                      >
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
                        <Button
                          variant="text"
                          className="readmore"
                          endIcon={<ArrowRightAltIcon />}
                        >
                          Know More
                        </Button>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    maxWidth: { xs: 360, md: 335 },
                    borderRadius: 4,
                    margin: "0 auto",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="180"
                      image={card1}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="card-heading"
                      >
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
                        <Button
                          variant="text"
                          className="readmore"
                          endIcon={<ArrowRightAltIcon />}
                        >
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

export default Packages;
