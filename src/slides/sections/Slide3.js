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
    padding-bottom:1.5rem;
    border-bottom:2px solid var(--heading);
`
const Main = styled(motion.p)`
    color:var(--heading);
    font-size: 2rem;
`

function Slide3() {
    return (
        <Component>
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2}}}
                >In 2020 I started learning web development
                </Heading>
                <Main
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2}}}
                >One of the best decisions of my life
                </Main>
        </Component>
    )
}

export default Slide3