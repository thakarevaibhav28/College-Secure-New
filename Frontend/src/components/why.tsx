import { Box, Container, Typography, Paper } from '@mui/material'

export default function HeroSection() {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('/placeholder.svg?height=400&width=800')`,
        minHeight: '400px',
      }}
    >
      {/* Increase the priority of the hero background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Container
        sx={{
          position: 'relative',
          pt: { xs: 3, md: 6 },
          pb: { xs: 3, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: '600px', p: 4 }}>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            SECURE COLLEGE ADMISSION
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            We work with students and parents through the college admission process. Our primary goal is to provide a simplified and streamlined information required for the entire process.
          </Typography>
          <Typography variant="body1" color="inherit">
            We help students who are struggling with college admission process. Our experience in college admissions, test prep and from our work in high school helps students learn the process.
          </Typography>
        </Box>
      </Container>
    </Paper>
  )
}

