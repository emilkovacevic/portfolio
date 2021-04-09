import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

import {projects} from '../../data/data'

const Component = styled.div`
padding: 10em 0;

@media(max-width:768px){
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 150px 0;
}
`;

const Heading = styled(motion.p)`
  color: var(--heading);
  font-size: 2.5rem;
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
grid-gap: 10px;
grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
justify-content: center;
margin:1em;
height:100%;
@media (max-width: 600px){
  padding:  0 0 10px 0;
}
`;

const ProjectCard = styled.div`
  display:grid;
  grid-template-columns: 1fr 2fr;
  border: 1px solid var(--text);
  box-shadow: 1px 4px 10px 2px var(--text);
  border-radius:1rem 0 1rem 0;
  img{
    width:100%;
    border-radius:18px 0 0 8px;
    height:100%;
    min-height:150px;
    object-fit:cover;
    border-right: 1px solid var(--text);
  }
  .card-content{
    margin: 20% 0;
    min-width:60%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    box-sizing:border-box;
    h3{
      text-align:left;
      text-transform:uppercase;
      text-decoration: underline;
      margin-left: 0.5em;
      margin-bottom: 0;
      font-size:1.4rem;
    }
  }
  .card-links{
    display:flex;
    justify-content:space-evenly;
    justify-self: end;
    margin:0 1rem;
  }
  .link{
    background:var(--button);
    color: var(--links);
    padding: 5px 16px;
    margin: 0 5px;
    border-radius:1rem 1rem;
    text-decoration: none;
  }
  .card-content__info{
    padding:0;
    margin:0  0.5em 10px 0.5rem;
    text-align: left;
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
          
          <ProjectCard key={index}>
            <div>
              <img src={card.image.link} alt={card.image.alt}/>
            </div>
            <div className="card-content">
              <h3>{card.name}</h3>
              <div className="card-content__info">
                <h4>Project stack: </h4>
                <p className="card-content__info">
                    {card.tech} 
                </p>
              </div>
              <div className="card-links">
                <motion.a
                whileHover={{
                  color:"var(--button-hover)",
                  scale:1.2,
                  background: "var(--errorBg__flash)",
                }}
                href={card.LiveLink} target="_blank" rel="noreferrer"
                className="link"
                >Live Demo</motion.a>
                <motion.a 
                whileHover={{
                  color:"var(--button-hover)",
                  background: "var(--errorBg__flash)",
                  scale:1.2
                }}
                href={card.gitLink} target="_blank" rel="noreferrer"
                className="link"
                
                >Github Code</motion.a>
              </div>
            </div>
          </ProjectCard>
          
          )}
      </ProjectsWrapper>
    </Component>
  );
}

export default Slide7