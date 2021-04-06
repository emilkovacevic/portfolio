import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Component = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    p{
        margin:0.5em;
        text-shadow: 0px 0px 1px var(--text);
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
    border-bottom:2px solid var(--heading);
`
const Instruction = styled(motion.p)`
padding-bottom:1em;
`

function Slide2() {
    return (
        <Component>
            <motion.div style={{
                boxShadow:"7px 6px 15px var(--text)" 
            }}
            initial={{y:"-50vh"}}
            animate={{y: 0, transition:{duration:1}}}>
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 1}}}
                >I am a front-end web developer
                </Heading>
                <Instruction
                 initial={{opacity: 0}}
                 animate={{opacity: 1, transition:{duration: 2}}}
                >Keep on scrolling to continue with the slides...</Instruction>
                </motion.div>
        </Component>
    )
}

export default Slide2
