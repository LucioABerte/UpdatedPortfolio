import React from "react";
import { StyledParagraph, StyledLink } from "../styles/Typography.styled";
import { ProjectsContainer, StyledProjects } from "../styles/Projects.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { projectData } from "./projectsData";
import ProjectCardComponent from "./ProjectCard";

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <SectionHeading>
        <SectionTitle number="Projects">Projects</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textalign="center">
        Selected projects I've worked on recently.{" "}
        <StyledLink
          href="https://github.com/LucioABerte"
          target="_blank"
          rel="noopener noreferrer"
        >
          Want to see more?
        </StyledLink>
      </StyledParagraph>
      <ProjectsContainer>
        {projectData.map((project) => {
          return <ProjectCardComponent key={project.id} {...project} />;
        })}
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
