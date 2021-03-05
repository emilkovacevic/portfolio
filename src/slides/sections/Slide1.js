import React from 'react'
import styled from 'styled-components'
import {personal} from '../../data/data'
import ReadName from '../../components/ReadName'
import {motion} from 'framer-motion'

const Wrapper = styled(motion.div)`
align-items: center;
max-width: 800px;
margin: 0 1em;
max-width:600px;
color:var(--text);
position:relative;
text-align:left;
h2,h1{
    color:var(--heading);
}
`

function Slide1() {

    return (
        <Wrapper
        initial={{right:700}}
        animate={{right:-100, transition:{duration: 1.5}}}
        >
            <h2>Hello,</h2>
            <h1>My name is {personal.name} <ReadName></ReadName></h1>
            <p>Scroll down slowly</p>
        </Wrapper>
    )
}

export default Slide1