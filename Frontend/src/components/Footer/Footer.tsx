import React from "react";
import {
  Box,
  Typography,
  Link,
  TextField,
  IconButton,
  Stack,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "../../assets/Icons/facebookiconblue.svg";
import InstaIcon from "../../assets/Icons/instaiconblue.svg";
import LinkdenIcon from "../../assets/Icons/linkdiniconblue.svg";
import YoutubeIcon from "../../assets/Icons/youtubeiconblue.svg";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "../../assets/Icons/bluemail.svg";
import PhoneIcon from "../../assets/Icons/bluephone.svg";
import footerIcon from "../../assets/Images/footerImage.png";
import footerImage from "../../assets/Images/headerImage.png";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "white",
        pt: 3,
        borderTop: "1.5px solid var(--content-bgcolor)",
        mt: 10,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{justifyContent:{xs:"space-evenly", sm:"normal"}}} mb={2}>
          {/* Logo Column */}
          <Grid size={{ xs: 12, md: 2 }} textAlign="center">
            <Box
              component="img"
              src={footerImage}
              alt="footer image"
              sx={{ width: 125 }}
            ></Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid size={{ xs: 5, sm: 4, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.1rem" },
                mb: 2,
                fontWeight: "bold",
                fontFamily: "Playfair Display",
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={{ xs: 2, md: 2 }}>
              <Link
                color="inherit"
                fontFamily="Source Sans Pro"
                underline="none"
              >
                About Us
              </Link>
              <Link
                color="inherit"
                fontFamily="Source Sans Pro"
                underline="none"
              >
                Free Consultation
              </Link>
              <Link
                color="inherit"
                fontFamily="Source Sans Pro"
                underline="none"
              >
                Testimonials
              </Link>
              <Link
                color="inherit"
                fontFamily="Source Sans Pro"
                underline="none"
              >
                FAQs
              </Link>
            </Stack>
          </Grid>

          {/* Services Column */}
          <Grid size={{ xs: 5, sm: 4, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.1rem" },
                mb: 2,
                fontWeight: "bold",
                fontFamily: "Playfair Display",
              }}
            >
              Services
            </Typography>
            <Stack spacing={{ xs: 2, md: 2 }}>
              <Link
                color="inherit"
                underline="none"
                fontFamily="Source Sans Pro"
              >
                College Consultation
              </Link>
              <Link
                color="inherit"
                underline="none"
                fontFamily="Source Sans Pro"
              >
                College Essays
              </Link>
              <Link
                color="inherit"
                underline="none"
                fontFamily="Source Sans Pro"
              >
                About Tutoring
              </Link>
            </Stack>
          </Grid>

          {/* Policy Column */}
          <Grid size={{ xs: 5, sm: 4, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.1rem" },
                mb: 2,
                fontWeight: "bold",
                fontFamily: "Playfair Display",
              }}
            >
              Policy
            </Typography>
            <Stack spacing={{ xs: 2, md: 2 }}>
              <Link
                color="inherit"
                underline="none"
                fontFamily="Source Sans Pro"
              >
                Terms & Conditions
              </Link>
              <Link
                color="inherit"
                underline="none"
                fontFamily="Source Sans Pro"
              >
                Privacy Policy
              </Link>
              <Link
                color="inherit"
                underline="none"
                fontFamily="Source Sans Pro"
              >
                Refund and Cancellation Policy
              </Link>
            </Stack>
          </Grid>

          {/* Others Column */}
          <Grid size={{ xs: 5, sm: 4, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.1rem" },
                mb: 2,
                fontWeight: "bold",
                fontFamily: "Playfair Display",
              }}
            >
              Others
            </Typography>
            <Stack spacing={{ xs: 2, md: 2 }}>
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
          <Grid size={{ xs: 5, sm: 4, md: 2 }} sx={{ overflow: "hidden" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.1rem" },
                mb: 2,
                fontWeight: "bold",
                fontFamily: "Playfair Display",
              }}
            >
              Contact Us
            </Typography>

            <Stack spacing={{ xs: 2, md: 2 }}>
              <Box
                sx={{
                  borderRadius: "2px",
                }}
              >
                <TextField
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <IconButton
                        size="small"
                        sx={{ color: "var(--content-bgcolor)" }}
                      >
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
                    // "& .MuiInputBase-input": {
                    //   paddingLeft: "24px",
                    // },
                  }}
                />
              </Box>
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

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box component="img" src={FacebookIcon} sx={{ width: 20 }} />
                <Box component="img" src={InstaIcon} sx={{ width: 20 }} />{" "}
                <Box component="img" src={LinkdenIcon} sx={{ width: 20 }} />{" "}
                <Box component="img" src={YoutubeIcon} sx={{ width: 20 }} />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Copywrite */}
      <Box sx={{ width: "100%", background: "#08879F", py: 2 }}>
        <Container maxWidth="xl">
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid
              size={{ xs: 4 }}
              sx={{ display: { xs: "none", md: "block" } }}
            ></Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <Box>
                <Typography
                  variant="body2"
                  color="white"
                  fontFamily="Source Sans Pro"
                  sx={{ textAlign: { xs: "center", md: "center" } }}
                >
                  Copyright© 2023-24. Secure College Admission. All Rights
                  Reserved.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md:12 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:"center",
                  textAlign: { xs: "center", md: "center" } ,
                  gap: 2,
                }}
              >
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
                  sx={{ width: 20 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
