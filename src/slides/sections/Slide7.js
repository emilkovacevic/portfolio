import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

import {projects} from '../../data/data'

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled(motion.p)`
  margin: auto;
  color: var(--heading);
  font-size: 3rem;
  font-weight: 600;
  margin: 1em;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--heading);
  @media (max-width: 600px){
    font-size: 1.8rem !important;
  }
`;
const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

`;

const ProjectCard = styled.div`
  margin: 1em;
  display:flex;
  flex-direction:column;
  :hover{
    transform: scale(1.5);
    cursor: pointer;
    border: 1px solid var(--text);
  }
  img{
    object-fit:cover;
    width:150px;
    height:150px;
  }
  div{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
`;

function Slide7() {

  return (
    <Component>
      <Heading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
       However, I want to show you some of my personal projects
      </Heading>
      <ProjectsWrapper>
        {projects.map((card, index) => 
          
          <ProjectCard key={index}          >
            <h3>{card.name}</h3>
            <img src={card.image.link} alt={card.image.alt}/>
            <div>
              <a href={card.LiveLink}>Live</a>
              <a href={card.gitLink}>Git</a>
            </div>
          </ProjectCard>
          
          )}
      </ProjectsWrapper>
    </Component>
  );
}

export default Slide7