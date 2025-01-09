// "use client";

// import { Box, Container, Typography, Grid } from "@mui/material";
// import SchoolIcon from "../../../assets/Icons/college.svg";
// import GroupsIcon from "../../../assets/Icons/students.svg";
// import DescriptionIcon from "../../../assets/Icons/Essayreview.svg";
// import BannerImage from "../../../assets/Images/bannerimage.png";
// export default function Banner() {
//   return (
//     <Box>
//       <Box
//         sx={{
//           bgcolor: "var(--content-bgcolor)",
//           color: "white",
//           position: "relative",
//           overflow: "hidden",
//           minHeight: "250px",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         {/* Main Content */}
//         <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
//           <Grid container spacing={1} alignItems="center">
//             {/* Left Side Content */}
//             <Grid item xs={12} md={7}>
//               <Box sx={{ position: "relative" }}></Box>
//             </Grid>

//             {/* Right Side Content */}
//             <Grid item xs={12} md={5}>
//               <Typography
//                 variant="h1"
//                 sx={{
//                   fontFamily: "playfair Display",
//                   fontSize: "32px",
//                   fontWeight: 600,
//                   mb: 2,
//                   mt: 5,
//                 }}
//               >
//                 SECURE COLLEGE ADMISSION
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "0.9rem",
//                   mb: 6,
//                   //   lineHeight: 1.6,
//                   fontFamily: "Source Sand Pro",
//                 }}
//               >
//                 The College Admission Process is a Four Year Marathon and We
//                 Help Students Reach the Finish Line by Providing Knowledge,
//                 Guidance and Support.
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       <Box >
//         <Box sx={{ width: 800, ml: 80, mt: 4 }}>
//           <Typography
//             variant="h6"
//             sx={{
//               fontSize: "1.3rem",
//               fontWeight: 600,
//               mb: 4,
//               textAlign: "center",
//               fontFamily: "Playfair Display",
//             }}
//           >
//             OUR IMPACT
//           </Typography>

//           <Grid container spacing={3} ml={5}>
          
//             <Grid item xs={3}>
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography
//                   sx={{
//                     fontSize: "2.5rem",
//                     fontWeight: 700,
//                     color: "var(--content-bgcolor)",
//                     lineHeight: 1,
//                     fontFamily: "Playfair Display",
//                   }}
//                 >
//                   90%
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     mb: 1,
//                     mt: 3,
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={SchoolIcon}
//                     alt="SchoolIcon"
//                     style={{ width: 60, height: 60 }}
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: "0.675rem",
//                       display: "flex",
//                       alignItems: "center",
//                       fontFamily: "Source Sans Pro",
//                     }}
//                   >
//                     Student Place In Their
//                     <br />
//                     Desire College
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>

//             <Grid item xs={4}>
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography
//                   sx={{
//                     fontSize: "2.5rem",
//                     fontWeight: 700,
//                     color: "var(--content-bgcolor)",
//                     lineHeight: 1,
//                     fontFamily: "Playfair Display",
//                   }}
//                 >
//                   200
//                   <Box
//                     component="span"
//                     sx={{
//                       color: "var(--content-bgcolor)",
//                       fontFamily: "Playfair Display",
//                     }}
//                   >
//                     +
//                   </Box>
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     mb: 1,
//                     mt: 3,
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={GroupsIcon}
//                     alt="GroupsIcon"
//                     style={{ width: 60, height: 60 }}
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: "0.675rem",
//                       display: "flex",
//                       alignItems: "center",
//                       fontFamily: "Source Sand Pro",
//                     }}
//                   >
//                     Student Coached
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>

//             <Grid item xs={4}>
//               <Box sx={{ textAlign: "center" }}>
//                 <Typography
//                   sx={{
//                     fontSize: "2.5rem",
//                     fontWeight: 700,
//                     color: "var(--content-bgcolor)",
//                     lineHeight: 1,
//                     fontFamily: "Playfair Display",
//                   }}
//                 >
//                   8000
//                 </Typography>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     mb: 1,
//                     mt: 3,
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={DescriptionIcon}
//                     alt="description"
//                     style={{ width: 60, height: 60 }}
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: "0.675rem",
//                       display: "flex",
//                       alignItems: "center",
//                       fontFamily: "Source Sand Pro",
//                     }}
//                   >
//                     Essays Reviewed
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//         <Box position="relative" >
//           <Box
//             component="img"
//             src={BannerImage}
//             alt="BannerImage"
//             style={{
//               width: "637px",
//               height: "391px",
//               position: "absolute",
//               top: -430,
//               left: 60,
//             }}
//           />
//         </Box>
//       </Box>


//     </Box>
//   );
// }
"use client";

import React from 'react';
import { Box, Container, Typography, Grid } from "@mui/material";
import SchoolIcon from "../../../assets/Icons/college.svg";
import GroupsIcon from "../../../assets/Icons/students.svg";
import DescriptionIcon from "../../../assets/Icons/Essayreview.svg";
import BannerImage from "../../../assets/Images/bannerimage.png";
import './Banner.css';

export default function Banner() {
  return (
    <Box>
      <Box className="banner">
        <Container maxWidth="lg" className="banner-content">
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ position: "relative" }}></Box>
            </Grid>
            <Grid item xs={12} md={5} className="banner-text">
              <Typography variant="h1" className="banner-title">
                SECURE COLLEGE ADMISSION
              </Typography>
              <Typography className="banner-description">
                The College Admission Process is a Four Year Marathon and We
                Help Students Reach the Finish Line by Providing Knowledge,
                Guidance and Support.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className="impact-section">
        <Typography variant="h6" className="impact-title">
          OUR IMPACT
        </Typography>

        <Grid container spacing={3} className="impact-grid">
          <Grid item xs={3} className="impact-item">
            <Box>
              <Typography className="impact-number">
                90%
              </Typography>
              <Box className="impact-icon-text">
                <Box
                  component="img"
                  src={SchoolIcon}
                  alt="SchoolIcon"
                  className="impact-icon"
                />
                <Typography className="impact-text">
                  Student Place In Their
                  <br />
                  Desire College
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={3} className="impact-item">
            <Box>
              <Typography className="impact-number">
                200
                <Box component="span">
                  +
                </Box>
              </Typography>
              <Box className="impact-icon-text">
                <Box
                  component="img"
                  src={GroupsIcon}
                  alt="GroupsIcon"
                  className="impact-icon"
                />
                <Typography className="impact-text">
                  Student Coached
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={3} className="impact-item">
            <Box>
              <Typography className="impact-number">
                8000
              </Typography>
              <Box className="impact-icon-text">
                <Box
                  component="img"
                  src={DescriptionIcon}
                  alt="description"
                  className="impact-icon"
                />
                <Typography className="impact-text">
                  Essays Reviewed
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box position="relative">
        <Box
          component="img"
          src={BannerImage}
          alt="BannerImage"
          className="banner-image"
        />
      </Box>
    </Box>
  );
}

