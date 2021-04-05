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

function Slide5() {
    return (
        <Component>
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2}}}
                >Soon after I took an online bootcamp.<br/>
                It is <a href="https://scrimba.com" target="_blank" rel="noreferrer" >Scrimba: The Frontend Developer Career Path.</a>
                </Heading>

        </Component>
    )
}

export default Slide5