import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Section = styled(motion.div)`
margin:auto;
color:var(--heading);
font-size: 3rem;
margin: 1em;
text-align:center;
`

function Slide3() {
    return (
        <Section
        initial={{opacity: 0}}
        animate={{opacity: 1, transition:{duration: 2}}}
        >
            a tech enthusiast 
        </Section>
    )
}

export default Slide3
