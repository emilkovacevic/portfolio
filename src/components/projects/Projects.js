import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projects } from "../../data/data";

const Container = styled(motion.div)`
  min-height: 100vh;
  padding-top: 5rem;
  background: var(--background);
  h2 {
    max-width: var(--app-max-width);
    margin: 1em auto;
    padding-bottom: 0.5em;
    font-size: 1.2rem;
  }
  div {
      max-width: 800px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      border-radius:8px;
      div {
      background:var(--card-background);  
      display: flex;
      flex-flow: column wrap;
      margin: 1em;
      padding: 1em;
      box-shadow: 2px 3px 10px 2px var(--projects-border);
      a {
        text-decoration: none;
        img {
          object-fit: center;
          width:100%;
          height:100%;
          border-radius:8px;
        }
      }
    }
  }
`;

const Links = styled.div`
  box-shadow:none !important;
  background: var(--card-links__border);
`

function Slide3() {
  return (
    <Container>
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <a href={project.link}>
                <img src={project.image.link} alt={project.image.alt} />
              </a>
              <h2>{project.name}</h2>
              <Links>
                <a href={project.link}>{project.link}</a>
                <a href={project.link}>{project.link}</a>
              </Links>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Slide3;
