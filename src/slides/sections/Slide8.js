import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'



const Component = styled.div`
    p{
        margin:0.5em;
    }
`

const Heading = styled(motion.p)`
    margin:auto;
    color:var(--heading);
    font-size: 3rem;
    font-weight:600;
    margin: 1em;
    text-align:center;
    padding-bottom:0.5rem;
    a{
      color:var(--button);
      :hover,:focus{
        transform: scale(1.02);
      }
    }
`

function Slide8() {
    return (
      <Component>
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2}}}
                >But, the most important thing await and it ...
                </Heading>

        </Component>
    )
}


export default Slide8;
