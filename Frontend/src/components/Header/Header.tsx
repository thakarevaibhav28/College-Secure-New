import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "../../assets/Icons/Logo.svg";
import { Link, useLocation } from "react-router";
export default function Header() {
  const location = useLocation();
  const activeColor = "#EF6907";
  const defaultColor = "#112437";

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElLang, setAnchorElLang] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Bar */}
      <AppBar position="static" sx={{ background: "#055D70", height: 35 }}>
        <Container maxWidth="xl">
          <Toolbar
            variant="dense"
            sx={{ minHeight: 35, justifyContent: "space-between" }}
          >
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                  <PhoneIcon fontSize="small" />
                  <Typography variant="caption" sx={{ ml: 1 }}>
                    408.634.4045
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <EmailIcon fontSize="small" />
                  <Typography variant="caption" sx={{ ml: 1 }}>
                    securecollegeadmission@gmail.com
                  </Typography>
                </Box>
              </Box>
            )}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button
                  onClick={handleOpenLangMenu}
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{ color: "white", textTransform: "none" }}
                >
                  <LanguageIcon sx={{ mr: 1 }} />
                  Language
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
                  color="inherit"
                  size="small"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  size="small"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  size="small"
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  size="small"
                >
                  <InstagramIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Navigation */}
      <AppBar position="static" sx={{ background: "#fff", boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={Logo}
                alt="Header icon"
                sx={{ width: 80, height: 80, mr: 2 }}
              />
              {!isMobile && (
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    color: "#08879F",
                  }}
                >
                  SECURE COLLEGE ADMISSION
                </Typography>
              )}
            </Box>
            {isMobile ? (
              <IconButton
                size="large"
                edge="end"
                sx={{ color: "#000" }}
                aria-label="menu"
                onClick={toggleMobileMenu}
              >
                <MenuIcon sx={{ fontSize: 35 }} />
              </IconButton>
            ) : (
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#08879F",
                    color: "#fff",
                    mr: 2,
                    textTransform: "none",
                  }}
                >
                  Free Consultation
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#EF6907",
                    color: "#fff",
                    textTransform: "none",
                  }}
                >
                  Login
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Navigation Links */}
      {isMobile ? (
        <Drawer anchor="top" open={mobileMenuOpen} onClose={toggleMobileMenu}>
          <List>
            <ListItem
              component={Link}
              to="/"
              sx={{ textAlign: "center", color: "#112437", fontWeight: "bold" }}
            >
              <ListItemText primary="HOME" />
            </ListItem>
            {/* <ListItem onClick={handleClick} sx={{textAlign:"center", color:"#112437"}}>
              <ListItemText primary="SERVICES" />
            </ListItem> */}
            <ListItem
              component={Link}
              to="/services"
              sx={{ textAlign: "center", color: "#112437" }}
            >
              <ListItemText primary="SERVICES" />
            </ListItem>
            <ListItem
              component={Link}
              to="/packages"
              sx={{ textAlign: "center", color: "#112437" }}
            >
              <ListItemText primary="PACKAGES" />
            </ListItem>
            <ListItem
              component={Link}
              to="/partners"
              sx={{ textAlign: "center", color: "#112437" }}
            >
              <ListItemText primary="PARTNERS" />
            </ListItem>
            <ListItem
              component={Link}
              to="/about"
              sx={{ textAlign: "center", color: "#112437" }}
            >
              <ListItemText primary="ABOUT US" />
            </ListItem>
          </List>
        </Drawer>
      ) : (
        <AppBar
          position="static"
          sx={{
            background: "#fff",
            boxShadow: "none",
            borderTop: "1px solid",
            borderBottom: "1px solid",
            borderColor: "#08879F",
          }}
        >
          <Toolbar sx={{ justifyContent: "center", gap: 5 }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                color: location.pathname === "/" ? activeColor : defaultColor,
              }}
            >
              HOME
            </Button>
            {/* <Button
              color="inherit"
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: location.pathname.startsWith("/services")
                  ? activeColor
                  : defaultColor,
              }}
            >
              SERVICES
            </Button> */}
            <Button
              component={Link}
              to="/services"
              color="inherit"
              sx={{
                color:
                  location.pathname === "/services"
                    ? activeColor
                    : defaultColor,
              }}
            >
              SERVICES
            </Button>

            <Button
              component={Link}
              to="/packages"
              color="inherit"
              sx={{
                color:
                  location.pathname === "/packages"
                    ? activeColor
                    : defaultColor,
              }}
            >
              PACKAGES
            </Button>
            <Button
              component={Link}
              to="/partners"
              color="inherit"
              sx={{
                color:
                  location.pathname === "/partners"
                    ? activeColor
                    : defaultColor,
              }}
            >
              PARTNERS
            </Button>
            <Button
              component={Link}
              to="/about"
              color="inherit"
              sx={{
                color:
                  location.pathname === "/about" ? activeColor : defaultColor,
              }}
            >
              ABOUT US
            </Button>
          </Toolbar>
        </AppBar>
      )}

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          component={Link}
          to="/services/service1"
          onClick={handleClose}
        >
          Service 1
        </MenuItem>
        <MenuItem
          component={Link}
          to="/services/service2"
          onClick={handleClose}
        >
          Service 2
        </MenuItem>
        <MenuItem
          component={Link}
          to="/services/service3"
          onClick={handleClose}
        >
          Service 3
        </MenuItem>
      </Menu>
    </Box>
  );
}
