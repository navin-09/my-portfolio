import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectList from "./components/ProjectList";
import SkillList from "./components/SkillList";
import profileImage from "./assets/profile.jpg";

const AppContainer = styled(Container)`
  max-width: 1200px;
  margin: 40px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Heading = styled(Typography)`
  margin-top: 20px;
  color: #333;
`;

const AccordionSection = styled(Accordion)`
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const App = () => {
  const [expanded, setExpanded] = useState("skills");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <AppContainer>
      <LeftColumn>
        <ProfileImage src={profileImage} alt="Profile" />
        <Typography variant="h4" gutterBottom color="#333">
          Hi, I'm Your Name
        </Typography>
        <Typography variant="body1" paragraph color="#555">
          Welcome to my portfolio! I'm passionate about...
        </Typography>
      </LeftColumn>

      <RightColumn>
        <AccordionSection
          expanded={expanded === "projects"}
          onChange={handleChange("projects")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            style={{ backgroundColor: "#ddd" }}
          >
            <Heading variant="h5" color="#333">
              Projects
            </Heading>
          </AccordionSummary>
          <AccordionDetails>
            <ProjectList />
          </AccordionDetails>
        </AccordionSection>

        <AccordionSection
          expanded={expanded === "skills"}
          onChange={handleChange("skills")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            style={{ backgroundColor: "#ddd" }}
          >
            <Heading variant="h5" color="#333">
              Skills
            </Heading>
          </AccordionSummary>
          <AccordionDetails>
            <SkillList />
          </AccordionDetails>
        </AccordionSection>

        {/* Add other sections as needed */}
      </RightColumn>
    </AppContainer>
  );
};

export default App;
