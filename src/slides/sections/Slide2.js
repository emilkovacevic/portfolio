import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import gears from '../sections/slidesArt/gears.svg'

const Component = styled.div`
    background: url('${gears}');
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Heading = styled(motion.p)`
    margin:auto;
    color:var(--heading);
    font-size: 3rem;
    font-weight:600;
    margin: 1em;
    text-align:center;
`

function Slide2() {
    return (
        <Component>
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2}}}
            >I am a self taught developer</Heading>

        </Component>
    )
}

export default Slide2
