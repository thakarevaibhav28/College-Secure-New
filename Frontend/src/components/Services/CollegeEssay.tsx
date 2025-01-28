"use client"

import { Box, Card, CardContent, Typography, Button, useTheme, useMediaQuery, Container } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

export default function ImportanceSection() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "500px", sm: "400px" },
        backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(61)-5zLWsV4S0cbBHIKlM2wcSWeD0mjg2p.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Card
          sx={{
            maxWidth: { xs: "100%", md: "60%" },
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              component="h2"
              color="primary"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Why is it Important?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                lineHeight: 1.6,
              }}
            >
              With less emphasis on SAT/ACT scores, college essays have become even more important in the application
              process for top-ranked colleges. Essays become the final piece of college applications that Seniors can
              work on to tip the admissions scales in your favor.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                lineHeight: 1.6,
              }}
            >
              Our essay writing experts average 15 years experience in college admissions and all have a Master's Degree
              at the minimum. These programs can either be part of our Comprehensive Pathway or purchased as a
              stand-alone offering.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                lineHeight: 1.6,
              }}
            >
              For Seniors who have drafted their college essays, this is a great option to have a college essay expert
              review and edit your submissions.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 1,
                textTransform: "none",
                borderRadius: 1,
                px: 3,
                py: 1,
              }}
            >
              Register Now
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

