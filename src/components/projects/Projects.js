import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { projects } from "../../data/data";


const Component = styled.section`
position: static;
background: var(--background);
padding: 6rem 0 3em 0;
margin:0;
min-height:100vh;
`

const Container = styled(motion.div)`
  position: static;
  display:flex;
  flex-direction:column;
  justify-content:center;
  max-width:1200px;
  margin:1em auto;
  h2{
    margin: 1rem 1em;
  }
`;

const Cards = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 1em;
  margin: 2em 1em;
`
const Card = styled(motion.div)`
  background: var(--card-links__border);
  cursor:pointer;
  border:1px solid gray;
  img{
    width:100%;
    min-height: 300px;
    max-height:300px;
    object-fit:cover;
    :hover, :focus{
      -webkit-filter: brightness(80%);
      -webkit-transition: all 0.5s ease;
    }
  }
`
const Links = styled(motion.div)`
  margin:0 1em;
  h3{
    font-size:1.9rem;
    text-align:center;
    cursor:default;
    margin:.5em 0;
    text-transform:uppercase;
  }
  span{
    margin: 1em 0;
    display:flex;
    justify-content: space-evenly;
    a{
      color: var(--link);
      font-size:1.4rem;
      text-decoration:none;
      margin:.5em 0;
      :hover{ color: var(--button-hover)}
    }
  }
`;

function ProjectsPage() {
  return (
    <Component>
      <Container>
        <h2>Projects I Worked On</h2>
        <Cards>
          {projects.map((project, index) => {
            return (
              <Card key={index}
              whileHover={{
                boxShadow: '3px 3px 14px var(--text)'
              }}
              >
                <a href={project.LiveLink} target="_blank" rel="noreferrer">
                  <img src={project.image.link} alt={project.image.alt} />
                </a>
                <Links>
                  <h3>{project.name}</h3>
                  <span>
                    <a href={project.LiveLink}  target="_blank" rel="noreferrer">Demo: <i className="fas fa-cog"></i></a>
                    <a href={project.gitLink}  target="_blank" rel="noreferrer">Code: <i className="fab fa-github-square"></i></a>
                  </span>
                </Links>
              </Card>
            );
          })}
        </Cards>
      </Container>
    </Component>
  );
}

export default ProjectsPage;
