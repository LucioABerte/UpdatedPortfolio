import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "/Resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="About">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
          I am Lucio Berté, a passionate Frontend Developer with experience in JavaScript, React, Express and the MERN stack with an alternative to Firebase. My focus on UX/UI design using MUI, Styled and other libraries, allows me to create attractive and functional interfaces that improve the user experience.
          </StyledParagraph>
          <StyledParagraph>
          Currently, I lead an innovative project that optimizes the economic organization of automotive workshops, with a fixed cost control panel and a budget generator to facilitate and obtain optimal profits in each job. In addition, I lead a collaborative development team together with a professional degree in economics and two digital marketing agents.
          </StyledParagraph>
          <StyledParagraph>
            I love facing new challenges and turning ideas into reality. 
            I consider software development to be an art form, and I enjoy fusing my technical skills with my creativity.
            I am excited about the possibility of contributing my skills and passion at your Company.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="LucioBertéCV"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
