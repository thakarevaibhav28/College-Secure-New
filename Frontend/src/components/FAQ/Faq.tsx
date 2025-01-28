"use client"

import { useState } from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Avatar, Box } from "@mui/material"
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material"
import avtar1 from "../../assets/Icons/avtar1.svg"
import avtar2 from "../../assets/Icons/avtar2.svg"
import avtar3 from "../../assets/Icons/avtar3.svg"
import"./Faq.css"

const faqData = [
  {
    question: "Who are we ?",
    answer: "We are a dedicated team helping students achieve their educational dreams.",
  },
  {
    question: "What is our success rate?",
    answer: "We do not define generic success rate but based on student's portfolio best match them to the colleges.",
  },
  {
    question: "Where our students are placed?",
    answer: "Our students have been placed in top universities across the globe.",
  },
  {
    question: "Which students do we accept?",
    answer: "We welcome motivated students who are committed to their educational goals.",
  },
]

export default function FAQ() {
  const [expanded, setExpanded] = useState<string | false>("panel1")

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box className="container">
      <Typography variant="h1" className="title">
        FAQs
      </Typography>

      <Box className="accordion">
        {faqData.map((faq, index) => (
          <Accordion
            key={`panel${index + 1}`}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            className="accordionItem"
          >
            <AccordionSummary
              expandIcon={expanded === `panel${index + 1}` ? <RemoveIcon /> : <AddIcon />}
              className="questionSection"
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 500,fontFamily:"Source Sans Pro",fontSize:"18px" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box className="contactSection">
        <Box className="avatarGroup">
          <Avatar
            alt="Team Member 1"
            src={avtar2}
            sx={{ width: 56, height: 56 }}
            className="avatar"
          />
          <Avatar
            alt="Team Member 2"
            src={avtar1}
            sx={{ width: 56, height: 56, ml: -2 }}
            className="avatar"
          />
          <Avatar
            alt="Team Member 3"
            src={avtar3}
            sx={{ width: 56, height: 56, ml: -2 }}
            className="avatar"
          />
        </Box>
        <Typography variant="h5" gutterBottom sx={{fontFamily:"SourceSans Pro",fontSize:"24px",fontWeight:600,color:"var(--content-bgcolor)"}}>
          Have more questions?
        </Typography>
        <Typography className="contactText" color="text.secondary">
          Our team is here to help!{" "}
          <a href="#" className="link">
            Get in touch with us
          </a>{" "}
          for expert guidance and detailed answers to all your inquiries.
        </Typography>
      </Box>
    </Box>
  )
}

