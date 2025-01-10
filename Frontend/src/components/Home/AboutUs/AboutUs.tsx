// import { Box, Typography, Button, Grid } from '@mui/material'
// import aboutimg from "../../../assets/Images/aboutimage.png"
// export default function AboutSection() {
//   return (
//     <Box sx={{ py: 8, px: 18 }}>
//       <Grid container spacing={6} alignItems="center">
//         <Grid item xs={12} md={6}>
//           <Box
//             component="img"
//             src=
//             {aboutimg}
//             alt="Graduation celebration"
//             sx={{
//               width: '100%',
//               height: 'auto',
//               borderRadius: 2,
//             }}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Box>
//             <Typography variant="h5" component="h2" sx={{ mb: 3,borderBottom:"3px solid var(--content-bgcolor)",fontFamily:"PlayFair Display",width:130,textAlign:"center" }}>
//               About Us
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 2, color: 'black',fontFamily:"Source Sans Pro" }}>
//               We Are No Longer Just A Service Provider, We Have Become A Mentor.
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 4, color: 'black',fontFamily:"Source Sans Pro" }}>
//               We Will Help You Navigate The Ever-Changing Landscape Of College Application Process And Ensure That You Join Your Dream College.
//             </Typography>
//             <Button
//               variant="text"
//              startIcon={<span style={{ color: 'var(--login-color)' }}>→</span>}

//               sx={{
//                 color: '#000',
               
//                 fontFamily:"Source Sans Pro"
//               }}
//             >
//               Know More
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   )
// }

import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import aboutimg from "../../../assets/Images/aboutimage.png";
import './AboutUs.css';

export default function AboutSection() {
  return (
    <Box className="about-section">
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={aboutimg}
            alt="Graduation celebration"
            className="about-image"
          />
        </Grid>
        <Grid item xs={12} md={6}>
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

