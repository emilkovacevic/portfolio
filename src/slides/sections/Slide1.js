import React from 'react'
import styled from 'styled-components'
import {personal} from '../../data/data'
import ReadName from '../../components/ReadName'
import {motion} from 'framer-motion'

const Wrapper = styled(motion.div)`
align-items: center;
max-width: 800px;
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
        initial={{ right: 800}}
        animate={{ right: 0, originX:0, margin:'auto', transition:{duration: 1.5}}}
        >
            <h2>Hello,</h2>
            <h1>My name is {personal.name} <ReadName></ReadName></h1>
            <p>Scroll down slowly</p>
        </Wrapper>
    )
}

export default Slide1