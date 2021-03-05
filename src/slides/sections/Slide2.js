import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Heading = styled(motion.p)`
    margin:auto;
    color:var(--heading);
    font-size: 3rem;
    margin: 1em;
    text-align:center;
`

function Slide2() {
    return (
        <div>
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2}}}
            >I am a self taught developer</Heading>

        </div>
    )
}

export default Slide2
