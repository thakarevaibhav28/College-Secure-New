"use client"

import { Box, Container, Typography, Grid, Card, useTheme, useMediaQuery } from "@mui/material"
import { School, Assignment, AccountBalance } from "@mui/icons-material"

interface StatCardProps {
  icon: React.ReactNode
  value: string
  label: string
  gridArea?: string
}

const StatCard = ({ icon, value, label, gridArea }: StatCardProps) => (
  <Card
    sx={{
      position: "relative",
      overflow: "hidden",
      height: "100%",
      minHeight: { xs: "200px", md: "240px" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      gridArea,
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(62)-9UZ6EcIx6PGsmPwAeux54jhW7zoIzU.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      },
    }}
  >
    <Box
      sx={{
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        border: "2px solid #80DEEA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 2,
      }}
    >
      {icon}
    </Box>
    <Typography
      variant="h3"
      component="div"
      sx={{
        color: "white",
        fontWeight: "bold",
        mb: 1,
        fontSize: { xs: "2.5rem", md: "3rem" },
      }}
    >
      {value}
    </Typography>
    <Typography
      variant="h6"
      component="div"
      sx={{
        color: "white",
        textAlign: "center",
        px: 2,
        maxWidth: "280px",
        fontSize: { xs: "1rem", md: "1.25rem" },
      }}
    >
      {label}
    </Typography>
  </Card>
)

export default function TractionStats() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            mb: { xs: 4, md: 6 },
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Our Traction
        </Typography>

        {isMobile ? (
          // Mobile layout - stack cards vertically
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StatCard
                icon={<AccountBalance sx={{ fontSize: 32, color: "#80DEEA" }} />}
                value="90%"
                label="Students Placed in their Desired Colleges"
              />
            </Grid>
            <Grid item xs={12}>
              <StatCard
                icon={<School sx={{ fontSize: 32, color: "#80DEEA" }} />}
                value="200+"
                label="Students Coached"
              />
            </Grid>
            <Grid item xs={12}>
              <StatCard
                icon={<Assignment sx={{ fontSize: 32, color: "#80DEEA" }} />}
                value="8,000"
                label="Essays Reviewed"
              />
            </Grid>
          </Grid>
        ) : (
          // Desktop layout - custom grid layout
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateAreas: `
                "large right"
                "bottom right"
              `,
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto auto",
            }}
          >
            <StatCard
              icon={<AccountBalance sx={{ fontSize: 32, color: "#80DEEA" }} />}
              value="90%"
              label="Students Placed in their Desired Colleges"
              gridArea="large"
            />
            <StatCard
              icon={<School sx={{ fontSize: 32, color: "#80DEEA" }} />}
              value="200+"
              label="Students Coached"
              gridArea="bottom"
            />
            <StatCard
              icon={<Assignment sx={{ fontSize: 32, color: "#80DEEA" }} />}
              value="8,000"
              label="Essays Reviewed"
              gridArea="right"
            />
          </Box>
        )}
      </Container>
    </Box>
  )
}

