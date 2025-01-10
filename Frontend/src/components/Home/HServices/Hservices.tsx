// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   IconButton,
// } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import service1 from "../../../assets/Images/services1.png";
// export default function ServicesSection() {
//   const services = [
//     {
//       title: "COLLEGE CONSULTATION",
//       description:
//         "Our Primary Goal Is To Provide An In-Depth And Customize Roadmap For The Admission Process.",
//       image: { service1 },
//     },
//     {
//       title: "COLLEGE ESSAYS",
//       description:
//         "College Essays Are An Integral Part Of Your Application Process; We Help Students Write The Essays Which Portray Their Personality, Passion, And Uniqueness.",
//       image: "/placeholder.svg?height=300&width=400",
//     },
//     {
//       title: "BSMD/BSDO COLLEGE CONSULTING",
//       description:
//         "The Package Is For Students Who Want To Pursue The Accelerated Medical Path.",
//       image: "/placeholder.svg?height=300&width=400",
//     },
//   ];

//   return (
//     <Box sx={{ py: 8, px: 8 }}>
//       <Box sx={{ mb: 6,display:"flex",gap:5,alignItems:"center" }}>
//         <Typography
//           variant="h4"
//           component="h1"
//           sx={{ color: "var(--content-bgcolor)", mb: 2,fontFamily:"PlayFair Display",fontWeight:"bold" }}
//         >
//           SERVICES
//         </Typography>
//         <Typography variant="p" sx={{mt:-2, color: "var(--login-color)" ,fontFamily:"Source Sand Pro"}}>
//           We offer all the necessary services for<br></br> your college application.
//         </Typography>
//       </Box>

//       <Grid container spacing={4}>
//         {services.map((service, index) => (
//           <Grid item xs={12} md={4} key={index}>
//             <Card
//               sx={{ height: "100%", display: "flex", flexDirection: "column" ,border:"none",boxShadow:"none"}}
//             >
//               <Box
//                 sx={{ position: "relative", height: 250, overflow: "hidden" }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="250"
//                   image={service1}
//                   alt={service.title}
//                   sx={{
//                     objectFit: "cover",
//                     borderRadius:"5px"
//                   }}
//                 />
//                 <CardContent
//                   sx={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "flex-end",
//                     color: "#fff",
//                     // background: "rgba(0, 0, 0, 0.3)", // Optional semi-transparent overlay
//                     padding: 2,
//                   }}
//                 >
//                   <Typography variant="body2" fontFamily="Source Sans Pro">{service.description}</Typography>
//                 </CardContent>
//               </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: 2,
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   // component="h2"
//                   sx={{fontWeight:"bold",fontFamily:"PlayFair Display",fontSize:"1rem" }}
//                 >
//                   {service.title}
//                 </Typography>
//                 <IconButton size="small" color="black">
//                   <ArrowForwardIcon />
//                 </IconButton>
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import service1 from "../../../assets/Images/services1.png";
import './Hservices.css';

export default function ServicesSection() {
  const services = [
    {
      title: "COLLEGE CONSULTATION",
      description:
        "Our Primary Goal Is To Provide An In-Depth And Customize Roadmap For The Admission Process.",
      image: service1,
    },
    {
      title: "COLLEGE ESSAYS",
      description:
        "College Essays Are An Integral Part Of Your Application Process; We Help Students Write The Essays Which Portray Their Personality, Passion, And Uniqueness.",
      image: service1,
    },
    {
      title: "BSMD/BSDO COLLEGE CONSULTING",
      description:
        "The Package Is For Students Who Want To Pursue The Accelerated Medical Path.",
      image: service1,
    },
  ];

  return (
    <Box className="services-section">
      <Box className="services-header">
        <Typography
          variant="h4"
          component="h1"
          className="services-title"
        >
          SERVICES
        </Typography>
        <Typography variant="body1" className="services-subtitle">
          We offer all the necessary services for<br />your college application.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={10} sm={6} md={4} sx={{margin:{xs:"0 auto"}}} key={index}>
            <Card className="service-card">
              <Box className="service-image-container">
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <CardContent className="service-description">
                  <Typography variant="body2">{service.description}</Typography>
                </CardContent>
              </Box>
              <Box className="service-footer">
                <Typography
                  variant="h6"
                  className="service-title"
                >
                  {service.title}
                </Typography>
                <IconButton size="small" color="default">
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

