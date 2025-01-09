
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import EmailIcon from   "../../assets/Icons/whitemail.svg"
// import PhoneIcon from "../../assets/Icons/whitephone.svg"
// import LanguageIcon from "@mui/icons-material/Language";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import IconButton from "@mui/material/IconButton";
// import LinkedInIcon from "../../assets/Icons/linkdiniconwhite.svg";
// import InstagramIcon from "../../assets/Icons/instaiconwhite.svg";
// import FacebookIcon from "../../assets/Icons/facebookiconwhite.svg";
// import YoutubeIcon from "../../assets/Icons/youtubeiconwhite.svg";
// import headerImage from "../../assets/Images/headerImage.png";
// import { useState } from "react";

// export default function Header() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [open, setOpen] = useState(false);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
//     null
//   );

//   const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElLang(event.currentTarget);
//   };

//   const handleCloseLangMenu = () => {
//     setAnchorElLang(null);
//   };

//   return (
//     <Box  sx={{ width: "100%" }}>
//       {/* Top Bar */}
//       <Box sx={{ bgcolor: "var(--bgcolor)", width: "100%", height: 35 }}>
//         <Box sx={{ px: 6, display: "flex", ml: 10 }}>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//             <Box
//               component="img"
//                 src={PhoneIcon}
//                 alt="instagram"
//                 style={{ width: "20px", height: "20px" }}
//               />
//               <Typography variant="caption" fontSize="12px" color="white">
//                 408.634.4045
//               </Typography>
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//             <Box
//               component="img"
//                 src={EmailIcon}
//                 alt="instagram"
//                 style={{ width: "20px", height: "20px" }}
//               />
//               <Typography variant="caption" fontSize="14px" color="white">
//                 securecollegeadmission@gmail.com
//               </Typography>
//             </Box>
//           </Box>
//           <Box sx={{ flexGrow: 1 }} />
//           <Button
//             onClick={handleOpenLangMenu}
//             sx={{
//               color: "white",
//               textTransform: "none",
//               fontSize: "0.9rem",
//             }}
//             endIcon={<KeyboardArrowDownIcon />}
//           >
//             <LanguageIcon sx={{ fontSize: "1.3rem", mr: 0.5 }} />
//             Language
//           </Button>
//           <Menu
//             anchorEl={anchorElLang}
//             open={Boolean(anchorElLang)}
//             onClose={handleCloseLangMenu}
//           >
//             <MenuItem onClick={handleCloseLangMenu}>English</MenuItem>
//             <MenuItem onClick={handleCloseLangMenu}>Spanish</MenuItem>
//           </Menu>

//           <IconButton
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             sx={{ color: "white" }}
//           >
//             <Box
//             component="img"
//               src={FacebookIcon}
//               alt="Facebook"
//               style={{ width: "20px", height: "20px" }}
//             />
//           </IconButton>
//           <IconButton
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             sx={{ color: "white" }}
//           >
//             <Box
//             component="img"
//               src={LinkedInIcon}
//               alt="Facebook"
//               style={{ width: "20px", height: "20px" }}
//             />
//           </IconButton>

//           <IconButton
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             sx={{ color: "white" }}
//           >
//             <Box
//             component="img"
//               src={YoutubeIcon}
//               alt="Facebook"
//               style={{ width: "20px", height: "20px" }}
//             />
//           </IconButton>

//           <IconButton
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             sx={{ color: "white" }}
//           >
//             <Box
//             component="img"
//               src={InstagramIcon}
//               alt="Facebook"
//               style={{ width: "20px", height: "20px" }}
//             />
//           </IconButton>
//         </Box>

     
//       </Box>
//          {/* Main Navigation */}
//          <Box sx={{ bgcolor: "white", color: "black" }}>
//           <Box sx={{ px: 2 }}>
//             <Toolbar>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>


//                 <Box
//                   component="img"
//                   src={headerImage}
//                   alt="Header icon"
//                   sx={{ width: 80, height: 80, pb: 2, pt: 0.3 }}
//                 ></Box>
//                 <Typography
//                   variant="h6"
//                   noWrap
//                   // component="a"
//                   href="/"
//                   sx={{
//                     fontFamily: "Playfair Display",
//                     fontWeight: 500,
//                     color: "var(--content-bgcolor)",
//                     textDecoration: "none",
//                   }}
//                 >
//                   SECURE COLLEGE ADMISSION
//                 </Typography>
//               </Box>

//               <Box sx={{ flexGrow: 1 }} />

//               <Box sx={{ display: "flex", gap: 2, ml: 4 }}>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     bgcolor: "var(--content-bgcolor)",
//                     fontFamily: "Playfair Display",
//                     textTransform: "none",
//                     px: 3,
//                   }}
//                 >
//                   Free Consultation
//                 </Button>
//                 <Button
//                   variant="contained"
//                   sx={{
//                     bgcolor: "var(--login-color)",
//                     fontFamily: "Playfair Display",
//                     px: 4,
//                   }}
//                 >
//                   LOGIN
//                 </Button>
//               </Box>
//             </Toolbar>
//           </Box>
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             gap: 12,
//             border: "2px solid var(--content-bgcolor)",
//           }}
//         >
//           <Box sx={{ flexGrow: 0.5 }} />

//           <Button
//             href="/"
//             sx={{
//               color: "var(--login-color)",
//               display: "block",
//               fontWeight: "bold",
//               fontFamily: "Playfair Display",
//               textDecoration: "none", 
             
//               '&::after': {
//                 content: '""',
//                 position: 'absolute',
//                 bottom: 5, 
//                 left: 0,
//                 width: '100%', 
//                 height: 2, 
//                 backgroundColor: 'var(--login-color)', 
//               },
           
//             }}
//           >
//             HOME
//           </Button>

//           <Button
//             select
//             sx={{
//               color: "black",
//               display: "flex",
//               fontFamily: "Playfair Display",
//             }}
//             onClick={handleClick}
//             endIcon={<KeyboardArrowDownIcon />}
//           >
//             SERVICES
//           </Button>
//           <Button
//             href="/about"
//             sx={{
//               color: "black",
//               display: "block",
//               fontFamily: "Playfair Display",
//             }}
//           >
//             PACKAGES
//           </Button>
//           <Button
//             href="/about"
//             sx={{
//               color: "black",
//               display: "block",
//               fontFamily: "Playfair Display",
//             }}
//           >
//             PARTNERS
//           </Button>

//           <Button
//             href="/about"
//             sx={{
//               color: "black",
//               display: "block",
//               fontFamily: "Playfair Display",
//             }}
//           >
//             ABOUTUS
//           </Button>

//           <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
//             <MenuItem onClick={handleClose}>Service 1</MenuItem>
//             <MenuItem onClick={handleClose}>Service 2</MenuItem>
//             <MenuItem onClick={handleClose}>Service 3</MenuItem>
//           </Menu>
//         </Box>
//     </Box>
//   );
// }



import * as React from "react";
import "./header.css"; // Import the external CSS file

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EmailIcon from "../../assets/Icons/whitemail.svg";
import PhoneIcon from "../../assets/Icons/whitephone.svg";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "../../assets/Icons/linkdiniconwhite.svg";
import InstagramIcon from "../../assets/Icons/instaiconwhite.svg";
import FacebookIcon from "../../assets/Icons/facebookiconwhite.svg";
import YoutubeIcon from "../../assets/Icons/youtubeiconwhite.svg";
import headerImage from "../../assets/Images/headerImage.png";
import { useState } from "react";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [anchorElLang, setAnchorElLang] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  return (
    <Box className="header-container">
      {/* Top Bar */}
      <Box className="top-bar">
        <Box className="contact-info">
          <Box className="contact-item" ml={25}>
            <Box
              component="img"
              src={PhoneIcon}
              alt="Phone"
              className="contact-icon"
            />
            <Typography variant="caption" className="contact-text">
              408.634.4045
            </Typography>
          </Box>
          <Box className="contact-item">
            <Box
              component="img"
              src={EmailIcon}
              alt="Email"
              className="contact-icon"
            />
            <Typography variant="caption" className="contact-text">
              securecollegeadmission@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box className="language-menu" mr={7}>
          <Button
            onClick={handleOpenLangMenu}
            className="language-button"
            endIcon={<KeyboardArrowDownIcon />}
            sx={{color:"white"}}
            
          >
            <LanguageIcon className="language-icon" />
           <Typography className="language-icon" sx={{fontSize:"14px",textTransform:"none"}}> Language </Typography>
          </Button>
          <Menu
            anchorEl={anchorElLang}
            open={Boolean(anchorElLang)}
            onClose={handleCloseLangMenu}
          >
            <MenuItem onClick={handleCloseLangMenu}>English</MenuItem>
            <MenuItem onClick={handleCloseLangMenu}>Spanish</MenuItem>
          </Menu>
          <IconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Box component="img" src={FacebookIcon} alt="Facebook" />
          </IconButton>
          <IconButton
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Box component="img" src={LinkedInIcon} alt="LinkedIn" />
          </IconButton>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Box component="img" src={YoutubeIcon} alt="YouTube" />
          </IconButton>
          <IconButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <Box component="img" src={InstagramIcon} alt="Instagram" />
          </IconButton>
        </Box>
      </Box>

      {/* Main Navigation */}
      <Box className="main-nav">
        <Box className="main-nav-content">
          {/* <Toolbar> */}
            <Box className="header-logo" ml={10}>
              <Box
                component="img"
                src={headerImage}
                alt="Header icon"
                className="header-image"
              />
              <Typography
                variant="h6"
                noWrap
                href="/"
                className="header-title"
              >
                SECURE COLLEGE ADMISSION
              </Typography>
            </Box>
            <Box className="header-buttons" mr={4}>
              <Button variant="contained" className="consultation-button">
                Free Consultation
              </Button>
              <Button variant="contained" className="login-button">
                LOGIN
              </Button>
            </Box>
          {/* </Toolbar> */}
        </Box>
      </Box>

      <Box className="nav-links">
        <Button href="/" className="nav-link active">
          HOME
        </Button>
        <Button
          className="nav-link"
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          SERVICES
        </Button>
        <Button href="/about" className="nav-link">
          PACKAGES
        </Button>
        <Button href="/about" className="nav-link">
          PARTNERS
        </Button>
        <Button href="/about" className="nav-link">
          ABOUT US
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Service 1</MenuItem>
          <MenuItem onClick={handleClose}>Service 2</MenuItem>
          <MenuItem onClick={handleClose}>Service 3</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
