import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/system";
import testimonial1 from "../../../assets/Images/testimonial1.png";
import testimonial2 from "../../../assets/Images/testimonial2.png";
import testimonial3 from "../../../assets/Images/testimonial3.png";
import testimonial4 from "../../../assets/Images/testimonial4.png";

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "50px",
  marginTop: "20px",
});

const Card = styled(Box)({
  position: "relative",
  width: "320px",
  height: "400px",
  overflow: "hidden",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  "&:hover .image": {
    transform: "translateY(-100%)",
  },
  "&:hover .blueSection": {
    transform: "translateY(0)",
  },
});

const ImageSection = styled(Box)({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 1,
  transform: "translateY(0)",
  transition: "transform 0.5s ease-in-out",
});

const BlueSection = styled(Box)({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "var(--content-bgcolor)",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "30px 25px 20px",
  zIndex: 0,
  transform: "translateY(100%)",
  transition: "transform 0.5s ease-in-out",
  
});

const QuoteIcon = styled(Box)({
  position: 'absolute',
  top: '10px',
  left: '70%',
  color: '#fff',
  fontSize: '90px',
  fontFamily: 'Georgia, serif',
  lineHeight: 1,
  "&::after": {
    content: '"\\201D"',  // Right double quotation mark
  }
});

const AvatarSection = styled(Avatar)({
  width: "50px",
  height: "50px",
  border: "2px solid white",
});

const TestimonialCard = ({ name, location, image, avatar, text }) => {
  return (
    <Card>
      <ImageSection
        className="image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <BlueSection className="blueSection">
        <QuoteIcon />
        <Typography 
          variant="body1" 
          sx={{ 
            fontSize: '14px',
            lineHeight: 1.5,
            mb: 2,
            mt: 1,
            pr: 4,
          }}
        >
          {text}
        </Typography>
        <Box 
          sx={{ 
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            pt: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          <AvatarSection src={avatar} alt={name} />
          <Box sx={{display:"flex"}}>
            <Typography 
              sx={{ 
                fontSize: '14px',
                fontWeight: 500,
                color: 'white',
                lineHeight: 1.2
              }}
            >
              {name}
            </Typography>
            <Typography 
              sx={{ 
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.2
              }}
            >
              ({location})
            </Typography>
          </Box>
        </Box>
      </BlueSection>
    </Card>
  );
};

const Testimonials = () => {
  const data = [
    {
      name: "Gautam",
      location: "San Jose",
      image: testimonial1,
      avatar:testimonial1 ,
      text: "Thanks to Manisha I got into Purdue for electric Engineering major.",
    },
    {
      name: "Poorva",
      location: "Dubai",
      image: testimonial2,
      avatar: testimonial2,
      text: "I was applying for Masters from Dubai and Manisha helped me...",
    },
    {
      name: "Aneesh",
      location: "Evergreen",
      image: testimonial3,
      avatar: testimonial3,
      text: "We were very fortunate to get connected with Ms. Manisha...",
    },
    {
      name: "Riya",
      location: "San Jose",
      image: testimonial4,
      avatar:testimonial4,
      text: "Thanks to Manisha I got into Purdue for electric Engineering major.",
    },
  ];

  return (
    <Box sx={{ mt: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
          px: 10,
        }}
      >
        <Typography
          gutterBottom
          sx={{
            pl: 5,
            borderBottom: "1px solid var(--content-bgcolor)",
            paddingBottom: "5px",
            fontSize: "20px",
            fontFamily: "Playfair Display",
            fontWeight: "500",
          }}
        >
          Testimonials
        </Typography>
      </Box>
      <Container>
        {data.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </Container>
    </Box>
  );
};

export default Testimonials;

