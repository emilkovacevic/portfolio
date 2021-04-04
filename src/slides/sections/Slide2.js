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
const Instruction = styled(motion.p)``

function Slide2() {
    return (
        <Component>
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2}}}
                >I am a self taught developer
                </Heading>
                <Instruction
                 initial={{opacity: 0}}
                 animate={{opacity: 1, transition:{duration: 6}}}
                >Keep scrolling...</Instruction>
        </Component>
    )
}

export default Slide2
