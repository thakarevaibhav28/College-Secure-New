"use client"

import { useState } from "react"
import {
  Container,
  Grid2 as Grid,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { School } from "@mui/icons-material"
import "./ServiceType.css"
type ServiceTypeKey = "college" | "essay" | "tutoring";
const contentMap : Record<ServiceTypeKey, any>= {

  college: {
    title: "COLLEGE CONSULTATION",
    subtitle: "SERVICES",
    description: "Personalized guidance through the most formative years in a young adult's life.",
    mainImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(60)-MfBc9LI0f5NTLSfRbU6ZhdiMAb4YTh.png",
    services: ["College consultation", "College Essay", "Tutoring"],
    about: {
      title: "About College Consultation",
      description:
        "Our team of experienced college counselors has helped countless students navigate the complex and competitive world of higher education. From building a well-rounded college list to polishing your application materials, we provide personalized guidance every step of the way. We work with students of all backgrounds and aspirations, whether you're aiming for Ivy League schools or community colleges.",
    },
  },
  essay: {
    title: "COLLEGE ESSAY SUPPORT",
    subtitle: "SERVICES",
    description: "Expert guidance to craft compelling college application essays that stand out.",
    mainImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(60)-MfBc9LI0f5NTLSfRbU6ZhdiMAb4YTh.png",
    services: ["Essay Planning", "Writing Support", "Review & Editing"],
    about: {
      title: "About Essay Support",
      description:
        "Our experienced writers and educators help students craft authentic, powerful essays that showcase their unique stories and strengths. We guide students through brainstorming, drafting, and refining their essays to create compelling narratives that resonate with admissions officers.",
    },
  },
  tutoring: {
    title: "ACADEMIC TUTORING",
    subtitle: "SERVICES",
    description: "Personalized academic support to help students excel in their studies.",
    mainImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(60)-MfBc9LI0f5NTLSfRbU6ZhdiMAb4YTh.png",
    services: ["One-on-One Tutoring", "Group Sessions", "Test Prep"],
    about: {
      title: "About Tutoring",
      description:
        "Our expert tutors provide targeted academic support across various subjects and standardized tests. We focus on building strong foundational knowledge while developing effective study skills and confidence in our students.",
    },
  },
}

export default function ServiceType({ type }: { type: ServiceTypeKey }) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const content = contentMap[type]

  return (
    <Box component="section">
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ py: { xs: 4, md: 6 } }}>
          {/* Services List */}
          <Grid size={{xs:12,md:4}} >
            <Typography variant="subtitle1" color="primary" gutterBottom>
              {content.subtitle}
            </Typography>
            <List>
              {content.services.map((service:any, index:any) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemText
                    primary={service}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: index === 0 ? "primary.main" : "text.primary",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Main Content */}
          <Grid size={{xs:12,md:8}}>
            <Typography variant="h4" component="h1" gutterBottom>
              {content.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {content.description}
            </Typography>
            <Box className="wave-divider">
              <img src={content.mainImage || "/placeholder.svg"} alt={content.title} className="consultation-image" />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* About Section */}
      <Box className="about-section">
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            <Grid size={{xs:12}} textAlign="center">
              <School sx={{ fontSize: 48, mb: 2 }} />
              <Typography variant="h4" component="h2" gutterBottom>
                {content.about.title}
              </Typography>
            </Grid>
            <Grid size={{xs:12,md:10,lg:8}}>
              <Typography variant="body1" paragraph align="center">
                {content.about.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  flexDirection: isMobile ? "column" : "row",
                  mt: 4,
                }}
              >
                <Button variant="contained" color="secondary" size="large" sx={{ color: "white" }}>
                  Register
                </Button>
                <Button variant="outlined" color="inherit" size="large" sx={{ borderColor: "white", color: "white" }}>
                  Book a Demo
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

