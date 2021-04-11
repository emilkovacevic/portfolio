import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {projects} from '../../data/data'

const Component = styled.div`
padding: 15% 0;
@media(max-width:1280px){
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 100px 0;
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
  @media (max-width: 1024px){
    font-size: 1.5rem;
  }
`;

const ProjectsWrapper = styled.div`
max-width:1280px;
margin:auto;
background:var(--card-background);
display: grid;
  
grid-template-columns: 1fr;
grid-template-rows: auto;
grid-gap: 20px;

@media (min-width: 30em) {
  grid-template-columns: 1fr 1fr;
}

@media (min-width: 60em) {
  grid-template-columns: repeat(4, 1fr);
}
`

const Card = styled.div`
  margin:1em;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  justify-content:space-evenly;
  box-shadow: 2px 2px 2px 3px gray;
`;

const CardImage = styled(motion.div)`
  height:200px;
  border-bottom:1px solid gray;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
`

const CardContent = styled.div`
margin:1em 0;
`

const CardLinks = styled.div`
margin:1em 0;
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
a{
  margin:1em;
  text-decoration:none;
  text-transform:uppercase;
  letter-spacing:1px;
  color:blue;
  font-weight:600;
}
`
const ContinueBtn = styled.div`
margin-top:1em;
text-align:center;
button{
  cursor:pointer;
  background:var(--link);
  border:none;
  border-bottom:1px solid var(--text);
  text-transform: uppercase;
}
`

function Slide7({continueSlidesBtn}) {
  return (
    <Component>
      <Heading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1.5 } }}
      >
       However, I want to show you some of my personal projects
      </Heading>
      <ProjectsWrapper>
        {projects.map((card, index) => 
          <Card key={index}>
            <h3>{card.name}</h3>
            <CardImage
              whileHover={{
                scale: 1.05,
                transition: { duration: 1 }
              }}>
              <a 
              href={card.LiveLink} target="_blank" rel="noreferrer"><img src={card.image.link} alt={card.name}></img></a>
            </CardImage>
            <CardContent>
              <h4>Project stack</h4>
              <p>{card.tech}</p>
            </CardContent>
            <CardLinks>
              <motion.div
               whileHover={{
                scale: 1.25,
                transition: { duration: 1 }
              }}
              >
                <a href={card.LiveLink} target="_blank" rel="noreferrer"><i className="fas fa-cog"></i> Demo</a></motion.div>
                <br/>
                <motion.div
               whileHover={{
                scale: 1.25,
                transition: { duration: 1 },
              }}
              >
                <a href={card.gitLink} target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i> Code</a></motion.div>
            </CardLinks>
          </Card>
        )
        }
      </ProjectsWrapper>
      <ContinueBtn>
        <motion.div
         animate={{ scale: [1, 2, 2, 1, 1]}}
         transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1
        }}
        whileHover={{
          scale: 2,
          transition: { duration: 1 }
        }}
        >
        <button onClick={continueSlidesBtn}>next slide</button>
        </motion.div>  
        </ContinueBtn>
    </Component>
  );
}

export default Slide7