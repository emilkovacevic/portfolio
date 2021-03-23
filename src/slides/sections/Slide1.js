import React from 'react'
import styled from 'styled-components'
import {personal} from '../../data/data'
import ReadName from '../../components/elements/ReadName'
import {motion} from 'framer-motion'

const Wrapper = styled(motion.div)`
height:100vh;
display:flex;
align-items: center;
justify-content:center;
color:var(--text);
position:relative;
max-width: 800px;
width:fit-content;
margin:auto;
h2,h1{
    color:var(--heading);
    padding-bottom: 0.5em;
}
h2{
    width: fit-content;
}
p{
    text-decoration: underline;
}
`

function Slide1() {

    return (
        <Wrapper
        initial={{opacity: 0}}
        animate={{opacity: 1, transition:{duration: 2}}}
        >
            <div>
                <motion.h2
                drag 
                dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
                dragConstraints={{ left: 0, right:380, bottom: 0, top:0 }}

                whileHover={{
                    cursor: 'grabbing',
                    }}
                >Hello,</motion.h2>
                <motion.h1
                whileTap={{ scale: 0.98 }}
                >My name is {personal.name} <ReadName></ReadName></motion.h1>
                <p>Continue by scrolling down</p>
            </div>
        </Wrapper>
    )
}

export default Slide1