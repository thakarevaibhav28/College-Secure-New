

import React from 'react';
import { Box, Typography, Button, Grid2 as Grid } from '@mui/material';
import aboutimg from "../../../assets/Images/aboutimage.png";
import './AboutUs.css';

export default function AboutSection() {
  return (
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
              About Us
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
  );
}

