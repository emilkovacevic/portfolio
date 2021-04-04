import React from 'react'
import styled from 'styled-components'
import {personal} from '../../data/data'
import ReadName from '../../components/elements/ReadName'
import {motion} from 'framer-motion'

const Wrapper = styled(motion.div)`
height:100vh;
display:flex;
flex-direction:column;
align-items: center;
justify-content:center;
color:var(--text);
position:relative;
max-width: 800px;
width:fit-content;
margin:auto;
box-sizing:border-box;
div{
    cursor:grab;
    border: 5px solid var(--heading);
    border-radius:1em;
    box-shadow:7px 6px 15px var(--text);
    padding:2em;
    margin:1em;
}
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
            <motion.div
                    drag 
                    dragTransition={{ bounceStiffness: 400, bounceDamping: 100 }}
                    dragConstraints={{ left: 50, right:50, bottom: 50, top:50 }}
                    whileHover={{
                        cursor: 'grabbing',
                        }}
            >
                <h2
                >Hello,</h2>
                <motion.h1
                whileTap={{ scale: 0.98 }}
                >My name is {personal.name} <ReadName></ReadName></motion.h1>
                <p>Scroll down to continue...</p>
            </motion.div>
        </Wrapper>
    )
}

export default Slide1