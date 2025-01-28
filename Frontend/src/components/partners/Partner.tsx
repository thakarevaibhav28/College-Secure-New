"use client";
import {
  Button,
  Grid2 as Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import partners from "../../assets/Images/partners.png"
import veritas from "../../assets/Images/veritas.png";
import college from "../../assets/Icons/collegeicon.svg"
import trending from "../../assets/Icons/trending.svg"
import business from "../../assets/Icons/business.svg"
import trophy from "../../assets/Icons/trophy.svg"
import "./Partner.css";

export default function AdmissionPartner() {
  return (
    <>
    <Header />
      {/* Hero Section */}
      <Container className="container">
        <Box className="heroSection">
          <Box className="heroContent">
            <Typography variant="subtitle1" sx={{fontFamily:"Source Sans Pro" , fontSize:"1.1rem",fontWeight:600,color:"var(--login-color)"}} gutterBottom>
              Become a Secure College Admission Partner
            </Typography>
            <Typography variant="h3" component="h1" className="heroTitle">
              <span style={{fontWeight:600}}>YOUR SUCCESS</span> IS OUR <span className="successText">SUCCESS</span>.
              <br />
              WE&apos;RE HERE TO SEE YOU <span className="growText">GROW</span>.
            </Typography>
            <Typography className="heroSubtitle">
              Secure College Admission is more than a platform. It&apos;s your
              trusted partner to help you do what you do best and help as many
              students as possible, fulfill their education dreams.
            </Typography>
            <Button variant="outlined" color="primary" size="large" sx={{fontFamily:"Playfair Display",fontSize:"1rem",fontWeight:600}}>
              Partner With Us
            </Button>
          </Box>
          <Box>
            <Box
            component="img"
              src={partners}
              alt="College Success"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Container>

      {/* Stats Section */}
      <Box>
        <Grid container className="statsSection">
          <Grid
            size={{ xs: 12, sm: 6, md: 2.5 }}
            sx={{ textAlign: "center", p: 2 }}
          >
            <Typography variant="h3" className="cardheading">5050</Typography>
            <Box  className="statBox">
              <Box component="img" src={college}  />
              <Typography className="cardtext">Student Help</Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 2.5 }}
            sx={{ textAlign: "center", p: 2 }}
          >
            <Typography variant="h3" className="cardheading">95%</Typography>
            <Box className="statBox">
              <Box component="img" src={trending} />
              <Typography className="cardtext">Acceptance Rate</Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 3 }}
            sx={{ textAlign: "center", p: 2 }}
          >
            <Typography variant="h3" className="cardheading">370</Typography>
            <Box className="statBox">
              <Box component="img" src={business} />
              <Typography className="cardtext">School Partnerships</Typography>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ textAlign: "center", p: 2 }}
          >
            <Typography variant="h3" className="cardheading">$1M</Typography>
            <Box className="statBox">
              <Box component="img" src={trophy} />
              <Typography className="cardtext">
                Helped Students Access 15M+ in Scholarships
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Partner Section */}
      <Container className="container">
        <Box className="partnerSection">
          <Box className="partnerLogo">
            <Box
              component="img"
              src={veritas}
              alt="Veritas AI Logo"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box className="partnerContent">
            <Typography
              color="primary"
              gutterBottom
              sx={{
                fontSize: "1.1rem",
                fontFamily: "Source Sans Pro",
                fontWeight: 600,
                color: "var(--login-color)",
              }}
            >
              Our Partner
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontSize: "1.5rem",
                fontFamily: "Playfair Display",
                fontWeight: 700,
                color: "var(--bgcolor)",
              }}
            >
              VERITAS AI
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontSize: "1rem",
                fontFamily: "Source Sans Pro",
                fontWeight: 400,
                color: "#686868",
              }}
            >
              VeritasAI is our partner and they offer an immersive virtual AI
              program for ambitious high school students.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
