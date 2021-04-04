import React from "react";
import styled from "styled-components";
import { motion} from "framer-motion";

const Component = styled.div`
  height: 100vh;
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
`;
const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProjectCard = styled.div`
  margin: 1em;
`;

function Slide4() {

  return (
    <Component>
      <Heading
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        Have a look at some of my projects
      </Heading>
      <ProjectsWrapper>
        <ProjectCard>
          <motion.div
            style={{
              width: "90vw",
              padding: "2em",
              display: "flex",
              flexWrap: "wrap",
              placeItems: "center",
              placeContent: "space-evenly",
              borderRadius: 10,
              backgroundColor: "var(--heading)",
              perspective: 1000,
            }}

          >
          </motion.div>
        </ProjectCard>
      </ProjectsWrapper>
    </Component>
  );
}

export default Slide4;
