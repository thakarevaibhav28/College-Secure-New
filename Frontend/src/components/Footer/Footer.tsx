import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  IconButton,
  Stack,
} from "@mui/material";
import LinkedInIcon from "../../assets/Icons/linkdiniconblue.svg";
import InstagramIcon from "../../assets/Icons/instaiconblue.svg";
import FacebookIcon from "../../assets/Icons/facebookiconblue.svg";
import YoutubeIcon from "../../assets/Icons/youtubeiconblue.svg";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "../../assets/Icons/bluemail.svg";
import PhoneIcon from "../../assets/Icons/bluephone.svg";
import footerIcon from "../../assets/Images/footerImage.png";
import footerImage from "../../assets/Images/headerImage.png";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "white", pt: 3, borderTop: "1.5px solid var(--content-bgcolor)", mt: 10 }}>
      {/* <Container maxWidth="lg"> */}
      <Grid container  px={9}>
        {/* Logo Column */}
        <Grid item xs={12} md={2}>
          <Box
            component="img"
            src={footerImage}
            alt="footer image"
            sx={{ width: 110, height: 100, mt: -1 }}
          ></Box>
        </Grid>

        {/* Quick Links Column */}
        <Grid item xs={6} md={2}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1rem",
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Playfair Display",
            }}
          >
            Quick Links
          </Typography>
          <Stack spacing={3}>
            <Link
              href="#"
              color="inherit"
              fontFamily="Source Sans Pro"
              underline="none"
            >
              About Us
            </Link>
            <Link
              href="#"
              color="inherit"
              fontFamily="Source Sans Pro"
              underline="none"
            >
              Free Consultation
            </Link>
            <Link
              href="#"
              color="inherit"
              fontFamily="Source Sans Pro"
              underline="none"
            >
              Testimonials
            </Link>
            <Link
              href="#"
              color="inherit"
              fontFamily="Source Sans Pro"
              underline="none"
            >
              FAQs
            </Link>
          </Stack>
        </Grid>

        {/* Services Column */}
        <Grid item xs={6} md={2}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1rem",
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Playfair Display",
            }}
          >
            Services
          </Typography>
          <Stack spacing={3}>
            <Link
              href="#"
              color="inherit"
              underline="none"
              fontFamily="Source Sans Pro"
            >
              College Consultation
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              fontFamily="Source Sans Pro"
            >
              College Essays
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              fontFamily="Source Sans Pro"
            >
              About Tutoring
            </Link>
          </Stack>
        </Grid>

        {/* Policy Column */}
        <Grid item xs={6} md={2}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1rem",
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Playfair Display",
            }}
          >
            Policy
          </Typography>
          <Stack spacing={3}>
            <Link
              href="#"
              color="inherit"
              underline="none"
              fontFamily="Source Sans Pro"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              fontFamily="Source Sans Pro"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              fontFamily="Source Sans Pro"
            >
              Refund and Cancellation Policy
            </Link>
          </Stack>
        </Grid>

        {/* Others Column */}
        <Grid item xs={6} md={2}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1rem",
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Playfair Display",
            }}
          >
            Others
          </Typography>
          <Stack spacing={3}>
            <Link
              href="#"
              color="inherit"
              underline="none"
              fontFamily="Source Sans Pro"
            >
              Events
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              fontFamily="Source Sans Pro"
            >
              Recent Updates
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              fontFamily="Source Sans Pro"
            >
              Resources
            </Link>
            <Link
              href="#"
              color="inherit"
              underline="none"
              fontFamily="Source Sans Pro"
            >
              Newsletter
            </Link>
          </Stack>
        </Grid>

        {/* Contact Us Column */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "1rem",
              mb: 2,
              fontWeight: "bold",
              fontFamily: "Playfair Display",
            }}
          >
            Contact Us
          </Typography>
          <Box
            sx={{
              mb: 3,
              width: 270,
              borderRadius: "2px",
            //   border: "1px solid blue",
            }}
          >
            <TextField
              InputProps={{
                startAdornment: (
                  <IconButton size="small" sx={{ color: "var(--content-bgcolor)" }}>
                    <SearchIcon />
                  </IconButton>
                ),
                endAdornment: null,
              }}
              size="small"
             
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "var(--content-bgcolor)", 
                  },
                  "&:hover fieldset": {
                    borderColor: "var(--content-bgcolor)", 
                  },
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "24px", 
                },
              }}
            />
          </Box>

          <Stack spacing={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                component="img"
                src={EmailIcon}
                alt="instagram"
                style={{ width: "20px", height: "20px" }}
              />
              <Link
                href="mailto:securecollegeadmission@gmail.com"
                color="inherit"
                underline="hover"
                sx={{ fontSize: "0.875rem" }}
              >
                securecollegeadmission@gmail.com
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                component="img"
                src={PhoneIcon}
                alt="instagram"
                style={{ width: "20px", height: "20px" }}
              />
              <Link
                href="tel:408-634-4045"
                color="inherit"
                underline="hover"
                sx={{ fontSize: "0.875rem" }}
              >
                408-634-4045
              </Link>
            </Box>
          </Stack>
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <IconButton href="#" color="black">
              <Box
                component="img"
                src={FacebookIcon}
                alt="Facebook"
                style={{ width: "20px", height: "20px" }}
              />
            </IconButton>
            <IconButton href="#" color="primary">
              <Box
                component="img"
                src={LinkedInIcon}
                alt="linkdin"
                style={{ width: "20px", height: "20px" }}
              />
            </IconButton>
            <IconButton href="#" color="primary">
              <Box
                component="img"
                src={YoutubeIcon}
                alt="youtube"
                style={{ width: "20px", height: "20px" }}
              />
            </IconButton>
            <IconButton href="#" color="primary">
              <Box
                component="img"
                src={InstagramIcon}
                alt="instagram"
                style={{ width: "20px", height: "20px" }}
              />
            </IconButton>
          </Box>
        </Grid>

      </Grid>

  

      {/* Copyright */}
      <Box
        sx={{
          width: "100%",
          mt: 2,
          py: 2,

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // flexWrap: "wrap",
          gap: 1,
          bgcolor: "var(--content-bgcolor)",
        }}
      >
        <Typography
          variant="body2"
          color="white"
          fontFamily="Source Sans Pro"
          ml={70}
        >
          Copyright© 2023-24. Secure College Admission. All Rights Reserved.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, pr: 10 }}>
          <Typography
            variant="body2"
            color="white"
            fontFamily="Source Sans Pro"
          >
            Powered By
          </Typography>
          <Box
            component="img"
            src={footerIcon}
            alt="Powered by logo"
            sx={{ height: 20, width: 20 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
